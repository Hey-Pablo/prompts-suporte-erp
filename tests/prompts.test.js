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
