import styles from "./ProductList.module.scss"
import ProductCard from "../cards/ProductCard"
import productList from "../../assets/data.json"
import FlexContainer from "../cards/FlexContainer"


const ProductList = () => {

  return (
    <div className={styles.productList}>
      <h1 className={styles.productListTitle}>Desserts</h1>
      <FlexContainer direction="column" gap="24px">
        {productList.map((item, index) => (
          <ProductCard key={index} image={item.image} name={item.name} category={item.category} price={item.price.toString()} />
        ))}
      </FlexContainer>
    </div>
  )
}

export default ProductList
