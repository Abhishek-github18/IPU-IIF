import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark py-4">
  <div className="container">
    <Link className="navbar-brand" to="/"><emp className='navbar-brand-name'>IPU-IIF</emp></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto gap-4">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/events">Events</Link>
        </li>
        <li className="nav-item">
        <a className='nav-link active' href="https://www.sih.gov.in/" target="_blank">Smart India Hackathon</a>
          {/* <Link className="nav-link active" to="https://www.sih.gov.in/">Smart India Hackathon</Link> */}
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/lab">AICTE-IDEA Lab</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  active" to ="/edp">EDP</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to ="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Navbar;
