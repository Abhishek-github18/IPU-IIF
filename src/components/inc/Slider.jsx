import React from 'react';
import Assest1 from "../images/asset 5.jpeg";
import Assest2 from "../images/asset 8.jpeg";
import Assest3 from "../images/asset 11.jpeg";
import Assest4 from "../images/asset 12.jpeg";
import Assest5 from "../images/asset 13.jpeg";
import Assest6 from "../images/asset 14.jpeg";
import Assest7 from "../images/asset 15.jpeg";
import "./Slider.css";

const Slider = () => {
  return (
    <div id="carouselExampleIndicators" class="carousel homepagecarousel slide " data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item homepage-carousel-item active">
      <img src={Assest1} class="d-block w-100" height="800px" alt="Asset 5" />
    </div>
    <div class="carousel-item homepage-carousel-item">
      <img src={Assest2} class="d-block w-100" height="800px" alt="..." />
    </div>
    <div class="carousel-item homepage-carousel-item">
      <img src={Assest3} class="d-block w-100" height="800px" alt="..." />
    </div>
    <div class="carousel-item homepage-carousel-item">
      <img src={Assest4} class="d-block w-100" height="800px" alt="..." />
    </div>
    <div class="carousel-item homepage-carousel-item">
      <img src={Assest5} class="d-block w-100" height="800px" alt="..." />
    </div>
    <div class="carousel-item homepage-carousel-item">
      <img src={Assest6} class="d-block w-100" height="800px" alt="..." />
    </div>
    <div class="carousel-item homepage-carousel-item">
      <img src={Assest7} class="d-block w-100" height="800px" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Slider;
