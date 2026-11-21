import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  webServer: {
    command: 'python3 -m http.server 8081',
    url: 'http://localhost:8081/',
    reuseExistingServer: true
  }
});
