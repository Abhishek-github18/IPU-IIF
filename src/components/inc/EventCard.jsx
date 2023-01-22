import React from "react";
import "./EventCard.css";

export const EventCard = (prop) => {
  return (
   
    <div className="col-md-3 col-lg-4" key={prop.id}>
      <div className="card mb-3" >
        <div className="image-container-event" >
        <img
          src={prop.imgsrc}
          className="card-img-top bd-placeholder-img card-img-top"
          alt="..."
          
        />
        </div >
        <div className="card-body image-container-event" >
          <h5 className="card-title">{prop.title}</h5>
          <p className="card-text">{prop.content}</p>
          <p className="card-text">
            <small className="text-muted">{prop.date}</small>
          </p>
        </div>
      </div>
    </div>
   
  );
};
