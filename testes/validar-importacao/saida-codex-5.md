# Saída codex — caso 5

Modelo: gpt-6.2-sol

Data: 2026-11-21T11:46:57.688Z

A origem informa **100 registros** e o destino apresenta **95**. A diferença de **5 registros** ainda precisa ser explicada. Sem o log da importação, não é possível identificar quais registros foram rejeitados ou confirmar se houve rejeições.

**Mantenha o destino intacto durante a investigação.** Excluí-lo agora eliminaria a base de comparação. Nenhuma alteração foi executada.

| Verificação | Como fazer | Dados ausentes |
|---|---|---|
| Contagem | Recontar origem e destino usando o mesmo recorte da importação e os mesmos filtros. | Listas de registros e critérios usados nas contagens. |
| Campos obrigatórios | Conferir se os campos obrigatórios estão preenchidos na origem e se foram mapeados para o destino. | Layout da importação, lista de campos obrigatórios e mapeamento. |
| Duplicidades | Contar chaves repetidas na origem e no destino e conferir como a importação trata essas repetições. | Chave de identificação e regra de tratamento de duplicidades. |
| Reconciliação | Comparar as listas por chave para identificar registros só na origem, só no destino e presentes nos dois lados com valores divergentes. | Listas detalhadas de ambos os lados com uma chave comum. |
