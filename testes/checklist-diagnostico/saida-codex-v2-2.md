# Saída codex v2 — caso 2

Modelo: gpt-6.2-sol

Data: 2026-11-21T11:49:52.311Z

## Checklist — Nota não aparece na fila de impressão

**Confirmado:** a nota não aparece na fila de impressão.  
**Dados ausentes:** versão e ambiente do ERP, identificação e status da nota, horário da tentativa, usuário e fila consultada. Também é desconhecido se o ERP usa fila interna, fila do sistema operacional ou serviço de impressão externo.

1. **Registre a ocorrência.** Colete o identificador interno da nota, a data e hora da tentativa com fuso, o usuário, a unidade e o ambiente, se disponíveis. Registre o caminho percorrido no ERP e qualquer mensagem exibida ao solicitar a impressão.
2. **Consulte a nota no ERP.** Confirme se o registro existe, se corresponde à unidade esperada e qual status é exibido. Se houver uma regra documentada que determine quais status permitem impressão, confira a elegibilidade. Registre como desconhecida qualquer regra que não possa ser confirmada.
3. **Confira a fila consultada.** Verifique se a fila corresponde ao destino selecionado na tentativa. Revise filtros de período, usuário, unidade e status, se disponíveis. Registre a fila, os filtros usados e se a consulta inclui trabalhos concluídos ou com erro.
4. **Procure o trabalho no histórico.** Se houver acesso autorizado, consulte o histórico de impressão e os logs disponíveis pelo horário e pelo identificador da nota. Registre se o trabalho foi localizado, seu último status e eventuais códigos de erro. Use ocorrências já registradas para verificar se outras notas, usuários ou filas foram afetados.
5. **Preserve as evidências.** Anexe capturas das telas relevantes e trechos dos logs, ocultando dados fiscais e pessoais desnecessários. Mantenha a triagem em modo de consulta. Evite reemitir a nota, reenviar a impressão, limpar a fila, reiniciar serviços ou alterar configurações durante a coleta.

**Escalone** se a nota estiver elegível e o trabalho continuar ausente após a conferência do destino, dos filtros e do histórico disponível. Escalone também se houver erro registrado, impacto em várias notas ou falta de acesso que impeça identificar onde o fluxo parou. Encaminhe ao responsável pelo ERP quando a solicitação não puder ser localizada no histórico do ERP ou esse histórico estiver indisponível. Se o ERP registrar o encaminhamento e a falha estiver na fila de destino, acione o responsável pela impressão. Inclua as evidências, o alcance observado e as dependências que ficaram sem confirmação.
