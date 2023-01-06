import { Link } from "react-router-dom";
import { StyledNav } from "./Navigation.style";

function Navigation() {
  return (
    <StyledNav>
      <ul className="list">
        <li className="list__item">
          <Link to="/login">Login</Link>
        </li>
        <li className="list__item">
          <Link to="/video">Video</Link>
        </li>
        <li className="list__item">
          <Link to="/layout">Layout</Link>
        </li>
        <li className="list__item">
          <Link to="/heading">Heading</Link>
        </li>
      </ul>
    </StyledNav>
  );
}

export default Navigation;
