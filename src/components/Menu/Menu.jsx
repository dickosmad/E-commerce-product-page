import React from "react";

import "./Menu.css";

export default function Menu({ quantity, setShowCart }) {
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <span className="burger-icon">
              <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
                  fill="#69707D"
                  fill-rule="evenodd"
                />
              </svg>
            </span>
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
              alt="user-cart"
              className="cart-img"
              onClick={() => setShowCart((prevState) => !prevState)}
              src="/images/icon-cart.svg"
            />
            <span className="items-number">{quantity} </span>
          </div>
          <div className="user-avatar">
            <img src="/images/image-avatar.png" alt="user-avatar-image" />
          </div>
        </div>
      </header>
    </>
  );
}
