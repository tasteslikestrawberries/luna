import styles from './sidebar.module.scss'
import SmallSidebar from "./SmallSidebar";
import BigSidebar from "./BigSidebar";

const Sidebar: React.FC = () => {
  return (
    <>
      <nav className={styles.wrapper}>
      <SmallSidebar />
      <BigSidebar />
      </nav>
    </>
  );
};

export default Sidebar;
