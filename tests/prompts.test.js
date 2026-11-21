import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';

const nonempty = value => typeof value === 'string' && value.trim().length > 0;
const list = value => Array.isArray(value) && value.length > 0;

test('catálogo contém 15 prompts válidos e seus cinco casos', async () => {
  const prompts = JSON.parse(await readFile(new URL('../data/prompts.json', import.meta.url), 'utf8'));
  assert.ok(Array.isArray(prompts) && prompts.length >= 15);
  const ids = new Set();
  for (const p of prompts) {
    assert.match(p.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.ok(!ids.has(p.id), `id duplicado: ${p.id}`);
    ids.add(p.id);
    for (const field of ['titulo', 'categoria', 'descricao', 'prompt', 'versao']) assert.ok(nonempty(p[field]), `${p.id}: ${field}`);
    assert.ok(list(p.variaveis), `${p.id}: variaveis`);
    const names = new Set();
    for (const v of p.variaveis) {
      assert.ok(nonempty(v.nome) && nonempty(v.descricao));
      assert.ok(!names.has(v.nome), `${p.id}: variável duplicada`);
      names.add(v.nome);
    }
    const references = [...p.prompt.matchAll(/\{([^{}]+)\}/g)].map(match => match[1]);
    for (const name of references) assert.ok(names.has(name), `${p.id}: variável não declarada ${name}`);
    for (const name of names) assert.ok(references.includes(name), `${p.id}: variável não usada ${name}`);
    assert.ok(list(p.historico));
    for (const h of p.historico) for (const field of ['versao', 'data', 'mudanca', 'motivo']) assert.ok(nonempty(h[field]), `${p.id}: historico.${field}`);
    assert.ok(Array.isArray(p.avaliacoes));
    for (const a of p.avaliacoes) {
      for (const field of ['modelo', 'data_teste']) assert.ok(nonempty(a[field]));
      assert.ok(Number.isInteger(a.aprovados) && Number.isInteger(a.total) && a.total > 0 && a.aprovados >= 0 && a.aprovados <= a.total);
      assert.ok(typeof a.nota_media === 'number' && a.nota_media >= 0 && a.nota_media <= 3);
      assert.ok(list(a.limitacoes) && a.limitacoes.every(nonempty));
    }
    assert.ok(p.exemplo && nonempty(p.exemplo.entrada) && nonempty(p.exemplo.saida));
    assert.ok(list(p.limitacoes) && p.limitacoes.every(nonempty));
    for (let i = 1; i <= 5; i++) await access(new URL(`../testes/${p.id}/entrada-${i}.md`, import.meta.url));
  }
});

test('resultados publicados correspondem às execuções da versão atual', async () => {
  const prompts = JSON.parse(await readFile(new URL('../data/prompts.json', import.meta.url), 'utf8'));
  for (const p of prompts) {
    assert.equal(p.avaliacoes.length, 2, `${p.id}: devem existir dois modelos avaliados`);
    assert.deepEqual(new Set(p.avaliacoes.map(a => a.modelo)), new Set(['gpt-6.2-sol', 'gpt-6-luna']));
    for (const [label, modelo] of [['codex', 'gpt-6.2-sol'], ['economico', 'gpt-6-luna']]) {
      const a = p.avaliacoes.find(x => x.modelo === modelo);
      assert.equal(a.total, 5);
      const suffix = p.versao === 'v1' ? '' : `-${p.versao}`;
      for (let i = 1; i <= 5; i++) {
        const input = (await readFile(new URL(`../testes/${p.id}/entrada-${i}.md`, import.meta.url), 'utf8')).replace(/^#.*\n\n/, '').trim();
        const raw = JSON.parse(await readFile(new URL(`../testes/${p.id}/bruto-${label}${suffix}-${i}.txt`, import.meta.url), 'utf8'));
        assert.equal(raw.modelo, modelo);
        assert.equal(raw.prompt, p.prompt.replace('{entrada}', input));
        assert.ok(nonempty(raw.stdout));
        assert.match(raw.data, /^\d{4}-\d{2}-\d{2}T/);
        assert.ok(nonempty(await readFile(new URL(`../testes/${p.id}/saida-${label}${suffix}-${i}.md`, import.meta.url), 'utf8')));
      }
    }
    assert.ok(nonempty(await readFile(new URL(`../testes/${p.id}/avaliacao.md`, import.meta.url), 'utf8')));
  }
});

test('notas agregadas refletem a rubrica da versão atual', async () => {
  const prompts = JSON.parse(await readFile(new URL('../data/prompts.json', import.meta.url), 'utf8'));
  for (const p of prompts) {
    const report = await readFile(new URL(`../testes/${p.id}/avaliacao.md`, import.meta.url), 'utf8');
    const section = p.versao === 'v2' ? report.split('## Avaliação da versão v2')[1] : report;
    assert.ok(section, `${p.id}: avaliação da versão atual ausente`);
    for (const a of p.avaliacoes) {
      const scores = section.split('\n').filter(line => line.startsWith(`| ${a.modelo} |`)).map(line => {
        const columns = line.split('|').map(x => x.trim());
        const criteria = columns.slice(3, 6).map(Number);
        assert.ok(criteria.every(x => x === 0 || x === 1));
        const total = criteria.reduce((sum, x) => sum + x, 0);
        assert.equal(columns[6], `${total}/3`);
        return total;
      });
      assert.equal(scores.length, a.total, `${p.id}: número de casos de ${a.modelo}`);
      assert.equal(scores.filter(n => n === 3).length, a.aprovados);
      assert.equal(scores.reduce((sum, n) => sum + n, 0) / scores.length, a.nota_media);
    }
  }
});
