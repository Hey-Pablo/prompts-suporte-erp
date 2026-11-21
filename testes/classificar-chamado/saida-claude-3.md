# Saída claude — caso 3

Modelo: claude-sonnet-5-5

Data: 2026-11-21T11:25:41.351Z

# Classificação do chamado

## Classificação
- **Categoria:** Solicitação de melhoria (customização de relatório). Não é incidente nem erro.
  - **Justificativa:** O usuário pede um campo novo, não relata falha. Nada indica que o relatório hoje funcione de forma incorreta.
- **Impacto:** Baixo (provisório).
  - **Justificativa:** Pelo relato, a operação não está parada nem comprometida. Falta saber se o campo é exigência legal ou fiscal, o que aumentaria o impacto.
- **Urgência:** Baixa.
  - **Justificativa:** O usuário indicou "próximo mês", então há prazo e folga para planejar.
- **Prioridade sugerida:** Baixa. Tratar como demanda planejada, na fila de melhorias, com prazo-alvo antes do próximo mês.
  - **Justificativa:** Impacto baixo e urgência baixa. Isso pode mudar conforme as respostas abaixo.

## Fatos (presentes no relato)
- Um usuário pediu a inclusão de um campo em um relatório.
- O prazo desejado é "o próximo mês".

## Suposições (não confirmadas)
- Que o relatório é padrão do ERP, e não customizado.
- Que o campo já existe na base de dados e só precisa ser exibido.
- Que "próximo mês" significa uma data de entrega, e não só o mês em que o usuário vai precisar do campo.
- Que não há exigência legal ou fiscal por trás do pedido.
- Que o pedido vale só para esse usuário, e não para uma área inteira.

## Dados ausentes (a solicitar)
1. **Qual relatório?** Nome ou código e módulo do ERP.
2. **Qual campo?** Nome e origem (tabela ou cadastro), e se já existe no sistema.
3. **Qual a finalidade?** O motivo do negócio e se há exigência legal, fiscal ou de auditoria.
4. **Qual o prazo exato?** Uma data limite, e o que acontece se não for cumprida.
5. **Quem solicita e quem mais usa o relatório?** Solicitante, área e número de usuários afetados.
6. **O relatório é padrão ou customizado?** Isso define o esforço e se a mudança é feita por configuração ou por desenvolvimento.
7. **Existe alternativa hoje?** Por exemplo, exportar os dados ou usar outro relatório.
8. **Qual a versão e o ambiente do ERP?** Também precisa de aprovação do gestor, se a política de customizações exigir.

## Próximos passos
- Pedir ao usuário as informações acima antes de estimar esforço.
- Reavaliar a prioridade com as respostas. Se houver obrigação legal ou fiscal, ou se o prazo for fixo, **eleve a urgência e a prioridade**.
- Registrar o chamado como melhoria e encaminhá-lo para análise de viabilidade, com prazo de retorno ao usuário.
