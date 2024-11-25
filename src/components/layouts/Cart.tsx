import { useContext } from "react"
import React from "react"
import { EmptyCartLogo } from "../svg"
import styles from "./Cart.module.scss"
import { CartContext } from "../../context/CartContext"
import CartItem from "../cards/CartItem"
import ConfirmOrder from "../buttons/ConfirmOrder"
import CarbonFreeLogo from "../svg/CarbonFreeLogo"




const Cart = () => {
  const cartList = useContext(CartContext)
  const totalCartItem = cartList.reduce((sum, currentValue) => sum + parseInt(currentValue.quantity), 0)
  const isEmpty = totalCartItem === 0 ? true : false

  return (
    <div className={styles.cart}>
      <h1>Your Cart ({totalCartItem})</h1>
      {isEmpty ?
        <div className={styles.emptyCart}>
          <EmptyCart />
        </div> :
        <CartContent />
      }
    </div>
  )
}

const CartContent = () => {
  const cartList = useContext(CartContext)
  const totalCartValue = cartList.reduce((sum, currentValue) => sum + parseFloat(currentValue.totalPrice), 0).toFixed(2)
  return (
    <>
      {cartList.length !== 0 && cartList.map((item) =>
        <React.Fragment key={`cart-item-${item.name.split(" ").join("-").toLowerCase()}`}>
          <CartItem cartItem={item}  ></CartItem>
          <Separator />
        </React.Fragment>)}
      <OrderTotal totalCartValue={totalCartValue} />
      <div className={styles.carbonNeutral}>
        <div>
          <CarbonFreeLogo />
          <h2>This is a <strong>carbon-neutral</strong> delivery</h2>
        </div>
      </div>
      <ConfirmOrder />
    </>
  )
}
const OrderTotal = (props: { totalCartValue: string }) => {
  return (
    <div className={styles.orderTotal}>
      <h2>Order Total</h2>
      <h1>${props.totalCartValue}</h1>
    </div>
  )
}

const EmptyCart = () => {
  return (
    <div className={styles.emptyCart}>
      <EmptyCartLogo />
      <h2>Your added items will appear here</h2>
    </div>
  )
}


export const Separator = () => {
  return (
    <div className={styles.separator}></div>
  )
}


export default Cart
