import React from "react";
import { navigation } from "../../../mocks/navigation";
import Link from "../../atoms/Link";
import { StyledDrawer, StyledHeader, StyledNavWrapper } from "./Header.styles";

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
        <nav>
          <ul>
            {navigationLinks.map((item, index) => {
              const { link, label, subMenu } = item;
              return (
                <li key={index}>
                  <>
                    {subMenu ? (
                      <>
                        <button onClick={handleSubMenuClick}>
                          {subMenu.title}
                        </button>
                        <StyledDrawer open={isSubMenuOpen} anchor="right">
                          <button onClick={handleSubMenuClick}>close</button>
                          <ul>
                            {subMenu &&
                              subMenu.items.map((item, index) => {
                                const { link, label } = item;
                                return (
                                  <li key={index}>
                                    <Link href={link}>{label}</Link>
                                  </li>
                                );
                              })}
                          </ul>
                        </StyledDrawer>
                      </>
                    ) : (
                      <Link href={link}>{label}</Link>
                    )}
                  </>
                </li>
              );
            })}
          </ul>
        </nav>
      </StyledDrawer>
    </StyledHeader>
  );
}

export default Header;
