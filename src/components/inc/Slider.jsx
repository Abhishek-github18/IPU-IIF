import React from "react";
import "./Slider.css";

const Slider = (prop) => {
  const carouselId = "#" + prop.id;
  console.log(carouselId);
  return (
    <div
      id={prop.id}
      class="carousel homepagecarousel slide "
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item homepage-carousel-item active">
          <img
            src={prop.imgsrc1}
            class="d-block w-100"
            height="800px"
            alt="Asset 5"
          />
        </div>
        <div class="carousel-item homepage-carousel-item">
          <img
            src={prop.imgsrc2}
            class="d-block w-100"
            height="800px"
            alt="..."
          />
        </div>
        <div class="carousel-item homepage-carousel-item">
          <img
            src={prop.imgsrc3}
            class="d-block w-100"
            height="800px"
            alt="..."
          />
        </div>
        <div class="carousel-item homepage-carousel-item">
          <img
            src={prop.imgsrc4}
            class="d-block w-100"
            height="800px"
            alt="..."
          />
        </div>
        <div class="carousel-item homepage-carousel-item">
          <img
            src={prop.imgsrc5}
            class="d-block w-100"
            height="800px"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target={carouselId}
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target={carouselId}
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
