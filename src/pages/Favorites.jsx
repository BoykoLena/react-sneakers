import React from "react";
import Card from "../components/Card";
import { AppContext } from "../App";

function Favorites({ onAddToFavorite }) {
  const { favorites } = React.useContext(AppContext);

  console.log(favorites);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Favorites sneakers</h1>
      </div>

      <div className="d-flex flex-wrap">
        {favorites.map((item, index) => (
          <Card
            key={index}
            id={item.id}
            number={item.number}
            name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
            onFavorite={onAddToFavorite}
            favorited={true}
            loaded={true}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
