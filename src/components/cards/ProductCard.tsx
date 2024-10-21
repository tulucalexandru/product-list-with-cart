import ImageCard from "./ImageCard";
import ProductTitle from "./ProductTitle";
import AddToCart from "../buttons/AddToCart";
import styles from './ProductCard.module.scss'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

type ProductCardProps = {
  image: {
    thumbnail: string,
    mobile: string,
    tablet: string,
    desktop: string,

  },
  name: string,
  category: string,
  price: string,
}


const ProductCard = ({ image, name, category, price }: ProductCardProps) => {
  const cartState = useContext(CartContext)

  const itemInfo = {
    quantity: cartState.filter((item) => item.name?.trim() === name)[0]?.quantity,
    name: name
  }

  return (
    <div className={styles.ProductCard}>
      <div>
        <ImageCard url={`${image.mobile}`} />
        <AddToCart {...itemInfo} />
      </div>
      <ProductTitle title={`${name}`} category={`${category}`} price={`${price}`}></ProductTitle>
    </div >
  )
}

export default ProductCard;
