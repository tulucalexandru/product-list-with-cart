import DeleteLogo from "../svg/DeleteLogo";
import { Button } from "../buttons";
import { IExtButtonProps } from "../../@types";
import { useContext } from "react";
import { DispatchCartContext } from "../../context/CartContext";

export const DeleteCartItem = (props: IExtButtonProps) => {
  const dispatch = useContext(DispatchCartContext)

  return (
    <Button {...props} onClick={() => dispatch({
      type: "DELETE_ITEM",
      name: props.name
    })}>
      <DeleteLogo />
    </Button>
  );
};

