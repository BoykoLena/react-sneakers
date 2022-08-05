import Card from "../components/Card";

function Home({
  items,
  searchValue,
  onChangeSearchInput,
  clearSearchValue,
  onAddToCart,
  onAddToFavorite,
  cartItems,
}) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>{searchValue ? `Search for: "${searchValue}"` : "All sneakers"}</h1>
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
                number={item.number}
                id={item.id}
                imageUrl={item.imageUrl}
                added={cartItems.some((obj) => obj.number === item.number)}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Home;
