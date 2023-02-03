import { ButtonProps } from "../../pages/ToggleLayout";
import { IconViewList, IconViewModule } from "../Icons/action";
import { StyledButtonWrapper } from "./ToggleViewButton.style";

function ToggleViewButton(props: ButtonProps) {
  const { selected, handleToggle } = props;

  return (
    <StyledButtonWrapper>
      <button onClick={handleToggle} className={selected ? "active" : ""}>
        <IconViewModule height={24} width={24} />
      </button>
      <button onClick={handleToggle} className={selected ? "" : "active"}>
        <IconViewList height={24} width={24} />
      </button>
    </StyledButtonWrapper>
  );
}

export default ToggleViewButton;
