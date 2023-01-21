import React from "react";
import Research from "../images/ValueAddedWorkShopOnReasearch.jpeg";
import Business from "../images/StartNewBusiness.jpeg";
import HashTech from "../images/HashTech.jpeg";
import EventCarousel from "./includes/EventCarousel";
import { EventCard } from "../inc/EventCard";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../inc/Navbar/Navbar";
import Footer from "../inc/Footer/footer";
import "./Event.css";

const Events = () => {
  //use State hook to store the event details happening
  const [eventDetials, seteventDetials] = useState();

  const fetchEventDetails = async () => {
    const response = await axios.get("https://ipu-iif.onrender.com/events");

    seteventDetials(response.data);
    // console.log(eventDetials);
  };
  useEffect(() => {
    fetchEventDetails();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="headerFooter eventDivision">
      <Navbar />
      <h1>EVENTS</h1>
      <div class="row container">
        {eventDetials &&
          eventDetials.map((e) => (
            <EventCard
              id={e.id}
              imgsrc={e.image}
              // contentType={e.img.contentType}
              title={e.title}
              content={e.content}
              date={e.date}
            />
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default Events;
