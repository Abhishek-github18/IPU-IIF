import React from "react";
import Swal from "sweetalert";
import "./addEvent.css";
import { useState, useEffect } from "react";
import axios from "axios";
import AdminNavbar from "../../inc/AdminNavbar/AdminNavbar";
import { useNavigate } from "react-router-dom";
import Eventcardadmin from "../../EventCardAdmin/Eventcardadmin";
import { Watch } from "react-loader-spinner";

const AddEvent = () => {
  const [eventDetials, seteventDetials] = useState();
  const [eventformdetails, setEventformdetails] = useState({});
  const [file, setfile] = useState("");
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();

  const fetchEventDetails = async () => {
    const response = await axios.get("https://ipu-iif.onrender.com/events");

    seteventDetials(response.data);
    // console.log(response.data);
  };
  const submitEvent = (e) => {
    // e.preventDefault();
    if (
      eventformdetails.title === "" ||
      eventformdetails.content === "" ||
      file === "" ||
      eventformdetails.date === ""
    ) {
      Swal({
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
      setDisable(1);
      const eventForm = new FormData();
      eventForm.append("title", eventformdetails.title);
      eventForm.append("content", eventformdetails.content);
      eventForm.append("image", file);
      eventForm.append("date", eventformdetails.date);

      let userToken = sessionStorage.getItem("accessToken");
      // console.log(userToken);
      const config = {
        headers: { Authorization: userToken },
      };
      axios
        .post("https://ipu-iif.onrender.com/addevents", eventForm, config)
        .then((res) => {
          // console.log(res.data);
          // alert(res.data);
          navigate("/admindashboard");
        })
        .catch((err) => {
          alert(err.response.data);
        });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventformdetails({
      ...eventformdetails,
      [name]: value,
    });
  };
  useEffect(() => {
    fetchEventDetails();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="addevent-container">
      <AdminNavbar />
      <h1 style={{ fontSize: "4em" }}>EVENTS</h1>
      <div className="row container">
        {eventDetials ? (
          eventDetials.map((e) => (
            <Eventcardadmin
              key={`key${e._id}`}
              id={e._id}
              imgsrc={e.image}
              // contentType={e.img.contentType}
              title={e.title}
              content={e.content}
              date={e.date}
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
      </div>
      <hr />
      <h2 className="text-center">Add new Event Details</h2>
      <div className="col-md-6 offset-md-3 mt-5">
        <div>
          <div className="form-group mb-2">
            <label htmlFor="exampleInputName" className="mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              className="form-control"
              disabled={disable}
              id="exampleInputName"
              placeholder="Enter the title and it must be unique"
              required="required"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-2">
            <label
              htmlFor="exampleInputEmail1"
              required="required"
              className="mb-1"
            >
              Content
            </label>
            <input
              type="text"
              name="content"
              disabled={disable}
              className="form-control"
              id="exampleInputEmail1"
              onChange={handleChange}
              placeholder="Enter the description about event, keep it short max 50 words"
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="exampleFormControlSelect1" className="mb-1">
              Date:
            </label>
            <input
              type="text"
              name="date"
              disabled={disable}
              className="form-control"
              onChange={handleChange}
              id="exampleInputEmail1"
              placeholder="Date Format : Date-Month-Year"
            />
          </div>
          <hr />
          <div className="form-group mt-3">
            <label className="mr-2" name="img">
              Upload a image:
            </label>
            <input
              type="file"
              name="image"
              disabled={disable}
              onChange={(e) => setfile(e.target.files[0])}
            />
          </div>
          <hr />
          <button
            disabled={disable}
            type="submit"
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
export default AddEvent;
