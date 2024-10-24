import styles from "./AddToCart.module.scss";
import { DispatchCartContext } from "../../context/CartContext";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductListContext";
import Button from "./Button";
import { AddToCartLogo } from "../svg";
import { IButtonProps } from "../../@types";


const AddToCartNotActive = (props: IButtonProps) => {
  const itemList = useContext(ProductContext)
  const item = itemList.filter((item) => item.name === props.name)[0]

  const dispatch = useContext(DispatchCartContext)


  return (
    <Button className={styles.addToCart} onClick={() => {
      dispatch({
        type: "ADD_ITEM",
        name: props.name,
        price: item.price,
        totalPrice: (parseFloat(item.price).toFixed(2)).toString(),
        quantity: "1"
      })
    }}>
      <AddToCartLogo ></AddToCartLogo>
      Add to Cart
    </Button>
  );
};

export default AddToCartNotActive;
