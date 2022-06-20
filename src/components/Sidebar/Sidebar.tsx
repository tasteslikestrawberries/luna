import styles from "./sidebar.module.scss";
import SmallSidebar from "./SmallSidebar/SmallSidebar";
import BigSidebar from "./BigSidebar/BigSidebar";
import { useState } from "react";

const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(true);
  };

  return (
    <>
      <nav className={styles.nav}>
        <SmallSidebar onClick={handleClick} />
        {isExpanded ? (
          <BigSidebar onClick={() => setIsExpanded(false)} />
        ) : null}
      </nav>
    </>
  );
};

export default Sidebar;
