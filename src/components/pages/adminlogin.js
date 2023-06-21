import React from "react";
import "./adminlogin.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { data } from "../../context/DataProvider";
import swal from "sweetalert";

const Adminlogin = ({ setUserAuthentication, ...prop }) => {
  const [currentyear, setcurrentyear] = useState(2023);
  const [user, setuser] = useState({});
  const { setAccount } = useContext(data);
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();
  // console.log(currentyear);

  useEffect(() => {
    const time = new Date();
    setcurrentyear(time.getFullYear());
  }, []);

  const login = () => {
    if (!user || !user.email || !user.password) {
      swal({
        title: "Error!",
        dangerMode: true,
        closeOnClickOutside: false,
        text: "All fields are mandatory to fill",
        icon: "error",
        confirmButtonText: "Go Back",
        customClass: {
          container: "swal-container",
          text: "swal-text",
        },
      });
      return;
    }
    setDisable(true);
    // console.log("Heyyy I am in");
    axios
      .post("http://localhost:8000/login", user)
      .then((res) => {
        console.log(res.status);
        // console.log("Token : ", res.data);
        // prop.setUserToken(res.data);
        sessionStorage.setItem("accessToken", `Bearer ${res.data.accessToken}`);
        if (res.data != null) {
          setAccount({
            username: res.data.email,
          });
        }
        // setLoginUser(res.data);
        setUserAuthentication(true);
        navigate("/admindashboard");
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          console.log(err);
          // alert(err.response.data.message);
          swal({
            title: "Error!",
            dangerMode: true,
            closeOnClickOutside: false,
            text: err.response.data.message,
            icon: "error",
            confirmButtonText: "Go Back",
            customClass: {
              container: "swal-container",
              text: "swal-text",
            },  
          })
          navigate("/admindashboard");
        } else {
          swal({
            title: "Error!",
        dangerMode: true,
        closeOnClickOutside: false,
        text: "An error occured while loggin in",
        icon: "error",
        confirmButtonText: "Go Back",
        customClass: {
          container: "swal-container",
          text: "swal-text",
        },
          })
          // alert("An error occurred during login.");
          navigate("/admindashboard");
        }
      });
      // setDisable(false);

  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setuser({
      ...user,
      [name]: value,
    });
  };

  // console.log(currentyear);
  return (
    <div className="text-center mt-5">
      <div className="form-signin">
        <div className="img-container">
          <img
            className="iifimage"
            src={process.env.PUBLIC_URL + "/IPU-IIF.png"}
            // width="100"
            // height="100"
            alt=""
          />
        </div>
        <h2 className="m-3 font-weight-normal">Please sign in</h2>
        {/* <label for="inputEmail" className="sr-only sr-only-focusable">
          Email address
        </label> */}
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          name="email"
          placeholder="Email address"
          required
          value={user.email}
          disabled={disable}
          onChange={handleChange}
          autoFocus
        />
        {/* <label for="inputPassword" class="sr-only">
          Password
        </label> */}
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          name="password"
          disabled={disable}
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          required
        />
        {/* <label for="inputkey">Token</label>
      <input type="password" name='key' placeholder='Enter key provided by IPU' required /> */}
        {/* <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> 
        </label>
      </div> */}

        <button
          className="btn btn-lg btn-primary btn-block"
          type="submit"
          onClick={login}
        >
        {disable && <span className="spinner-grow spinner-grow-sm"></span>}
          Sign in
        </button>
        <p className="mt-3">
          Not a member?
          <Link to="/register">Register</Link>
        </p>
        <p className=" mb-3 text-muted">&copy; {currentyear}</p>
      </div>
    </div>
  );
};

export default Adminlogin;
