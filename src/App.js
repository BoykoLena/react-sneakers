import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

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

  useEffect(() => {
    axios
      .get("https://62e634f0de23e2637928dffd.mockapi.io/favorites")
      .then((res) => {
        setFavorites(res.data);
      });
  }, []);

  const onAddToCart = async (obj) => {
    const { data } = await axios.post(
      "https://62e634f0de23e2637928dffd.mockapi.io/cart",
      obj
    );
    setCartItems((prev) => [...prev, data]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://62e634f0de23e2637928dffd.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    if (favorites.find((favObj) => favObj.id === obj.id)) {
      axios.delete(
        `https://62e634f0de23e2637928dffd.mockapi.io/favorites/${obj.id}`
      );
      // setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
    } else {
      const { data } = await axios.post(
        "https://62e634f0de23e2637928dffd.mockapi.io/favorites",
        obj
      );
      setFavorites((prev) => [...prev, data]);
    }
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
          exact
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

        <Route
          path="/favorites"
          exact
          element={
            <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
