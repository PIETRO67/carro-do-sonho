import { defineConfig } from '@playwright/test';
const port = process.env.TEST_PORT || '3000';
export default defineConfig({ testDir: './tests/e2e', fullyParallel: false, use: { baseURL: `http://127.0.0.1:${port}`, trace: 'retain-on-failure' }, webServer: process.env.TEST_EXTERNAL_SERVER ? undefined : { command: `node node_modules/next/dist/bin/next start -p ${port}`, url: `http://127.0.0.1:${port}/para-revendas`, reuseExistingServer: !process.env.CI, timeout: 90000 }, reporter: 'list' });
