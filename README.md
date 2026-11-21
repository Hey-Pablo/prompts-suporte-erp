# Biblioteca de Prompts Testados

> **Status: em desenvolvimento.** O código entra aos poucos; abaixo está o planejamento do projeto.

## O que é

Site com 15 a 20 prompts para tarefas reais de suporte e ERP, cada um com casos de teste, saída obtida, nota de avaliação e histórico de versões. Exemplos: classificar chamado, resumir atendimento, redigir resposta ao usuário, transformar procedimento em artigo, explicar rejeição de NF-e em linguagem simples, gerar consulta SQL a partir de uma descrição.

## O que prova

Engenharia de prompts com método: teste, critério de qualidade, comparação entre modelos e registro de limitações.

## Stack

Modelos principal e econômico do ChatGPT para os testes. Site estático em HTML, CSS e JavaScript lendo um JSON. GitHub Pages.

## Estrutura

```
prompts-suporte-erp/
├─ index.html
├─ js/app.js             # busca, filtro por categoria, copiar
├─ data/prompts.json     # prompt, variáveis, versão, modelo, nota
├─ testes/
│  └─ <prompt>/          # 5 entradas fictícias, saídas e avaliação
├─ docs/metodo.md        # rubrica e processo
└─ README.md
```

## Plano

1. Liste 20 tarefas que você fazia à mão e escolha as 15 mais frequentes.
2. Escreva a versão 1 de cada prompt com objetivo, contexto, formato de saída e variáveis entre chaves.
3. Crie 5 entradas fictícias por prompt, incluindo um caso difícil.
4. Rode nos modelos principal e econômico e guarde as saídas.
5. Avalie com rubrica de 3 critérios: correto, completo e no formato pedido.
6. Reescreva os que falharam (versão 2) e registre o que mudou e por quê.
7. Monte o site: busca, filtro, botão de copiar, exemplo de entrada e saída, nota e limitações.
8. Publique e descreva o método no README.

## Como deve funcionar

- O visitante busca "NF-e" e vê os prompts relacionados com a nota de cada um, por exemplo 4 de 5 casos aprovados.
- Um clique copia o prompt com as variáveis destacadas.
- Cada prompt mostra modelo, data do teste, limitações conhecidas e versões anteriores.

## Prazo

4 a 5 dias, a maior parte em testes.

## Autor

Pablo Dilio · [Portfólio](https://hey-pablo.github.io/pablo-dilio-portfolio/) · [LinkedIn](https://www.linkedin.com/in/pablo-dilio-4063991b2)
