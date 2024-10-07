import styles from "./ProductTitle.module.scss";

export default function ProductTitle() {
  return (
    <div className={styles.ProductTitle}>
      <h2>Waffle</h2>
      <h1>Waffle with berries</h1>
      <h3>$6.50</h3>
    </div>
  );
}
