import React from "react";
import { useState } from "react";
import Box from "../atoms/Box";
import ToggleViewButton from "../atoms/ToggleViewButton";
import useMediaQuery from "../../hooks/useMediaQuery";
import styled from "styled-components";

const StyledWrapper = styled("div")`
  display: grid;
  margin: 2rem;
  gap: 16px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    grid-template-columns: repeat(3, 1fr);
  }

  &.active {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export type ButtonProps = {
  selected: boolean;
  handleToggle: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function ToggleLayout() {
  const isTablet = useMediaQuery("(min-width: 1024px)");
  const [selected, setSelected] = useState(true);

  const handleToggle = () => {
    setSelected(!selected);
  };

  return (
    <>
      {!isTablet ? (
        <ToggleViewButton selected={selected} handleToggle={handleToggle} />
      ) : (
        ""
      )}
      <StyledWrapper className={selected && !isTablet ? "active" : ""}>
        <Box children={undefined} />
        <Box children={undefined} />
        <Box children={undefined} />
        <Box children={undefined} />
        <Box children={undefined} />
        <Box children={undefined} />
        <Box children={undefined} />
        <Box children={undefined} />
        <Box children={undefined} />
      </StyledWrapper>
    </>
  );
}

export default ToggleLayout;
