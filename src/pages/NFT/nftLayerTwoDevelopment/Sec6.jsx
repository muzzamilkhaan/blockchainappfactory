import React from "react";
import { SecSix } from "./nftLayerTwoDevelopmentComp";
import { Button, H2 } from "../../../components";
const Sec6 = () => {
  return (
    <SecSix>
      <div className="intro_cnt common_spacing gray_bg">
        <div className="container">
          <div className="section-title text-center">
            <div className="sec_tit">
              <div className="font-wei">
                <H2>
                  {" "}
                  Our NFT Marketplace Development Service in Ethereum Layer 2
                  Protocol{" "}
                </H2>
              </div>
            </div>
            <hr />
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12 text-left">
              <img
                className="lazy crypto mb20"
                data-src="/images/layer2/image-04-layer-2.webp"
                // style="margin-bottom: 20px;"
                alt="NFT Layer 2 Development Services"
                title="NFT Marketplace Development in Ethereum L2"
                src="https://www.blockchainappfactory.com/images/layer2/image-04-layer-2.webp"
              />
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 text-justify">
              <p className="mt20">
                In the near future, the NFT marketplaces will be developed to
                gain the ability to support the function of the layer 2
                protocol. We provide NFT development in Layer 2 services to the
                customers to enable a smooth gas-free trading experience without
                sacrificing the security of the Ethereum network.
              </p>
              <p className="mt20">
                We provide NFT development in layer 2 services to help scale the
                NFT marketplace by handling the transaction off the Ethereum
                blockchain, in this context, it is known as a Layer 1 network.
                We make sure that our customers can withdraw immediately without
                facing an attack on their marketplace regardless of how many
                funds are going through the marketplace. Our NFT development in
                layer 2 protocol aims to significantly increase the number of
                transactions carried out in a given period of time.
              </p>
            </div>
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
    </SecSix>
  );
};

export default Sec6;
