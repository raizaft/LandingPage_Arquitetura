import React, { useState } from "react";
import "./Carrossel.css";

function Carrossel() {
  const images = ["img/casa01.png", "img/casa02.png", "img/casa03.png"];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carrossel-container">
      <div className="carrossel-slide">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <div id="botoes">
        <button className="prev-button" onClick={prevSlide}>
          &lt; {}
        </button>
        <button className="next-button" onClick={nextSlide}>
          &gt; {}
        </button>
      </div>
    </div>
  );
}

export default Carrossel;
