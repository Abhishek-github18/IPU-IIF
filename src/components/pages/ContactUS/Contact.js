import React, { useState } from "react";
import "./Contact.css";
import Navbar from "../../inc/Navbar/Navbar";
import Footer from "../../inc/Footer/footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
// import { useForm } from "react-hook-form";

const Contact = () => {
  // const form = useForm();
  // const { register } = form();

  const [queryData, setQueryData] = useState({});
  const [disable, setdisable] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQueryData({
      ...queryData,
      [name]: value,
    });
  };
  // const submitHandler = (e) => {
  //   e.preventDefault();
  // };
  const submitQuery = () => {
    // e.preventDefault();

    if (
      queryData.name === undefined ||
      queryData.email === undefined ||
      queryData.message === undefined
    ) {
      // alert("Fill all the fields");
      // console.log("What's Up");
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
    } else {
      setdisable(1);
      axios
        .post("http://localhost:8000/contact", queryData)
        .then((res) => {
          if (res.status === 200) {
            // alert("Query Submitted");
            swal({
              title: "Success",
              text: "Your message has been sent",
              icon: "success",
              button: "OK",
            });
          }
          navigate("/");
        })
        .catch((err) => {
          alert(err.response.data);
        });
    }
  };
  return (
    <div>
      <Navbar />
      <section className="contact-section AboutContact">
        <h1>Contact Us</h1>
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.1600870883703!2d77.01711021502182!3d28.594973882432758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1aafdb891567%3A0x10d270731c930a87!2sGuru%20Gobind%20Singh%20Indraprastha%20University!5e0!3m2!1sen!2sin!4v1671401607102!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  title="iframeContact"
                  // allowfullscreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="col-md-6 contact-us-form">
                <div className="card shadow contact-us-form ">
                  <span className="ideaheading">
                    <strong>Contact us</strong>
                  </span>
                  <div className="card-body py-3 contact-us-form ">
                    {/* <div className="underline-mb-3"></div> */}
                    <div
                    // action="https://formspree.io/f/moqzadwo"
                    // method="POST"
                    // action={submitHandler}
                    >
                      <label>Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        className="form-control mb-3"
                        onChange={handleChange}
                        disabled={disable}
                      />
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your email address"
                        className="form-control mb-3"
                        onChange={handleChange}
                        disabled={disable}
                      />
                      <label>Message</label>
                      <textarea
                        disabled={disable}
                        rows="10"
                        name="message"
                        className="form-control mb-3"
                        onChange={handleChange}
                      ></textarea>
                      <button
                        // type="submit
                        disabled={disable}
                        className="btn btn-primary w-100"
                        onClick={submitQuery}
                      >
                        {disable && (
                          <span className="spinner-grow spinner-grow-sm"></span>
                        )}
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
