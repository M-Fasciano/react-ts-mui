import { StyledButton } from "./Button.style";
import { ButtonProps } from "./Button.types";

/**
 * Primary UI component for user interaction
 */
const Button = ({
  primary = false,
  backgroundColor,
  label,
  type,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <StyledButton
      type={type}
      className={["storybook-button", mode].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
