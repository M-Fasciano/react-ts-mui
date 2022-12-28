import { test, expect } from "@playwright/experimental-ct-react";

test("event should work", async ({ mount }) => {
  let clicked = false;

  // Mount a component. Returns locator pointing to the component.
  const component = await mount(<button onClick={() => (clicked = true)} />);

  // Perform locator click. This will trigger the event.
  await component.click();

  // Assert that respective events have been fired.
  expect(clicked).toBeTruthy();
});
