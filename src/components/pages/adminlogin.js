import React from "react";
import "./adminlogin.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const adminlogin = () => {
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
        // setLoginUser(res.data);
        navigate("/addevents");
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
      <div class="form-signin">
        <div className="img-container">
          <img
            className="iifimage"
            src={process.env.PUBLIC_URL + "/IPU-IIF.png"}
            // width="100"
            // height="100"
          />
        </div>
        <h2 class="m-3 font-weight-normal">Please sign in</h2>
        {/* <label for="inputEmail" className="sr-only sr-only-focusable">
          Email address
        </label> */}
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          name="email"
          placeholder="Email address"
          required
          value={user.email}
          onChange={handleChange}
          autofocus
        />
        {/* <label for="inputPassword" class="sr-only">
          Password
        </label> */}
        <input
          type="password"
          id="inputPassword"
          class="form-control"
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
          class="btn btn-lg btn-primary btn-block"
          type="submit"
          onClick={login}
        >
          Sign in
        </button>
        <p className="mt-3">
          Not a member?
          <a href="/register">Register</a>
        </p>
        <p class=" mb-3 text-muted">&copy; {currentyear}</p>
      </div>
    </div>
  );
};

export default adminlogin;
