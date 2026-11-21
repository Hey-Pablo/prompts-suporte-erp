# Saída codex — caso 3

Modelo: gpt-6.2-sol

Data: 2026-11-21T11:38:07.805Z

**Sintoma informado**  
O relatório de estoque demora para abrir. O tempo de espera, a frequência, o impacto e a causa ainda são desconhecidos.

### Checklist de triagem

- [ ] **Registrar a ocorrência.** Anotar data, hora e fuso, ambiente, identificação do relatório, filtros usados e se a tela abriu, ficou carregando ou exibiu erro. Se houve erro, registrar a mensagem exata. Marcar como **não informado** o que estiver indisponível.
- [ ] **Medir uma abertura em condições normais.** Se for seguro repetir a consulta e não houver outra tentativa em andamento, fazer uma única tentativa com os mesmos filtros. Medir do comando de abertura até a exibição do relatório. Se ele não abrir durante a observação, registrar o tempo observado e o estado final.
- [ ] **Verificar o alcance.** Usar relatos ou registros já disponíveis para verificar se a demora é recorrente, se afeta outros usuários ou relatórios e se há impacto em alguma atividade. Comparar com o tempo habitual ou com o SLA, se houver referência documentada.
- [ ] **Reunir evidências.** Anexar ao chamado os horários, a duração, os filtros, o resultado e, se disponíveis, uma captura sem dados sensíveis e registros de diagnóstico do mesmo intervalo obtidos por acesso autorizado.
- [ ] **Escalonar conforme o resultado.** Encaminhar à equipe responsável pelo ERP se o relatório não abrir, se a demora se repetir acima da referência disponível ou se houver impacto operacional. Sem referência de tempo, usar a recorrência e o impacto observados para justificar o encaminhamento. Incluir no chamado as evidências e as informações que ficaram pendentes.

**Dependências desconhecidas**  
ERP e versão, ambiente afetado, fonte de dados do relatório, disponibilidade de registros de diagnóstico, tempo de abertura esperado, SLA e equipe responsável.

Manter a triagem em modo de consulta e observação. Evitar tentativas simultâneas, reinícios, limpezas e alterações em dados ou configurações.
