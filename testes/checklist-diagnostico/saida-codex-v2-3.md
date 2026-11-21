# Saída codex v2 — caso 3

Modelo: gpt-6.2-sol

Data: 2026-11-21T11:50:20.331Z

## Checklist de triagem — relatório de estoque demora para abrir

**Sintoma informado:** lentidão ao abrir o relatório de estoque.  
**Dados ausentes:** ERP e versão, ambiente, início e frequência do problema, tempo de abertura habitual e atual, usuários afetados, parâmetros do relatório e eventuais mensagens de erro.

1. **Registre a ocorrência.** Anote data, hora e fuso, usuário ou perfil afetado, ambiente se conhecido, caminho até o relatório e parâmetros exibidos. Identifique se a demora ocorre antes de a tela abrir ou depois de solicitar a geração do relatório.
2. **Meça uma tentativa controlada.** Cronometre do clique até a exibição do conteúdo. Registre se o relatório abriu, ficou carregando ou apresentou erro. Se a tentativa for interrompida, anote o tempo decorrido e o motivo. Evite cliques repetidos e execuções simultâneas.
3. **Delimite o impacto.** Se houver outro usuário autorizado disponível, verifique se ele observa o mesmo sintoma em condições comparáveis. Confirme se outras telas do ERP também estão lentas e registre quais atividades estão atrasadas ou impedidas.
4. **Compare o efeito dos filtros, se disponíveis.** Se a tela de parâmetros abrir, use um filtro mais restrito permitido, como um período menor, sem salvar alterações. Mude um parâmetro por vez e registre o resultado. Se a demora ocorrer antes da tela de parâmetros, pule esta etapa.
5. **Reúna as evidências.** Inclua horários, tempos medidos, parâmetros, resultado de cada tentativa e mensagem exata de erro ou identificador da solicitação, se exibidos. Oculte dados sensíveis em capturas. Consulte métricas ou logs existentes somente se houver acesso autorizado e correlacione os registros pelo horário da ocorrência.

**Dependências desconhecidas:** disponibilidade de filtros, acesso autorizado a logs e métricas, tempo esperado de abertura, SLA e equipe responsável pelo relatório. Registre como indisponíveis as verificações que dependerem dessas informações. Mantenha a triagem em modo de leitura, sem alterar configurações ou dados, limpar caches compartilhados ou reiniciar serviços.

**Escalonamento:** encaminhe à equipe responsável pelo ERP se a lentidão persistir em uma tentativa controlada, se o relatório não abrir ou apresentar erro recorrente, se houver impacto em vários usuários ou se uma atividade crítica estiver impedida. Se houver SLA conhecido, aplique-o à priorização. Anexe as evidências coletadas e indique quais verificações ficaram pendentes.
