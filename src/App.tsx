import "./App.css";
// import ProductList from "./components/layouts/ProductList";
import CartItem from "./components/cards/CartItem";

type cartListItem = {
  name: string,
  price: string,
  totalPrice: string,
  quantity: string
}

type cartList = cartListItem[]

const cartList = [
  {
    "name": "Waffle",
    "price": "6.50",
    "totalPrice": "13.00",
    "quantity": "2"
  }
]

function App() {
  return (
    <>
      {/* <AddToCart></AddToCart> */}
      {/* <ImageCard /> */}
      {/* <ProductList /> */}
      <CartItem cartItem={cartList[0]} />
    </>
  )
    ;
}

export default App;
