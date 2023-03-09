import { ComponentStory, ComponentMeta } from "@storybook/react";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import useBreakpoints from "../../hooks/useBreakpoints";
import styled from "styled-components";

const copy = "The quick brown fox jumps over the lazy dog.";

const variantArr = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "caption",
] as Variant[];

const typographyList = (isMobile = false) => {
  return variantArr.map((item) => {
    return (
      <Stack spacing={1}>
        <Typography variant="body1">
          {isMobile ? "Mobile" : "Desktop"} {item}
        </Typography>
        <Typography variant={item}>{copy}</Typography>
      </Stack>
    );
  });
};

const StyledTypography = styled(Typography)(() => ({}));

export default {
  title: "Typography",
  component: StyledTypography,
} as ComponentMeta<typeof StyledTypography>;

const Template: ComponentStory<typeof StyledTypography> = () => {
  const { isMobile } = useBreakpoints();
  return <Stack spacing={16}>{typographyList(isMobile)}</Stack>;
};

export const Default = Template.bind({});
Default.args = {
  children: typographyList(),
};
