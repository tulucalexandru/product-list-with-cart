import styles from "./AddToCart.module.scss";
import { IExtButtonProps } from "../../@types";
import { DecrementButton } from "./";
import { IncrementButton } from "./IncrementButton";
import { useContext } from "react";
import { DispatchCartContext } from "../../context/CartContext";


export const AddToCartActive = (props: IExtButtonProps) => {
  const dispatch = useContext(DispatchCartContext)

  return (
    <div className={styles.addToCartActive}>
      <DecrementButton {...props} onClick={() => dispatch({
        type: "DECREMENT_ITEM",
        name: props.name
      })}></DecrementButton>
      <p>{props.quantity}</p>
      <IncrementButton {...props} onClick={() => dispatch({
        type: "INCREMENT_ITEM",
        name: props.name
      })}></IncrementButton>
    </div>
  );
};
