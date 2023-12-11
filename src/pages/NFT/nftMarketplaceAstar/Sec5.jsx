import React from "react";
import { SecFive } from "./nftMarketplaceAstarComp";
import Button from "../../../components/Button";

const Sec5 = () => {
  return (
    <>
      <SecFive>
        <div className="cta1 common_spacing">
          <div className="container">
            <div className="row real-estate-list">
              <div className="section-title text-center">
                <h2 className="section-title font_wei">
                  Utilize all the goodness Astar blockchain offers with an NFT
                  marketplace platform!
                </h2>
                <hr />
              </div>
              <div
                className="text-center"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button
                  btnContent="Talk with our Experts"
                  to="#newsletter-form-sec"
                />
              </div>
            </div>
          </div>
        </div>
      </SecFive>
    </>
  );
};

export default Sec5;
