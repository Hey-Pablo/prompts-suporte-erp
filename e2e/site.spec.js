import { test, expect } from '@playwright/test';

test.describe('Biblioteca de Prompts Testados', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:8081/');
        await page.waitForLoadState('networkidle');
    });

    test('carrega a página sem erros de console', async ({ page }) => {
        const erros = [];
        page.on('console', msg => {
            if (msg.type() === 'error') {
                erros.push(msg.text());
            }
        });
        page.on('pageerror', error => {
            erros.push(error.message);
        });

        await page.waitForSelector('#lista-prompts');
        await page.waitForTimeout(500);

        expect(erros).toHaveLength(0);
    });

    test('renderiza cards de prompts', async ({ page }) => {
        await page.waitForSelector('.cartao-prompt');
        const cards = await page.$$('.cartao-prompt');
        expect(cards.length).toBeGreaterThan(0);
    });

    test('busca por "NF-e" encontra prompts relacionados', async ({ page }) => {
        await page.fill('#busca', 'NF-e');
        await page.waitForTimeout(300);

        const cards = await page.$$('.cartao-prompt:not(.hidden)');
        expect(cards.length).toBeGreaterThan(0);

        const primeiroCard = cards[0];
        const texto = await primeiroCard.textContent();
        expect(texto.toLowerCase()).toContain('nf-e');
    });

    test('filtro por categoria funciona', async ({ page }) => {
        await page.waitForSelector('#categoria', { state: 'attached' });
        const categorias = await page.$$eval('#categoria option', options =>
            options.map(o => o.value).filter(v => v)
        );
        expect(categorias.length).toBeGreaterThan(0);

        await page.selectOption('#categoria', categorias[0]);
        await page.waitForTimeout(300);

        const cards = await page.$$('.cartao-prompt:not(.hidden)');
        expect(cards.length).toBeGreaterThan(0);
    });

    test('botão copiar copia o prompt para clipboard', async ({ page, context }) => {
        await context.grantPermissions(['clipboard-read', 'clipboard-write']);
        await page.waitForSelector('.btn-copiar-prompt');
        const btnCopiar = await page.$('.btn-copiar-prompt');
        await btnCopiar.click();
        await page.waitForTimeout(500);

        const texto = await page.evaluate(async () => {
            return await navigator.clipboard.readText();
        });

        expect(texto.length).toBeGreaterThan(0);
    });

    test('abre modal de detalhes ao clicar em "Ver detalhes"', async ({ page }) => {
        await page.waitForSelector('.btn-detalhes');
        const btnDetalhes = await page.$('.btn-detalhes');
        await btnDetalhes.click();
        await page.waitForTimeout(300);

        const modal = await page.$('#detalhe-modal[open]');
        expect(modal).toBeTruthy();

        const titulo = await page.$('#detalhe-titulo');
        const textoTitulo = await titulo.textContent();
        expect(textoTitulo.length).toBeGreaterThan(0);
    });

    test('fecha modal ao clicar no botão fechar', async ({ page }) => {
        await page.waitForSelector('.btn-detalhes');
        const btnDetalhes = await page.$('.btn-detalhes');
        await btnDetalhes.click();
        await page.waitForTimeout(300);

        const btnFechar = await page.$('.btn-fechar');
        await btnFechar.click();
        await page.waitForTimeout(300);

        const modal = await page.$('#detalhe-modal[open]');
        expect(modal).toBeFalsy();
    });

    test('fecha modal ao pressionar Escape', async ({ page }) => {
        await page.waitForSelector('.btn-detalhes');
        const btnDetalhes = await page.$('.btn-detalhes');
        await btnDetalhes.click();
        await page.waitForTimeout(300);

        await page.keyboard.press('Escape');
        await page.waitForTimeout(300);

        const modal = await page.$('#detalhe-modal[open]');
        expect(modal).toBeFalsy();
    });

    test('responsivo em 375px sem rolagem horizontal', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });
        await page.waitForTimeout(300);

        const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
        const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);

        expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
    });

    test('mostra estado vazio quando busca não retorna resultados', async ({ page }) => {
        await page.fill('#busca', 'termoinexistente12345');
        await page.waitForTimeout(300);

        const estadoVazio = await page.$('#estado-vazio:not(.hidden)');
        expect(estadoVazio).toBeTruthy();
    });

    test('variáveis são destacadas visualmente no modal', async ({ page }) => {
        await page.waitForSelector('.btn-detalhes');
        const btnDetalhes = await page.$('.btn-detalhes');
        await btnDetalhes.click();
        await page.waitForTimeout(300);

        const variaveisDestacadas = await page.$$('.variavel-destaque');
        expect(variaveisDestacadas.length).toBeGreaterThan(0);
    });
});