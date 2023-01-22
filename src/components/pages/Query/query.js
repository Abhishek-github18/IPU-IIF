import axios from "axios";
import React from "react";
import AdminNavbar from "../../inc/AdminNavbar/AdminNavbar";
import { useState, useEffect } from "react";
import QueryStructure from "./queryStructure";
const query = () => {
  const [querydata, setQuerydata] = useState();
  let serialNo = 0;
  const fetchQueries = async () => {
    let userToken = localStorage.getItem("user_token");
    // console.log(userToken);
    const config = {
      headers: { "x-access-token": userToken },
    };

    const response = await axios.get(
      "https://ipu-iif.onrender.com/queries",
      config
    );
    // console.log(response.data);
    setQuerydata(response.data);
  };
  useEffect(() => {
    fetchQueries();
  }, []);

  return (
    <div className="headerFooter">
      <AdminNavbar />
      <div className="container mt-3">
        <h1>Queries</h1>
        <div className="table-responsive">
          <table className="table ">
            <thead className="table-dark">
              <tr className="tableheading">
                <th scope="col"></th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Message</th>
              </tr>
            </thead>
            <tbody>
              {querydata &&
                querydata.map((data) => (
                  <QueryStructure
                  id={data.id}
                    name={data.name}
                    email={data.email}
                    message={data.message}
                    count={++serialNo}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default query;
