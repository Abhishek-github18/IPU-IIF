import React from "react";
import "./Notices.css";
import Navbar from "../../inc/Navbar/Navbar";
import Footer from "../../inc/Footer/footer";
import NoticeTable from "./NoticeTable";
import axios from "axios";
import { useState, useEffect } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const Notices = () => {
  const [noticedata, setnoticedata] = useState();

  //preloader setting
  const [loading, setloading] = useState(true);
  const [color] = useState("#1D267D");

  let count;
  const fetchNotices = async () => {
    const response = await axios.get("https://ipu-iif.onrender.com/notices");
    setloading(false);
    setnoticedata(response.data);
    // console.log(response.data);
    // count = 1;
  };
  useEffect(() => {
    window.scrollTo(0, 0);

    fetchNotices();
    // setnoticedata(data.results);
  }, []);

  //  await axios.get("")
  return (
    <div className="headerandfooter">
      <Navbar />
      {loading ? (
        <div className="loading-container">
          {/* <h1>Hello There</h1> */}
          <ScaleLoader
            color={color}
            loading={loading}
            height={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
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
                        key={`key${e._id}`}
                        href={e.pdfaddress}
                        title={e.title}
                        count={++count}
                      />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Notices;
