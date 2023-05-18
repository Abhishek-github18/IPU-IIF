import React from "react";
import "./EventCard.css";

export const EventCard = (prop) => {
  return (
    // <div className=" col-md-3 col-lg-4">
    //  {/* <div className="mb-3"> */}
    //  <section className="articles mb-3 ">
    //     <article>
    //       <div className="article-wrapper">
    //         <figure>
    //           <img src={prop.imgsrc} alt="" />
    //         </figure>
    //         <div className="article-body">
    //           <h2>{prop.title}</h2>
    //           <p>{prop.content}</p>
    //           <a href="#" className="read-more">
    //             Read more <span className="sr-only">about this is some title</span>
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="icon"
    //               viewBox="0 0 20 20"
    //               fill="currentColor"
    //             >
    //               <path
    //                 fillRule="evenodd"
    //                 d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
    //                 clipRule="evenodd"
    //               />
    //             </svg>
    //           </a>
    //         </div>
    //       </div>
    //     </article>
    //   </section>
    //  </div>
    //  </div>

    <div className="col-md-3 col-lg-4">
      <div className="card mb-3">
        {/* <div className="image-container-event" >
       
        </div > */}
        <article>
          <figure>
            <img
              src={prop.imgsrc}
              // className="card-img-top bd-placeholder-img card-img-top"
              alt="..."
            />
          </figure>
          <div className="article-body image-container-event">
            <h5 className="card-title">{prop.title}</h5>
            <p className="card-text">{prop.content}</p>
            {/* <p className="card-text">
             <small className="text-muted">{prop.date}</small> 
          </p> */}
            <a href="#" className="read-more">
              Read more{" "}
              <span className="sr-only">about this is some title</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};
