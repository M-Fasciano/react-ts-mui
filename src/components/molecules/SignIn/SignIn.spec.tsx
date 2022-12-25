import { test, expect } from "@playwright/experimental-ct-react";
import Button from "../../atoms/Button";

test("event should work", async ({ mount }) => {
  let clicked = false;

  // Mount a component. Returns locator pointing to the component.
  const component = await mount(
    <Button label="Sign in" onClick={() => (clicked = true)} type={"submit"} />
  );

  // As with any Playwright test, assert locator text.
  await expect(component).toContainText("Sign in");

  // Perform locator click. This will trigger the event.
  await component.click();

  // Assert that respective events have been fired.
  expect(clicked).toBeTruthy();
});
