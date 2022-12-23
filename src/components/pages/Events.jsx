import React from 'react'
import Research from "../images/ValueAddedWorkShopOnReasearch.jpeg"
import Business from "../images/StartNewBusiness.jpeg"
import HashTech from "../images/HashTech.jpeg"
import EventCarousel from './includes/EventCarousel'

const Events = () => {
  return (
    <div>
    <section className="big-event-section">
    <h1 >EVENTS</h1>
    <div className="container flex big-event-container">
    
        <div className="feature-img">
            <img src={Research} alt="" />
        </div>
        <div className="feature-desc flex">
            <h4>Value-added Workshop on Research Innovation & Incubation Ecosystem to enable Start-up Culture</h4>
            <h3>Organized by USBT, Directorate of Research & Innovation and IPU IIF</h3>
            <p>Dates: May 11-14, 2022</p>
        </div>
    </div>
</section>
   <section className="big-event-section">
    <div className="container flex big-event-container">
        <div className="feature-desc flex">
            <h4>VALUE-ADDED COURSE ON HOW TO START A NEW BUSINESS</h4>
            <h3>Organized by USMS and IPU IIF</h3>
            <p>Dates: June 6-10, 2022</p>
        </div>
        <div className="feature-img">
            <img src={Business} style={{width:"84%"}} alt="" />
        </div>
    </div>
</section>
   <section className="big-event-section">
    <div className="container flex big-event-container">

        <div className="feature-img">
            <img src={HashTech} alt="" />
        </div>
        <div className="feature-desc flex">
            <h4>#HASHTECH TECHWEEK</h4>
            <h3>Organized by USS ACM Student Chapter in collaboration with EDC, IPU IIF during May 11-17, 2022</h3>
            <p>Event Coordinator(s) : Dr. Ruchi Sehrawat and Dr. Jaspreeti Singh</p>
        </div>
    </div>
</section>
<section className='py-5'>
        <div className='container'>
            <div className='row'>
            <div className='col-md-12'>
                <h1>Some Other Events</h1>
            </div>
                <div className='col-md-4'>
                    <div className='card'>
                        <div className='card-body'>
                            <EventCarousel id="EventCarousel1"
                                imgsrc1="./EventCarouselImage/asset 7.jpeg"
                                imgsrc2="./EventCarouselImage/asset 8.jpeg"
                                imgsrc3="./EventCarouselImage/asset 11.jpeg"
                                title="ONE DAY WORKSHOP ON POTENTIAL OF INNOVATION AND START-UP IN INDIA"
                                date="22-September 2022" />
                        </div>
                    </div>                 
                </div>
                <div className='col-md-4'>
                    <div className='card'>
                        <div className='card-body'>
                            <EventCarousel id="EventCarousel2"
                                imgsrc1="./EventCarouselImage/asset 24.jpeg"
                                imgsrc2="./EventCarouselImage/asset 25.jpeg"
                                imgsrc3="./EventCarouselImage/asset 26.jpeg"
                                title="INTRODUCATION TO MATLAB: INSTALLATION AND FEATURES"
                                date="1-October 2022" />
                        </div>
                    </div>                 
                </div>
                <div className='col-md-4'>
                    <div className='card'>
                        <div className='card-body'>
                            <EventCarousel id="EventCarousel3"
                                imgsrc1="./EventCarouselImage/asset 29.png"
                                imgsrc2="./EventCarouselImage/asset 30.png"
                                imgsrc3="./EventCarouselImage/asset 31.png"
                                title="INTRODUCTION TO IEEE XPLORE THROUGH ONLINE MODE"
                                date="18-September 2022" />
                        </div>
                    </div>                 
                </div>
            </div>
        </div>
       
      </section>

</div>
  );
}

export default Events
