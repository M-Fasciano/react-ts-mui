import { addParameters } from "@storybook/react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const selectedViewports = {
  phone: {
    name: "Mobile",
    styles: {
      width: "375px",
      height: "667px",
    },
  },
  tablet: {
    name: "Tablet portrait",
    styles: {
      width: "600px",
      height: "1024px",
    },
  },
  tabletLarge: {
    name: "Tablet landscape",
    styles: {
      width: "1024px",
      height: "1336px",
    },
  },
  desktop: {
    name: "Desktop",
    styles: {
      width: "1440px",
      height: "900px",
    },
  },
  desktopLarge: {
    name: "Desktop large",
    styles: {
      width: "1920px",
      height: "1080px",
    },
  },
};

addParameters({
  viewport: {
    //viewports: INITIAL_VIEWPORTS, // newViewports would be an ViewportMap. (see below for examples)
    viewports: selectedViewports,
  },
  paddings: [
    { name: "Small", value: "16px" },
    { name: "Medium", value: "32px", default: true },
    { name: "Large", value: "64px" },
  ],
});
