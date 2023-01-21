import axios from "axios";
import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AdminNavbar from "../../inc/AdminNavbar/AdminNavbar";
import "./AddPatent.css";
import PatentRowStructure from "../Patent/PatentRowStructure";

const AddPatent = () => {
  let serialNo = 0;
  const [certificate01, setCertificate] = useState();
  const [patentDetails, setPatentDetails] = useState();
  const navigate = useNavigate();
  const [patentgrantdata, setpatentgrantdata] = useState();

  const fetchPatentGrantData = async () => {
    const response = await axios.get("https://ipu-iif.onrender.com/patents");
    // console.log(response.data);
    setpatentgrantdata(response.data);
  };

  useEffect(() => {
    fetchPatentGrantData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatentDetails({
      ...patentDetails,
      [name]: value,
    });
  };
  const submitPatent = (e) => {
    const patent = new FormData();
    patent.append("patentGrantDate", patentDetails.patentGrantDate);
    patent.append("patentee", patentDetails.patentee);
    patent.append("patentNo", patentDetails.patentNo);
    patent.append("certificate", certificate01);
    let userToken = localStorage.getItem("user_token");
    // console.log(userToken);
    const config = {
      headers: { "x-access-token": userToken },
    };
    axios
      .post("https://ipu-iif.onrender.com/addpatents", patent, config)
      .then((res) => {
        // console.log(res.data);
        navigate("/addevents");
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };

  return (
    <div>
      <AdminNavbar />
      <div className="container">
        <h2 className="patentheading"> PATENTS </h2>
        <div className="patentgranted table-responsive">
          <h2>LIST OF PATENT GRANTED TO GGSIPU</h2>
          <table class="table table-hover">
            <thead>
              <tr class="bg-dark tableheading">
                <th scope="col" class="bg-dark tableheading"></th>
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
      </div>
      <hr />
      <div class="col-md-6 offset-md-3 mt-5 container">
        <h2>Add new Patent granted to GGSIPU</h2>
        <div
        // accept-charset="UTF-8"
        // method="POST"
        // enctype="multipart/form-data"
        //   target="_blank"
        >
          <div class="form-group">
            <label for="patentName" className="mb-1">
              Patentee Name
            </label>
            <input
              type="text"
              name="patentee"
              class="form-control"
              id="patentee"
              placeholder="Enter the Patentee Name "
              required="required"
              onChange={handleChange}
            />
          </div>
          <div class="form-group mt-3">
            <label for="" required="required" className="mb-1">
              Patent No.
            </label>
            <input
              type="text"
              name="patentNo"
              class="form-control"
              id=""
              placeholder="It would on the certificate"
              onChange={handleChange}
            />
          </div>
          <div class="form-group mt-3">
            <label className="mb-1">Patent Grant Date</label>
            <input
              type="text"
              name="patentGrantDate"
              class="form-control"
              placeholder="Date Format : Date-Month-Year"
              onChange={handleChange}
            />
          </div>
          <hr />
          <div class="form-group mt-3 mt-3" className="mb-1">
            <label class="mr-2">Upload a certificate (pdf format) :</label>
            <input
              type="file"
              name="certificate"
              onChange={(e) => setCertificate(e.target.files[0])}
            />
          </div>
          <hr />
          <button type="submit" class="btn btn-primary" onClick={submitPatent}>
            Submit
          </button>
        </div>
        <hr className="divide" />
      </div>

      {/* <div class="col-md-6 offset-md-3 mt-5 container">
        <h2>Add new Patent published by GGSIPU</h2>
        <form
          accept-charset="UTF-8"
          action="https://getform.io/f/{your-form-endpoint-goes-here}"
          method="POST"
          enctype="multipart/form-data"
          target="_blank"
        >
          <div class="form-group">
            <label for="exampleInputName" className="mb-1">
              {" "}
              Patentee Name
            </label>
            <input
              type="text"
              name="fullname"
              class="form-control"
              id="exampleInputName"
              placeholder="Enter the Patentee Name "
              required="required"
            />
          </div>
          <div class="form-group mt-3">
            <label
              for="exampleInputEmail1"
              required="required"
              className="mb-1"
            >
              Patent No.
            </label>
            <input
              type="text"
              name="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="It would on the certificate"
            />
          </div>
          <div class="form-group mt-3">
            <label for="exampleFormControlSelect1" className="mb-1">
              Patent Published Date
            </label>
            <input
              type="email"
              name="email"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Date Format : Date-Month-Year"
            />
          </div>
          <hr />
          <div class="form-group mt-3 mt-3" className="mb-1">
            <label class="mr-2">Upload related document (pdf format) :</label>
            <input type="file" name="file" />
          </div>
          <hr />
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div> */}
    </div>
  );
};

export default AddPatent;
