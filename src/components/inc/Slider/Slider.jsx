import React from "react";
import "./Slider.css";

const Slider = (prop) => {
  const carouselId = "#" + prop.id;
  // console.log(carouselId);
  return (
    <div
      id={prop.id}
      className="carousel homepagecarousel slide "
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item homepage-carousel-item active">
          <img
            src={prop.imgsrc1}
            className="d-block w-100"
            height="800px"
            alt="Asset 5"
          />
        </div>
        <div className="carousel-item homepage-carousel-item">
          <img
            src={prop.imgsrc2}
            className="d-block w-100"
            height="800px"
            alt="..."
          />
        </div>
        <div className="carousel-item homepage-carousel-item">
          <img
            src={prop.imgsrc3}
            className="d-block w-100"
            height="800px"
            alt="..."
          />
        </div>
        <div className="carousel-item homepage-carousel-item">
          <img
            src={prop.imgsrc4}
            className="d-block w-100"
            height="800px"
            alt="..."
          />
        </div>
        <div className="carousel-item homepage-carousel-item">
          <img
            src={prop.imgsrc5}
            className="d-block w-100"
            height="800px"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={carouselId}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={carouselId}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
