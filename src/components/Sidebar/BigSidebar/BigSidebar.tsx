import styles from "./big-sidebar.module.scss";
import { ChevronLeft } from "react-bootstrap-icons";
import { MouseEventHandler } from "react";

interface IBigSidebarProps {
  onClick?: MouseEventHandler;
}

const BigSidebar: React.FC<IBigSidebarProps> = ({ onClick }) => {
  return (
    <>
      <div className={styles.big}>
        <button type="button" onClick={onClick}>
          <ChevronLeft size={32} />
        </button>
      </div>
    </>
  );
};

export default BigSidebar;