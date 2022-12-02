import React, { useState } from "react";
import Modal from "../Modal";
import "./Slideshow.css";

export default function Slideshow({ data, setShowModal, showModal }) {
  const [currentImg, setCurrentImg] = useState(0);
  const gotoNextImg = () =>
    setCurrentImg((prevImg) => (prevImg === data.length - 1 ? 0 : prevImg + 1));
  const gotoPreviousImg = () =>
    setCurrentImg((prevImg) => (prevImg === 0 ? 0 : prevImg - 1));
  return (
    <article>
      <div className="slideshow-image">
        <div className="main-image">
          <img
            onClick={() => setShowModal(true)}
            src={data[currentImg].imgUrl}
            alt={data[currentImg].alt}
          />
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
              className={`thumbnail-image`}
            >
              <img
                src={thumbnailUrl}
                className={`${
                  index + 1 === data[currentImg].id ? "active-image" : ""
                }`}
                alt={alt}
              />
            </div>
          ))}
        </div>
      </div>
      <Modal
        currentImg={currentImg}
        data={data}
        gotoNextImg={gotoNextImg}
        gotoPreviousImg={gotoPreviousImg}
        setShowModal={setShowModal}
        showModal={showModal}
      />
    </article>
  );
}
