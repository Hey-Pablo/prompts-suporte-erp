# Saída economico — caso 1

Modelo: gpt-6-luna

Data: 2026-11-21T11:34:23.680Z

```sql
SELECT id, nome, estoque
FROM produtos
WHERE estoque < :limite;
```

Pressupostos: `:limite` é um parâmetro fornecido na execução; “menor que” é uma comparação estrita. A consulta apenas lê dados.
