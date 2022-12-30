import { test, expect } from "@playwright/experimental-ct-react";
import Button from "../../atoms/Button";

test("event should work", async ({ mount, page }) => {
  let clicked = false;

  // Mount a component. Returns locator pointing to the component.
  const component = await mount(
    <Button label="Sign in" onClick={() => (clicked = true)} type={"submit"} />
  );

  // As with any Playwright test, assert locator text.
  await expect(component).toContainText("Sign in");

  // Perform locator click. This will trigger the event.
  await component.click();

  // On first execution, Playwright test will generate reference screenshots.
  await page.goto("http://localhost:3000/login");
  await expect(page).toHaveScreenshot();

  // Assert that respective events have been fired.
  expect(clicked).toBeTruthy();
});
