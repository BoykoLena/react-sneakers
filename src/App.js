import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  {
    name: "Nike 1",
    price: 109,
    imageUrl: "./img/sneakers/1.png",
  },
  {
    name: "Nike 2",
    price: 159,
    imageUrl: "./img/sneakers/2.png",
  },
  {
    name: "Converse 1",
    price: 99,
    imageUrl: "./img/sneakers/3.png",
  },
  {
    name: "Nike 3",
    price: 209,
    imageUrl: "./img/sneakers/4.png",
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
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
