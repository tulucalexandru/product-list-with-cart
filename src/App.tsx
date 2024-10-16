import "./App.css";
import ProductList from "./components/layouts/ProductList";
import Cart from "./components/layouts/Cart";

type cartListItem = {
  name: string,
  price: string,
  totalPrice: string,
  quantity: string
}

const cartList: cartListItem[] = [
  {
    "name": "Waffle",
    "price": "6.50",
    "totalPrice": "13.00",
    "quantity": "2"
  },
  {
    "name": "Waffle",
    "price": "6.50",
    "totalPrice": "13.00",
    "quantity": "2"
  },
  {
    "name": "Waffle",
    "price": "6.50",
    "totalPrice": "13.00",
    "quantity": "2"
  },
]

function App() {
  return (
    <>
      <ProductList />
      <Cart cartList={cartList} />
    </>
  )
    ;
}

export default App;
