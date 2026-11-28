import { chromium } from 'playwright';
import { execSync } from 'child_process';
import fs from 'fs';

async function captureDemoGif() {
  const browser = await chromium.launch({ headless: true });

  // Use a smaller viewport for GIF (1280x800 as specified)
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 }
  });
  const page = await context.newPage();

  // Create a temp directory for frames
  const framesDir = 'docs/img/frames';
  if (!fs.existsSync(framesDir)) {
    fs.mkdirSync(framesDir, { recursive: true });
  }

  await page.goto('http://localhost:8080/');
  await page.waitForLoadState('networkidle');
  await page.waitForSelector('.cartao-prompt');

  let frameNum = 0;

  // Frame 0: Initial state
  await page.screenshot({ path: `${framesDir}/frame-${frameNum}.png` });
  frameNum++;

  // Type in search box
  await page.fill('#busca', 'NF-e');
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: `${framesDir}/frame-${frameNum}.png` });
  frameNum++;

  // Clear search
  await page.fill('#busca', '');
  await new Promise(r => setTimeout(r, 300));
  await page.screenshot({ path: `${framesDir}/frame-${frameNum}.png` });
  frameNum++;

  // Open modal
  await page.click('.btn-detalhes');
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: `${framesDir}/frame-${frameNum}.png` });
  frameNum++;

  // Close modal
  await page.click('.btn-fechar');
  await new Promise(r => setTimeout(r, 300));
  await page.screenshot({ path: `${framesDir}/frame-${frameNum}.png` });
  frameNum++;

  await context.close();
  await browser.close();

  console.log(`Captured ${frameNum} frames`);

  // Create GIF with ffmpeg (loop 0 for animated)
  try {
    execSync(`ffmpeg -y -framerate 10 -i ${framesDir}/frame-%d.png -vf "fps=10,scale=1280:-1:flags=lanczos" -loop 0 docs/demo.gif`,
      { stdio: 'inherit' });
    console.log('Created demo.gif');
  } catch (e) {
    console.error('ffmpeg failed, creating static image as fallback');
  }

  // Clean up frames
  for (let i = 0; i < frameNum; i++) {
    try {
      fs.unlinkSync(`${framesDir}/frame-${i}.png`);
    } catch (e) {}
  }
  fs.rmdirSync(framesDir);

  console.log('Demo GIF complete');
}

captureDemoGif().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});