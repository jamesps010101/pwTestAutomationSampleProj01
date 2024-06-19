import { defineConfig, devices } from '@playwright/test';

require('dotenv').config();

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'https://www.saucedemo.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure'
  },

  projects: [
    {
      name: 'setup',
      testMatch: 'auth.setup.ts'
    },
    {
      name: 'chromium',
      use: { browserName: 'chromium', storageState: '.auth/user.json' },
      dependencies: ['setup'],
    },

    {
      name: 'firefox',
      use: { browserName: 'firefox', storageState: '.auth/user.json' },
      dependencies: ['setup'],
    },

    {
      name: 'webkit',
      use: { browserName: 'webkit', storageState: '.auth/user.json' },
      dependencies: ['setup'],
    },
  ],
});
