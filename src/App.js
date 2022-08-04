import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios
      .get("https://62e634f0de23e2637928dffd.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://62e634f0de23e2637928dffd.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, [cartOpen]);

  const onAddToCart = (obj) => {
    axios.post("https://62e634f0de23e2637928dffd.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://62e634f0de23e2637928dffd.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  const clearSearchValue = () => {
    setSearchValue("");
  };

  return (
    <div className="wrapper clear">
      {cartOpen && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpen(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpen(true)} />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>
            {searchValue ? `Search for: "${searchValue}"` : "All sneakers"}
          </h1>
          <div className="d-flex align-center search-block ">
            <img width={25} height={25} src="/img/search.png" alt="search" />
            <input
              placeholder="search..."
              value={searchValue}
              onChange={onChangeSearchInput}
            />
            {searchValue ? (
              <img
                onClick={clearSearchValue}
                className="clearSearch"
                width={20}
                height={20}
                src="/img/delete.png"
                alt="delete"
              />
            ) : null}
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items
            .filter((item) =>
              item.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item, index) => {
              return (
                <Card
                  key={index}
                  title={item.name}
                  price={item.price}
                  imageUrl={item.imageUrl}
                  onPlus={(obj) => onAddToCart(obj)}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
