import React from "react";
import { SecTwo } from "./tokenGatingPlatformComp";
import { Button, H2 } from "../../../components";
const Sec2 = () => {
  return (
    <SecTwo>
      <div className="common_spacing">
        <div className="container">
          <div className="section-title text-center">
            <div className="title-th sec_tit underline">
              <H2>
                Token Gating Platform for Brands: Tapping into NFT-gated Content
              </H2>
            </div>{" "}
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 text-center">
              <p className="text-center para">
                WThe emergence of Web3 technology in recent years has brought a
                plethora of use cases to the digitalized world. A token gating
                platform for brands built by us utilizes NFT-gated content to
                another level. With the platform, you can foster a
                community-centric ecosystem that taps into NFTs to provide
                access.
                <br />
                <br />
                NFT-based token gating creates a sense of exclusivity and
                community for prestigious experiences that might otherwise be
                impossible to access. Our team lets you build token-gated
                applications to boost the scale of your premium business
                manifolds. Brace yourselves to garner unprecedented levels of
                welcome from the evolving crypto ecosystem!
              </p>
            </div>
            <div className="clearfix"></div>
            {/* <div className="text-center cta_mine txt">
              {" "}
              <a
                className="nectar-button medium regular accent-color regular-button nec-btn med-btn"
                target="_blank"
                href="https://api.whatsapp.com/send?l=en&amp;text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&amp;phone=916382665366"
                data-color-override="false"
                data-hover-color-override="false"
                data-hover-text-color-override="#fff"
              >
                <span>Connect with Whatsapp</span>
              </a>{" "}
              <a
                href="#newsletter-form-sec"
                className="nectar-button medium regular accent-color regular-button nec-btn med-btn"
              >
                <span>Talk with our Experts</span>
              </a>{" "}
            </div> */}

            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Button
                btnContent="Connect with Whatsapp"
                to="https://api.whatsapp.com/send?l=en&amp;text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&amp;phone=916382665366"
                target="_blank"
              />
              <Button btnContent="Talk with our Experts" />
            </div>
          </div>
        </div>
      </div>
    </SecTwo>
  );
};

export default Sec2;
