function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Bag
          <button className="button">
            <img width={15} height={15} src="img/x.png" alt="delete" />
          </button>
        </h2>

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
                <img width={15} height={15} src="img/delete.png" alt="delete" />
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
                <img width={15} height={15} src="img/delete.png" alt="delete" />
              </button>
            </div>
          </div>
        </div>

        <div className="cartTotalBlock mb-30">
          <span>Summary</span>
          <div></div>
          <b>1205 $</b>
        </div>

        <button className="greenBtn">Order</button>
      </div>
    </div>
  );
}

export default Drawer;
