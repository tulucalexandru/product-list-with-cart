import styles from "./AddToCart.module.scss";
import { DispatchCartContext } from "../../context/CartContext";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductListContext";
import { Button } from "./Button";
import { AddToCartLogo } from "../svg";
import { IExtButtonProps } from "../../@types";




export const AddToCartNotActive = (props: IExtButtonProps) => {
  const itemList = useContext(ProductContext)
  const item = itemList.filter((item) => item.name === props.name)[0]

  const dispatch = useContext(DispatchCartContext)


  return (
    <Button className={styles.addToCart} {...props} onClick={() => {
      dispatch({
        type: "ADD_ITEM",
        name: props.name,
        price: item.price,
      })
    }}>
      <AddToCartLogo ></AddToCartLogo>
      Add to Cart
    </Button>
  );
};
