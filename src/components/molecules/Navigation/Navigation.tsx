import { Link } from "react-router-dom";
import { StyledList, StyledListItem, StyledNav } from "./Navigation.style";

function Navigation() {
  return (
    <StyledNav>
      <StyledList>
        <StyledListItem>
          <Link to="/login">Login</Link>
        </StyledListItem>
        <StyledListItem>
          <Link to="/video">Video</Link>
        </StyledListItem>
        <StyledListItem>
          <Link to="/layout">Layout</Link>
        </StyledListItem>
        <StyledListItem>
          <Link to="/heading">Heading</Link>
        </StyledListItem>
        <StyledListItem>
          <Link to="/reminder">Reminder</Link>
        </StyledListItem>
        <StyledListItem>
          <Link to="/orders">Orders</Link>
        </StyledListItem>
      </StyledList>
    </StyledNav>
  );
}

export default Navigation;
