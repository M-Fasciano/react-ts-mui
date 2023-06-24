import React, { useState } from "react";
import { ComponentMeta } from "@storybook/react";

import Chip, { ChipProps } from "./Chip";
import { StyledChipWrapper } from "./Chip.style";

export default {
  title: "Components/atoms/Chip",
  component: Chip,
} as ComponentMeta<typeof Chip>;

export const Base = () => <Chip key={0} option={"Option 1"} />;

export const Disabled = () => <Chip key={0} option={"Option 1"} disabled />;

export const ChipList = () => {
  const filterOptions = ["Option 1", "Option 2", "Option 3"];

  const RenderChipList = () => {
    const [isActive, setIsActive] = useState<string[]>([]);

    const handleFilterSelection = (pill: string) => {
      if (isActive.includes(pill)) {
        setIsActive(isActive.filter((f) => f !== pill));
      } else {
        setIsActive([...isActive, pill]);
      }
    };
    return (
      <>
        {filterOptions.map((option, index) => (
          <Chip
            key={index}
            option={option}
            onClick={() => handleFilterSelection(option)}
            isActive={isActive.includes(option)}
          />
        ))}
      </>
    );
  };
  return <StyledChipWrapper>{RenderChipList()}</StyledChipWrapper>;
};

export const ChipListDelete = () => {
  const RenderChipListDelete = () => {
    const [chipData, setChipData] = useState<readonly ChipProps[]>([
      { key: 0, option: "Option 1" },
      { key: 1, option: "Option 2" },
      { key: 2, option: "Option 3" },
    ]);

    const handleDelete = (chipToDelete: ChipProps) => () => {
      setChipData((chips) =>
        chips.filter((chip) => chip.key !== chipToDelete.key)
      );
    };

    return (
      <>
        {chipData.map((option, index) => (
          <Chip
            key={index}
            option={option.option}
            onDelete={handleDelete(option)}
          />
        ))}
      </>
    );
  };
  return <StyledChipWrapper>{RenderChipListDelete()}</StyledChipWrapper>;
};
