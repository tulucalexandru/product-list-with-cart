import styles from "./ProductTitle.module.scss";

type TitleProps = {
  title: string;
  category: string;
  price: number;
};

export default function ProductTitle(props: TitleProps) {
  return (
    <div className={styles.ProductTitle}>
      <h2>{props.category}</h2>
      <h1>{props.title}</h1>
      <h3>${props.price}</h3>
    </div>
  );
}
