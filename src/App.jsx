import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Menu from "./components/Menu";
import ProductDetail from "./components/ProductDetail";
import Slideshow from "./components/Slideshow";
import data from "./data";

function App() {
  const [price, setPrice] = useState(250);
  const [quantity, setQuantity] = useState(1);
  const DISCOUNT = 50;
  return (
    <div className="container">
      <Menu />
      <Cart price={price} quantity={quantity} />
      <main>
        <Slideshow data={data} />
        <ProductDetail quantity={quantity} setQuantity={setQuantity} />
      </main>
    </div>
  );
}

export default App;
