import Link from "../../../atoms/Link";
import { StyledDrawer } from "../Header.styles";
import CloseButton from "../components/CloseButton";

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
        <CloseButton handleMenuClick={handleSubMenuClick} />
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
