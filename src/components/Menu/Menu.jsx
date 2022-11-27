import React from "react";

import "./Menu.css";

export default function Menu() {
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <h1>sneakers</h1>
          </div>
          <ul className="nav-items">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
          </ul>
        </nav>
        <div className="shopping-container">
          <div className="user-shopping-cart">
            <img
              className="cart-img"
              src="/images/icon-cart.svg"
              alt="user-cart"
            />
            <span className="items-number"> 1</span>
          </div>
          <div className="user-avatar">
            <img src="/images/image-avatar.png" alt="user-avatar-image" />
          </div>
        </div>
      </header>
    </>
  );
}
