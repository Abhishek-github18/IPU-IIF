import axios from "axios";
import React from "react";
import AdminNavbar from "../../inc/AdminNavbar/AdminNavbar";
import { useState, useEffect } from "react";
import QueryStructure from "./QueryStructure";
import { Watch } from "react-loader-spinner";

const Query = () => {
  const [querydata, setQuerydata] = useState();
  let serialNo = 0;
  const fetchQueries = async () => {
    // let userToken = localStorage.getItem("user_token");
    // console.log(userToken);
    // const config = {
    //   headers: { "x-access-token": userToken },
    // };

    try {
      const response = await axios.get("http://localhost:8000/queries", {
        headers: { Authorization: sessionStorage.getItem("accessToken") },
      });
      setQuerydata(response.data);
      if (response.data !== null) {
        const filteredQuery = response.data.filter((query) => {
          return query.resolve === false;
        });
        setQuerydata(filteredQuery);
      }
    } catch (err) {
      console.log(err);
      alert(err.message);
      return;
    }
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
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {querydata ? (
                querydata.map((data) => (
                  <QueryStructure
                    key={`key${data._id}`}
                    name={data.name}
                    email={data.email}
                    message={data.message}
                    count={++serialNo}
                    id={data._id}
                  />
                ))
              ) : (
                <Watch
                  height="150"
                  width="1100"
                  radius="48"
                  color="#0c134f"
                  ariaLabel="watch-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                />
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Query;
