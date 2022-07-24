import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

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
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
