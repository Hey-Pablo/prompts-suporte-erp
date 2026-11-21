# Saída economico v2 — caso 5

Modelo: gpt-6-luna

Data: 2026-11-21T11:57:59.259Z

Não exclua o destino antes de investigar. Sem log e sem comparar os conjuntos, a diferença entre os totais (5) não prova quais nem quantos registros individuais faltam; os totais também podem contar linhas ou registros de formas diferentes.

Verificações propostas, sem alterar dados:

- Confirmar o que cada total conta: linhas do arquivo ou registros do ERP; conferir cabeçalhos e possíveis linhas de título.
- Comparar a contagem de linhas e de registros válidos entre origem e destino, com os mesmos filtros e critérios.
- Conferir se os campos obrigatórios estão preenchidos e se há linhas rejeitadas ou ignoradas.
- Procurar duplicidades pela chave do registro, se ela estiver disponível.
- Quando houver identificador comum, reconciliar os conjuntos da origem e do destino para localizar ausências, extras e divergências.

Dados ausentes: arquivo ou lista de registros de origem e destino, definição dos totais, cabeçalhos, campos obrigatórios, chave de identificação e log de importação.
