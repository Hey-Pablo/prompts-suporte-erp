# Saída economico v2 — caso 1

Modelo: gpt-6-luna

Data: 2026-11-21T11:56:45.831Z

**Dados disponíveis:** CSV fictício com 10 linhas e os campos `código` e `nome`. O destino e os dados existentes nele não foram informados.

**Verificações propostas — sem executar alterações:**

- Confirmar se as 10 linhas são registros de dados ou se incluem um cabeçalho; essa informação não foi fornecida.
- Conferir a contagem de registros após a importação, considerando como cabeçalho eventual.
- Verificar se `código` e `nome` estão preenchidos em cada registro e identificar códigos ou nomes vazios.
- Procurar duplicidades, especialmente por `código`; não foi informado se ele é único.
- Se houver acesso a uma exportação do destino, comparar os conjuntos de códigos para identificar registros ausentes, extras ou duplicados, e reconciliar os campos.

Sem o destino e sua situação atual, não é possível confirmar a importação nem reconciliar os registros. Uma diferença entre totais, por si só, não mostra quais ou quantos registros individuais faltam.
