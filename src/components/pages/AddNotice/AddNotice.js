import React from "react";
import AdminNavbar from "../../inc/AdminNavbar/AdminNavbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NoticeTable from "../Notice/NoticeTable";

const AddNotices = () => {
  const [pdfFileDetails, setpdfFileDetails] = useState();
  const [noticedetails, setNoticedetails] = useState();
  const navigate = useNavigate();

  const [noticedata, setnoticedata] = useState();
  let count;
  const fetchNotices = async () => {
    const response = await axios.get("https://ipu-iif.onrender.com/notices");

    setnoticedata(response.data);
    // console.log(response.data);
    // count = 1;
  };
  useEffect(() => {
    fetchNotices();
    // setnoticedata(data.results);
  }, []);

  const submitEvent = (e) => {
    const noticeform = new FormData();
    noticeform.append("title", noticedetails);
    noticeform.append("pdf", pdfFileDetails);

    let userToken = localStorage.getItem("user_token");
    // console.log(userToken);
    const config = {
      headers: { "x-access-token": userToken },
    };

    axios
      .post("https://ipu-iif.onrender.com/addnotices", noticeform, config)
      .then((res) => {
        // console.log(res.data);
        navigate("/adminlandingpage");
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };
  const handleChange = (e) => {
    setNoticedetails(e.target.value);
  };

  return (
    <div>
      <AdminNavbar />
      <div className="container mt-3">
        <h2 className="noticeHeading">NOTICES</h2>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="row" className="bg-dark tableheading">
                  NOTICES/TITLES
                </th>
              </tr>
            </thead>
            <tbody>
              {noticedata &&
                noticedata.map((e) => (
                  <NoticeTable
                    key={`key${e._id}`}
                    href={e.pdfaddress}
                    title={e.title}
                    count={++count}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <hr />
      <div className="col-md-6 offset-md-3 mt-5 container">
        <h2>Add New Notice</h2>
        <div
        // accept-charset="UTF-8"
        // action="https://getform.io/f/{your-form-endpoint-goes-here}"
        // method="POST"
        // enctype="multipart/form-data"
        // target="_blank"
        >
          <div className="form-group">
            <label >Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Enter the title of the notice"
              onChange={handleChange}
              required
            />
          </div>
          <hr />
          <div className="form-group mt-3">
            <label className="mr-2">Upload a pdf format file:</label>
            <input
              type="file"
              name="file"
              onChange={(e) => setpdfFileDetails(e.target.files[0])}
              required
            />
          </div>
          <hr />
          <button type="submit" className="btn btn-primary" onClick={submitEvent}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNotices;
