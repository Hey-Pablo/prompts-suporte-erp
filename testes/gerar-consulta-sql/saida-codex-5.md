# Saída codex — caso 5

Modelo: gpt-6.2-sol

Data: 2026-11-21T11:35:01.592Z

O esquema das tabelas não foi informado. Para montar um `SELECT` de faturamento por filial, preciso de:

- Tabela de faturamento e nomes das colunas que identificam a filial e o valor a somar.
- Tabela de filiais e chaves de relacionamento, caso o resultado deva exibir o nome da filial.
- Coluna de data e período desejado, caso haja filtro por período.
- Regra de faturamento, se houver tratamento específico para descontos, cancelamentos ou devoluções.

A consulta será somente de leitura, sem `DELETE`. Os valores usados em filtros serão passados como parâmetros.
