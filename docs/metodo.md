# Método de avaliação

Cada prompt é executado em cinco casos fictícios, incluindo um caso difícil. Registre o texto integral da saída, a identificação exata do modelo e a data. A avaliação é manual: não atribua pontuação sem examinar a saída.

| Critério | 1 ponto | 0 pontos |
| --- | --- | --- |
| Correto | As afirmações são sustentadas pela entrada e não há erro material. | Há erro material ou informação inventada. |
| Completo | Todos os elementos pedidos estão presentes, inclusive ressalvas necessárias. | Falta algum elemento pedido. |
| Formato | A resposta segue a estrutura solicitada. | A estrutura solicitada não foi respeitada. |

Um caso é aprovado somente com 3/3. A nota média é a soma das notas dividida pelo número de casos executados. Registre evidência e limitações por caso; não confunda ausência de evidência com sucesso. A revisão humana é necessária, especialmente em temas fiscais, SQL e dados sensíveis.

Mantenha a versão usada em cada execução. Ao detectar falha, registre o caso, a mudança e o motivo; crie a próxima versão e execute-a antes de declarar seu resultado. Guarde resultados anteriores para comparação. Registre limitações observadas, contexto, hipóteses e situações não cobertas; não generalize cinco casos para desempenho em produção.

A comparação usa o modelo principal e o modelo econômico do ChatGPT. Execute os mesmos casos em cada modelo e registre o identificador exato exibido pelo CLI, sem atribuir resultados a modelos não executados.

As saídas `saida-codex-N.md` e `saida-economico-N.md` pertencem à v1; arquivos com `-v2-` pertencem à v2. Os arquivos `bruto-*` guardam o prompt preenchido, a saída original do CLI, o modelo e a data UTC. Para prompts revisados, `prompt-v1.md` e `prompt-v2.md` preservam o texto das versões; a tabela de avaliação preserva as notas de ambas. O catálogo exibe as notas da versão atual. A avaliação é manual e subjetiva, feita sobre a resposta salva; não é uma medição estatística nem uma garantia de segurança ou correção fiscal.
