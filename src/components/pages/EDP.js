import React from "react";
import "./EDP.css";
import Navbar from "../inc/Navbar/Navbar";
import Footer from "../inc/Footer/footer";
const EDP = () => {
  return (
    <div className="headerfooter">
      <Navbar />
      <section className="EDP">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>EDP(Entrepreneurship Development Programme)</h1>
              <p>
                Entrepreneurship promotion and development Programmes are being
                organized regularly to nurture the talent of youth by
                enlightening them on various aspects of industrial/business
                activity required for setting up MSEs. These Programmes are
                conducted for youth and other people interested to set up their
                own industrial/self-employment venture. Such activities are also
                organized in ITIs, Polytechnics and other technical
                institutions/business schools, where skill/talent is available
                to motivate them towards self-employment.
              </p>
            </div>

            <div className="col-md-12">
              <h4>Objectives</h4>
              <p>
                The objective of this programme is to motivate an individual to
                choose the entrepreneurship as a career and to prepare the
                person to exploit the market opportunities for own business
                successfully. These objectives can be set both in the short-term
                and long-term basis.
              </p>
              <ul>
                <li>
                  <b>Short-term objectives:</b> These objectives can be achieved
                  immediately. In the short-term, the individuals are trained to
                  be an entrepreneur and made competent enough to scan the
                  existing market situation and environment. The person, who
                  would be the future entrepreneur, should first set the goal as
                  an entrepreneur. The information related to the existing rules
                  and regulations is essential at this stage.
                </li>
                <li>
                  <b>Long-term objectives:</b> The ultimate objective is that
                  the trained individuals successfully establish their own
                  business and they should be equipped with all the required
                  skills to run their business smoothly.
                </li>
              </ul>
            </div>

            <div className="col-md-12 mb-4">
              <h3>Scheme</h3>
              <h5>
                The Govt. of NCT of Delhi has launched the scheme of
                Entrepreneurship Development Programme for the students of
                Higher Education.
              </h5>
              <h5>
                Govt. of NCT of Delhi has sanctioned the grant of Rs. 5,000/- to
                774 Candidates during FY 2021-22
              </h5>
              <h5>
                Claim form to be filled by Students :
                <a
                  href="https://docs.google.com/forms/d/1EpcCDtZxbpq6BuwnVlzwgdhUXl6qz1R_AE5HPlRZMBg/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link
                </a>
              </h5>
              <h5>
                Student List : Notice for submission of{" "}
                <a
                  href="http://ipu.ac.in/Pubinfo2022/n0704225%20(3).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Claim
                </a>
              </h5>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EDP;
