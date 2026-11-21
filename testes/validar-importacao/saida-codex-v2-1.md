# Saída codex v2 — caso 1

Modelo: gpt-6.2-sol

Data: 2026-11-21T11:56:38.729Z

O CSV tem **10 linhas** informadas e dois campos, `código` e `nome`. São **9 registros se uma linha for o cabeçalho** ou **10 se todas as linhas forem de dados**, desde que cada linha de dados corresponda a um registro. O cabeçalho e o conteúdo das linhas não foram fornecidos.

| Verificação | O que conferir | Dados ausentes |
|---|---|---|
| Contagem | Confirmar se há cabeçalho e contar os registros lidos. Se já houve importação, conferir quantos foram aceitos, rejeitados ou ignorados. | CSV completo e, se houver, relatório da importação. |
| Campos obrigatórios | Confirmar quais campos o destino exige e verificar valores ausentes, vazios ou compostos apenas por espaços. | Regras do destino e valores de `código` e `nome`. |
| Duplicidades | Verificar códigos repetidos no CSV. Se `código` for a chave no destino, verificar também se esses códigos já existem lá. | Valores do CSV, chave do destino e registros existentes. |
| Reconciliação | Comparar os registros do CSV com os registros no destino pela chave confirmada. Para chaves correspondentes, conferir se o `nome` coincide. | Destino, chave de comparação e registros de ambos os lados. |

Uma diferença entre totais indica apenas uma diferença de contagem. Para determinar **quais e quantos registros individuais faltam**, é preciso comparar os conjuntos.

Nenhuma alteração foi executada.
