import React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import Box from "./Box";

test("should be visible", async ({ mount }) => {
  const component = await mount(<Box children={undefined} />);
  await expect(component).toBeVisible();
});
