import { chromium } from 'playwright';
import path from 'path';

async function captureScreenshots() {
  const browser = await chromium.launch({ headless: true });

  // Desktop screenshots (1440x900, retina with deviceScaleFactor: 2)
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2
  });
  const desktopPage = await desktopContext.newPage();
  await desktopPage.goto('http://localhost:8080/');
  await desktopPage.waitForLoadState('networkidle');
  await desktopPage.waitForSelector('.cartao-prompt');

  // Screenshot 1: Initial
  await desktopPage.screenshot({ path: 'docs/img/desktop-1-initial.png' });
  console.log('Captured: desktop-1-initial.png');

  // Screenshot 2: Search for 'NF-e'
  await desktopPage.fill('#busca', 'NF-e');
  await desktopPage.waitForTimeout(500);
  await desktopPage.screenshot({ path: 'docs/img/desktop-2-search.png' });
  console.log('Captured: desktop-2-search.png');

  // Close search
  await desktopPage.fill('#busca', '');
  await desktopPage.waitForTimeout(500);

  // Open modal (first card)
  const firstDetalhes = await desktopPage.$('.btn-detalhes');
  await firstDetalhes.click();
  await desktopPage.waitForTimeout(500);
  await desktopPage.screenshot({ path: 'docs/img/desktop-3-modal.png' });
  console.log('Captured: desktop-3-modal.png');

  // Close modal
  const btnFechar = await desktopPage.$('.btn-fechar');
  await btnFechar.click();
  await desktopPage.waitForTimeout(500);

  // Screenshot 4: Filter by category
  const categoriaSelect = await desktopPage.$('#categoria');
  await categoriaSelect.click();
  await desktopPage.waitForTimeout(300);
  await desktopPage.screenshot({ path: 'docs/img/desktop-4-filter.png' });
  console.log('Captured: desktop-4-filter.png');

  await desktopContext.close();

  // Mobile screenshots (390x844)
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 }
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto('http://localhost:8080/');
  await mobilePage.waitForLoadState('networkidle');
  await mobilePage.waitForSelector('.cartao-prompt');

  // Screenshot 1: Initial mobile
  await mobilePage.screenshot({ path: 'docs/img/mobile-1-initial.png' });
  console.log('Captured: mobile-1-initial.png');

  // Screenshot 2: Search mobile
  await mobilePage.fill('#busca', 'SQL');
  await mobilePage.waitForTimeout(500);
  await mobilePage.screenshot({ path: 'docs/img/mobile-2-search.png' });
  console.log('Captured: mobile-2-search.png');

  // Close search and open modal
  await mobilePage.fill('#busca', '');
  await mobilePage.waitForTimeout(500);
  const firstDetalhesMobile = await mobilePage.$('.btn-detalhes');
  await firstDetalhesMobile.click();
  await mobilePage.waitForTimeout(500);
  await mobilePage.screenshot({ path: 'docs/img/mobile-3-modal.png' });
  console.log('Captured: mobile-3-modal.png');

  await mobileContext.close();
  await browser.close();

  console.log('All screenshots captured successfully');
}

captureScreenshots().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});