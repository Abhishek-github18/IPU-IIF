import React from 'react'
import { Link } from 'react-router-dom'
import GGSIPU from "../AdminNavbar/GGSIPU-logo.png";

const AdminNavbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg sticky-top  py-4" style={{backgroundColor: "#e3f2fd"}}>
      <div className="container navbarContent">
        <Link className="navbar-brand" to="/addevents">
        <div className="navbar-main-ipu-image-container">
          <img src={GGSIPU} alt="" className="navbar-image-ipu"/>
        </div>
          <emp className="navbar-brand-name">IPU-IIF</emp>
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
                to="/addevents"
              >
                AddEvents
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/addnotices">
                AddNotices
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link active" to="/lab">
                AICTE-IDEA Lab
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link className="nav-link  active" to="/edp">
                EDP
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link active" to="/addpatents">
                AddPatents
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/queries">
                Queries
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </div>
  )
}

export default AdminNavbar
