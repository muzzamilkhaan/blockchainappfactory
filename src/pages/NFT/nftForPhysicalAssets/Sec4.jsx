import React from "react";
import { SecFour } from "./nftForPhysicalAssetsComp";
import { Button } from "../../../components";
const Sec4 = () => {
  return (
    <SecFour>
      <div className="tik">
        <div className="container">
          <div className="row">
            <div className=" col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div>
                <p className="text-center tik1 mt20">
                  Blockchain is the next new Mine with NFT as the next new gold!
                  Let's dig together
                </p>
                <h2 className="text-center tik2">Contact Us!</h2>
                {/* <div className=" text-center mt30">
                  <div className="cta_mine">
                    <a
                      href="#newsletter-form-sec"
                      className="nectar-button medium regular accent-color regular-button nec-btn"
                    >
                      <span>Talk with our Experts</span>
                    </a>
                  </div>{" "}
                </div> */}
                <div className="d-flex justify-content-center flex-wrap gap-3 ">
                  <Button btnContent="Talk with our Experts" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecFour>
  );
};

export default Sec4;
