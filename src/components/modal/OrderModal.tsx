import { Button } from "../buttons";
import ConfirmOrderLogo from "../svg/ConfirmOrderLogo";
import styles from "./OrderModal.module.scss";
import { useContext } from "react";
import { CartContext, DispatchCartContext } from "../../context/CartContext";
import productList from "../../assets/data.json"
import OrderModalItem from "./OrderModalItem";
import React from "react";
import FlexContainer from "../cards/FlexContainer";
import { Separator } from "../layouts/Cart";


const OrderModal = () => {
  const dispatch = useContext(DispatchCartContext)
  const cartState = useContext(CartContext)
  const totalCartValue = cartState.reduce((accum, currentVal) =>
    accum + parseFloat(currentVal.totalPrice), 0).toFixed(2);

  return (
    <div className={styles.overlay}>
      <FlexContainer direction="column" gap="32px" className={styles.modal}>
        <FlexContainer direction="column" gap="24px">
          <ConfirmOrderLogo />
          <FlexContainer direction="column" gap="8px">
            <h1 className={styles.modalTitle}>Order<br /> Confirmed</h1>
            <p>We hope you enjoy your food!</p>
          </FlexContainer>
          <FlexContainer className={styles.modalCart} direction="column" gap="24px">
            <FlexContainer direction="column" gap="16px">
              {cartState.map((item, index) =>
                <React.Fragment key={index}>
                  <OrderModalItem cartItem={item} image={productList[productList.findIndex(it => item.name === it.name)].image} />
                  <Separator />
                </React.Fragment>
              )}
            </FlexContainer>
            <FlexContainer direction="row" className={styles.orderTotal}>
              <h2>Order total</h2>
              <h1>${totalCartValue}</h1>
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
        <Button className={styles.startOrderButton} onClick={() => dispatch({
          type: "CLEAR_CART",
          name: ""
        })}>
          Start New Order
        </Button>
      </FlexContainer>
    </div >
  )
}


export default OrderModal; 
