import styled from "styled-components";

export const StyledButtonWrapper = styled("div")`
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  padding: 0 2rem;
  width: 100%;

  button {
    border: 0;
    background-color: transparent;
    padding: 0;

    &.active {
      svg {
        path {
          fill: #000f42;
        }
      }
    }
  }
`;
