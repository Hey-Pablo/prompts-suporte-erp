# Saída codex — caso 3

Modelo: gpt-6.2-sol

Data: 2026-11-21T11:46:22.666Z

A planilha de estoque foi descrita como **sem cabeçalho e com quantidades negativas**. Antes de importar, confirme o significado de cada coluna e se o ERP aceita valores negativos para o tipo de importação pretendido.

| Verificação | Como conferir | Dados ausentes |
|---|---|---|
| Contagem | Contar as linhas de dados e as linhas com quantidade negativa. Se houver relatório de validação, conferir se a soma de linhas aceitas, rejeitadas e ignoradas corresponde ao total de linhas de dados. | Conteúdo da planilha e relatório de validação. |
| Campos obrigatórios | Mapear as colunas pelo layout de importação do ERP. Depois, verificar campos vazios e formatos inválidos. Confirmar se a quantidade representa saldo ou movimentação e qual regra se aplica aos valores negativos. | Layout do ERP, mapeamento das colunas e regra para quantidades negativas. |
| Duplicidades | Procurar linhas repetidas e, após confirmar a chave definida pelo ERP, verificar registros com a mesma chave. | Conteúdo da planilha e definição da chave. |
| Reconciliação | Se forem saldos, comparar as quantidades da planilha com os saldos esperados na mesma data de referência. Se forem movimentações, somar as quantidades com seus sinais e conferir se o saldo inicial mais a variação corresponde ao saldo final esperado. | Tipo de importação, data de referência e saldos para comparação. |

As informações fornecidas não permitem calcular contagens, confirmar duplicidades ou reconciliar saldos. Nenhuma alteração foi executada.
