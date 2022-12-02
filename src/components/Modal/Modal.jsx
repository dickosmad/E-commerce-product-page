import ReactDOM from "react-dom";
import React, { useState } from "react";

import "./Modal.css";
export default function Modal({ data, setShowModal, showModal }) {
  const [currentImg, setCurrentImg] = useState(0);
  const gotoNextImg = () =>
    setCurrentImg((prevImg) => (prevImg === data.length - 1 ? 0 : prevImg + 1));
  const gotoPreviousImg = () =>
    setCurrentImg((prevImg) => (prevImg === 0 ? 0 : prevImg - 1));
  return ReactDOM.createPortal(
    <>
      {showModal && (
        <div className="modal-wrapper">
          <button
            className="modal-btn-close"
            onClick={() => setShowModal(false)}
          >
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#69707D"
                fill-rule="evenodd"
              />
            </svg>
          </button>
          <div className="main-image">
            <img src={data[currentImg].imgUrl} alt={data[currentImg].alt} />
            <button className="next-arrow" onClick={gotoNextImg}>
              <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m2 1 8 8-8 8"
                  stroke="#1D2026"
                  stroke-width="3"
                  fill="none"
                  fill-rule="evenodd"
                />
              </svg>
            </button>
            <button className="previous-arrow" onClick={gotoPreviousImg}>
              <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 1 3 9l8 8"
                  stroke="#1D2026"
                  stroke-width="3"
                  fill="none"
                  fill-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="thumbnail-images-wrapper">
            {data?.map(({ thumbnailUrl, alt, id }, index) => (
              <div
                onClick={() => setCurrentImg(index)}
                key={id}
                className="thumbnail-image"
              >
                <img
                  className={`${
                    index + 1 === data[currentImg].id ? "active-image" : ""
                  }`}
                  src={thumbnailUrl}
                  alt={alt}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>,
    document.getElementById("portal-root")
  );
}
