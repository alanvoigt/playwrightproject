import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  // Go to https://todomvc.com/
  await page.goto('https://todomvc.com/');
  // Click text=Blog
  await page.click('text=Blog');
  await expect(page).toHaveURL('https://medium.com/@tastejs');
  // Click text=About
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://medium.com/@tastejs/about' }*/),
    page.click('text=About')
  ]);
  // Click text=1.4K Followers
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://medium.com/@tastejs/followers' }*/),
    page.click('text=1.4K Followers')
  ]);
});