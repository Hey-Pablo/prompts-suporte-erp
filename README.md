# Biblioteca de Prompts Testados

> **Demonstração:** https://hey-pablo.github.io/prompts-suporte-erp/

> **Status: concluído.** Site publicado no GitHub Pages, 11 testes automatizados e CI.

Quinze prompts para tarefas reais de suporte e ERP, cada um com cinco casos de teste fictícios, saídas guardadas, nota por rubrica e histórico de versões, publicados num site estático com busca.

![Demonstração do site](docs/demo.gif)

## Problema

Prompts de IA costumam ser compartilhados como texto solto, sem evidência de que funcionam. Quem usa não sabe em quais casos o prompt falha nem o que mudou entre versões.

## Solução

Cada prompt passa por um método simples e repetível: cinco entradas fictícias (uma difícil), execução em dois modelos, avaliação manual com rubrica de três critérios (correto, completo e no formato pedido; só 3/3 aprova), reescrita dos que falharam e registro do que mudou e por quê. O site mostra o resultado: nota por modelo, exemplo de entrada e saída, limitações e versões anteriores, com botão para copiar o prompt.

![Site no desktop](docs/screenshot-desktop.png)

![Site no mobile](docs/screenshot-mobile.png)

## Telas

**Desktop (1440×900, retina):**

1. Tela inicial - visualização dos cards de prompts com busca e filtros
   ![Desktop - tela inicial](docs/img/desktop-1-initial.png)

2. Busca por "NF-e" - filtragem em tempo real
   ![Desktop - busca NF-e](docs/img/desktop-2-search.png)

3. Modal de detalhes - exibe prompt completo, variáveis e avaliações
   ![Desktop - modal detalhes](docs/img/desktop-3-modal.png)

4. Filtro por categoria - interface responsiva  
   ![Desktop - filtro categoria](docs/img/desktop-4-filter.png)

**Mobile (390×844):**

1. Tela inicial - layout responsivo
   ![Mobile - tela inicial](docs/img/mobile-1-initial.png)

2. Busca - interface adaptada para telas pequenas
   ![Mobile - busca SQL](docs/img/mobile-2-search.png)

3. Modal - ajustado para mobile
   ![Mobile - modal detalhes](docs/img/mobile-3-modal.png)

## Como rodar

O site é estático, mas carrega o JSON por `fetch`, então precisa de um servidor local:

```bash
python3 -m http.server 8080
# abra http://localhost:8080
```

Testes (Node 20 ou superior):

```bash
npm install
npm test            # valida data/prompts.json (schema, ids, variáveis, pastas de teste)
npx playwright install chromium
npm run test:e2e    # 11 testes do site no navegador
```

## Estrutura

```
index.html, css/, js/app.js   # site (JavaScript puro, sem framework)
data/prompts.json             # prompts, variáveis, versões, avaliações
testes/<prompt>/              # entradas, saídas brutas e avaliação de cada prompt
docs/metodo.md                # rubrica e processo
tests/                        # validação do JSON (node --test)
e2e/                          # testes do site (Playwright)
```

## Resultado dos testes

Quinze prompts, cinco casos cada, nos dois modelos. O modelo principal aprovou todos os casos; o econômico aprovou 72 de 75 (três prompts com 4 de 5). Sete prompts já estão na versão 2, reescritos depois de falhas registradas no histórico de cada um. Os resultados detalhados estão em `testes/<prompt>/avaliacao.md` e no site.

## Decisões técnicas

- **Avaliação manual com rubrica fixa**, para a nota ter critério explícito e auditável.
- **Saídas brutas versionadas** no repositório (`bruto-*`), com prompt preenchido, modelo e data.
- **JSON como fonte única**: o site só lê `data/prompts.json`; um teste garante que ids, variáveis e pastas de teste batem.
- **Sem framework**: todo texto vindo do JSON entra no DOM por `textContent`, sem `innerHTML`.

## Limitações

- Os dois modelos comparados são o principal e o econômico do ChatGPT. A comparação com Claude do plano original ainda não foi feita.
- Cinco casos por prompt são uma amostra pequena: nota máxima não prova robustez.
- Entradas fictícias; casos reais de ERP podem ser mais confusos.
- As saídas dependem da versão do modelo na data do teste (registrada em cada avaliação).

## Onde a IA entrou

Os prompts, os casos e as avaliações foram produzidos com assistência de IA e revisados. Qualquer nota deve ser reavaliada antes de ser citada.

## Próximos passos

Rodar os mesmos casos em Claude, ampliar a amostra com casos difíceis e avaliar automaticamente com um segundo avaliador para medir a concordância.