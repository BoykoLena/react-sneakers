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
    async function fetchData() {
      const itemsResp = await axios.get(
        "https://62e634f0de23e2637928dffd.mockapi.io/items"
      );

      const favoriteResp = await axios.get(
        "https://62e634f0de23e2637928dffd.mockapi.io/favorites"
      );

      const cartResp = await axios.get(
        "https://62e634f0de23e2637928dffd.mockapi.io/cart"
      );

      setCartItems(cartResp.data);
      setFavorites(favoriteResp.data);
      setItems(itemsResp.data);
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      if (
        cartItems.length > 0 &&
        cartItems.find((item) => item.number === obj.number)
      ) {
        let item = cartItems.find((item) => {
          if (item.number === obj.number) {
            return item;
          }
        });
        axios.delete(
          `https://62e634f0de23e2637928dffd.mockapi.io/cart/${item.id}`
        );
        setCartItems((prev) =>
          prev.filter((item) => item.number !== obj.number)
        );
      } else {
        const { data } = await axios.post(
          "https://62e634f0de23e2637928dffd.mockapi.io/cart",
          obj
        );
        setCartItems((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Something went wrong :(");
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://62e634f0de23e2637928dffd.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (
        favorites.length > 0 &&
        favorites.find((favObj) => favObj.number === obj.number)
      ) {
        let favObj = favorites.find((favObj) => {
          if (favObj.number === obj.number) {
            return favObj;
          }
        });
        axios.delete(
          `https://62e634f0de23e2637928dffd.mockapi.io/favorites/${favObj.id}`
        );
      } else {
        const { data } = await axios.post(
          "https://62e634f0de23e2637928dffd.mockapi.io/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Something went wrong :(");
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
              cartItems={cartItems}
              favorites={favorites}
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
