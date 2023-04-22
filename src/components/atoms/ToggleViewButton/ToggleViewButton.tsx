import { ButtonProps } from "../../pages/ToggleLayout";
import { IconViewList, IconViewModule } from "../Icons/action";
import { StyledButtonWrapper } from "./ToggleViewButton.style";

function ToggleViewButton(props: ButtonProps) {
  const { selected, handleToggle } = props;

  return (
    <StyledButtonWrapper>
      <button onClick={handleToggle} className={selected ? "active" : ""}>
        <IconViewModule sx={{ fontSize: 24 }} />
      </button>
      <button onClick={handleToggle} className={selected ? "" : "active"}>
        <IconViewList sx={{ fontSize: 24 }} />
      </button>
    </StyledButtonWrapper>
  );
}

export default ToggleViewButton;
