import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css";

const footer = () => {
  return (

    <section className='footer footer-dark bg-dark text-white py-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <h6>Company Info</h6>
                    <hr />
                    <p>
                        MUMBO JUMBO
                    </p>
                </div>

                <div className='col-md-4'>
                    <h6>Quicks Links</h6>
                    <hr />
                    <div><Link to="/" className='text-decoration-none'>Home</Link></div>
                    <div><Link to="/events" className='text-decoration-none'>Events</Link></div>
                    <div><Link to="/contact" className='text-decoration-none'>Contact Us</Link></div>
                </div>

                <div className='col-md-4'>
                    <h6>Contact Information</h6>
                    <hr />
                    <div><p>Some Address, Delhi-78 India</p></div>
                    <div><p>+91 XXXXXXXXX</p></div>
                    <div><p>demo@gmail.com</p></div>
                    <div><p>Company Name</p></div>
                </div>
            </div>
        </div>

    </section>

  )
}

export default footer
