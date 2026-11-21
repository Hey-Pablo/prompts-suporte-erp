const estado = {
    prompts: [],
    categorias: new Set(),
    buscaTermo: '',
    categoriaSelecionada: '',
    promptsFiltrados: []
};

const elementos = {
    busca: document.getElementById('busca'),
    categoria: document.getElementById('categoria'),
    listaPrompts: document.getElementById('lista-prompts'),
    estadoVazio: document.getElementById('estado-vazio'),
    estadoErro: document.getElementById('estado-erro'),
    detalheModal: document.getElementById('detalhe-modal'),
    detalheTitulo: document.getElementById('detalhe-titulo'),
    detalheCorpo: document.getElementById('detalhe-corpo'),
    btnFechar: document.querySelector('.btn-fechar')
};

function escapeHtml(texto) {
    if (texto === null || texto === undefined) return '';
    const div = document.createElement('div');
    div.textContent = String(texto);
    return div.innerHTML;
}

function destacarVariaveis(prompt) {
    return escapeHtml(prompt).replace(/\{(\w+)\}/g, '<span class="variavel-destaque">{$1}</span>');
}

function formatarData(dataStr) {
    const [ano, mes, dia] = dataStr.split('-');
    return `${dia}/${mes}/${ano}`;
}

function obterClasseNota(aprovados, total) {
    if (aprovados === total) return 'aprovado';
    if (aprovados > 0) return 'parcial';
    return 'reprovado';
}

function obterTextoNota(aprovados, total) {
    return `${aprovados} de ${total} aprovados`;
}

function criarElementoCartao(prompt) {
    const artigo = document.createElement('article');
    artigo.className = 'cartao-prompt';
    artigo.dataset.id = prompt.id;
    artigo.tabIndex = 0;

    const notaMedia = prompt.avaliacoes.reduce((soma, a) => soma + a.nota_media, 0) / prompt.avaliacoes.length;
    const totalAprovados = prompt.avaliacoes.reduce((soma, a) => soma + a.aprovados, 0);
    const totalTestes = prompt.avaliacoes.reduce((soma, a) => soma + a.total, 0);
    const classeNota = obterClasseNota(totalAprovados, totalTestes);
    const textoNota = obterTextoNota(totalAprovados, totalTestes);

    artigo.innerHTML = `
        <header class="cartao-cabecalho">
            <h3 class="cartao-titulo">${escapeHtml(prompt.titulo)}</h3>
            <span class="cartao-categoria">${escapeHtml(prompt.categoria)}</span>
        </header>
        <p class="cartao-descricao">${escapeHtml(prompt.descricao)}</p>
        <div class="cartao-meta">
            <span class="cartao-meta-item">
                <span class="cartao-nota ${classeNota}">${escapeHtml(textoNota)}</span>
            </span>
            <span class="cartao-meta-item">v${escapeHtml(prompt.versao)}</span>
        </div>
        <div class="cartao-acoes">
            <button type="button" class="btn btn-primario btn-detalhes" data-id="${escapeHtml(prompt.id)}" aria-label="Ver detalhes de ${escapeHtml(prompt.titulo)}">Ver detalhes</button>
            <button type="button" class="btn btn-copiar btn-copiar-prompt" data-id="${escapeHtml(prompt.id)}" aria-label="Copiar prompt ${escapeHtml(prompt.titulo)}">Copiar</button>
        </div>
    `;

    return artigo;
}

function renderizarLista() {
    elementos.listaPrompts.innerHTML = '';

    if (estado.promptsFiltrados.length === 0) {
        elementos.estadoVazio.classList.remove('hidden');
        elementos.estadoVazio.setAttribute('aria-hidden', 'false');
        elementos.listaPrompts.setAttribute('aria-hidden', 'true');
        return;
    }

    elementos.estadoVazio.classList.add('hidden');
    elementos.estadoVazio.setAttribute('aria-hidden', 'true');
    elementos.listaPrompts.removeAttribute('aria-hidden');

    const fragmento = document.createDocumentFragment();
    estado.promptsFiltrados.forEach(prompt => {
        fragmento.appendChild(criarElementoCartao(prompt));
    });
    elementos.listaPrompts.appendChild(fragmento);
}

function popularCategorias() {
    const categoriasOrdenadas = Array.from(estado.categorias).sort();
    categoriasOrdenadas.forEach(cat => {
        const opcao = document.createElement('option');
        opcao.value = cat;
        opcao.textContent = cat;
        elementos.categoria.appendChild(opcao);
    });
}

function filtrarPrompts() {
    const termo = estado.buscaTermo.toLowerCase().trim();
    const cat = estado.categoriaSelecionada;

    estado.promptsFiltrados = estado.prompts.filter(prompt => {
        const correspondeBusca = !termo ||
            prompt.titulo.toLowerCase().includes(termo) ||
            prompt.descricao.toLowerCase().includes(termo) ||
            prompt.prompt.toLowerCase().includes(termo);

        const correspondeCategoria = !cat || prompt.categoria === cat;

        return correspondeBusca && correspondeCategoria;
    });

    renderizarLista();
}

function abrirDetalhe(promptId) {
    const prompt = estado.prompts.find(p => p.id === promptId);
    if (!prompt) return;

    elementos.detalheTitulo.textContent = prompt.titulo;

    const notaMedia = prompt.avaliacoes.reduce((soma, a) => soma + a.nota_media, 0) / prompt.avaliacoes.length;
    const totalAprovados = prompt.avaliacoes.reduce((soma, a) => soma + a.aprovados, 0);
    const totalTestes = prompt.avaliacoes.reduce((soma, a) => soma + a.total, 0);

    let html = `
        <section class="detalhe-secao">
            <h4 class="detalhe-secao-titulo">Descrição</h4>
            <p class="detalhe-texto">${escapeHtml(prompt.descricao)}</p>
        </section>
        <section class="detalhe-secao">
            <h4 class="detalhe-secao-titulo">Categoria</h4>
            <p class="detalhe-texto">${escapeHtml(prompt.categoria)}</p>
        </section>
        <section class="detalhe-secao">
            <h4 class="detalhe-secao-titulo">Prompt (versão ${escapeHtml(prompt.versao)})</h4>
            <div class="detalhe-prompt">${destacarVariaveis(prompt.prompt)}</div>
        </section>
    `;

    if (prompt.variaveis && prompt.variaveis.length > 0) {
        html += `
            <section class="detalhe-secao">
                <h4 class="detalhe-secao-titulo">Variáveis</h4>
                <ul class="detalhe-texto" style="list-style: disc; padding-left: 20px;">
        `;
        prompt.variaveis.forEach(v => {
            html += `<li><strong>${escapeHtml(v.nome)}:</strong> ${escapeHtml(v.descricao)}</li>`;
        });
        html += `</ul></section>`;
    }

    if (prompt.exemplo) {
        html += `
            <section class="detalhe-secao">
                <h4 class="detalhe-secao-titulo">Exemplo de Entrada e Saída</h4>
                <div class="exemplo-bloco">
                    <div class="exemplo-rotulo">Entrada:</div>
                    <div class="exemplo-conteudo">${escapeHtml(prompt.exemplo.entrada)}</div>
                </div>
                <div class="exemplo-bloco" style="margin-top: 12px;">
                    <div class="exemplo-rotulo">Saída:</div>
                    <div class="exemplo-conteudo">${escapeHtml(prompt.exemplo.saida)}</div>
                </div>
            </section>
        `;
    }

    if (prompt.avaliacoes && prompt.avaliacoes.length > 0) {
        html += `
            <section class="detalhe-secao">
                <h4 class="detalhe-secao-titulo">Avaliações dos Modelos</h4>
                <div class="avaliacoes-lista">
        `;
        prompt.avaliacoes.forEach(av => {
            const classeNota = obterClasseNota(av.aprovados, av.total);
            const textoNota = obterTextoNota(av.aprovados, av.total);
            html += `
                <div class="avaliacao-item">
                    <div class="avaliacao-item-cabecalho">
                        <span class="avaliacao-modelo">${escapeHtml(av.modelo)}</span>
                        <span class="avaliacao-data">${formatarData(av.data_teste)}</span>
                    </div>
                    <div class="avaliacao-nota">
                        <span class="cartao-nota ${classeNota}">${escapeHtml(textoNota)}</span>
                        <span>Nota média: ${av.nota_media.toFixed(1)}</span>
                    </div>
                    ${av.limitacoes && av.limitacoes.length > 0 ? `
                        <div class="avaliacao-limitacoes">
                            <strong>Limitações:</strong>
                            <ul class="limitacoes-lista" style="list-style: none; padding: 0; margin-top: 4px;">
                                ${av.limitacoes.map(l => `<li class="limitacao-item">${escapeHtml(l)}</li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}
                </div>
            `;
        });
        html += `</div></section>`;
    }

    if (prompt.limitacoes && prompt.limitacoes.length > 0) {
        html += `
            <section class="detalhe-secao">
                <h4 class="detalhe-secao-titulo">Limitações Conhecidas</h4>
                <ul class="limitacoes-lista">
                    ${prompt.limitacoes.map(l => `<li class="limitacao-item">${escapeHtml(l)}</li>`).join('')}
                </ul>
            </section>
        `;
    }

    if (prompt.historico && prompt.historico.length > 0) {
        html += `
            <section class="detalhe-secao">
                <h4 class="detalhe-secao-titulo">Histórico de Versões</h4>
                <div class="historico-lista">
        `;
        [...prompt.historico].reverse().forEach(h => {
            html += `
                <div class="historico-item">
                    <div class="historico-item-titulo">
                        <span class="historico-item-versao">${escapeHtml(h.versao)}</span>
                        <span class="historico-item-data">${formatarData(h.data)}</span>
                    </div>
                    <div class="historico-item-mudanca">${escapeHtml(h.mudanca)}</div>
                    <div class="historico-item-motivo">Motivo: ${escapeHtml(h.motivo)}</div>
                </div>
            `;
        });
        html += `</div></section>`;
    }

    elementos.detalheCorpo.innerHTML = html;
    elementos.detalheModal.showModal();
    elementos.btnFechar.focus();
}

function fecharDetalhe() {
    elementos.detalheModal.close();
}

async function copiarPrompt(promptId) {
    const prompt = estado.prompts.find(p => p.id === promptId);
    if (!prompt) return;

    const textoParaCopiar = prompt.prompt;

    try {
        await navigator.clipboard.writeText(textoParaCopiar);
        const btn = document.querySelector(`.btn-copiar-prompt[data-id="${promptId}"]`);
        if (btn) {
            const textoOriginal = btn.textContent;
            btn.textContent = 'Copiado!';
            btn.classList.add('copiado');
            btn.disabled = true;
            setTimeout(() => {
                btn.textContent = textoOriginal;
                btn.classList.remove('copiado');
                btn.disabled = false;
            }, 2000);
        }
    } catch (erro) {
        console.error('Erro ao copiar:', erro);
        alert('Não foi possível copiar. Tente selecionar e copiar manualmente.');
    }
}

async function carregarPrompts() {
    try {
        const resposta = await fetch('data/prompts.json');
        if (!resposta.ok) {
            throw new Error(`HTTP ${resposta.status}`);
        }
        const dados = await resposta.json();

        estado.prompts = dados;
        dados.forEach(p => estado.categorias.add(p.categoria));

        popularCategorias();
        filtrarPrompts();
    } catch (erro) {
        console.error('Erro ao carregar prompts:', erro);
        elementos.estadoErro.classList.remove('hidden');
        elementos.estadoErro.setAttribute('aria-hidden', 'false');
        elementos.listaPrompts.setAttribute('aria-hidden', 'true');
    }
}

function configurarEventos() {
    elementos.busca.addEventListener('input', (e) => {
        estado.buscaTermo = e.target.value;
        filtrarPrompts();
    });

    elementos.categoria.addEventListener('change', (e) => {
        estado.categoriaSelecionada = e.target.value;
        filtrarPrompts();
    });

    elementos.listaPrompts.addEventListener('click', (e) => {
        const btnDetalhes = e.target.closest('.btn-detalhes');
        const btnCopiar = e.target.closest('.btn-copiar-prompt');

        if (btnDetalhes) {
            abrirDetalhe(btnDetalhes.dataset.id);
        } else if (btnCopiar) {
            copiarPrompt(btnCopiar.dataset.id);
        }
    });

    elementos.listaPrompts.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            const cartao = e.target.closest('.cartao-prompt');
            if (cartao && (e.target.classList.contains('btn-detalhes') || e.target.classList.contains('btn-copiar-prompt'))) {
                e.preventDefault();
                e.target.click();
            }
        }
    });

    elementos.btnFechar.addEventListener('click', fecharDetalhe);

    elementos.detalheModal.addEventListener('click', (e) => {
        if (e.target === elementos.detalheModal) {
            fecharDetalhe();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && elementos.detalheModal.open) {
            fecharDetalhe();
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    configurarEventos();
    carregarPrompts();
});