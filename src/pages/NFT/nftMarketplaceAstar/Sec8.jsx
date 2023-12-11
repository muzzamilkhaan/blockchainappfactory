import React from "react";
import { SecEight } from "./nftMarketplaceAstarComp";
import Button from "../../../components/Button";

const Sec8 = () => {
  return (
    <>
      <SecEight>
        <div className="cta2 common_spacing">
          <div className="container">
            <div className="row real-estate-list">
              <div className="section-title text-center">
                <h2 className="section-title font_wei underline">
                  Be part of a wider ecosystem with an NFT marketplace on Astar!
                </h2>
                {/* <hr /> */}
              </div>
              <div className="text-center d-flex justify-content-center">
                <Button
                  btnContent="Talk with our Experts"
                  to="#newsletter-form-sec"
                />
              </div>
            </div>
          </div>
        </div>
      </SecEight>
    </>
  );
};

export default Sec8;
