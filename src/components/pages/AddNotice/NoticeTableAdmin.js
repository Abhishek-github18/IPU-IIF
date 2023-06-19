import React, { useState } from "react";
import "../AddNotice/NoticeTableAdmin.css";
import swal from "sweetalert";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NoticeTableAdmin = (prop) => {
  const navigate = useNavigate();
  const [disable, setdisable] = useState(false);

  const handleDelete = (e) => {
    const value = e.target.value;
    const config = {
      headers: { Authorization: sessionStorage.getItem("accessToken") },
    };
    setdisable(1);
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to remove this notice?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willdelete) => {
      if (willdelete) {
        axios
          .post("https://ipu-iif.onrender.com/deletenotice", { name: value },config)
          .then((res) => {
            if (res.status === 200) {
              swal("Poof! Notice file has been deleted!", {
                icon: "success",
              });
            }
            navigate("/admindashboard");
          })
          .catch((err) => {
            alert(err.response.data);
            navigate("/admindashboard");
          });
      } else {
        swal("Notice file is safe!");
        // navigate("/adminlandingpage");
        setdisable(0);
      }
    });
  };
  return (
    <tr>
      <td className="container-flex">
        <a
          className="flex-children"
          href={prop.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {prop.title}
        </a>
        <button
          className="flex-children btn notice-btn"
          value={prop.id}
          onClick={handleDelete}
          disabled={disable}
        >
          🚫
        </button>
      </td>
    </tr>
  );
};

export default NoticeTableAdmin;
