import styles from "./card.module.scss";

interface ICardProps {
}

const Card: React.FC<ICardProps> = () => {
  return (
    <div className={styles.card}>
      <h1>Luna App</h1>
    </div>
  );
};

export default Card;
