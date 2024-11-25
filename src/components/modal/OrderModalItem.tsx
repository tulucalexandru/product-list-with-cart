import styles from "./OrderModalItem.module.scss"
import ImageCard from "../cards/ImageCard"
import FlexContainer from "../cards/FlexContainer"

type CartItemContentProps = {
  cartItem: {
    name: string,
    price: string,
    totalPrice: string,
    quantity: string
  },
  image: {
    thumbnail: string,
    mobile: string,
    tablet: string,
    desktop: string,
  },
}

const OrderModalItem = (props: CartItemContentProps) => {

  return (
    <FlexContainer direction="row" gap="16px" className={styles.cartItem}>
      <ImageCard image={props.image} thumbnail />
      <FlexContainer direction="row" gap="8px">
        <OrderModalItemContent {...props} />
        <h1 className={styles.totalPrice}>${props.cartItem.totalPrice}</h1>
      </FlexContainer>
    </FlexContainer>
  )
}

const OrderModalItemContent = ({ cartItem }: CartItemContentProps) => {
  return (
    <div className={styles.cartItemContent}>
      <div>
        <h1>{cartItem.name}</h1>
      </div>
      <div className={styles.cartItemInfo}>
        <h2 className={styles.quantity}>{cartItem.quantity}x</h2>
        <h2 className={styles.itemPrice}>@ ${cartItem.price}</h2>
      </div>
    </div>
  )
}

export default OrderModalItem;
