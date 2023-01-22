import React from "react";
import AdminNavbar from "../../inc/AdminNavbar/AdminNavbar";
import WelcomeAdmin from "../AdminLandingpage/17973908.jpg";
import "./AdminLandingPage.css";
import { useEffect } from "react";

const AdminLandingPage = () => {
  return (
    <div>
      <AdminNavbar />

      <div className="adminWelcome">
        <div className="building">
          <section className="room">
            <div className="room-walls"></div>
            <p className="adminpage">Hello! Welcome to IPU-IIF Admin Dashboard!!!</p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default AdminLandingPage;
