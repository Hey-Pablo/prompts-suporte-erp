# Saída codex — caso 1

Modelo: gpt-6.2-sol

Data: 2026-11-21T11:34:19.221Z

```sql
SELECT id, nome, estoque
FROM produtos
WHERE estoque < :limite;
```

Informe o valor de `:limite` ao executar a consulta. A comparação é estrita, então produtos com estoque igual ao limite ficam de fora. Se houver registros com `estoque` nulo, eles também ficam de fora.
