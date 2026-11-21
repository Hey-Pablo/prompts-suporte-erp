# Saída economico v2 — caso 5

Modelo: gpt-6-luna

Data: 2026-11-21T11:51:29.291Z

## Checklist seguro — possível corrupção do banco

**Não apague dados.** A causa ainda não foi confirmada, e apagar pode causar perda irreversível. A corrupção também é apenas uma suspeita.

1. **Registrar o incidente**
   - Anote quando o sintoma começou, o que o usuário observou e quais operações estavam em andamento.
   - Registre mensagens de erro completas, horários e fuso, usuários e módulos afetados.
   - **Dependência desconhecida:** ERP, versão, banco de dados e ambiente não informados.

2. **Conter sem alterar dados**
   - Oriente os usuários a interromper novas tentativas de gravação nas áreas afetadas, se isso puder ser feito pelo procedimento operacional conhecido.
   - Não reinicie serviços, execute reparos, rode scripts ou altere configurações sem procedimento aprovado para esse ERP e banco.
   - **Dependência desconhecida:** não há informação sobre transações em andamento, impacto operacional ou procedimento de contenção.

3. **Coletar evidências**
   - Preserve os erros, logs disponíveis, identificadores de transação e sequência de eventos.
   - Anote se o problema afeta um usuário, vários usuários, um módulo ou todo o ERP, e se ocorre sempre ou de forma intermitente.
   - Registre alterações recentes conhecidas, como atualizações ou mudanças de infraestrutura; se não souber, marque como desconhecido.
   - Evite incluir senhas, tokens ou dados pessoais desnecessários nas evidências.

4. **Preservar a possibilidade de recuperação**
   - Não exclua registros, tabelas, arquivos ou backups, nem sobrescreva cópias existentes.
   - Confirme com a equipe responsável se há backup recente e se ele está íntegro, sem iniciar uma restauração.
   - **Dependência desconhecida:** disponibilidade, horário e validação dos backups não foram informados.

5. **Escalonar**
   - Encaminhe ao DBA e ao suporte responsável pelo ERP com as evidências coletadas.
   - **Escalone imediatamente** se houver falha de gravação, erros de integridade, indisponibilidade ampla, suspeita de perda de dados ou necessidade de reparo/restauração.
   - Só considerar qualquer ação que altere ou apague dados após diagnóstico e autorização do responsável pelo banco, com plano de recuperação validado.
