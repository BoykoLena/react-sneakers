import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  {
    name: "Nike Blazer Low 77 Vintage White Black",
    price: 129,
    imageUrl: "./img/sneakers/1.webp",
  },
  {
    name: "Nike Blazer Mid 77 White Celestine Blue",
    price: 159,
    imageUrl: "./img/sneakers/2.webp",
  },
  {
    name: "New Balance 327 Black Grey",
    price: 209,
    imageUrl: "./img/sneakers/3.webp",
  },
  {
    name: "Adidas Samba Triple White",
    price: 169,
    imageUrl: "./img/sneakers/4.webp",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <div className="d-flex align-center search-block ">
            <img width={25} height={25} src="/img/search.png" alt="search" />
            <input placeholder="search..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {arr.map((obj) => {
            return (
              <Card
                title={obj.name}
                price={obj.price}
                imageUrl={obj.imageUrl}
                onFavorite={() => console.log("Закладка")}
                onPlus={() => console.log("Плюс")}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
