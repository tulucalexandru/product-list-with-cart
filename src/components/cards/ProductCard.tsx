import ImageCard from "./ImageCard";
import ProductTitle from "./ProductTitle";
import AddToCart from "../buttons/AddToCart";
import styles from './ProductCard.module.scss'

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
  return (
    <div className={styles.ProductCard}>
      <div>
        <ImageCard url={`${image.mobile}`} />
        <AddToCart />
      </div>
      <ProductTitle title={`${name}`} category={`${category}`} price={`${price}`}></ProductTitle>
    </div >
  )
}

export default ProductCard;
