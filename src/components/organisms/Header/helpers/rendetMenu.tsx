import Link from "../../../atoms/Link";
import { renderSubMenu } from "./renderSubMenu";

interface renderMenuProps {
  navigationLinks: any;
  handleSubMenuClick: () => void;
  isSubMenuOpen: boolean;
}

export const renderMenu = (props: renderMenuProps) => {
  const { navigationLinks, handleSubMenuClick, isSubMenuOpen } = props;
  return (
    <nav>
      <ul>
        {navigationLinks.map((item: any, index: string) => {
          const { link, label, subMenu } = item;
          return (
            <li key={index}>
              <>
                {subMenu ? (
                  renderSubMenu({
                    subMenu,
                    handleSubMenuClick,
                    isSubMenuOpen,
                  })
                ) : (
                  <Link href={link}>{label}</Link>
                )}
              </>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
