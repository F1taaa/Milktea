import { test, expect } from '@playwright/test';

test('verify home page', async ({ page }) => {
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));

  await page.goto('http://localhost:5173/');
  await page.waitForSelector('nav', { timeout: 10000 });

  // Scroll down slowly to trigger animations
  await page.evaluate(async () => {
    for (let i = 0; i < document.body.scrollHeight; i += 100) {
      window.scrollTo(0, i);
      await new Promise(resolve => setTimeout(resolve, 50));
    }
  });

  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'home_page_final.png', fullPage: true });
});

test('verify menu page', async ({ page }) => {
  await page.goto('http://localhost:5173/menu');
  await page.waitForSelector('nav');
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'menu_page_final.png', fullPage: true });
});

test('verify mobile view', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('http://localhost:5173/');
  await page.waitForSelector('nav');

  // Open mobile menu
  const menuButton = page.locator('button:has(svg.lucide-menu)');
  await menuButton.click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'mobile_menu_open.png' });

  // Close menu and scroll
  const closeButton = page.locator('button:has(svg.lucide-x)');
  await closeButton.click();
  await page.waitForTimeout(500);

  await page.evaluate(async () => {
    for (let i = 0; i < 2000; i += 100) {
      window.scrollTo(0, i);
      await new Promise(resolve => setTimeout(resolve, 50));
    }
  });

  await page.screenshot({ path: 'home_page_mobile.png' });
});

test('verify about page', async ({ page }) => {
  await page.goto('http://localhost:5173/about');
  await page.waitForSelector('nav');
  await page.screenshot({ path: 'about_page.png', fullPage: true });
});

test('verify contact page', async ({ page }) => {
  await page.goto('http://localhost:5173/contact');
  await page.waitForSelector('nav');
  await page.screenshot({ path: 'contact_page.png', fullPage: true });
});
