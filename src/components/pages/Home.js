import React from 'react'
import Slider from '../inc/Slider';
import MV from './includes/MV';

const Home = () => {
  return (
    <div>
      <Slider id="HomePageCarousel"
          imgsrc1="./HomePageCarousel/asset 8.jpeg"
          imgsrc2="./HomePageCarousel/asset 5.jpeg"
          imgsrc3="./HomePageCarousel/asset 11.jpeg"
          imgsrc4="./HomePageCarousel/asset 12.jpeg"
          imgsrc5="./HomePageCarousel/asset 13.jpeg"
        />
      <section className='py-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <h4>VISION</h4>
                    <div className='underline mb-3'></div>
                    <p>To provide an enabling environment for nurturing the impactful ideas into commercialisable innovative products, technologies, services and S & T based solutions which can benefit the society and foster synergy between industry and academia on one hand and with the National Laboratories and IITs on the other hand.</p>
                </div>

            </div>
        </div>
       
      </section>
      <MV/>
    </div>
  )
}

export default Home;
