# Saída codex v2 — caso 5

Modelo: gpt-6.2-sol

Data: 2026-11-21T11:51:17.394Z

**Prioridade imediata:** suspenda o pedido de exclusão e escale a suspeita de corrupção ao responsável pelo banco de dados. Preserve os dados e as evidências enquanto o diagnóstico é feito.

### Checklist de triagem

1. **Registre o incidente.** Anote o horário com fuso, quem relatou o problema, a operação afetada e a mensagem de erro exata. Registre também o pedido de exclusão e o motivo informado, se disponível.
2. **Delimite o impacto com consultas já disponíveis.** Confira alertas e registros existentes para identificar quais usuários, módulos e operações foram afetados e se o problema persiste. Registre o último funcionamento normal conhecido. Evite repetir a operação se ela puder gravar dados.
3. **Preserve as evidências.** Reúna logs do ERP e do banco no intervalo do incidente, mensagens de erro, identificadores de eventos e capturas de tela, quando disponíveis. Preserve os originais, restrinja o acesso e oculte dados sensíveis nas cópias compartilhadas.
4. **Levante as condições de recuperação.** Consulte, se houver acesso, os registros do último backup concluído e da última restauração validada. Se houver indícios de que novas gravações agravam o problema, peça ao responsável pelo ambiente que avalie a contenção e o impacto sobre as integrações.
5. **Mantenha as intervenções suspensas.** Evite exclusão, reparo, restauração sobre o banco atual e verificações pesadas até que o responsável técnico avalie as evidências, o impacto e as opções de recuperação.

**Condição de escalonamento:** a suspeita de corrupção combinada com o pedido de exclusão imediata já justifica o escalonamento, mesmo com evidências parciais. Destaque como urgente qualquer erro de integridade, falha recorrente de leitura ou gravação, impacto crescente ou falta de confirmação de backup recuperável. Envie o que já foi coletado e identifique as lacunas.

**Dados ausentes e dependências desconhecidas:** ERP, versão, motor de banco, ambiente, erros observados, alcance do impacto, situação dos backups, integrações, responsável técnico e autorização para intervenções. A corrupção permanece sem confirmação.
