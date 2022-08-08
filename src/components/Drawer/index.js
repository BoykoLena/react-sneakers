import React from "react";
import { useState } from "react";
import Info from "../Card/Info";
import styles from "./Drawer.module.scss";
import { AppContext } from "../../App";
import axios from "axios";

function Drawer({ items = [], onClose, onRemove }) {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const [orderId, setOrderId] = useState(null);
  const [isComplete, setIsComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const onClickOrder = async () => {
    try {
      setIsLoading(false);
      const { data } = await axios.post(
        "https://62e634f0de23e2637928dffd.mockapi.io/orders",
        { items: cartItems }
      );

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          `https://62e634f0de23e2637928dffd.mockapi.io/cart/${item.id}`
        );
      }

      setOrderId(data.id);
      setIsComplete(true);
      setCartItems([]);
    } catch (error) {
      alert("something went wrong :(");
    }
    setIsLoading(false);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <div className="d-flex justify-between align-center mb-30">
          <h2>Bag</h2>
          <button className={styles.button} onClick={onClose}>
            <img width={15} height={15} src="img/x.png" alt="close" />
          </button>
        </div>

        {items.length > 0 ? (
          <div className={styles.items}>
            {items.map((obj, index) => (
              <div key={index} className={styles.cartItem}>
                <img width={70} height={70} src={obj.imageUrl} alt="sneakers" />
                <div className="mr-10 text-center">
                  <p>{obj.name}</p>
                  <b>{obj.price} $</b>
                </div>
                <div>
                  <button
                    onClick={() => {
                      onRemove(obj.id);
                    }}
                    className={styles.button}
                  >
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
        ) : (
          <Info
            image={isComplete ? "img/complete-order.png" : "img/empty-cart.png"}
            title={isComplete ? "Your order is accepted 😊" : "Empty 🙁"}
            description={
              isComplete
                ? `Code order: #${orderId}`
                : "There are no items in your bag."
            }
          />
        )}

        <div className={styles.cartTotalBlock}>
          <span>Summary</span>
          <div></div>
          <b>1205 $</b>
        </div>

        {items.length > 0 ? (
          <button
            onClick={onClickOrder}
            className={isLoading ? styles.greenBtn : styles.disableBtn}
            disabled={isLoading ? false : true}
          >
            Order
          </button>
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
