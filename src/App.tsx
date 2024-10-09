import "./App.css";
import ProductCard from "./components/cards/ProductCard";
import productList from './assets/data.json'

function App() {
  return (
    <>
      {/* <AddToCart></AddToCart> */}
      {/* <ImageCard /> */}
      <ProductCard image={productList[0].image} name={productList[0].name} category={productList[0].category} price={productList[0].price.toString()} />
    </>
  );
}

export default App;
