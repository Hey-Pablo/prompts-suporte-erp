# Saída claude — caso 2

Modelo: claude-sonnet-5-5

Data: 2026-11-21T11:25:18.652Z

# Classificação do chamado

## Fatos (informados)
- O ERP está indisponível.
- A indisponibilidade afeta todos os caixas.
- Dura há 20 minutos.

## Classificação
- **Categoria:** Incidente, indisponibilidade de sistema (ERP/PDV).
  - *Justificativa:* o serviço deixou de funcionar. Não é dúvida, solicitação nem melhoria.
- **Impacto:** Crítico/Alto.
  - *Justificativa:* a indisponibilidade atinge todos os caixas, ou seja, toda a operação de venda. O relato não informa se existe contingência.
- **Urgência:** Alta.
  - *Justificativa:* a falha está em andamento e o tempo de parada aumenta a perda. O relato não informa o horário de funcionamento nem o fluxo de clientes.
- **Prioridade sugerida:** P1/Crítica, com acionamento imediato.
  - *Justificativa:* impacto crítico combinado com urgência alta. Reavalie quando houver os dados abaixo, por exemplo se houver contingência funcionando.

## Suposições (não confirmadas)
- Os caixas dependem do ERP para vender e emitir documentos fiscais. Isso é provável, mas o relato não diz.
- A causa pode estar em rede, servidor, banco de dados, licença ou deploy recente. Não há dado que aponte para nenhuma delas.
- A interrupção é total, e não lentidão ou erro intermitente. Isso depende de como o relator usou "indisponível".

## Informações ausentes (a solicitar)
1. Qual é o sintoma exato? Há mensagem de erro, timeout ou tela em branco? Peça print ou texto do erro.
2. Houve mudança recente, como atualização, deploy, queda de energia ou troca de rede?
3. Quantas lojas ou unidades e quantos caixas estão afetados? A falha é de uma loja ou de todas?
4. Outros módulos do ERP, como retaguarda e estoque, também estão fora?
5. Os usuários conseguem acessar o ERP de outros dispositivos ou redes?
6. Existe contingência, como PDV offline? As vendas estão paradas ou sendo registradas à parte?
7. Qual é o horário de início exato e quem reportou?
8. Há SLA contratado para este cliente?
9. Qual é o ambiente: nuvem ou servidor local? Os servidores e o banco respondem?

## Ações imediatas sugeridas
- Abrir como incidente crítico e escalar para o N2/infraestrutura.
- Verificar o status do servidor, da aplicação, do banco e da rede.
- Comunicar o cliente sobre o andamento e sobre a contingência possível.
