# Saída codex — caso 2

Modelo: gpt-6.2-sol

Data: 2026-11-21T11:34:29.017Z

```sql
SELECT
    status,
    COUNT(*) AS total_chamados
FROM chamados
GROUP BY status;
```

A consulta conta cada linha da tabela `chamados` no grupo do seu `status`. Se houver linhas com `status` nulo, elas serão contadas em um grupo próprio.

Como não foi informado um período ou filtro de status, a consulta considera toda a tabela e não precisa de parâmetros.
