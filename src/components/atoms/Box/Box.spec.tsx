import { test, expect } from "@playwright/experimental-ct-react";
import Box from "./Box";

test("should be visible", async ({ mount }) => {
  const component = await mount(<Box />);
  await expect(component).toBeVisible();
});
