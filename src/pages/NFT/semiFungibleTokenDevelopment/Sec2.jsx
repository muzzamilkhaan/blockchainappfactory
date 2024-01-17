import React from "react";
import { SecTwo } from "./semiFungibleTokenDevelopmentComp";
import { H2, Button } from "../../../components";

const Sec2 = () => {
  return (
    <SecTwo>
      <section className="common_spacing">
        <div className="container">
          <div className="text-center">
            <div className="sec_tit underline">
              <H2> Semi Fungible Token Development Platform </H2>
            </div>
          </div>
          <div className="col-lg-12">
            <p className="mt10 mb10 text-center">
              Non-fungible tokens (NFTs) have played a dominant role in deciding
              the crypto space’s position today, and they have changed the way
              how things are owned in the digital world. But, the process of
              transferring huge collections of NFTs is becoming out of scope
              with the amount of inefficiency present, and that is where the
              concept of semi-fungible token development comes into play. A
              semi-fungible token development platform can perform the work of
              creating multi-faceted semi-fungible tokens easily, which exhibit
              both fungibility as well as non-fungibility. The gas fees for
              transactions get lower since only a single smart contract is used
              to complete the whole transaction. With the ability of Blockchain
              App Factory’s experts to adapt to emerging technologies, it is
              only imminent that semi-fungible token development can only get
              easier for them with their sheer experience with blockchains.
            </p>
            <br />
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

          <div className="contentall" align="center"></div>
        </div>
      </section>
    </SecTwo>
  );
};

export default Sec2;
