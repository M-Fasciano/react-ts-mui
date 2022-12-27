import { test, expect } from "@playwright/test";

test("navigation login", async ({ page }) => {
  await page.goto("http://localhost:3000/login");
  // Expects the URL to contain login.
  await expect(page).toHaveURL("http://localhost:3000/login");
});

test("navigation video", async ({ page }) => {
  await page.goto("http://localhost:3000/video");
  // Expects the URL to contain video.
  await expect(page).toHaveURL("http://localhost:3000/video");
});

test("navigation layout", async ({ page }) => {
  await page.goto("http://localhost:3000/layout");
  // Expects the URL to contain layout.
  await expect(page).toHaveURL("http://localhost:3000/layout");
});
