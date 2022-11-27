import React, { useState } from "react";
import "./Slideshow.css";

export default function Slideshow({ data }) {
  console.log("Slideshow", data);
  const [currentImg, setCurrentImg] = useState(0);
  const gotoNextImg = () =>
    setCurrentImg((prevImg) => (prevImg === data.length - 1 ? 0 : prevImg + 1));
  const gotoPreviousImg = () =>
    setCurrentImg((prevImg) => (prevImg === 0 ? 0 : prevImg - 1));
  return (
    <article>
      <div className="slideshow-image">
        <div className="main-image">
          <img src={data[currentImg].imgUrl} alt={data[currentImg].alt} />
        </div>
        <div className="thumbnail-images-wrapper">
          {data?.map(({ thumbnailUrl, alt, id }, index) => (
            <div
              onClick={() => setCurrentImg(index)}
              key={id}
              className="thumbnail-image"
            >
              <img src={thumbnailUrl} alt={alt} />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
