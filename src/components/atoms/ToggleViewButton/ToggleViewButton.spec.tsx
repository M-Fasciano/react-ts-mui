import { test, expect } from "@playwright/experimental-ct-react";

// Run tests in this describe block with portrait-like viewport.
test.use({ viewport: { width: 600, height: 900 } });

test("my portrait test", async ({ mount }) => {
  let clicked = false;

  // Mount a component. Returns locator pointing to the component.
  const component = await mount(<button onClick={() => (clicked = true)} />);

  // Perform locator click. This will trigger the event.
  await component.click();

  // Assert that respective events have been fired.
  expect(clicked).toBeTruthy();
});
