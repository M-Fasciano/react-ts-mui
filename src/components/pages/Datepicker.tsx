import styled from "styled-components";
import dayjs from "dayjs";

const StyledWrapper = styled("div")`
  margin: 2rem;
`;

function DatepickerPage() {
  const test = dayjs().format();

  console.log(test);

  return (
    <StyledWrapper>
      <div>Datepicker</div>
    </StyledWrapper>
  );
}

export default DatepickerPage;
