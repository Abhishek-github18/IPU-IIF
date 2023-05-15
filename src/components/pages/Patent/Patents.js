import React from "react";
import "./Patent.css";
import Navbar from "../../inc/Navbar/Navbar";
import Footer from "../../inc/Footer/footer";
import PatentRowStructure from "./PatentRowStructure";
import { useState, useEffect } from "react";
// import Spinner from "./../../common/spinner"
import PacmanLoader from "react-spinners/PacmanLoader";
import axios from "axios";

const Patents = () => {
  const [patentgrantdata, setpatentgrantdata] = useState();

  //preloader setting
  const [loading, setloading] = useState(true);
  const [color] = useState("#1D267D");

  // const [patentpublisheddata, setpatentpublisheddata] = useState();
  let serialNo = 0;

  const fetchPatentGrantData = async () => {
    // console.log(loading);
    const response = await axios.get("https://ipu-iif.onrender.com/patents");
    setloading(false);
    // console.log(loading);
    // console.log(response.data);
    setpatentgrantdata(response.data);
  };

  useEffect(() => {
    // console.log(loading);
    fetchPatentGrantData();
    // setloading(false);
    // console.log(loading);
  }, []);

  return (
    <div className="headerfooter">
      <Navbar />
      {loading ? (
        <div className="loading-container">
          {/* <h1>Hello There</h1> */}
          <PacmanLoader
            color={color}
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="container">
          <h2 className="patentheading"> PATENTS </h2>
          <div className="patentgranted table-responsive">
            <h2>LIST OF PATENT GRANTED TO GGSIPU</h2>
            <table className="table table-hover">
              <thead>
                <tr className="bg-dark tableheading">
                  <th scope="col" className="bg-dark tableheading"></th>
                  <th scope="col">Patent Grant Date</th>
                  <th scope="col">Patent No.</th>
                  <th scope="col">Patentee Name</th>
                  <th scope="col">Certificate</th>
                </tr>
              </thead>
              <tbody>
                {patentgrantdata &&
                  patentgrantdata.map((data) => (
                    <PatentRowStructure
                      key={`key${data._id}`}
                      date={data.patentGrantDate}
                      no={data.patentNo}
                      name={data.patentee}
                      href={data.certificate}
                      count={++serialNo}
                    />
                  ))}
              </tbody>
            </table>
          </div>
          <hr />
          <div className="patentpublished table-responsive mb-5 mt-4">
            {/* <h2>LIST OF PATENT PUBLISHED FROM GGSIPU</h2> */}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Patents;
