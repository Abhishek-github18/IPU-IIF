import React, { useState } from "react";
import "../EventCardAdmin/Eventcardadmin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const Eventcardadmin = (prop) => {
  const navigate = useNavigate();
  //   const [eventId, seteventID] = useState();
  const [disable, setdisable] = useState(false);

    const handleDelete = (e) => {
        const name = e.target.name;
        const config = {
          headers:{Authorizatino:sessionStorage.getItem('accessToken')}
        }
        // console.log(name);
        setdisable(1);
        swal({
        title: "Are you sure?",
        text: "Are you sure that you want to delete this event blog?",
        icon: "warning",
        buttons:true,
        dangerMode: true,
        }).then((willdelete) => {
        if (willdelete) {
            axios
            .post("https://ipu-iif.onrender.com/deleteevent", { name: name },config)
            .then((res) => {
                if (res.status === 200) {
                swal("Poof! Blog file has been deleted!", {
                    icon: "success",
                });
                }
                navigate("/admindashboard");
            })
            .catch((err) => {
                alert(err.response.data);
            });
        } else {
            swal("Blog file is safe!");
            // navigate("/adminlandingpage");
            setdisable(0);
        }
        });
        
    };
  return (
    <>
      <div className="col-md-4">
        <div className="card event-admin-card" style={{ width: "18rem" }}>
          <figure>
            <img src={prop.imgsrc} className="card-img-top" alt="..." />
          </figure>

          <div className="card-body">
            <h5 className="card-title">{prop.title}</h5>
            {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
            <p className="card-text">{prop.content}</p>
            <Link to={`/eventdetails/${prop.id}`} target="blank">
            <div className="btn m event-btn">
              <i className="fas fa-link"></i> Read More
            </div>
            </Link>
            <button
              disabled={disable}
              name={prop.id}
              className="btn event-btn"
              onClick={handleDelete}
            >
              <i className="fa fa-trash"></i> Delete
            </button>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Eventcardadmin;
