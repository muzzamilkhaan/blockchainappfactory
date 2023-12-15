import React from "react";
import { SecSix } from "./nftMarketPlaceSportComp";
import { Button, H2 } from "../../../components";

const Sec6 = () => {
  return (
    <SecSix>
      <section
        style={{
          padding: "3% 0",
          color: "#fff",
          backgroundImage: "linear-gradient(115deg, #47b475, #1e5133)",
        }}
        // style="padding: 3% 0%;
        // color: #fff;
        // background-image: linear-gradient(115deg, #47b475, #1e5133);"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 bg-clr text-center">
              <div className="font_wei">
                <H2 style={{ color: "#fff" }}>
                  {" "}
                  NFT platform for Fantasy sports
                </H2>{" "}
              </div>
              <p className="mt-30 text-white para">
                Fantasy sports are the unique games offered in the virtual
                medium. The platform facilitates the users to select players and
                form teams to play for the scheduled matches. The players and
                the teams represented in the form of NFTs on the platform. Users
                can select the purchase players and teams in the form of NFTs to
                play in the scheduled matches. The winning team earns its
                rewards in the form of NFTs with additional benefits. It
                facilitates the player to receive the royalty for the digital
                representation of their characters. These NFTs offer an
                exclusive gaming experience with realistic characters in the
                virtual environment.{" "}
              </p>
            </div>
          </div>
          <div className="text-center">
            {/* <style type="text/css">
.nec-btn{
     position: relative !important;
    color:#fff !important;
    border-radius:30px !important;
    font-size: 11px;
    text-transform: uppercase !important;
    transform: scale(1.1,1.1) !important;
    transition:all 0.3s ease-out 0s !important;
    background: #47b475 !important;
}
.nec-btn:hover{
    transform: scale(1,1) !important;
    color:#fff !important;
    background:#00a9e2!important;
}
a.nectar-button.medium.regular.accent-color.regular-button.nec-btn {
    margin-bottom: 15px!important;
    display: inline-block;
    margin-right: 26px!important;
}
.contentall a, a.home-talk-experts{
	padding: 10px 20px !important;
}
</style> */}
            {/* <div className="cta_mine">
              <a
                className="nectar-button medium regular accent-color regular-button nec-btn"
                target="_blank"
                href="https://api.whatsapp.com/send?l=en&amp;text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&amp;phone=916382665366"
                data-color-override="false"
                data-hover-color-override="false"
                data-hover-text-color-override="#fff"
              >
                <span>Connect with Whatsapp</span>
              </a>
            </div>{" "} */}
            <div className="d-flex justify-content-center">
              <Button
                btnContent="Connect with Whatsapp"
                to="https://api.whatsapp.com/send?l=en&amp;text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&amp;phone=916382665366"
                target="_blank"
              />
            </div>
          </div>
        </div>
      </section>
    </SecSix>
  );
};

export default Sec6;
