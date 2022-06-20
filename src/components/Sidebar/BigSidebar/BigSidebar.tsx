import styles from "./big-sidebar.module.scss";
import { ChevronLeft } from "react-bootstrap-icons";
import { MouseEventHandler } from "react";

interface IBigSidebarProps {
  onClick?: MouseEventHandler;
  title?: string;
}

const BigSidebar: React.FC<IBigSidebarProps> = ({ onClick, title }) => {
  return (
    <>
      <div className={styles.big}>
        <h2>{title}</h2>
        <button type="button" onClick={onClick}>
          <ChevronLeft size={32} />
        </button>
      </div>
    </>
  );
};

export default BigSidebar;
