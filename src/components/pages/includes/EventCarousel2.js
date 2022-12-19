import React from 'react'
import './EventCarousel.css';
import Potential1 from './EventCarouselImage/asset 29.png';
import Potential2 from './EventCarouselImage/asset 30.png'
import Potential3 from './EventCarouselImage/asset 31.png';
const EventCarousel2 = () => {
  return (
    <div className='MoreEventCarousel row'>
    <div id="carouselExampleCaptions2" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div class="carousel-item active">
      <img src={Potential1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-md-block">
        <h5>INTRODUCTION TO IEEE XPLORE THROUGH ONLINE MODE</h5>
        <p>18-September 2022</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Potential2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-md-block">
      <h5>INTRODUCTION TO IEEE XPLORE THROUGH ONLINE MODE</h5>
        <p>18-September 2022</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Potential3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-md-block">
      <h5>INTRODUCTION TO IEEE XPLORE THROUGH ONLINE MODE</h5>
        <p>18-September 2022</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{/* Second card */}
    </div>
  )
}

export default EventCarousel2
