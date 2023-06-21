import React from "react";
import "./registerAdmin.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const RegisterAdmin = () => {
  const [currentyear, setcurrentyear] = useState(2023);
  const [disable, setDisable] = useState(false);
  const [adminData, setAdminData] = useState();

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminData({
      ...adminData,
      [name]: value,
    });
  };

  const onSubmit = () => {
    if (
      !adminData ||
      !adminData.email ||
      !adminData.password ||
      !adminData.key
    ) {
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
    axios
      .post("https://ipu-iif.onrender.com/register", adminData)
      .then((res) => {
        // console.log(res.data);
        navigate("/login");
      })
      .catch((err) => {
        // console.log(err);
        swal({
          title: "Error!",
          dangerMode: true,
          closeOnClickOutside: false,
          text: err.response.data,
          icon: "error",
          confirmButtonText: "Go Back",
          customClass: {
            container: "swal-container",
            text: "swal-text",
          },
        });
        // alert(err.response.data);
        navigate("/");
      });
  };

  useEffect(() => {
    const time = new Date();
    setcurrentyear(time.getFullYear());
  }, []);

  return (
    <div>
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
          <h2 className="m-3 font-weight-normal">Please Register</h2>
          {/* <label for="inputEmail" className="sr-only sr-only-focusable">
          Email address
        </label> */}
          <input
            type="email"
            id="inputEmail"
            name="email"
            className="form-control"
            placeholder="Email address"
            required
            autoFocus
            onChange={handleChange}
            disabled={disable}
            pattern="[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+"
          />
          {/* <label for="inputPassword" class="sr-only">
          Password
        </label> */}
          <input
            type="password"
            id="inputPassword"
            name="password"
            className="form-control"
            placeholder="Password"
            required
            onChange={handleChange}
            disabled={disable}
          />
          {/* <label for="inputkey">Token</label> */}
          <input
            type="password"
            name="key"
            placeholder="Enter key provided by IPU"
            required
            onChange={handleChange}
            disabled={disable}
          />
          {/* <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> 
        </label>
      </div> */}
          <button
            className="mb-2 btn btn-lg btn-primary btn-block"
            type="submit"
            onClick={onSubmit}
          >
            {disable && <span className="spinner-grow spinner-grow-sm"></span>}
            Register
          </button>
          <p className=" mb-3 text-muted">&copy; {currentyear}</p>
        </div>
      </div>
    </div>
  );
};

export default RegisterAdmin;
