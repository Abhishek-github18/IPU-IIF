import React from "react";
import AdminNavbar from "../../inc/AdminNavbar/AdminNavbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NoticeTableAdmin from "./NoticeTableAdmin";
import { Watch } from "react-loader-spinner";
import swal from "sweetalert";

const AddNotices = () => {
  const [pdfFileDetails, setpdfFileDetails] = useState();
  const [noticedetails, setNoticedetails] = useState();
  const [disable, setDisable] = useState(false);
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
    if (noticedetails === undefined || pdfFileDetails === undefined) {
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
      // debugger
      const noticeform = new FormData();
      noticeform.append("title", noticedetails);
      noticeform.append("pdf", pdfFileDetails);

      let userToken = sessionStorage.getItem("accessToken");
      const config = {
        headers: { Authorization: userToken },
      };
      setDisable(1);
      axios
        .post("https://ipu-iif.onrender.com/addnotices", noticeform, config)
        .then((res) => {
          // console.log(res.data);
          navigate("/adminlandingpage");
        })
        .catch((err) => {
          alert(err.response.data);
        });
    }
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
              {noticedata ? (
                noticedata.map((e) => (
                  <NoticeTableAdmin
                    id={e._id}
                    key={`key${e._id}`}
                    href={e.pdfaddress}
                    title={e.title}
                    count={++count}
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
        <h2>Add New Notice</h2>
        <div>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              disabled={disable}
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
              disabled={disable}
              onChange={(e) => setpdfFileDetails(e.target.files[0])}
              required
            />
          </div>
          <hr />
          <button
            type="submit"
            disabled={disable}
            className="btn btn-primary"
            onClick={submitEvent}
          >
            {disable && <span className="spinner-grow spinner-grow-sm"></span>}
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNotices;
