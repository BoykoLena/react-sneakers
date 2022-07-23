function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={80} height={80} src="/img/logo.png" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="text-uppercase opacity-5">Sneakers shop</p>
          </div>
        </div>

        <ul className="d-flex">
          <li className="mr-25 d-flex align-center">
            <img width={25} height={25} src="/img/cart.png" />
            <span>1205 $</span>
          </li>
          <li className="d-flex align-center">
            <img width={25} height={25} src="/img/user.png" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">All sneakers</h1>

        <div className="d-flex flex-wrap">
          <div className="card">
            <img
              width={135}
              height={115}
              src="/img/sneakers/1.png"
              alt="sneakers"
            />
            <h5>Nike 1</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price: </span>
                <b>159 $</b>
              </div>
              <button className="button">
                <img width={20} height={20} src="img/plus.png" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={135}
              height={115}
              src="/img/sneakers/2.png"
              alt="sneakers"
            />
            <h5>Nike 2</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price: </span>
                <b>199 $</b>
              </div>
              <button className="button">
                <img width={20} height={20} src="img/plus.png" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={135}
              height={115}
              src="/img/sneakers/3.png"
              alt="sneakers"
            />
            <h5>Converse 3</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price: </span>
                <b>99 $</b>
              </div>
              <button className="button">
                <img width={20} height={20} src="img/plus.png" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={135}
              height={115}
              src="/img/sneakers/4.png"
              alt="sneakers"
            />
            <h5>Nike 4</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price: </span>
                <b>209 $</b>
              </div>
              <button className="button">
                <img width={20} height={20} src="img/plus.png" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
