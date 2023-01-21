import React from "react";
import "./EventCard.css";

export const EventCard = (prop) => {
    // const blob = new Blob([Int8Array.from(prop.imgsrc)], {type: prop.contentType });

        // const image = window.URL.createObjectURL(blob);

  return (
    <div class="col-md-3 col-lg-4 ">
      <div class="card mb-3">
        <div className="image-container-event">
        <img
          src={prop.imgsrc}
          class="card-img-top bd-placeholder-img card-img-top"
          alt="..."
        />
        </div>
        <div class="card-body image-container-event">
          <h5 class="card-title">{prop.title}</h5>
          <p class="card-text">{prop.content}</p>
          <p class="card-text">
            <small class="text-muted">{prop.date}</small>
          </p>
        </div>
      </div>
    </div>
  );
};
