import React, { useContext, useState } from "react";
import AdminNavbar from "../../inc/AdminNavbar/AdminNavbar";
import axios from "axios";
import "./AdminLandingPage.css";
import { useEffect } from "react";
import { data } from "../../../context/DataProvider";

const AdminLandingPage = () => {
  const [details, setDetails] = useState({});
  const { account } = useContext(data);

  const fetchDetails = async () => {
    const result = await axios.get("http://localhost:8000/getdetails");
    // console.log(result.data);
    setDetails(result.data);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div>
      <AdminNavbar />
      <div class="welcomeAdminMessage">
        <h2
          style={{ fontWeight: "bold", fontSize: "2rem", color: "#0c134f" }}
          class="typed"
        >
          Welcome to the dashboard !!!!{account.username}
        </h2>
      </div>
      <div class="cardContainerAdmin">
        <div class="cardAdmin card1">
          <div class="card__inner">
            <h2>Events</h2>
            <h3>
              All the events pertaining to the IPU-IIC have been posted.
              <p>Total Count : {details.totalEvents}</p>{" "}
            </h3>
          </div>
        </div>

        <div class="cardAdmin card2">
          <div class="card__inner">
            <h2>Patent</h2>
            <h3>
              All the details regarding the patents granted to the university
              have been posted.
              <p>Total Count : {details.totalpatent}</p>
            </h3>
          </div>
        </div>

        <div class="cardAdmin card4">
          <div class="card__inner">
            <h2>Notices</h2>
            <h3>
              {" "}
              All the notices pertaining to the incubation and innovation
              society have been posted.
              <p>Total Count : {details.totalNotice}</p>
            </h3>
          </div>
        </div>

        <div class="cardAdmin card3">
          <div class="card__inner">
            <h2>Queries</h2>
            <h3>
              All the queries from students regarding the incubation and
              innovation center have been posted.
              <p>Total Count : {details.totalquery}</p>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLandingPage;
