import styles from "./small-sidebar.module.scss";
import { Grid1x2Fill, BellFill, BalloonHeart, Files} from "react-bootstrap-icons";
import placeholder from "../../assets/placeholder.png";

const SmallSidebar: React.FC = () => {
  return (
    <div className={styles.small}>
      <ul>
        <img src={placeholder} alt="logo" />
        <Grid1x2Fill color="royalblue" size={24} />
        <BellFill color="royalblue" size={24} />
        <Files color="royalblue" size={24} />
        <BalloonHeart color="royalblue" size={24} />
       
      </ul>
    </div>
  );
};

export default SmallSidebar;
