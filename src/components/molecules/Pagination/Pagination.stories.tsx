import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Pagination from "./Pagination";
import { useArgs } from "@storybook/client-api";

const paginationMocks = {
  oneToFive: {
    count: 5,
    page: 1,
  },
  oneToTen: {
    count: 10,
    page: 1,
    boundaryCount: 1,
    siblingCount: 0,
  },
  aboveTen: {
    count: 40,
    page: 20,
    boundaryCount: 1,
    siblingCount: 0,
  },
};

export default {
  title: "Components/molecules/Pagination",
  args: paginationMocks.oneToFive,
  argTypes: {
    count: {
      control: false,
    },
    boundaryCount: {
      control: false,
    },
    siblingCount: {
      control: false,
    },
    components: {
      control: false,
    },
  },
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => {
  const { onChange, ...rest } = args;
  const [, updateArgs] = useArgs();

  const handleOnChange = (
    _event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    updateArgs({ page: newPage });
    onChange?.(_event, newPage);
  };

  return <Pagination onChange={handleOnChange} {...rest} />;
};

export const ForPages1_5 = Template.bind({});
ForPages1_5.args = { ...paginationMocks.oneToFive };
ForPages1_5.argTypes = {
  page: {
    control: {
      type: "radio",
      options: [1, 2, 3, 4, 5],
    },
  },
};

export const ForPages1_10 = Template.bind({});
ForPages1_10.args = { ...paginationMocks.oneToTen };
ForPages1_10.argTypes = {
  page: {
    control: {
      type: "radio",
      options: [1, 2, 3, 8, 9, 10],
    },
  },
};

export const ForPagesAbove10 = Template.bind({});
ForPagesAbove10.args = { ...paginationMocks.aboveTen };
ForPagesAbove10.argTypes = {
  page: {
    control: {
      type: "radio",
      options: [20, 21, 22, 38, 40],
    },
  },
};
