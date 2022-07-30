import styles from "./Header.module.scss";

function Header() {
  return (
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
  );
}

export default Header;