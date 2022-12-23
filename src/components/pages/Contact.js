import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
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
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="col-md-6">
                <div className="card shadow">
                  <div className="card-body py-5">
                    <h4>Send Your Idea</h4>
                    <div className="underline-mb-3"></div>
                    <form
                      action="https://formspree.io/f/moqzadwo"
                      method="POST"
                    >
                      <label for="">Name</label>
                      <input
                        type="text"
                        name="Name"
                        placeholder="Enter Your Name"
                        class="form-control mb-3"
                      />
                      <label for="">Email</label>
                      <input
                        type="mail"
                        name="Email"
                        placeholder="Enter Your Name"
                        class="form-control mb-3"
                      />
                      <label for="">Message</label>
                      <textarea
                        rows="3"
                        name="Message"
                        className="form-control mb-3"
                      ></textarea>
                      <button type="submit" className="btn btn-primary w-100">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Contact;
