import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "./pages/Home";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
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
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://62e634f0de23e2637928dffd.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://62e634f0de23e2637928dffd.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = (obj) => {
    axios.post("https://62e634f0de23e2637928dffd.mockapi.io/favorites", obj);
    setFavorites((prev) => [...prev, obj]);
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

      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              onChangeSearchInput={onChangeSearchInput}
              clearSearchValue={clearSearchValue}
              onAddToCart={onAddToCart}
              onAddToFavorite={onAddToFavorite}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
