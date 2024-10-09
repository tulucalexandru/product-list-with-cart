import "./App.css";
import ProductTitle from "./components/cards/ProductTitle";
import productList from './assets/data.json'

function App() {
  return (
    <>
      {/* <AddToCart></AddToCart> */}
      {/* <ImageCard /> */}
      <ProductTitle title={productList[0].name} category={productList[0].category} price={productList[0].price}></ProductTitle>
    </>
  );
}

export default App;
