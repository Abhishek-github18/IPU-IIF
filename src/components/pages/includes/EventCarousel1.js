import React from 'react'
import './EventCarousel.css';
import Potential4 from './EventCarouselImage/asset 24.jpeg';
import Potential5 from './EventCarouselImage/asset 25.jpeg'
import Potential6 from './EventCarouselImage/asset 26.jpeg';

const EventCarousel1 = () => {
  return (
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Potential4} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-md-block">
        <h5>INTRODUCATION TO MATLAB: INSTALLATION AND FEATURES</h5>
        <p>1-October 2022</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Potential5} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-md-block">
      <h5>INTRODUCATION TO MATLAB: INSTALLATION AND FEATURES</h5>
        <p>1-October 2022</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Potential6} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-md-block">
      <h5>INTRODUCATION TO MATLAB: INSTALLATION AND FEATURES</h5>
        <p>1-October 2022</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
 )
}

export default EventCarousel1
