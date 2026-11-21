# Saída codex — caso 1

Modelo: gpt-6.2-sol

Data: 2026-11-21T11:45:47.901Z

O CSV fictício tem **10 linhas informadas** e dois campos, `código` e `nome`. Nenhuma alteração foi executada.

| Verificação | O que validar | Dados ausentes |
|---|---|---|
| Contagem | Confirmar se as 10 linhas incluem o cabeçalho. Se ele estiver incluído, são esperados 9 registros. Caso contrário, são esperados 10. | Conteúdo do CSV e confirmação sobre o cabeçalho. |
| Campos obrigatórios | Confirmar quais campos o destino exige. Se `código` e `nome` forem obrigatórios, verificar se estão preenchidos em cada registro. | Valores das linhas e regras do destino. |
| Duplicidades | Contar códigos repetidos no CSV e, se `código` for a chave do destino, verificar quais já existem lá. | Valores dos códigos, chave do destino e registros existentes. |
| Reconciliação | Quando houver relatório de importação, conferir se todos os registros de dados estão contabilizados como aceitos, rejeitados ou ignorados. Se houver acesso ao destino e `código` for a chave, comparar os nomes dos registros aceitos com os do CSV. | Destino e relatório de importação. |
