import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/ContactUS/Contact";
import About from "./components/pages/About";
import EDP from "./components/pages/EDP";
import Events from "./components/pages/Events";
import AICTELAB from "./components/pages/AICTELAB";
import Notices from "./components/pages/Notice/Notices";
import Patents from "./components/pages/Patent/Patents";
import AdminLogin from "./components/pages/adminlogin";
import RegisterAdmin from "./components/pages/registernewadmin/registerAdmin";
import AddEvent from "./components/pages/addEvent/addEvent";
import AddNotices from "./components/pages/AddNotice/AddNotice";
import AddPatent from "./components/pages/AddPatent/AddPatent";
// import Contact01 from "./components/pages/ContactUS/Contact01";
import Query from "./components/pages/Query/query";
import AdminLandingPage from "./components/pages/AdminLandingpage/AdminLandingPage";
import ScrollToTop from "./components/ScrollToTop";
// import { useState } from "react";

function App() {
  let userToken = localStorage.getItem("user_token");
  // console.log(userToken);
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/edp" element={<EDP />} />
        <Route path="/events" element={<Events />} />
        <Route path="/lab" element={<AICTELAB />} />
        <Route path="/patent" element={<Patents />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/register" element={<RegisterAdmin />} />
        {/* <Route path="/addevents" element={<AddEvent />} /> */}
        {userToken ? (
          <Route path="/addevents" element={<AddEvent />} />
        ) : (
          <Route path="/addevents" element={<Events />} />
        )}
        {userToken ? (
          <Route path="/addnotices" element={<AddNotices />} />
        ) : (
          <Route path="/addevents" element={<Events />} />
        )}
        {userToken ? (
          <Route key="1" path="/addpatents" element={<AddPatent />} />
        ) : (
          <Route key="2" path="/addevents" element={<Events />} />
        )}
        {userToken ? (
          <Route path="/queries" element={<Query />} />
        ) : (
          <Route path="/addevents" element={<Events />} />
        )}
        {userToken ? (
          <Route path="/adminlandingpage" element={<AdminLandingPage />} />
        ) : (
          <Route path="/adminlandingpage" element={<Home />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
