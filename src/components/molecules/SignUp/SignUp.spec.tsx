import { test, expect } from "@playwright/experimental-ct-react";
import Button from "../../atoms/Button";

test("event should work", async ({ mount, page }) => {
  let clicked = false;

  // Mount a component. Returns locator pointing to the component.
  const component = await mount(
    <Button label="Sign up" onClick={() => (clicked = true)} type={"submit"} />
  );

  // As with any Playwright test, assert locator text.
  await expect(component).toContainText("Submit");

  // Perform locator click. This will trigger the event.
  await component.click();

  // Assert that respective events have been fired.
  expect(clicked).toBeTruthy();
});
