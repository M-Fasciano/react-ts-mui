import Link from "../../../atoms/Link";
import { StyledDrawer } from "../Header.styles";

interface renderSubMenuProps {
  subMenu: any;
  handleSubMenuClick: () => void;
  isSubMenuOpen: boolean;
}

export const renderSubMenu = (props: renderSubMenuProps) => {
  const { subMenu, handleSubMenuClick, isSubMenuOpen } = props;

  return (
    <>
      <button onClick={handleSubMenuClick}>{subMenu.title}</button>
      <StyledDrawer open={isSubMenuOpen} anchor="right">
        <button onClick={handleSubMenuClick}>close</button>
        <ul>
          {subMenu &&
            subMenu.items.map((item: any, index: string) => {
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
  );
};
