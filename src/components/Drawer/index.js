import styles from "./Drawer.module.scss";

function Drawer() {
  return (
    <div style={{ display: "none" }} className={styles.overlay}>
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30">
          Bag
          <button className={styles.button}>
            <img width={15} height={15} src="img/x.png" alt="delete" />
          </button>
        </h2>

        <div className={styles.items}>
          <div className={styles.cartItem}>
            <img
              width={70}
              height={70}
              src="img/sneakers/1.webp"
              alt="sneakers"
            />
            <div className="mr-10 text-center">
              <p>nike blazer low 77 vintage white black</p>
              <b>129 $</b>
            </div>
            <div>
              <button className={styles.button}>
                <img width={15} height={15} src="img/delete.png" alt="delete" />
              </button>
            </div>
          </div>

          <div className={styles.cartItem}>
            <img
              width={70}
              height={70}
              src="img/sneakers/2.webp"
              alt="sneakers"
            />
            <div className="mr-10 text-center">
              <p>nike blazer mid 77 white celestine blue</p>
              <b>159 $</b>
            </div>
            <div>
              <button className={styles.button}>
                <img width={15} height={15} src="img/delete.png" alt="delete" />
              </button>
            </div>
          </div>
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
