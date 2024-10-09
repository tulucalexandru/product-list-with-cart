import styles from "./ProductTitle.module.scss";

type TitleProps = {
  title: string;
};

export default function ProductTitle(props: TitleProps) {
  return (
    <div className={styles.ProductTitle}>
      <h2>{props.title}</h2>
      <h1>Waffle with berries</h1>
      <h3>$6.50</h3>
    </div>
  );
}
