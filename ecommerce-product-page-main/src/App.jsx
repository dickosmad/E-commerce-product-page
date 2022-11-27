import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import ProductDetail from "./components/ProductDetail";
import Slideshow from "./components/Slideshow";
import data from "./data";

function App() {
  const [price, setPrice] = useState(250);
  const [quantity, setquantity] = useState(1);
  const DISCOUNT = 50;
  return (
    <div className="container">
      <Menu />
      <main>
        <Slideshow data={data} />
        <ProductDetail />
      </main>
    </div>
  );
}

export default App;
