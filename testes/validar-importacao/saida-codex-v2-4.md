# Saída codex v2 — caso 4

Modelo: gpt-6.2-sol

Data: 2026-11-21T11:57:35.798Z

Não é possível comparar os totais de origem e destino com os dados fornecidos. Faltam o arquivo de origem ou sua contagem, a confirmação de que há cabeçalho e o total de clientes no destino para o mesmo escopo da importação.

| Verificação | Como verificar | Dados necessários |
|---|---|---|
| Contagem | Contar as linhas do arquivo e confirmar se há cabeçalho e se cada registro ocupa uma única linha antes de informar o total de registros. Comparar esse total com o do destino no mesmo escopo. | Arquivo ou contagem validada da origem, formato do arquivo e total do destino para o lote. |
| Campos obrigatórios | Conferir se as colunas exigidas pelo ERP estão presentes e se cada registro tem valores nos campos obrigatórios. | Layout de importação do ERP e dados da origem. |
| Duplicidades | Verificar chaves repetidas na origem e no destino e identificar quais chaves da origem já existem no ERP. | Regra de unicidade e chaves de clientes dos dois lados. |
| Reconciliação | Comparar as chaves para apurar quais aparecem em ambos os lados, quais aparecem só na origem e quais aparecem só no destino. | Chaves da origem e do destino extraídas para o mesmo escopo. |

A diferença entre os totais mostra apenas o saldo entre as contagens. Para saber quais registros individuais faltam e quantos são, é preciso comparar os conjuntos de chaves. Nenhuma alteração foi executada.
