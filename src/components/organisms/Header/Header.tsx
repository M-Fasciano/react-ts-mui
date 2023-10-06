import React from "react";
import { navigation } from "../../../mocks/navigation";
import { StyledDrawer, StyledHeader, StyledNavWrapper } from "./Header.styles";
import { renderMenu } from "./helpers/rendetMenu";

function Header() {
  const navigationLinks = navigation[0].menu.items;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = React.useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSubMenuClick = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <StyledHeader>
      <StyledNavWrapper>
        <h1>Logo</h1>
        <button onClick={handleMenuClick}>menu</button>
      </StyledNavWrapper>

      <StyledDrawer open={isMenuOpen} anchor="right">
        <button onClick={handleMenuClick}>close</button>
        {renderMenu({
          navigationLinks,
          handleSubMenuClick,
          isSubMenuOpen,
        })}
      </StyledDrawer>
    </StyledHeader>
  );
}

export default Header;
