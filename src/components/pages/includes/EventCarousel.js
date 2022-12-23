import React from 'react'
import './EventCarousel.css';
const EventCarousel = (prop) => {
  const carouselID = "#"+prop.id;
    console.log(carouselID);
    
    return (
      <div className='MoreEventCarousel row'>
          <div id={prop.id} class="carousel slide" data-bs-ride="false">
            <div class="carousel-indicators">
              <button type="button" data-bs-target= {carouselID}  data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target= {carouselID} data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target= {carouselID} data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={prop.imgsrc1} class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-md-block">
                      <h5>{prop.title}</h5>
                      <p>{prop.date}</p>
                    </div>
                </div>
                <div class="carousel-item active">
                    <img src={prop.imgsrc2} class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-md-block">
                      <h5>{prop.title}</h5>
                      <p>{prop.date}</p>
                    </div>
                </div>
                <div class="carousel-item active">
                    <img src={prop.imgsrc3} class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-md-block">
                      <h5>{prop.title}</h5>
                      <p>{prop.date}</p>
                    </div>
                </div>
            </div>
        </div>
    <button class="carousel-control-prev" type="button" data-bs-target={carouselID} data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target={carouselID} data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
)
}

export default EventCarousel
