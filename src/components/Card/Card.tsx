import styles from "./card.module.scss";

interface ICardProps {
  title: string;
}

const Card: React.FC<ICardProps> = ({title}) => {
  return (
    <div className={styles.card}>
      <h1>{title}</h1>
    </div>
  );
};

export default Card;
