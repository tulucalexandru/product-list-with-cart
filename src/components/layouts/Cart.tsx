import { useContext } from "react"
import styles from "./Cart.module.scss"
import { CartContext } from "../../context/CartContext"
import CartItem from "../cards/CartItem"




const Cart = () => {
  const cartList = useContext(CartContext)

  return (
    <div className={styles.cart}>
      {cartList.length !== 0 && cartList.map((item, index) =>
        <div key={index}>
          <CartItem cartItem={item} ></CartItem>
          <Separator />
        </div>)}
    </div>
  )
}



export const Separator = () => {
  return (
    <div className={styles.separator}></div>
  )
}


export default Cart
