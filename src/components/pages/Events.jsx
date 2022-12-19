import React from 'react'
import Research from "../images/ValueAddedWorkShopOnReasearch.jpeg"
import Business from "../images/StartNewBusiness.jpeg"
import HashTech from "../images/HashTech.jpeg"
import EventCarousel from './includes/EventCarousel'
import EventCarousel1 from './includes/EventCarousel1'
import EventCarousel2 from './includes/EventCarousel2'

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
                            <EventCarousel/>
                        </div>
                    </div>                 
                </div>
                <div className='col-md-4'>
                    <div className='card'>
                        <div className='card-body'>
                            <EventCarousel1/>
                        </div>
                    </div>                 
                </div>
                <div className='col-md-4'>
                    <div className='card'>
                        <div className='card-body'>
                            <EventCarousel2/>
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
