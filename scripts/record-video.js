import { chromium } from 'playwright';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

async function recordDemoVideo() {
  // Clean up old outputs
  const videoDir = 'docs/video';
  if (fs.existsSync(videoDir)) {
    fs.rmSync(videoDir, { recursive: true });
  }
  fs.mkdirSync(videoDir, { recursive: true });

  // Launch browser with video recording
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    recordVideo: {
      dir: videoDir,
      size: { width: 1280, height: 800 }
    }
  });
  const page = await context.newPage();

  try {
    // Navigate to site
    await page.goto('http://localhost:8080/');
    await page.waitForLoadState('networkidle');
    await page.waitForSelector('.cartao-prompt');

    // Wait a moment on initial state
    await page.waitForTimeout(2000);

    // Type in search box - slow typing to show cursor
    await page.hover('#busca');
    await page.waitForTimeout(500);
    await page.fill('#busca', '');
    await page.waitForTimeout(300);
    await page.type('#busca', 'NF-e', { delay: 100 });
    await page.waitForTimeout(2000);

    // Clear search - slow
    await page.click('#busca', { clickCount: 3 }); // Select all
    await page.waitForTimeout(300);
    await page.press('#busca', 'Backspace');
    await page.waitForTimeout(1500);

    // Open modal - hover first to show cursor
    const firstCard = await page.$('.cartao-prompt');
    const btnDetalhes = await firstCard.$('.btn-detalhes');
    await btnDetalhes.hover();
    await page.waitForTimeout(500);
    await btnDetalhes.click();
    await page.waitForTimeout(3000);

    // Scroll in modal to show content
    await page.hover('.modal-corpo');
    await page.mouse.wheel(0, 300);
    await page.waitForTimeout(1000);
    await page.mouse.wheel(0, -300);
    await page.waitForTimeout(1000);

    // Close modal
    await page.hover('.btn-fechar');
    await page.waitForTimeout(500);
    await page.click('.btn-fechar');
    await page.waitForTimeout(1500);

    // Show category filter
    await page.hover('#categoria');
    await page.waitForTimeout(500);
    await page.selectOption('#categoria', { index: 1 });
    await page.waitForTimeout(2000);

    // Reset filter
    await page.selectOption('#categoria', { index: 0 });
    await page.waitForTimeout(1500);

    // Search for SQL
    await page.hover('#busca');
    await page.waitForTimeout(300);
    await page.type('#busca', 'SQL', { delay: 100 });
    await page.waitForTimeout(2000);

    // Clear again
    await page.click('#busca', { clickCount: 3 });
    await page.waitForTimeout(300);
    await page.press('#busca', 'Backspace');
    await page.waitForTimeout(1500);

    // Final pause
    await page.waitForTimeout(2000);

  } finally {
    await context.close();
    await browser.close();
  }

  console.log('Video recorded. Converting to GIF...');

  // Find the recorded video file
  const videoFiles = fs.readdirSync(videoDir).filter(f => f.endsWith('.webm'));
  if (videoFiles.length === 0) {
    throw new Error('No video file found');
  }
  const videoFile = path.join(videoDir, videoFiles[0]);
  console.log('Found video:', videoFile);

  // Convert to GIF with ffmpeg using palette for quality
  // 10-20 seconds, max 8MB
  try {
    execSync(`ffmpeg -y -i "${videoFile}" -vf "fps=15,scale=1280:-1:flags=lanczos,palettegen=stats_mode=diff" -y docs/palette.png`, { stdio: 'inherit' });
    execSync(`ffmpeg -y -i "${videoFile}" -i docs/palette.png -lavfi "fps=15,scale=1280:-1:flags=lanczos [x]; [x][1:v] paletteuse=dither=bayer:bayer_scale=5" -loop 0 docs/demo.gif`, { stdio: 'inherit' });

    // Check file size
    const stats = fs.statSync('docs/demo.gif');
    console.log(`GIF size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);

    // Clean up
    fs.unlinkSync('docs/palette.png');
    fs.rmSync(videoDir, { recursive: true });

    console.log('Demo GIF created successfully!');
  } catch (e) {
    console.error('Failed to create GIF:', e.message);
    process.exit(1);
  }
}

recordDemoVideo().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});