import styles from "../Drawer/Drawer.module.scss";

function Info({ image, title, description }) {
  return (
    <div className={styles.emptyCart}>
      <img width={160} height={160} src={image} alt="empty-cart" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Info;
