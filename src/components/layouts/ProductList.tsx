import styles from "./ProductList.module.scss"
import ProductCard from "../cards/ProductCard"
import productList from "../../assets/data.json"


const ProductList = () => {

  return (
    <div className={styles.productList}>
      <h1>Desserts</h1>
      {productList.map((item, index) => (
        <ProductCard key={index} image={item.image} name={item.name} category={item.category} price={item.price.toString()} />
      ))}
    </div>
  )
}

export default ProductList
