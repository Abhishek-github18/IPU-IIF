import React from "react";
// import Events from "../Events";
import "./addEvent.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { EventCard } from "../../inc/EventCard";
import AdminNavbar from "../../inc/AdminNavbar/AdminNavbar";
import { useNavigate } from "react-router-dom";

const addEvent = () => {
  const [eventDetials, seteventDetials] = useState();
  const [eventformdetails, setEventformdetails] = useState({});
  const [file, setfile] = useState("");
  const navigate = useNavigate();

  const fetchEventDetails = async () => {
    const response = await axios.get("https://ipu-iif.onrender.com/events");

    seteventDetials(response.data);
    // console.log(response.data);
  };
  const submitEvent = (e) => {
    // e.preventDefault();
    const eventForm = new FormData();
    eventForm.append("title", eventformdetails.title);
    eventForm.append("content", eventformdetails.content);
    eventForm.append("image", file);
    eventForm.append("date", eventformdetails.date);
    let userToken = localStorage.getItem("user_token");
    // console.log(userToken);
    const config = {
      headers: { "x-access-token": userToken },
    };
    axios
      .post("https://ipu-iif.onrender.com/addevents", eventForm, config)
      .then((res) => {
        // console.log(res.data);
        // alert(res.data);
        navigate("/adminlandingpage");
      })
      .catch((err) => {
        alert(err.response.data);
      });
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
    <div>
      <AdminNavbar />
      <h1>EVENTS</h1>
      <div className="row container">
        {eventDetials &&
          eventDetials.map((e) => (
            <EventCard
              key={`key${e._id}`}
              imgsrc={e.image}
              // contentType={e.img.contentType}
              title={e.title}
              content={e.content}
              date={e.date}
            />
          ))}
      </div>
      <hr />
      <h2 className="text-center">Add new Event Details</h2>
      <div className="col-md-6 offset-md-3 mt-5">
        <div
        // accept-charset="UTF-8"
        //   action="/addevents"
        // method="POST"
        // enctype="multipart/form-data"
        //   target="_blank"
        >
          <div className="form-group mb-2">
            <label htmlFor="exampleInputName" className="mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              className="form-control"
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
              onChange={(e) => setfile(e.target.files[0])}
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
export default addEvent;
