import styles from "./card.module.scss";

interface ICardProps {
  title: string;
}

const Card: React.FC<ICardProps> = (props: ICardProps) => {
  return (
    <div className={styles.card}>
      <h1>{props.title}</h1>
    </div>
  );
};

export default Card;
