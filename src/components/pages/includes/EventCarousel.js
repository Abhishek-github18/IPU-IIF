import React from 'react'
import './EventCarousel.css';
const EventCarousel = (prop) => {
  const carouselID = "#"+prop.id;
    // console.log(carouselID);
    
    return (
      <div className='MoreEventCarousel row'>
          <div id={prop.id} className="carousel slide" data-bs-ride="false">
            <div className="carousel-indicators">
              <button type="button" data-bs-target= {carouselID}  data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target= {carouselID} data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target= {carouselID} data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={prop.imgsrc1} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-md-block">
                      <h5>{prop.title}</h5>
                      <p>{prop.date}</p>
                    </div>
                </div>
                <div className="carousel-item active">
                    <img src={prop.imgsrc2} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-md-block">
                      <h5>{prop.title}</h5>
                      <p>{prop.date}</p>
                    </div>
                </div>
                <div className="carousel-item active">
                    <img src={prop.imgsrc3} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-md-block">
                      <h5>{prop.title}</h5>
                      <p>{prop.date}</p>
                    </div>
                </div>
            </div>
        </div>
    <button className="carousel-control-prev" type="button" data-bs-target={carouselID} data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target={carouselID} data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
)
}

export default EventCarousel
