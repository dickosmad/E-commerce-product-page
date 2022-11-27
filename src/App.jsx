import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import ProductDetail from "./components/ProductDetail";
import Slideshow from "./components/Slideshow";
import data from "./data";

function App() {
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
