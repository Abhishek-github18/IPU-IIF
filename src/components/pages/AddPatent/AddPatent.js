import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../../inc/AdminNavbar/AdminNavbar";
import "./AddPatent.css";
import PatentRowStructure from "../Patent/PatentRowStructure";
import { Watch } from "react-loader-spinner";
import swal from "sweetalert";

const AddPatent = () => {
  let serialNo = 0;
  const [certificate01, setCertificate] = useState();
  const [patentDetails, setPatentDetails] = useState({});
  const [disable, setDisable] = useState(false);
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
    if (
      patentDetails === undefined ||
      patentDetails.patentGrantDate === undefined ||
      patentDetails.patentee === "" ||
      patentDetails.patentNo === "" ||
      certificate01 === ""
    ) {
      swal({
        title: "Error!",
        dangerMode: true,
        closeOnClickOutside: false,
        text: "All fields are mandatory to fill",
        icon: "error",
        confirmButtonText: "Go Back",
        customClass: {
          container: "swal-container",
          text: "swal-text",
        },
      });
    } else {
      const patent = new FormData();
      patent.append("patentGrantDate", patentDetails.patentGrantDate);
      patent.append("patentee", patentDetails.patentee);
      patent.append("patentNo", patentDetails.patentNo);
      patent.append("certificate", certificate01);
      let userToken = sessionStorage.getItem("accessToken");
      // console.log(userToken);
      //eslint-disable-next-line
      const config = {
        headers: { Authorization: userToken },
      };
      setDisable(1);
      axios
        .post("https://ipu-iif.onrender.com/addpatents", patent, config)
        .then((res) => {
          navigate("/adminlandingpage");
        })
        .catch((err) => {
          alert(err.response.data);
        });
    }
  };

  return (
    <div>
      <AdminNavbar />
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
              {patentgrantdata ? (
                patentgrantdata.map((data) => (
                  <PatentRowStructure
                    key={`key${data._id}`}
                    date={data.patentGrantDate}
                    no={data.patentNo}
                    name={data.patentee}
                    href={data.certificate}
                    count={++serialNo}
                  />
                ))
              ) : (
                <Watch
                  height="150"
                  width="1100"
                  radius="48"
                  color="#0c134f"
                  ariaLabel="watch-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                />
              )}
            </tbody>
          </table>
        </div>
      </div>
      <hr />
      <div className="col-md-6 offset-md-3 mt-5 container">
        <h2>Add new Patent granted to GGSIPU</h2>
        <div
        // accept-charset="UTF-8"
        // method="POST"
        // enctype="multipart/form-data"
        //   target="_blank"
        >
          <div className="form-group">
            <label htmlFor="patentName" className="mb-1">
              Patentee Name
            </label>
            <input
              disabled={disable}
              type="text"
              name="patentee"
              className="form-control"
              id="patentee"
              placeholder="Enter the Patentee Name "
              required="required"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label required="required" className="mb-1">
              Patent No.
            </label>
            <input
              disabled={disable}
              type="text"
              name="patentNo"
              className="form-control"
              id=""
              placeholder="It would on the certificate"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label className="mb-1">Patent Grant Date</label>
            <input
              disabled={disable}
              type="text"
              name="patentGrantDate"
              className="form-control"
              placeholder="Date Format : Date-Month-Year"
              onChange={handleChange}
            />
          </div>
          <hr />
          <div className="form-group mt-3 mt-3 mb-1">
            <label className="mr-2">Upload a certificate (pdf format) :</label>
            <input
              disabled={disable}
              type="file"
              name="certificate"
              onChange={(e) => setCertificate(e.target.files[0])}
            />
          </div>
          <hr />
          <button
            disabled={disable}
            type="submit"
            className="btn btn-primary"
            onClick={submitPatent}
          >
            {disable && <span className="spinner-grow spinner-grow-sm"></span>}
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
