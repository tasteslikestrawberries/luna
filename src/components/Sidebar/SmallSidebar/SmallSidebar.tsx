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
import { MouseEventHandler } from "react";

interface ISmallSidebarProps {
  onClick?: MouseEventHandler;
}

const SmallSidebar: React.FC<ISmallSidebarProps> = ({onClick}) => {
  return (
    <div className={styles.small}>
      <ul>
        <li>
        <NavLink to="/">
        <img src={placeholder} alt="logo" />
         </NavLink>
        </li>
        <li onClick={onClick}>
          {/*can also pass: color="royalblue"*/}
          <NavLink to="/">
            <Grid1x2Fill size={24} />
          </NavLink>
        </li>
        <li onClick={onClick}>
          <NavLink to="/reminders">
            <BellFill size={24} />
          </NavLink>
        </li>
        <li onClick={onClick}>
          <NavLink to="/files">
            <Files size={24} />
          </NavLink>
        </li>
        <li>
          <BalloonHeartFill size={24} />
        </li>
        <li onClick={onClick}>
          <NavLink to="/my-profile">
            <PersonCircle size={24} />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SmallSidebar;
