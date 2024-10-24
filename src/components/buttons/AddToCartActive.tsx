import styles from "./AddToCart.module.scss";
import DecrementButton from "./DecrementButton";
import IncrementButton from "./IncrementButton";
import { IButtonProps } from "../../@types";


const AddToCartActive = (props: IButtonProps) => {
  return (
    <div className={styles.addToCartActive}>
      <DecrementButton {...props}></DecrementButton><p>{props.quantity}</p><IncrementButton {...props}></IncrementButton>
    </div>
  );
};

export default AddToCartActive
