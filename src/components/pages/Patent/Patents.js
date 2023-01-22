import React from "react";
import "./Patent.css";
import Navbar from "../../inc/Navbar/Navbar";
import Footer from "../../inc/Footer/footer";
import PatentRowStructure from "./PatentRowStructure";
import { useState, useEffect } from "react";
import axios from "axios";

const Patents = () => {
  const [patentgrantdata, setpatentgrantdata] = useState();
  // const [patentpublisheddata, setpatentpublisheddata] = useState();
  let serialNo = 0;

  const fetchPatentGrantData = async () => {
    const response = await axios.get("https://ipu-iif.onrender.com/patents");
    // console.log(response.data);
    setpatentgrantdata(response.data);
  };

  useEffect(() => {
    fetchPatentGrantData();
  }, []);

  return (
    <div className="headerfooter">
      <Navbar />
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
                      id={data._id}
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
      <Footer />
    </div>
  );
};

export default Patents;
