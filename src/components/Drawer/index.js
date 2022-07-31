import styles from "./Drawer.module.scss";

function Drawer(props) {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30">
          Bag
          <button className={styles.button} onClick={props.onClose}>
            <img width={15} height={15} src="img/x.png" alt="close" />
          </button>
        </h2>

        <div className={styles.items}>
          {props.items.map((obj) => (
            <div className={styles.cartItem}>
              <img width={70} height={70} src={obj.imageUrl} alt="sneakers" />
              <div className="mr-10 text-center">
                <p>{obj.title}</p>
                <b>{obj.price} $</b>
              </div>
              <div>
                <button className={styles.button}>
                  <img
                    width={15}
                    height={15}
                    src="img/delete.png"
                    alt="delete"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cartTotalBlock}>
          <span>Summary</span>
          <div></div>
          <b>1205 $</b>
        </div>

        <button className={styles.greenBtn}>Order</button>
      </div>
    </div>
  );
}

export default Drawer;
