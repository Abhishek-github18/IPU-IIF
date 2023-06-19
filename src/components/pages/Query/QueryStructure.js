import React, { useContext } from "react";
import "./query.css";
import { data } from "../../../context/DataProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const QueryStructure = (prop) => {
  const navigate = useNavigate();

  const { account } = useContext(data);

  const handleClick = async (e) => {
    swal({
      title: "Are you sure?",
      text: "Are you sure that this query is resolved",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willresolved) => {
      if (willresolved) {
        try {
          axios
            .post(
              `https://ipu-iif.onrender.com/queries/${e.target.value}`,
              {
                username: account.username,
              },
              {
                headers: {
                  Authorization: sessionStorage.getItem("accessToken"),
                },
              }
            )
            .then((res) => {
              if (res.status === 200) {
                swal("Query is marked resolved by you", {
                  icon: "success",
                });
              }
              navigate("/admindashboard");
            })
            .catch((err) => {
              alert(err.response.data);
            });
        } catch (err) {
          alert(err.message);
        }
      } else {
        swal("Query is still active");
      }
    });
  };
  return (
    <tr>
      <th scope="row">{prop.count}</th>
      <td>{prop.name}</td>
      <td>{prop.email}</td>
      <td>{prop.message}</td>
      <td>
        <button
          onClick={handleClick}
          value={prop.id}
          type="button"
          className="btn btn-success"
        ></button>
      </td>
    </tr>
  );
};

export default QueryStructure;
