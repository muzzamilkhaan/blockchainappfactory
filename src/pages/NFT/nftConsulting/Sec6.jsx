import React from "react";
import { SecSix } from "./nftConsultingComp";
import { H2, Button } from "../../../components";

const Sec6 = () => {
  return (
    <SecSix>
      <section className="common_spacing">
        <div className="container">
          <div className="row justify-content-md-center text-center">
            <div className="section-title text-center ">
              <div className="common_h3 text-dark">
                <H2> Get Expert Consulting for Your NFT Project </H2>
              </div>
              <hr />
              <p className="mt10 mb10 text-center">
                As one of the best NFT-focused consulting firms, we can help you
                by offering insights and utilizing ideal strategies across the
                process to realize your NFT business to perfection.{" "}
              </p>
              <div className="cta_mine">
                <div className="d-flex justify-content-center flex-wrap gap-3 ">
                  <Button
                    btnContent="Connect with Whatsapp"
                    target="_blank"
                    to="https://api.whatsapp.com/send?l=en&amp;text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&amp;phone=916382665366"
                  />
                  <Button
                    btnContent="Talk with our Experts"
                    to="#newsletter-form-sec"
                  />
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </section>
    </SecSix>
  );
};

export default Sec6;
