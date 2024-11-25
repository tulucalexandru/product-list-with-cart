import { createContext } from "react"
import data from "../assets/data.json"

interface ProductItem {
  image: {
    thumbnail: string,
    mobile: string,
    tablet: string,
    desktop: string
  }
  name: string,
  category: string,
  price: string
}

const productList: ProductItem[] = data

export const ProductContext = createContext(productList)



const ProductProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <ProductContext.Provider value={productList}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider

