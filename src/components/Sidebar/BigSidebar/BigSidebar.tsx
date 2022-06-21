import styles from "./big-sidebar.module.scss";
import { ChevronLeft } from "react-bootstrap-icons";
import { MouseEventHandler } from "react";

interface IBigSidebarProps {
  onClick?: MouseEventHandler;
  title?: string;
  list?: React.ReactComponentElement<any>[];
}

const BigSidebar: React.FC<IBigSidebarProps> = ({ onClick, title, list }) => {
  return (
    <>
      <div className={styles.big}>
        <h2>{title}</h2>
        <button type="button" onClick={onClick}>
          <ChevronLeft size={32} />
        </button>
        <ul>
          <li> {list?.map((item) => item)}</li>
        </ul>
      </div>
    </>
  );
};

export default BigSidebar;
