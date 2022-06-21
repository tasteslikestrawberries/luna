import styles from "./small-sidebar.module.scss";
import { NavLink } from "react-router-dom";
import { INavLink } from "../Sidebar";
import placeholder from '../../../assets/images/placeholder.png'

interface ISmallSidebarProps {
  onClick?: (id: number, title: string) => void;
  navLinks: INavLink[];
}

const SmallSidebar: React.FC<ISmallSidebarProps> = ({ onClick, navLinks }) => {
  return (
    <div className={styles.small}>
      <NavLink to="/">
        <img src={placeholder} alt="logo" />{" "}
      </NavLink>

      <ul>
        {navLinks.map((navlink) => {
          return (
            <li
              key={navlink.id}
              onClick={() => onClick?.(navlink.id!, navlink.title!)}
            >
              <NavLink to={navlink.to}>{navlink.el}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SmallSidebar;
