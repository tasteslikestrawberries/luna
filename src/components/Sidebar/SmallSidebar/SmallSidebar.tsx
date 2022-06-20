import styles from "./small-sidebar.module.scss";
import {
  Grid1x2Fill,
  BellFill,
  BalloonHeartFill,
  Files,
  PersonCircle,
} from "react-bootstrap-icons";
import placeholder from "../../../assets/images/placeholder.png";
import { NavLink } from "react-router-dom";
import React, { MouseEventHandler } from "react";

interface ISmallSidebarProps {
  onClick?: MouseEventHandler;
}

interface INavLink {
  to: string;
  el: React.ReactComponentElement<any>;
}

const SmallSidebar: React.FC<ISmallSidebarProps> = ({ onClick }) => {
  const NavLinks: INavLink[] = [
    { to: "/", el: <img src={placeholder} alt="logo" /> },
    { to: "/", el: <Grid1x2Fill size={24} /> },
    { to: "/reminders", el: <BellFill size={24} /> },
    { to: "/files", el: <Files size={24} /> },
    { to: "/favorites", el: <BalloonHeartFill size={24} /> },
    { to: "/my-profile", el: <PersonCircle size={24} /> },
  ];
  return (
    <div className={styles.small}>
      <ul>
        {NavLinks.map(({ to, el }, idx) => (
          <li key={idx} onClick={onClick}>
            <NavLink to={to}>{el}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SmallSidebar;
