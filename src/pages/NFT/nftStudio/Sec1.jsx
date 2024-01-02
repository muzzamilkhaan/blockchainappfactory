import React from "react";
import { SecOne } from "./nftStudioComp";

const Sec1 = () => {
  return (
    <SecOne>
      <section className="bg_1 common_spacing">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-offset-1 col-md-6 text-left">
              <div className="bg_content">
                <h1 className="bnr_txt">NFT STUDIO.</h1>
                <h3 className="text_w text-left para">
                  Developing generative NFTs with exemplary artists and
                  development experts. Our generative algorithms are the finest
                  to process a variety of generative NFTs at ease.
                </h3>
                <h5 className="text_w bg_02">
                  “Enter the Eternal Virtual Zone with Artistic NFTs!”
                </h5>
                <div className="mt20">
                  {" "}
                  <a
                    href="#pricing-tabs"
                    className="nectar-button medium regular accent-color regular-button gra"
                  >
                    <span>View Packages</span>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SecOne>
  );
};

export default Sec1;
