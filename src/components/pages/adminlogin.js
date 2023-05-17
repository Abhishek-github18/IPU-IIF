import React from "react";
import "./adminlogin.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Adminlogin = (prop) => {
  const [currentyear, setcurrentyear] = useState(2023);
  const [user, setuser] = useState({});
  
  const navigate = useNavigate();
  // console.log(currentyear);

  useEffect(() => {
    const time = new Date();
    setcurrentyear(time.getFullYear());
  }, []);

  const login = () => {
    // console.log("Heyyy I am in");
    axios
      .post("https://ipu-iif.onrender.com/login", user)
      .then((res) => {
        // alert(JSON.stringify(res.data));
        // console.log(res.data);
        localStorage.setItem("user_token", res.data);
        prop.setUserToken(res.data);

        // setLoginUser(res.data);
        navigate("/adminlandingpage");
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setuser({
      ...user,
      [name]: value,
    });
  };

  console.log(currentyear);
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
