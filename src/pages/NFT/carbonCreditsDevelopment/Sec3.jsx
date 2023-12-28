import React from "react";
import { SecThree } from "./carbonCreditsDevelopmentComp";
import { H2, Button } from "../../../components";

const Sec3 = () => {
  return (
    <SecThree>
      <div className="common_spacing gray_bg">
        <div className="container">
          <div className="section-title text-center">
            <div className="title-th sec_tit underline">
              <H2> Why Use Blockchains for Carbon Credit Management? </H2>
            </div>{" "}
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 text-center">
              <p className="text-center mt20">
                As we know, blockchains are distributed digital ledgers that can
                be used for storing data. They are also publicly verifiable,
                which ensures transparency of the data stored. Such nature of
                blockchain ledgers can be beneficial for carbon credits to be
                tokenized. This is to ensure that small-scale investors can
                efficiently participate in the process of fighting climate
                change. Tokenized carbon credits on the blockchain can be easily
                tracked, and their usage can be monitored to ensure that the
                system actually benefits the planet. Also, since small and
                medium-scale industries can easily access publicly-working
                blockchains, blockchain-based carbon credits can reach a wider
                user base, and more emissions can be controlled.{" "}
              </p>
              <div className="text-center">
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
        </div>
      </div>
    </SecThree>
  );
};

export default Sec3;
