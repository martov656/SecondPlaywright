import { test, expect } from '@playwright/test';



test('testp', async ({ page }) => {
  await page.goto('https://dabingforum.cz/');
  
  await page.getByRole('button', { name: 'Do not consent' }).click();
  await page.getByRole('searchbox', { name: 'Hledat klíčová slova' }).click();
  await page.getByRole('searchbox', { name: 'Hledat klíčová slova' }).fill('Star Trek');
  await page.getByText('Star Trek: Podivné nové světy').click();
  await expect(page.locator('h2')).toContainText('Star Trek: Podivné nové světy / Star Trek: Strange New Worlds');
  await page.getByRole('link', { name: 'Terezie Taberyová' }).first().click();
  await expect(page.locator('h2')).toContainText('Terezie Taberyová');


});

test('testmegan', async ({ page }) => {
  await page.goto('https://dabingforum.cz/');
  
  await page.getByRole('button', { name: 'Do not consent' }).click();
  await page.getByRole('searchbox', { name: 'Hledat klíčová slova' }).click();
  await page.getByRole('searchbox', { name: 'Hledat klíčová slova' }).fill('Megan Fox');
  
await page.getByText('Megan Fox').click();
await expect(page.locator('h2')).toContainText('Megan Fox');
await page.locator('#post_content16408').getByRole('link', { name: 'Anna Suchánková' }).click();
await expect(page.locator('h2')).toContainText('Anna Theimerová');
await expect(page.locator('h2')).toContainText('Anna Theimerová');

});

test('testmeg', async ({ page }) => {
  await page.goto('https://dabingforum.cz/');
  
  await page.getByRole('button', { name: 'Do not consent' }).click();
  await page.getByRole('searchbox', { name: 'Hledat klíčová slova' }).click();
  await page.getByRole('searchbox', { name: 'Hledat klíčová slova' }).fill('Transformers');
  await page.getByRole('button', { name: 'Hledat' }).click();
  await page.getByRole('button', { name: '2' }).nth(1).click();
  await page.getByRole('button', { name: '3' }).nth(1).click();
  await page.getByRole('link', { name: 'Transformers: Poslední rytíř' }).click();
  await expect(page.locator('h2')).toContainText('Transformers: Poslední rytíř / Transformers: The Last Knight');
  await page.getByRole('link', { name: 'Mark Wahlberg' }).click();
  await expect(page.locator('h2')).toContainText('Mark Wahlberg');

});



test('testtr', async ({ page }) => {
  await page.goto('https://dabingforum.cz/');
  
  await page.getByRole('button', { name: 'Do not consent' }).click();
  await page.getByRole('searchbox', { name: 'Hledat klíčová slova' }).click();
  await page.getByRole('searchbox', { name: 'Hledat klíčová slova' }).fill('Transformers');

await page.getByRole('button', { name: 'Hledat' }).click();

await page.getByRole('searchbox', { name: 'Hledat klíčová slova' }).press('Enter');
await page.locator('#page-header').getByRole('button', { name: 'Hledat' }).click();
await page.getByRole('button', { name: '4', exact: true }).nth(1).click();
await page.getByRole('link', { name: 'Re: Transformers /' }).click();
await page.getByRole('link', { name: 'Transformers / Transformers', exact: true }).click();
await page.getByRole('button', { name: '1' }).nth(1).click();
await expect(page.locator('h2')).toContainText('Transformers / Transformers');
await page.getByRole('link', { name: 'Megan Fox' }).first().click();
await expect(page.locator('h2')).toContainText('Megan Fox');
});


test('testford', async ({ page }) => {
  await page.goto('https://dabingforum.cz/');
  
  await page.getByRole('button', { name: 'Do not consent' }).click();


await page.getByRole('searchbox', { name: 'Hledat klíčová slova' }).click();
await page.getByRole('searchbox', { name: 'Hledat klíčová slova' }).fill('Harrison Ford');
await page.locator('#profile-suggestions').getByText('Harrison Ford').click();
await expect(page.locator('h2')).toContainText('Harrison Ford');


await page.locator('#post_content18702').getByRole('link', { name: 'Jiří Štěpnička' }).first().click();
await expect(page.locator('h2')).toContainText('Jiří Štěpnička');
await page.getByRole('link', { name: 'Zkrat' }).click();
await expect(page.locator('h2')).toContainText('Zkrat / Haywire');
await page.getByRole('link', { name: 'Gina Carano' }).click();
await expect(page.locator('h2')).toContainText('Gina Carano');

});

test('testformarg', async ({ page }) => {
  await page.goto('https://dabingforum.cz/');
  
  await page.getByRole('button', { name: 'Do not consent' }).click();


await page.getByRole('searchbox', { name: 'Hledat klíčová slova' }).click();
await page.getByRole('searchbox', { name: 'Hledat klíčová slova' }).fill('Margot Robbie');
await page.locator('#profile-suggestions').getByText('Margot Robbie').click();
await expect(page.locator('h2')).toContainText('Margot Robbie');

await page.getByRole('link', { name: 'Jolana Smyčková' }).first().click();
await expect(page.locator('h2')).toContainText('Jolana Smyčková');
await page.getByRole('link', { name: 'Konečná' }).click();
await expect(page.locator('h2')).toContainText('Konečná / Terminal');
await page.getByRole('link', { name: 'Margot Robbie' }).nth(1).click();
await expect(page.locator('h2')).toContainText('Margot Robbie');
await expect(page.getByRole('img', { name: 'Obrázek' })).toBeVisible();


});


test('testformargkate', async ({ page }) => {
  await page.goto('https://dabingforum.cz/');
  
  await page.getByRole('button', { name: 'Do not consent' }).click();


await page.getByRole('searchbox', { name: 'Hledat klíčová slova' }).click();
await page.getByRole('searchbox', { name: 'Hledat klíčová slova' }).fill('Kate Beckinsale');
await page.locator('#profile-suggestions').getByText('Kate Beckinsale').click();
await expect(page.locator('h2')).toContainText('Kate Beckinsale');



await page.getByRole('link', { name: 'Vladimíra Včelná' }).click();
await page.getByRole('link', { name: 'Lásce na stopě' }).click();
await expect(page.locator('h2')).toContainText('Lásce na stopě / Serendipity');
await page.getByRole('link', { name: ':Kate Beckinsale' }).first().click();
await expect(page.locator('h2')).toContainText('Kate Beckinsale');

});







