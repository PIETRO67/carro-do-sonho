import { test, expect } from '@playwright/test';
test('rotas comerciais e destinos existentes', async ({ page }) => {
  for (const path of ['', '/funcionalidades', '/demonstracao', '/duvidas', '/comunidade', '/contato', '/privacidade', '/termos']) {
    const response = await page.goto(`/para-revendas${path}`); expect(response?.status()).toBe(200); await expect(page.locator('h1')).toHaveCount(1);
  }
  await expect(page.getByRole('link', { name: 'Acessar sistema', exact: true }).first()).toHaveAttribute('href', 'https://carrodosonho.com.br/admin');
});
test('abas com teclado, accordion e busca sem acentos', async ({ page }) => {
  await page.goto('/para-revendas'); const tab = page.getByRole('tab', { name: 'Pátio e avaliação' }); await tab.focus(); await page.keyboard.press('ArrowRight'); await expect(page.getByRole('tab', { name: 'Fiscal e RENAVE' })).toHaveAttribute('aria-selected', 'true'); await expect(page.getByRole('tabpanel')).toContainText('A documentação acompanha');
  await page.goto('/para-revendas/duvidas'); await page.getByRole('searchbox').fill('certificado'); await expect(page.getByRole('status')).toContainText('dúvidas encontradas'); const first = page.locator('.faq-item button').first(); await first.click(); await expect(first).toHaveAttribute('aria-expanded', 'true');
});
test('formulário valida e não inventa sucesso sem destino', async ({ page }) => {
  await page.goto('/para-revendas/demonstracao'); await page.getByRole('button', { name: 'Solicitar demonstração', exact: true }).click(); await expect(page.getByText('Informe seu nome.', { exact: true })).toBeVisible();
  await page.getByLabel('Seu nome').fill('Pessoa de teste'); await page.getByLabel('Nome da revenda').fill('Revenda teste'); await page.getByLabel('WhatsApp com DDD').fill('62999991234'); await page.getByRole('checkbox').check(); await page.getByRole('button', { name: 'Solicitar demonstração', exact: true }).click(); await expect(page.locator('.form-message[role="alert"]')).toContainText('Nenhum dado foi enviado ou salvo');
});
test('showroom tem detalhes acessíveis e comunidade vazia', async ({ page }) => {
  await page.goto('/para-revendas/demonstracao'); await page.getByRole('button', { name: /03.*Acompanhar/ }).click(); await page.getByRole('button', { name: 'Avançar' }).click(); await page.getByRole('button', { name: 'Avançar' }).click(); await expect(page.locator('.demo-body')).toContainText('Resultado por veículo'); await expect(page.getByRole('button', { name: 'Avançar' })).toBeDisabled(); await page.getByRole('button', { name: 'Voltar' }).click(); await expect(page.locator('.demo-body')).toContainText('Leads e negociação'); await page.getByRole('button', { name: 'Ampliar detalhes do passo' }).click(); await expect(page.getByRole('dialog')).toBeVisible(); await page.keyboard.press('Escape'); await expect(page.getByRole('dialog')).not.toBeVisible();
  await page.goto('/para-revendas/comunidade'); await expect(page.getByRole('button', { name: 'Criar tópico' })).toBeDisabled(); await page.getByRole('button', { name: 'Resolvidos', exact: true }).click(); await expect(page.getByRole('status')).toContainText('Este espaço está começando');
});
for (const width of [360, 390, 768, 1024, 1440]) test(`responsividade e navegação em ${width}px`, async ({ page }) => {
  await page.setViewportSize({ width, height: 900 });
  for (const path of ['', '/funcionalidades', '/demonstracao', '/duvidas', '/comunidade', '/contato']) { await page.goto(`/para-revendas${path}`); expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBeTruthy(); }
  await page.goto('/para-revendas'); if (width <= 1024) { await page.getByRole('button', { name: 'Abrir menu' }).click(); await expect(page.getByRole('button', { name: 'Fechar menu' })).toHaveAttribute('aria-expanded', 'true'); await page.keyboard.press('Escape'); await expect(page.getByRole('button', { name: 'Abrir menu' })).toHaveAttribute('aria-expanded', 'false'); }
  await page.screenshot({ path: `artifacts/home-${width}.png`, fullPage: true });
});
test('API rejeita origem e valida dados no servidor', async ({ request, baseURL }) => {
  const blocked = await request.post('/para-revendas/api/leads', { data: {} }); expect(blocked.status()).toBe(403);
  const invalid = await request.post('/para-revendas/api/leads', { headers: { origin: baseURL! }, data: {} }); expect(invalid.status()).toBe(422);
  const unconfigured = await request.post('/para-revendas/api/leads', { headers: { origin: baseURL! }, data: { name: 'Teste', dealership: 'Revenda teste', phone: '62999991234', consent: true } }); expect(unconfigured.status()).toBe(503);
});
test('comparação, nove etapas e documentação respondem às escolhas', async ({ page }) => {
  await page.goto('/para-revendas');
  await page.getByRole('button', { name: 'Antes', exact: true }).click();
  await expect(page.locator('.comparison-caption')).toContainText('FRAGMENTADO');
  await expect(page.locator('.comparison-node').first()).toContainText('Planilhas separadas');
  await page.getByRole('button', { name: 'Com Carro do Sonho' }).click();
  await expect(page.locator('.comparison-caption')).toContainText('CONECTADO');
  const stations = page.locator('.journey-stations button'); await expect(stations).toHaveCount(9);
  await stations.nth(2).click(); await expect(page.locator('.journey-scene')).toContainText('Entrada no RENAVE');
  await stations.nth(8).click(); await expect(page.locator('.journey-scene')).toContainText('Pós-venda');
  await expect(page.getByRole('button', { name: 'Próxima etapa', exact: true })).toBeDisabled();
  await page.locator('.compliance-selector').getByRole('button', { name: /Fiscal NF-e/ }).click();
  await expect(page.locator('.compliance-detail')).toContainText('Goiás');
  await page.locator('.compliance-selector').getByRole('button', { name: /Contratos e documentos/ }).click();
  await expect(page.locator('.compliance-detail')).toContainText('Portal do Contador');
});
test('imagem local carrega e movimento reduzido mantém leitura', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' }); await page.goto('/para-revendas');
  const photo = page.locator('.hero-photo img'); await expect(photo).toBeVisible();
  await expect.poll(() => photo.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)).toBeTruthy();
  expect(await photo.evaluate(img => getComputedStyle(img.parentElement!).animationName)).toBe('none');
  await expect(page.locator('h1')).toContainText('Mais controle');
});
