function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2 className="mb-30">Bag</h2>

          <div className="items">
            <div className="cartItem d-flex align-center justify-between mb-20">
              <img
                width={90}
                height={80}
                src="img/sneakers/1.png"
                alt="sneakers"
              />
              <div>
                <p>Nike 1</p>
                <b>159 $</b>
              </div>
              <div>
                <button className="button">
                  <img
                    width={15}
                    height={15}
                    src="img/delete.png"
                    alt="delete"
                  />
                </button>
              </div>
            </div>

            <div className="cartItem d-flex align-center justify-between mb-20">
              <img
                width={90}
                height={80}
                src="img/sneakers/2.png"
                alt="sneakers"
              />
              <div>
                <p>Nike 2</p>
                <b>199 $</b>
              </div>
              <div>
                <button className="button">
                  <img
                    width={15}
                    height={15}
                    src="img/delete.png"
                    alt="delete"
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="cartTotalBlock mb-30">
            <span>Summary</span>
            <div></div>
            <b>1205 $</b>
          </div>

          <button className="orderBtn">Order</button>
        </div>
      </div>

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
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <div className="d-flex align-center search-block ">
            <img width={25} height={25} src="/img/search.png" alt="search" />
            <input placeholder="search..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          <div className="card">
            <button className="button">
              <img
                width={20}
                height={20}
                src="img/heart-unliked.png"
                alt="unliked"
              />
            </button>
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
            <button className="button">
              <img
                width={20}
                height={20}
                src="img/heart-unliked.png"
                alt="unliked"
              />
            </button>
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
            <button className="button">
              <img
                width={20}
                height={20}
                src="img/heart-unliked.png"
                alt="unliked"
              />
            </button>
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
            <button className="button">
              <img
                width={20}
                height={20}
                src="img/heart-unliked.png"
                alt="unliked"
              />
            </button>
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
