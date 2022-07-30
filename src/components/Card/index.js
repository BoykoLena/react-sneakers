import { useState } from "react";
import styles from "./Card.module.scss";

export default function Card(props) {
  const [add, setAdd] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const onClickPlus = () => {
    setAdd(!add);
  };

  const onClickFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <div className={styles.card}>
      <button className={styles.Btn} onClick={onClickFavorite}>
        <img
          width={20}
          height={20}
          src={favorite ? "img/heart-liked.png" : "img/heart-unliked.png"}
          alt="unliked"
        />
      </button>
      <img width={135} height={115} src={props.imageUrl} alt="sneakers" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price: </span>
          <b>{props.price} $</b>
        </div>
        <button className={styles.Btn} onClick={onClickPlus}>
          <img
            width={20}
            height={20}
            src={add ? "img/checked.png" : "img/plus.png"}
            alt="plus"
          />
        </button>
      </div>
    </div>
  );
}
