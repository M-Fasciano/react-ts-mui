import { GridViewIcon, ListViewIcon } from "../../Icons/Icons";
import { ButtonProps } from "../../pages/ToggleLayout";
import { StyledButtonWrapper } from "./ToggleViewButton.style";

function ToggleViewButton(props: ButtonProps) {
  const { selected, handleToggle } = props;

  return (
    <StyledButtonWrapper>
      <button onClick={handleToggle} className={selected ? "active" : ""}>
        <GridViewIcon htmlColor={"#CCCFD9"} />
      </button>
      <button onClick={handleToggle} className={selected ? "" : "active"}>
        <ListViewIcon htmlColor={"#CCCFD9"} />
      </button>
    </StyledButtonWrapper>
  );
}

export default ToggleViewButton;
