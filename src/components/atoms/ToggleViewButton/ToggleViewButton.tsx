import { ButtonProps } from "../../pages/ToggleLayout";
import { StyledButtonWrapper } from "./ToggleViewButton.style";

function ToggleViewButton(props: ButtonProps) {
  const { selected, handleToggle } = props;

  return (
    <StyledButtonWrapper>
      <button onClick={handleToggle} className={selected ? "active" : ""}>
        grid
      </button>
      <button onClick={handleToggle} className={selected ? "" : "active"}>
        list
      </button>
    </StyledButtonWrapper>
  );
}

export default ToggleViewButton;
