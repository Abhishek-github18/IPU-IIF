import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import GGSIPU from "../Navbar/GGSIPU-logo.png";
//navbar design :- bg-dark navbar-dark
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top   py-4" style={{backgroundColor: "#e3f2fd"}}>
    
      <div className="container navbarContent">
        
        <Link className="navbar-brand" to="/">
        <div className="navbar-main-ipu-image-container">
          <img src={GGSIPU} alt="" className="navbar-image-ipu"/>
        </div>
          <i className="navbar-brand-name">IPU-IIF</i>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-4">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/events"
              >
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/notices">
                Notices
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                href="https://www.sih.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Smart India Hackathon
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/lab">
                AICTE-IDEA Lab
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  active" to="/edp">
                EDP
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/patent">
                Patents
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/contact">
                Contact Us
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link active" to="/login">
                Login
              </Link>
            </li> */}

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
