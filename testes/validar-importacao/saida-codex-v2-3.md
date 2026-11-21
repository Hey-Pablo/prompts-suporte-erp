# Saída codex v2 — caso 3

Modelo: gpt-6.2-sol

Data: 2026-11-21T11:57:15.269Z

A planilha de estoque foi descrita como sem cabeçalho e com quantidades negativas. Como o arquivo e o layout de importação do ERP não foram fornecidos, as verificações abaixo estão pendentes.

| Verificação | Como conferir |
|---|---|
| Contagem | Conte as linhas preenchidas e informe as vazias separadamente. Inclua a primeira linha na inspeção. Só informe o total de registros após confirmar quais linhas correspondem a registros no layout do ERP. |
| Campos obrigatórios | Confirme a ordem das colunas e os campos exigidos pelo ERP. Com esse mapeamento, identifique campos obrigatórios vazios ou com formato inválido. |
| Quantidades negativas | Confirme qual coluna contém as quantidades e se o tipo de importação aceita valores negativos. Conte e identifique as linhas afetadas antes de decidir como tratá-las. |
| Duplicidades | Confirme a chave de identificação usada pelo ERP e procure repetições por essa chave. Sem ela, só é possível apontar linhas com conteúdo idêntico. |
| Reconciliação | Se houver relatório da importação ou exportação do ERP, compare os conjuntos pela chave confirmada e confira as quantidades correspondentes. Uma diferença entre totais, por si só, não mostra quais nem quantos registros individuais faltam. |

Para concluir a análise, faltam a planilha, o layout do ERP com os campos obrigatórios e a chave de identificação, a regra para quantidades negativas e, para a reconciliação, os dados do ERP. Nenhuma alteração foi realizada.
