# Saída economico — caso 4

Modelo: gpt-6-luna

Data: 2026-11-21T11:34:54.088Z

```sql
SELECT nome
FROM usuarios
WHERE ativo = :ativo;
```

Pressuposto: `ativo` indica se o usuário está ativo; use `:ativo` com o valor correspondente a “ativo”. O tipo e a representação desse valor não foram fornecidos.
