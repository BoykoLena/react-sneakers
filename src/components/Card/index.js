import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader";
import React from "react";
import { AppContext } from "../../App";

export default function Card({
  id,
  name,
  number,
  price,
  imageUrl,
  onPlus,
  onFavorite,
  favorited = false,
  added = false,
  loaded = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);

  const onClickPlus = () => {
    onPlus({ id, number, name, price, imageUrl });
  };

  const onClickFavorite = () => {
    onFavorite({ id, number, name, price, imageUrl });
  };
  return (
    <div className={styles.card}>
      {loaded ? (
        <>
          <button className={styles.Btn} onClick={onClickFavorite}>
            <img
              width={20}
              height={20}
              src={favorited ? "img/heart-liked.png" : "img/heart-unliked.png"}
              alt="unliked"
            />
          </button>
          <img width={135} height={115} src={imageUrl} alt="sneakers" />
          <h5>{name}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price: </span>
              <b>{price} $</b>
            </div>
            <button className={styles.Btn} onClick={onClickPlus}>
              <img
                width={20}
                height={20}
                src={isItemAdded(number) ? "img/checked.png" : "img/plus.png"}
                alt="plus"
              />
            </button>
          </div>
        </>
      ) : (
        <ContentLoader
          speed={2}
          width={163}
          height={236}
          viewBox="0 0 163 236"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="163" height="125" />
          <rect x="0" y="140" rx="5" ry="5" width="163" height="40" />
          <rect x="0" y="190" rx="5" ry="5" width="110" height="20" />
          <rect x="0" y="216" rx="5" ry="5" width="110" height="20" />
          <rect x="120" y="190" rx="5" ry="5" width="50" height="66" />
        </ContentLoader>
      )}
    </div>
  );
}
