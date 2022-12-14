import { Button as MUIButton, styled } from "@mui/material";

export const StyledButton = styled(MUIButton)`
  &.storybook-button {
    align-self: flex-start;
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 1rem;
    border: 0;
    border-radius: 8px;
    cursor: pointer;
    display: inline-block;
    line-height: 48px;
    padding: 0 24px;
    transition: 0.3s background-color ease-in-out;
    text-transform: none;

    &:hover {
      background-color: #345ff2;
    }

    &--primary {
      color: white;
      background-color: #0137ef;
    }

    &--secondary {
      color: #333;
      background-color: transparent;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
    }
  }
`;
