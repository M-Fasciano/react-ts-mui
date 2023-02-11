import styled from "styled-components";
import Reminder from "../molecules/Reminder/Reminder";

const StyledWrapper = styled("div")`
  margin: 2rem;
`;

function ReminderPage() {
  return (
    <StyledWrapper>
      <Reminder />
    </StyledWrapper>
  );
}

export default ReminderPage;
