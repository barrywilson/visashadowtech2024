import { test, expect } from '@playwright/test';

test('Clicking a button', async ({ page }) => {
  await page.goto('https://expert-orbit-r9pqq4g49436x7-3000.app.github.dev/'); // Replace with your actual URL

  // Locate the button using a suitable locator (e.g., by role, text, or selector)
  const button = page.getByRole('button', { name: 'Click me' }); // Adjust the locator as needed

  // Click the button
  await button.click();

  // You can add assertions to verify the button's behavior and the resulting page state
  // For example, if clicking the button navigates to a different page, you can assert the URL:
  await expect(page).toHaveURL('https://new-page-url'); // Replace with the expected URL
});

