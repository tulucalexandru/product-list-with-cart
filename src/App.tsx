import "./App.css";
import ProductList from "./components/layouts/ProductList";
import Cart from "./components/layouts/Cart";
import { CartProvider } from "./context/CartContext";
import ProductProvider from "./context/ProductListContext";



function App() {
  return (
    <>
      <CartProvider>
        <ProductProvider>
          <ProductList />
        </ProductProvider>
        <Cart />
      </CartProvider>
    </>
  )
    ;
}

export default App;
