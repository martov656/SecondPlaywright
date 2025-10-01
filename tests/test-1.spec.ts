import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://div.cz/');

  await page.getByRole('searchbox', { name: 'Vyhledávání' }).click();
  await page.getByRole('searchbox', { name: 'Vyhledávání' }).fill('Šílený Max: Zběsilá cesta');
  await page.getByRole('searchbox', { name: 'Vyhledávání' }).press('Enter');
  await page.getByText('Šílený Max: Zběsilá cesta', { exact: true }).click();
  await expect(page.locator('h2')).toContainText('Šílený Max: Zběsilá cesta');

const link = page.getByRole('link', { name: 'Hrají' });

// čekáme, až bude prvek viditelný
await link.waitFor({ state: 'visible', timeout: 15000 });

// posuneme do view (Firefox někdy potřebuje explicitní scroll)
await link.scrollIntoViewIfNeeded();

// klikneme na prvek
await link.click();

// nyní čekáme na odkaz "Charlize Theron"
const charlizeLink = page.getByRole('heading', { name: 'Charlize Theron' }).getByRole('link');
await expect(charlizeLink).toBeVisible({ timeout: 15000 });
await charlizeLink.click();

// kontrola výsledného textu
await expect(page.locator('h2')).toContainText('Charlize Theron', { timeout: 15000 });
});




test('test2', async ({ page }) => {
  await page.goto('https://div.cz/');

    await page.getByRole('searchbox', { name: 'Vyhledávání' }).click();
  await page.getByRole('searchbox', { name: 'Vyhledávání' }).fill('Šílený Max: Zběsilá cesta');
  await page.getByRole('searchbox', { name: 'Vyhledávání' }).press('Enter');
  await expect(page.locator('h2')).toContainText('Šílený Max: Zběsilá cesta');

 
  await page.getByText('Šílený Max: Zběsilá cesta', { exact: true }).click();


  await page.getByRole('link', { name: 'Šílený Max (1979)' }).click();
 await expect(page.locator('h2')).toContainText('Šílený Max');
 
  await page.getByRole('link', { name: 'Trailer' }).click();

  

});


test('test3', async ({ page }) => {
  await page.goto('https://div.cz/');

    await page.getByRole('searchbox', { name: 'Vyhledávání' }).click();
  await page.getByRole('searchbox', { name: 'Vyhledávání' }).fill('Šílený Max 2: Bojovník silnic');
  await page.getByRole('searchbox', { name: 'Vyhledávání' }).press('Enter');
  await expect(page.locator('h2')).toContainText('Šílený Max 2: Bojovník silnic');

 
  await page.getByText('Šílený Max 2: Bojovník silnic', { exact: true }).click();

await page.getByRole('link', { name: 'Mel Gibson' }).waitFor({ state: 'visible', timeout: 12000 });
await page.getByRole('link', { name: 'Mel Gibson' }).click();
await expect(page.locator('h2')).toContainText('Mel Gibson');
await page.getByRole('link', { name: 'Miliónový hurikán' }).click();
await expect(page.locator('h2')).toContainText('Miliónový hurikán', { timeout: 15000 });
  
  

});

test('testallien', async ({ page }) => {
  await page.goto('https://div.cz/');

    await page.getByRole('searchbox', { name: 'Vyhledávání' }).click();
  await page.getByRole('searchbox', { name: 'Vyhledávání' }).fill('Vetřelec');
  await page.getByRole('searchbox', { name: 'Vyhledávání' }).press('Enter');
  await expect(page.locator('h2')).toContainText('Vetřelec');

 
  await page.getByText('Vetřelec', { exact: true }).click();


await page.getByRole('link', { name: 'Sigourney Weaver' }).first().click();

await expect(page.locator('h2')).toContainText('Sigourney Weaver');
await page.getByRole('link', { name: 'Avatar: The Way of Water' }).click();
await expect(page.locator('h2')).toContainText('Avatar: The Way of Water');
  
  

});

test('testReese', async ({ page }) => {
  await page.goto('https://div.cz/');

    await page.getByRole('searchbox', { name: 'Vyhledávání' }).click();
  await page.getByRole('searchbox', { name: 'Vyhledávání' }).fill('Srdečně vás zveme');
  await page.getByRole('searchbox', { name: 'Vyhledávání' }).press('Enter');
  await expect(page.locator('h2')).toContainText('Srdečně vás zveme');

 
  await page.getByText('Srdečně vás zveme', { exact: true }).click();

await page.getByRole('link', { name: 'Reese Witherspoon' }).click({ timeout: 12000 });
await expect(page.locator('h2')).toContainText('Reese Witherspoon');
await page.getByRole('link', { name: 'U tebe nebo u mě' }).click();
await expect(page.locator('h2')).toContainText('U tebe nebo u mě');
  
  
});


test('testkate', async ({ page }) => {
  await page.goto('https://div.cz/');

    await page.getByRole('searchbox', { name: 'Vyhledávání' }).click();
  await page.getByRole('searchbox', { name: 'Vyhledávání' }).fill('Lee: Fotografka v první linii');
  await page.getByRole('searchbox', { name: 'Vyhledávání' }).press('Enter');
  await expect(page.locator('h2')).toContainText('Lee: Fotografka v první linii');

 
  await page.getByText('Lee: Fotografka v první linii', { exact: true }).click();

await page.getByRole('link', { name: 'Kate Winslet' }).click({ timeout: 12000 });
await expect(page.locator('h2')).toContainText('Kate Winslet');

  
  
});

test('tesclint2t', async ({ page }) => {
 
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('https://www.csfd.cz/');

  const cookieButton = page.getByRole('button', { name: 'Souhlasit a zavřít: Souhlasit' });
  if (await cookieButton.isVisible()) await cookieButton.click();

  await page.getByRole('combobox', { name: 'Vyhledávání' }).fill('Clint Eastwood');
  await page.getByRole('button').filter({ hasText: 'Hledat' }).click();

  const personLink = page.getByRole('heading', { name: 'Clint Eastwood', exact: true }).getByRole('link');
  await personLink.click();
  await expect(page.locator('h1')).toContainText('Clint Eastwood');

  await page.getByRole('link', { name: 'Pašerák' }).first().click();
  await expect(page.locator('h1')).toContainText('Pašerák');
});

test('CSFD test - Pravá blondýnka', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('https://www.csfd.cz/');

  const cookieButton = page.getByRole('button', { name: 'Souhlasit a zavřít: Souhlasit' });
  if (await cookieButton.isVisible()) await cookieButton.click();

  await page.getByRole('combobox', { name: 'Vyhledávání' }).fill('Reese Witherspoon');
  await page.getByRole('button').filter({ hasText: 'Hledat' }).click();

  const personLink = page.getByRole('heading', { name: 'Reese Witherspoon', exact: true }).getByRole('link');
  await personLink.click();
  await expect(page.locator('h1')).toContainText('Reese Witherspoon');

  await page.getByRole('link', { name: 'Srdečně vás zveme' }).first().click();
  await expect(page.locator('h1')).toContainText('Srdečně vás zveme');
});

test('CSFD test - Forrest Gump', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('https://www.csfd.cz/');

  const cookieButton = page.getByRole('button', { name: 'Souhlasit a zavřít: Souhlasit' });
  if (await cookieButton.isVisible()) await cookieButton.click();

  await page.getByRole('combobox', { name: 'Vyhledávání' }).fill('Tom Hanks');
  await page.getByRole('button').filter({ hasText: 'Hledat' }).click();

  const personLink = page.getByRole('heading', { name: 'Tom Hanks', exact: true }).getByRole('link');
  await personLink.click();
  await expect(page.locator('h1')).toContainText('Tom Hanks');

  await page.getByRole('link', { name: 'Forrest Gump' }).first().click();
  await expect(page.locator('h1')).toContainText('Forrest Gump');
});

test('testreesew', async ({ page }) => {
   await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('https://www.themoviedb.org/');
  await page.getByPlaceholder('Search for a movie, tv show, person...', { exact: true }).click();
   await page.getByPlaceholder('Search for a movie, tv show, person...', { exact: true }).fill('Reese Witherspoon');
    await page.getByText('Reese Witherspoon in People').click();
   await page.getByText('Reese Witherspoon', { exact: true }).click();
 
  
  await page.getByRole('link', { name: 'Reese Witherspoon', exact: true }).click();
  await expect(page.locator('#media_v4')).toContainText('Reese Witherspoon');
 
 
  await page.getByRole('listitem').filter({ hasText: 'This Means War' }).locator('div').getByRole('link').click();
  await page.getByRole('link', { name: 'This Means War' }).click();
  await expect(page.locator('#original_header')).toContainText('This Means War');

  await page.locator('#media_scroller').getByRole('link').click();


  await page.getByRole('dialog', { name: 'This Means War (2012) Trailer' }).locator('iframe').contentFrame().locator('video').click();
});

test('Reese Witherspoon Known For proklik2', async ({ page }) => {
  
  await page.goto('https://www.themoviedb.org/');

  // Vyhledání herečky
  await page.getByPlaceholder('Search for a movie, tv show, person...', { exact: true }).click();
  await page.getByPlaceholder('Search for a movie, tv show, person...', { exact: true }).fill('Reese Witherspoon');
  await page.getByText('Reese Witherspoon in People').click();

  // Kliknutí na samotnou herečku
  await page.getByText('Reese Witherspoon', { exact: true }).click();
  await expect(page.locator('#media_v4')).toContainText('Reese Witherspoon');


 await page.getByRole('listitem').filter({ hasText: 'Legally Blonde' }).locator('div').getByRole('link').click();


 await page.getByRole('link', { name: 'Search' }).click();
 await page.getByPlaceholder('Search for a movie, tv show,').fill('This means War!');
 await page.getByText('in Movies').click();
 await expect(page.locator('#main')).toContainText('This Means War');
 await page.locator('a').filter({ hasText: /^This Means War$/ }).click();
 await expect(page.locator('#original_header')).toContainText('This Means War');
 await page.getByText('Reese Witherspoon').click();
 await expect(page.locator('#media_v4')).toContainText('Reese Witherspoon');


});


test('testclint', async ({ page }) => {
 
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('https://www.csfd.cz/');

  const cookieButton = page.getByRole('button', { name: 'Souhlasit a zavřít: Souhlasit' });
  if (await cookieButton.isVisible()) await cookieButton.click();

  await page.getByRole('combobox', { name: 'Vyhledávání' }).fill('Clint Eastwood');
  await page.getByRole('button').filter({ hasText: 'Hledat' }).click();

  const personLink = page.getByRole('heading', { name: 'Clint Eastwood', exact: true }).getByRole('link');
  await personLink.click();
  await expect(page.locator('h1')).toContainText('Clint Eastwood');

  await page.getByRole('link', { name: 'Pašerák' }).first().click();
  await expect(page.locator('h1')).toContainText('Pašerák');
});

test('CSFD test - Pravá blondýnkareese', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('https://www.csfd.cz/');

  const cookieButton = page.getByRole('button', { name: 'Souhlasit a zavřít: Souhlasit' });
  if (await cookieButton.isVisible()) await cookieButton.click();

  await page.getByRole('combobox', { name: 'Vyhledávání' }).fill('Reese Witherspoon');
  await page.getByRole('button').filter({ hasText: 'Hledat' }).click();

  const personLink = page.getByRole('heading', { name: 'Reese Witherspoon', exact: true }).getByRole('link');
  await personLink.click();
  await expect(page.locator('h1')).toContainText('Reese Witherspoon');

  await page.getByRole('link', { name: 'Srdečně vás zveme' }).first().click();
  await expect(page.locator('h1')).toContainText('Srdečně vás zveme');
});

test('CSFD test - Forrest Gumptom', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('https://www.csfd.cz/');

  const cookieButton = page.getByRole('button', { name: 'Souhlasit a zavřít: Souhlasit' });
  if (await cookieButton.isVisible()) await cookieButton.click();

  await page.getByRole('combobox', { name: 'Vyhledávání' }).fill('Tom Hanks');
  await page.getByRole('button').filter({ hasText: 'Hledat' }).click();

  const personLink = page.getByRole('heading', { name: 'Tom Hanks', exact: true }).getByRole('link');
  await personLink.click();
  await expect(page.locator('h1')).toContainText('Tom Hanks');

  await page.getByRole('link', { name: 'Forrest Gump' }).first().click();
  await expect(page.locator('h1')).toContainText('Forrest Gump');
});


test('testkatetmdb', async ({ page }) => {
  await page.goto('https://div.cz/');

    await page.getByRole('searchbox', { name: 'Vyhledávání' }).click();
  await page.getByRole('searchbox', { name: 'Vyhledávání' }).fill('Lee: Fotografka v první linii');
  await page.getByRole('searchbox', { name: 'Vyhledávání' }).press('Enter');
  await expect(page.locator('h2')).toContainText('Lee: Fotografka v první linii');

 
  await page.getByText('Lee: Fotografka v první linii', { exact: true }).click();

await page.getByRole('link', { name: 'Kate Winslet' }).click({ timeout: 12000 });
await expect(page.locator('h2')).toContainText('Kate Winslet');

  await page.getByRole('link', { name: 'Hora mezi námi' }).click();
  await expect(page.locator('h2')).toContainText('Hora mezi námi');
  await page.getByRole('link', { name: 'tmdb.org' }).click();
  await expect(page.locator('h2')).toContainText('The Mountain Between Us');
  await page.getByText('Kate Winslet').click();
 
  await expect(page.locator('#media_v4')).toContainText('Kate Winslet');
  
});

test('testscarktmdb', async ({ page }) => {
  await page.goto('https://div.cz/');

    await page.getByRole('searchbox', { name: 'Vyhledávání' }).click();
  await page.getByRole('searchbox', { name: 'Vyhledávání' }).fill('Black Widow');
  await page.getByRole('searchbox', { name: 'Vyhledávání' }).press('Enter');
  await expect(page.locator('h2')).toContainText('Black Widow');

 
  await page.getByText('Black Widow', { exact: true }).click();

  await page.getByRole('link', { name: 'Scarlett Johansson' }).first().click();
  await expect(page.locator('h2')).toContainText('Scarlett Johansson');
  await page.getByRole('link', { name: 'Jurský svět: Znovuzrození' }).click();
  await expect(page.locator('h2')).toContainText('Jurský svět: Znovuzrození');
  await page.getByRole('link', { name: 'tmdb.org' }).click();
  await expect(page.locator('#original_header')).toContainText('Jurassic World Rebirth');
  await page.getByText('Scarlett Johansson').click();
  await expect(page.locator('#media_v4')).toContainText('Scarlett Johansson');


  
});








  


