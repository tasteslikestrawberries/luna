import styles from "./sidebar.module.scss";
import SmallSidebar from "./SmallSidebar/SmallSidebar";
import BigSidebar from "./BigSidebar/BigSidebar";
import { useState } from "react";
import {
  Grid1x2Fill,
  BellFill,
  BalloonHeartFill,
  Files,
  PersonCircle,
} from "react-bootstrap-icons";

export interface INavLink {
  id: number;
  to: string;
  el: React.ReactComponentElement<any>;
  title?: string;
  list?: React.ReactComponentElement<any>;
}

const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState<{ id: number; title: string }>(
    {} as { id: number; title: string }
  );

  const navLinks: INavLink[] = [
    {
      id: 1,
      to: "/",
      el: <Grid1x2Fill size={24} />,
      title: "Dashboard",
    },
    {
      id: 2,
      to: "/reminders",
      el: <BellFill size={24} />,
      title: "Reminders",
    },
    {
      id: 3,
      to: "/files",
      el: <Files size={24} />,
      title: "Files",
    },
    {
      id: 4,
      to: "/favorites",
      el: <BalloonHeartFill size={24} />,
      title: "Favorites",
    },
    {
      id: 5,
      to: "/my-profile",
      el: <PersonCircle size={24} />,
      title: "My Profile",
    },
  ];

  const handleClick = (id: number, title: string) => {
    //const oldActiveLinkId = activeLink.id;
    //if (id === oldActiveLinkId) return;

    setIsExpanded(true);
    setActiveLink({ id, title });
  };

  return (
    <>
      <nav className={styles.nav}>
        <SmallSidebar onClick={handleClick} navLinks={navLinks} />
        {isExpanded ? (
          <BigSidebar
            onClick={() => setIsExpanded(false)}
            title={activeLink.title}
          />
        ) : null}
      </nav>
    </>
  );
};

export default Sidebar;
