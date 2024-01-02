import React from "react";
import { SecTwo } from "./nftStudioComp";

const Sec2 = () => {
  return (
    <SecTwo>
      <section className="bg_2">
        <div className="container-fluid">
          <div className="row d-flex">
            <div className="col-lg-6 col-md-6 col-sm-12 vcenter-item bg_vio nopadding">
              <div className="content p-40">
                <h2 className="text_w">Generative Arts</h2>
                <h4 className="text_w">
                  Funny avatars and pixelated punks are driving the NFT crazy,
                  aren’t they? Generative Arts, molded from a combination loop
                  of drawn arts and components from the predefined libraries,
                  are showing supremacy in the NFT market. Though the
                  generations are at a higher rate they never resemble each
                  other. From the created 10,000 or 20,000 versions, everything
                  you pick will be unique and do not resemble each other.
                </h4>
                <h5 className="text_w">
                  "Fit in, and get ready for the mind-boggling ride."
                </h5>
                <div className="mt40">
                  {" "}
                  <a
                    href="#newsletter-form-sec"
                    className="nectar-button medium regular accent-color regular-button gra cln"
                  >
                    <span>Talk with our Experts</span>
                  </a>{" "}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 nopadding">
              <div className="w-100">
                {" "}
                <img
                  src="https://www.blockchainappfactory.com/images/nft_studio/bg-2.webp"
                  alt="Generative Art NFTs"
                  title="Generative Arts"
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SecTwo>
  );
};

export default Sec2;
