import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Menu from "./components/Menu";
import ProductDetail from "./components/ProductDetail";
import Slideshow from "./components/Slideshow";
import data from "./data";

function App() {
  const [price, setPrice] = useState(250);
  const [quantity, setQuantity] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const handlePriceChange = (discount) => setPrice(discount);

  return (
    <div className={`container ${showMenu ? "overlay" : ""}`}>
      <Menu
        setShowCart={setShowCart}
        setShowMenu={setShowMenu}
        showMenu={showMenu}
        quantity={quantity}
      />
      {showCart && <Cart price={price} quantity={quantity} />}
      <main>
        <Slideshow data={data} />
        <ProductDetail
          price={price}
          quantity={quantity}
          onPriceChange={handlePriceChange}
          setQuantity={setQuantity}
        />
      </main>
    </div>
  );
}

export default App;
