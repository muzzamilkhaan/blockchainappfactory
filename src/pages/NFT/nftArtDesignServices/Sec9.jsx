import React from "react";
import { SecNine } from "./nftArtDesignServicesComp";
import { H2, Button } from "../../../components";

const Sec9 = () => {
  return (
    <SecNine>
      <div className="common_spacing" style={{ background: "#140050" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-title text-center">
                <div className="text-white">
                  <H2 style={{ color: "#fff" }}>
                    {" "}
                    Why Choose Us As Your NFT Art Design Agency?{" "}
                  </H2>
                </div>
                <hr className="mb40" />
                <p className="text-white">
                  As a renowned NFT art design agency, we strive to deliver
                  creative works reflecting your novel business idea. With
                  extensive experience and creative approaches, our
                  professionals understand every minute aspect of your project
                  to give the best possible output. Our prowess in crafting
                  interesting storyboards, minting NFTs, and listing them in
                  marketplaces eases many processes for you. Get in touch with
                  our experts today to frame visually intriguing designs for
                  your NFT project!
                </p>
                <div className="clearfix"></div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecNine>
  );
};

export default Sec9;
