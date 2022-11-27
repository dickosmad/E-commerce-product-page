import React from "react";

export default function Cart() {
  return (
    <div className="cart">
      <div className="cart-title">Cart</div>
      <div className="cart-item">
        <div className="item-img">
          <img src="http://placehold.it/" />
        </div>
        <div className="product-infos">
          <p className="product-title"></p>
          <p className="product-price"></p>
        </div>
        <div className="delete-btn">
          <button>
            <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                id="a"
                fill="#C3CAD9"
                fill-rule="nonzero"
              />
            </svg>{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
