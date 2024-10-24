import AddToCartNotActive from "./AddToCartNotActive";
import AddToCartActive from "./AddToCartActive";
import { IButtonProps } from "../../@types";

const AddToCart = (props: IButtonProps) => {
  return parseInt(props.quantity) >= 1 ? <AddToCartActive {...props}></AddToCartActive> : <AddToCartNotActive {...props} />;
};



export default AddToCart;
