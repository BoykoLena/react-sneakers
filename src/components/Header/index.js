import "./Header.module.scss";

function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={80} height={80} alt="logo" src="/img/logo.png" />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="text-uppercase opacity-5">Sneakers shop</p>
        </div>
      </div>
      <ul className="d-flex">
        <li
          className="mr-25 d-flex align-center cu-p"
          onClick={props.onClickCart}
        >
          <img width={25} height={25} alt="cart" src="/img/cart.png" />
          <span>1205 $</span>
        </li>
        <li className="d-flex align-center">
          <img width={25} height={25} alt="user" src="/img/user.png" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
