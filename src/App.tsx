import "./App.css";
import ProductTitle from "./components/ProductTitle";

type Props = {
  name: string;
}

function App(props: Props) {
  return (
    <>
      {/* <AddToCart></AddToCart> */}
      {/* <ImageCard /> */}
      <ProductTitle title={props.name}></ProductTitle>
    </>
  );
}

export default App;
