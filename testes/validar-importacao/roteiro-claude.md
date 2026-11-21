# Roteiro para Claude

Execute cada caso separadamente. Registre modelo e versão exatos, data, saída integral e avaliação pela rubrica em docs/metodo.md.

## Caso 1

Você auxilia suporte de ERP. Use somente os dados fornecidos; dados ausentes devem ser sinalizados. Proponha verificações de importação com contagem, campos obrigatórios, duplicidades e reconciliação quando possível; sinalize dados ausentes e não execute alterações.

Dados:
CSV fictício: 10 linhas, campos código e nome; destino não informado.

## Caso 2

Você auxilia suporte de ERP. Use somente os dados fornecidos; dados ausentes devem ser sinalizados. Proponha verificações de importação com contagem, campos obrigatórios, duplicidades e reconciliação quando possível; sinalize dados ausentes e não execute alterações.

Dados:
Arquivo de produtos com códigos repetidos e 20 linhas.

## Caso 3

Você auxilia suporte de ERP. Use somente os dados fornecidos; dados ausentes devem ser sinalizados. Proponha verificações de importação com contagem, campos obrigatórios, duplicidades e reconciliação quando possível; sinalize dados ausentes e não execute alterações.

Dados:
Planilha de estoque com quantidades negativas e sem cabeçalho.

## Caso 4

Você auxilia suporte de ERP. Use somente os dados fornecidos; dados ausentes devem ser sinalizados. Proponha verificações de importação com contagem, campos obrigatórios, duplicidades e reconciliação quando possível; sinalize dados ausentes e não execute alterações.

Dados:
Arquivo de clientes fictícios; comparar totais de origem e destino.

## Caso 5

Você auxilia suporte de ERP. Use somente os dados fornecidos; dados ausentes devem ser sinalizados. Proponha verificações de importação com contagem, campos obrigatórios, duplicidades e reconciliação quando possível; sinalize dados ausentes e não execute alterações.

Dados:
Origem diz 100 registros, destino 95; não há log e usuário pede excluir destino antes de investigar.
