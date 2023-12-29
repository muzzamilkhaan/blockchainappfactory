import React from "react";
import { SecEleven } from "./nftExchangeDevelopmentComp";
import { H2, Button } from "../../../components";

const Sec11 = () => {
  return (
    <SecEleven>
      <div className="intro_cnt common_spacing gray_bg">
        <div className="container">
          <div className="section-title text-center">
            <div className="sec_tit">
              <div className="font-wei">
                <H2>
                  {" "}
                  Boosting your Business with Blockchain App Factory’s elegant
                  craftsmanship{" "}
                </H2>
              </div>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <p className="text-center">
                Our proficient team and our experience in blockchain technology
                do wonders in the blockchain industry with innovative products
                and solutions. Our contribution in the empowerment of blockchain
                technology supports the user with a better experience in a
                decentralized ecosystem with a secured and reliable environment.
              </p>
              <p className="text-center">
                We offer a wide range of blockchain services from DeFi to NFTs.
                Our End-to-End platform development empowers the NFT Trading
                Exchange with reliable security, futuristic technology and
                result-driven marketing strategies. We boost your business to
                gain traction in the crypto market with all its possibilities.
                Our significance and interest in NFT help us to develop
                innovative products for the market. Our expertise in blockchain
                technology enables us to Launch an NFT exchange platform across
                multiple blockchain technologies with cross-chain capabilities
                to make you a tough competitor in the raging crypto market.
              </p>
            </div>
          </div>
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
    </SecEleven>
  );
};

export default Sec11;
