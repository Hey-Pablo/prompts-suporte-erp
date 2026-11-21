# Saída economico — caso 2

Modelo: gpt-6-luna

Data: 2026-11-21T11:34:33.994Z

```sql
SELECT
  status,
  COUNT(*) AS total_chamados
FROM chamados
GROUP BY status;
```

A consulta agrupa os registros pelo campo `status` e conta quantos há em cada grupo. Pressupõe que cada linha representa um chamado e que deseja incluir todos os status, inclusive valores nulos, caso existam. Não são necessários parâmetros porque nenhum filtro por valor foi solicitado.
