import styles from './CardItem.module.scss'
import { DeleteCartItem } from '../buttons'

type CartItemContentProps = {
  cartItem: {
    name: string,
    price: string,
    totalPrice: string,
    quantity: string
  }

}

const CartItem = (props: CartItemContentProps) => {
  const itemInfo = { name: props.cartItem.name, quantity: props.cartItem.quantity }

  return (
    <div className={styles.cartItem}>
      <CartItemContent {...props} />
      <DeleteCartItem {...itemInfo} />
    </div>
  )
}

const CartItemContent = ({ cartItem }: CartItemContentProps) => {
  return (
    <div className={styles.cartItemContent}>

      <h1>{cartItem.name}</h1>
      <div className={styles.cartItemInfo}>
        <h2 className={styles.cartItemQty}>{cartItem.quantity}x</h2>
        <h2 className={styles.cartItemPrice}>@ ${cartItem.price}</h2>
        <h2 className={styles.cartItemTotalPrice}>${cartItem.totalPrice}</h2>
      </div>
    </div>
  )
}


export default CartItem;
