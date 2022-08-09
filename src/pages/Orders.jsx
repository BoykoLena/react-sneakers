import React, { useEffect, useState } from "react";
import axios from "axios";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const orderResp = await axios.get(
          "https://62e634f0de23e2637928dffd.mockapi.io/orders"
        );

        setOrders(orderResp.data);
      } catch (error) {
        alert("Something went wrong :(");
      }
    }

    fetchData();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-20">
        <h1>Your orders</h1>
      </div>

      {orders.length > 0 ? (
        <div className="orders-wrapper">
          {orders.map((items, index) => (
            <div key={index}>
              <h3 className="ml-40">Order #{items.id}</h3>
              <div className="mr-40 ml-40 d-flex flex-wrap">
                {items.items.map((item, index) => (
                  <div key={index} className="order">
                    <img
                      width={90}
                      height={85}
                      src={item.imageUrl}
                      alt="sneakers"
                    />
                    <p className="mt-5 mb-5 text-center">{item.name}</p>
                    <p className="mt-5 mb-5 text-center fw-bold">
                      {item.price} $
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {/* <div className="orders-wrapper">
        {orders.map((items, index) => (
          <div key={index}>
            <h3 className="ml-40">Order #{items.id}</h3>
            <div className="mr-40 ml-40 d-flex flex-wrap">
              {items.items.map((item, index) => (
                <div key={index} className="order">
                  <img
                    width={90}
                    height={85}
                    src={item.imageUrl}
                    alt="sneakers"
                  />
                  <p className="mt-5 mb-5 text-center">{item.name}</p>
                  <p className="mt-5 mb-5 text-center fw-bold">
                    {item.price} $
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Orders;
