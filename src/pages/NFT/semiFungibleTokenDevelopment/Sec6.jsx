import React from "react";
import { SecSix } from "./semiFungibleTokenDevelopmentComp";
import { H2, Button } from "../../../components";

const Sec6 = () => {
  return (
    <SecSix>
      <section className="common_spacing">
        <div className="container">
          <div className="col-lg-6">
            {" "}
            <img
              className="img-responsive rounded-border mt20"
              data-src="images/semi-fungible-token-development/semi-02.webp"
              alt="Semi Fungible Token Development"
              title="SFT Development"
              src="https://www.blockchainappfactory.com/images/semi-fungible-token-development/semi-02.webp"
            />{" "}
          </div>
          <div className="col-lg-6">
            <div className="sec_tit underline text-left">
              <H2> Develop Your Semi Fungible Token </H2>
            </div>
            <p className="mt10 mb10 text-justify">
              Today, NFTs have occupied the peak spot in the crypto world due to
              their nature of proving ownership, authenticity, and immutability.
              But, yet they have a few shortcomings, such as usability in only
              limited places, which can be overcome by semi-fungible tokens.
              Semi-fungible token development can be the ultimate solution as
              these virtual tokens have a lot more utility, creating some
              liquidity for such assets in the process. Semi-fungible token
              development involves the usage of the EIP-721 standard, a
              deviation from ERC-20 (for cryptocurrencies), and ERC-1155 (for
              non-fungible tokens) that result in conducting transfers of token
              batches quickly and efficiently. The blockchain gaming domain has
              already sowed the seed for SFT development, and it would not be
              soon to know the results across the crypto sphere.
            </p>
            <br />
          </div>

          {/* <div
            className="contentall"
            align="center"
            //    style=""
          ></div> */}
        </div>
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
      </section>
    </SecSix>
  );
};

export default Sec6;
