import React from 'react'
import './AICTE.css';
import IdeaLabTeam from "../images/asset 2.jpeg" 
import PuneFdeComp from "../images/asset 4.jpeg"
import AicteCarousel from './includes/AicteCarousel'
const AICTELAB = () => {
  return (

    <section className='py-3 AICTE'>
        <h1>AICTE IDEA LAB</h1>
        <div className='container AICTE-Container'>
            <div className='row'>
                <div className='col-md-12'>            
                    <p>
                        AICTE(All India Council for Technical Education) has launched a scheme for establishing AICTE-IDEA (Idea Development, Evaluation & Application) Lab in its approved institutions for encouraging students for application of Science, Technologies, Engineering and Mathematics (STEM) fundamentals towards enhanced hands-on experience and learning by doing.
                        There is one also in GGSIPU whose ---
                    </p>
                </div>
            </div>
            <div className='row py-3 staffdetail'>
                <div className='col-md-6'>
                    <h5>
                        Chief Mentor Nominated by Hon'ble VC : 
                    </h5>
                </div>
                <div className='col-md-6'>
                    <h5>
                        Prof. Amit Prakash Singh
                    </h5>
                </div>
                <div className='col-md-6'>
                    <h5>
                    Faculty Co-ordinator :	
                    </h5>
                </div>
                <div className='col-md-6'>
                    <h5>
                    Dr. Ruchi Sehrawat
                    </h5>
                </div>

                <div className='col-md-6'>
                    <h5>
                    Faculty Co-ordinator : 
                    </h5>
                </div>
                <div className='col-md-6'>
                    <h5>
                    Dr. M. K. Satyarthi
                    </h5>
                </div>


            </div>
        </div>

        <div className='container py-4 image-container AICTE-Container'>
            <div className='row'>
                <div className='col-md-6'>
                    <h5>IDEA LAB TEAM</h5>
                    <div className='sub-underline'></div>
                    <img src={IdeaLabTeam} alt="..."/>
                    {/* <p>ABBBA JAABA JABBBA ABBBA JAABA JABBBA ABBBA JAABA JABBBA ABBBA JAABA JABBBA ABBBA JAABA JABBBA ABBBA JAABA JABBBA </p> */}
                    
                </div>

                <div className='col-md-6'>
                    <h5>Participation of Tech Guru in FDP at Pune</h5>
                    <div className='sub-underline'></div>
                    <img src={PuneFdeComp} alt="..."></img>
                    {/* <p>ABBBA JAABA JABBBA ABBBA JAABA JABBBA ABBBA JAABA JABBBA ABBBA JAABA JABBBA ABBBA JAABA JABBBA ABBBA JAABA JABBBA </p> */}
                    
                </div>

            </div>
        </div>
        <div className='container advisoraicte AICTE-Container'>
            <h5>Visit of Dr. Neeraj Saxena, Advisor (AICTE) on 7-September 2022</h5>
            <p>
            Dr. Neeraj Saxena, Advisor, AICTE has visited East Campus of the university on 7-September 2022. An interaction meeting was attended by Mr. Mohan Kumar (HMRITM), Dr. Neetu Sharma and Dr. Archana Kumar (ADGITM), Dr. Munshi Yadav (GTBIT), Prof. Dharmendra Saini (BVPCoE), Rakesh Chander Saini and Dr. Nitin Sharma (MAIT) and Dr. Goldie Gabrani (VIPS). Prof. P.C. Sharma, Director (East Campus) chaired the meeting and welcome Dr. Saxena. Dr. Saxena has emphasized the importance of establishment of IDEA Lab. He also explained the importance of the IDEA lab and how this lab will help students to develop their skill in Electronics and Mechanical Engineering. 
            </p> <br/>
            <p>
            Prof. Amit Prakash Singh given the vote of thanks to all faculty attended the meeting. Prof. Singh also extended thanks to Dr. Saxena for sparing a time for visiting the university.
            </p>
            <AicteCarousel />
        </div>
      </section>
  )
}

export default AICTELAB;
