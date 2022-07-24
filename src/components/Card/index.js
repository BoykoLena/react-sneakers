import styles from "./Card.module.scss";

export default function Card(props) {
  return (
    <div className={styles.card}>
      <button className={styles.button}>
        <img width={20} height={20} src="img/heart-unliked.png" alt="unliked" />
      </button>
      <img width={135} height={115} src={props.imageUrl} alt="sneakers" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price: </span>
          <b>{props.price} $</b>
        </div>
        <button className={styles.button}>
          <img width={20} height={20} src="img/plus.png" alt="plus" />
        </button>
      </div>
    </div>
  );
}
