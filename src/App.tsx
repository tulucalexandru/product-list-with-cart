import ProductList from "./components/layouts/ProductList";
import Cart from "./components/layouts/Cart";
import { CartProvider } from "./context/CartContext";
import ProductProvider from "./context/ProductListContext";
import styles from "./App.module.scss"


function App() {
  return (
    <div className={styles.app}>
      <CartProvider>
        <ProductProvider>
          <ProductList />
        </ProductProvider>
        <Cart />
      </CartProvider>
    </div>
  )
    ;
}

export default App;
