import { IExtButtonProps as IExtButtonProps } from "../../@types";
import { AddToCartNotActive } from "./AddToCartNotActive";
import { AddToCartActive } from "./AddToCartActive";

export const AddToCart = (props: IExtButtonProps) => {
  return parseInt(props.quantity) >= 1 ? <AddToCartActive {...props}></AddToCartActive> : <AddToCartNotActive {...props} />;
};



