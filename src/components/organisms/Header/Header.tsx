import React from "react";
import { navigation } from "../../../mocks/navigation";
import {
  StyledClodeButton,
  StyledDrawer,
  StyledHeader,
  StyledNavWrapper,
} from "./Header.styles";
import { renderMenu } from "./helpers/rendetMenu";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseButton from "./components/CloseButton";

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
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleMenuClick}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
      </StyledNavWrapper>

      <StyledDrawer open={isMenuOpen} anchor="right">
        <CloseButton handleMenuClick={handleMenuClick} />
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
