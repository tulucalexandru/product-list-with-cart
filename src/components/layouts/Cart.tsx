import CartItem from "../cards/CartItem";
import styles from "./Cart.module.scss"


type cartListItem = {
  name: string,
  price: string,
  totalPrice: string,
  quantity: string
}

type cartListProps = {
  cartList: cartListItem[]
}


const Cart = (props: cartListProps) => {
  return (
    <div className={styles.cart}>
      {props.cartList.length !== 0 && props.cartList.map((item, index) =>
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
