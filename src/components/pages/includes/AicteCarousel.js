import React from 'react'
import AdvisorVisit1 from './EventCarouselImage/asset 14.jpeg'
import AdvisorVisit2 from './EventCarouselImage/asset 15.jpeg'
import AdvisorVisit3 from './EventCarouselImage/asset 16.jpeg'
import AdvisorVisit4 from './EventCarouselImage/asset 18.jpeg'

const AicteCarousel = () => {
  return (
    <div className='AICTECarousel row'>
        <div id="carouselExampleCaptions3" class="carousel slide" data-bs-ride="false">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div class="carousel-item active">
                    <img src={AdvisorVisit1} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={AdvisorVisit2} class="d-block w-100" alt="..."/>
                <div class="carousel-item">
                    <img src={AdvisorVisit3} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={AdvisorVisit4} class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    </div>
  );
}

export default AicteCarousel;
