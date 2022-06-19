import styles from "./sidebar.module.scss";
import SmallSidebar from "./SmallSidebar/SmallSidebar";
import BigSidebar from "./BigSidebar/BigSidebar";
import { useState } from "react";

const Sidebar: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(true);
  };

  return (
    <>
      <nav className={styles.nav}>
        <SmallSidebar onClick={handleClick} />
        {toggle ? <BigSidebar onClick={() => setToggle(false)} /> : null}
      </nav>
    </>
  );
};

export default Sidebar;
