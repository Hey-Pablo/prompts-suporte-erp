# Saída codex — caso 4

Modelo: gpt-6.2-sol

Data: 2026-11-21T11:46:41.628Z

**Status da validação:** faltam os dados da origem e do destino para comparar os totais. Nenhuma alteração foi executada.

| Verificação | Como conferir | Dados faltantes |
|---|---|---|
| Contagem | Comparar o total de registros de clientes no arquivo com o total de registros correspondentes no ERP, usando o mesmo escopo. | Arquivo ou total da origem, extração ou total correspondente no ERP e critério para delimitar o lote. |
| Campos obrigatórios | Contar os registros com campos obrigatórios vazios na origem e, quando houver uma extração, no destino. | Lista de campos obrigatórios, mapeamento entre arquivo e ERP e registros para conferir. |
| Duplicidades | Contar chaves repetidas no arquivo e verificar se há mais de um cadastro no ERP para a mesma chave. | Chave de identificação do cliente e registros da origem e do destino. |
| Reconciliação | Cruzar os registros pela chave do cliente para identificar quais aparecem nos dois lados, quais estão ausentes no ERP e quais aparecem apenas no destino dentro do escopo definido. Se houver relatório de importação, usá-lo para conferir as rejeições. | Registros dos dois lados, chave de identificação, escopo do lote e, se disponível, relatório de importação. |

Totais iguais confirmam a contagem. A conferência registro a registro depende do cruzamento pela chave do cliente.
