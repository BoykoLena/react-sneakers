import styles from "./Drawer.module.scss";

function Drawer(props) {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <div className="d-flex justify-between align-center mb-30">
          <h2>Bag</h2>
          <button className={styles.button} onClick={props.onClose}>
            <img width={15} height={15} src="img/x.png" alt="close" />
          </button>
        </div>

        {props.items.length > 0 ? (
          <div className={styles.items}>
            {props.items.map((obj, index) => (
              <div key={index} className={styles.cartItem}>
                <img width={70} height={70} src={obj.imageUrl} alt="sneakers" />
                <div className="mr-10 text-center">
                  <p>{obj.title}</p>
                  <b>{obj.price} $</b>
                </div>
                <div>
                  <button className={styles.button}>
                    <img
                      onClick={() => props.onRemove(obj.id)}
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
        ) : (
          <div className={styles.emptyCart}>
            <img
              width={160}
              height={160}
              src="img/empty-cart.png"
              alt="empty-cart"
            />
            <p>There are no items in your bag.</p>
          </div>
        )}

        <div className={styles.cartTotalBlock}>
          <span>Summary</span>
          <div></div>
          <b>1205 $</b>
        </div>

        {props.items.length > 0 ? (
          <button className={styles.greenBtn}>Order</button>
        ) : (
          <button className={styles.disableBtn} disabled={true}>
            Order
          </button>
        )}
      </div>
    </div>
  );
}

export default Drawer;
