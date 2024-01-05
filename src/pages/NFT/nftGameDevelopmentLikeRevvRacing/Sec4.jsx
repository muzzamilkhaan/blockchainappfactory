import React from "react";
import UnderLine from "../../../components/UnderLine.jsx";

const Sec4 = () => {
  return (
    <div className="cta1 common_spacing">
      <div className="container">
        <div className="row real-estate-list">
          <div className="section-title text-center">
            <h2 className="section-title font_wei">
              Take the podium in the gaming world today with a Play-to-Earn NFT
              racing game development like REVV Racing!
            </h2>
            <UnderLine />
            {/* <hr /> */}
          </div>
          <div className="text-center">
            <a
              href="#newsletter-form-sec"
              className="nectar-button cta-talk-btn medium regular accent-color regular-button nec-btn"
            >
              <span>Talk with our Experts</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec4;
