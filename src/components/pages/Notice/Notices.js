import React from "react";
import "./Notices.css";
import Navbar from "../../inc/Navbar/Navbar";
import Footer from "../../inc/Footer/footer";
import NoticeTable from "./NoticeTable";
import axios from "axios";
import { useState, useEffect } from "react";
const Notices = () => {
  const [noticedata, setnoticedata] = useState();
  let count;
  const fetchNotices = async () => {
    const response = await axios.get("https://ipu-iif.onrender.com/notices");

    setnoticedata(response.data);
    // console.log(response.data);
    // count = 1;
  };
  useEffect(() => {
    fetchNotices();
    // setnoticedata(data.results);
  }, []);

  //  await axios.get("")
  return (
    <div className="headerandfooter">
      <Navbar />
      <div className="container mt-3">
        <h2 className="noticeHeading">NOTICES</h2>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="row" className="bg-dark tableheading">
                  NOTICES/TITLES
                </th>
              </tr>
            </thead>
            <tbody>
              {noticedata &&
                noticedata.map((e) => (
                  <NoticeTable
                    id={e.id}
                    href={e.pdfaddress}
                    title={e.title}
                    count={++count}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Notices;
