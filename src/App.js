import "./App.css";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
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
import { useState } from "react";
import Query from "./components/pages/Query/Query";
import AdminLandingPage from "./components/pages/AdminLandingpage/AdminLandingPage";
import ScrollToTop from "./components/ScrollToTop";
import EventDetails from "./components/details/EventDetails";
import DataProvider from "./context/DataProvider";
import PageNotFound from "./components/pages/PageNotFound/PageNotFound";

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate replace to="/login" />
  );
};
function App() {
  // let userToken = localStorage.getItem("user_token");
  const [isAuthenticated, setUserAuthentication] = useState(false);
  // console.log(userToken);
  return (
    <DataProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/edp" element={<EDP />} />
          <Route path="/events" element={<Events />} />
          <Route path="/lab" element={<AICTELAB />} />
          <Route path="/patent" element={<Patents />} />
          <Route path="/notices" element={<Notices />} />
          <Route path='*' element={<PageNotFound/>}/>
          <Route
            path="/login"
            element={<AdminLogin  setUserAuthentication={setUserAuthentication}/>}
           
          />
          <Route
            path="/admindashboard"
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          >
            <Route path="/admindashboard" element={<AdminLandingPage />} />
          </Route>
          <Route
            path="/addevents"
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          >
            <Route path="/addevents" element={<AddEvent />} />
          </Route>

          <Route
            path="/addnotices"
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          >
            <Route path="/addnotices" element={<AddNotices />} />
          </Route>

          <Route
            path="/addpatents"
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          >
            <Route path="/addpatents" element={<AddPatent />} />
          </Route>

          <Route
            path="/queries"
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          >
            <Route path="/queries" element={<Query />} />
          </Route>

          <Route path="/register" element={<RegisterAdmin />} />
          <Route path="/eventdetails/:id" element={<EventDetails />} />
          {/* <Route path="/addevents" element={<AddEvent />} /> */}
          {/* {userToken ? (
            <Route path="/addevents" element={<AddEvent />} />
          ) : (
            <Route path="/addevents" element={<AddEvent />} />
          )} */}
          {/* {userToken ? (
            <Route path="/addnotices" element={<AddNotices />} />
          ) : (
            <Route path="/addnotices" element={<AddNotices />} />
          )}
          {userToken ? (
            <Route key="1" path="/addpatents" element={<AddPatent />} />
          ) : (
            <Route key="2" path="/addpatents" element={<AddPatent />} />
          )}
          {userToken ? (
            <Route path="/queries" element={<Query />} />
          ) : (
            <Route path="/queries" element={<Query />} />
          )} */}
          {/* {userToken ? (
          <Route path="/adminlandingpage" element={<AdminLandingPage />} />
        ) : (
          <Route path="/adminlandingpage" element={<AdminLandingPage />} />
        )} */}
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
