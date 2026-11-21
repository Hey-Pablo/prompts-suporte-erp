# Saída codex v2 — caso 5

Modelo: gpt-6.2-sol

Data: 2026-11-21T11:57:52.119Z

**Mantenha o destino intacto durante a investigação.** A origem informa 100 registros e o destino, 95. A diferença informada é de 5, mas só a comparação dos conjuntos pode mostrar quais e quantos registros da origem estão ausentes no destino.

1. **Contagem.** Confirme o mesmo escopo e os mesmos filtros nos dois lados. Se a origem for um arquivo, confirme se há cabeçalho e conte separadamente as linhas físicas e os registros de dados.
2. **Campos obrigatórios.** Confira o leiaute da importação e identifique registros com campos obrigatórios vazios ou inválidos. Sem o log, essas ocorrências são possíveis causas de rejeição.
3. **Duplicidades.** Confirme a chave de negócio e conte as ocorrências de cada chave na origem e no destino. Compare o total de registros com o total de chaves distintas em cada lado.
4. **Reconciliação.** Compare os dois conjuntos pela chave. Identifique chaves presentes em apenas um dos lados, diferenças na quantidade de ocorrências e divergências nos campos das chaves em comum.

O log de importação está indisponível. Os conjuntos de dados, o leiaute, a chave de negócio, os filtros usados nas contagens e a informação sobre o cabeçalho não foram fornecidos. Nenhuma alteração foi executada.
