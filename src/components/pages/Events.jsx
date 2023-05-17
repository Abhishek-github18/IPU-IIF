import React from "react";
import { EventCard } from "../inc/EventCard";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../inc/Navbar/Navbar";
import Footer from "../inc/Footer/footer";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import "./Event.css";

const Events = () => {
  //use State hook to store the event details happening
  const [eventDetials, seteventDetials] = useState();

  //preloader state
  const [loading, setloading] = useState(true);
  const [color] = useState("#1D267D");

  const fetchEventDetails = async () => {
    const response = await axios.get("https://ipu-iif.onrender.com/events");
    setloading(false);

    seteventDetials(response.data);
    // console.log(response.data);
    // console.log(eventDetials);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchEventDetails();
    // eslint-disable-next-line
  }, []);

  // Each child in a list should have a unique "key" prop. Check the render method of `Events`

  return (
    <div className="headerFooter eventDivision">
      <Navbar />

      {loading ? (
        <div className="loading-container">
          <ClimbingBoxLoader
            color={color}
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <h1>EVENTS</h1>
          <div className="row container">
            {eventDetials &&
              eventDetials.map((e) => (
                <EventCard
                  key={`key${e._id}`}
                  imgsrc={e.image}
                  title={e.title}
                  content={e.content}
                  date={e.date}
                />
              ))}
          </div>
        </>
      )}

      <Footer />
    </div>
  );
};

export default Events;
