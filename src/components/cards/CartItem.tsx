import styles from './CardItem.module.scss'

const CartItem = () => {
  return (
    <div className={styles.cartItem}>
      <CartItemContent />
      <DeleteCartItem />
    </div>
  )
}

const CartItemContent = () => {
  return (
    <div className={styles.cartItemContent}>
      <h1>Classic Tiramisu</h1>
      <div className={styles.cartItemInfo}>
        <h2 className={styles.cartItemQty}>1x</h2>
        <h2 className={styles.cartItemPrice}>@ $5.50</h2>
        <h2 className={styles.cartItemTotalPrice}>$5.50</h2>
      </div>
    </div>
  )
}


const DeleteCartItem = () => {
  return (
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 1.25C5.125 1.25 1.25 5.125 1.25 10C1.25 14.875 5.125 18.75 10 18.75C14.875 18.75 18.75 14.875 18.75 10C18.75 5.125 14.875 1.25 10 1.25ZM10 17.5C5.875 17.5 2.5 14.125 2.5 10C2.5 5.875 5.875 2.5 10 2.5C14.125 2.5 17.5 5.875 17.5 10C17.5 14.125 14.125 17.5 10 17.5Z" fill="#AD8A85" />
        <path d="M13.375 14.375L10 11L6.625 14.375L5.625 13.375L9 10L5.625 6.625L6.625 5.625L10 9L13.375 5.625L14.375 6.625L11 10L14.375 13.375L13.375 14.375Z" fill="#AD8A85" />
      </svg>
    </button>
  )
}

export default CartItem;
