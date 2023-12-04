import React from 'react'
import { IoMdArrowRoundForward } from "react-icons/io";

function LandingSec10() {
  return (
    <section
          className="p-t330 p-b210 bg-cta particles-js"
          data-color="#fe4c1c,#00c3ff,#0160e7"
          data-id="i1-1"
          style={{ backgroundColor: "rgb(240, 246, 255)" }}
        >
          <img
            className="enq-bg lazy"
            data-src="./assets/images/bg-maps2-1.webp"
            alt="Enquiry Now!"
            src="./assets/images/bg-maps2-1.webp"
          />
          <div className="container">
            <div className="cta-content text-center">
              <h2 className="m-b20">
                Experience Our Services <br className="d-s-none" /> In All Directions Of
                The Globe
              </h2>
              <div className="ot-button">
                {" "}
                <a href="#" className="octf-btn octf-btn-primary octf-btn-icon" alt="">
                  Enquiry Now!
                  {/* <i className="fa fa-arrow-right" /> */}
                  <IoMdArrowRoundForward />
                </a>
              </div>
            </div>
          </div>
        </section>
  )
}

export default LandingSec10