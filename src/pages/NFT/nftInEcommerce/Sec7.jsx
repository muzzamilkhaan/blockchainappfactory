import React from "react";
import { SecSeven } from "./nftInEcommerceComp";
import { H2 } from "../../../components";

const Sec7 = () => {
  return (
    <SecSeven>
      <div className="intro_cnt common_spacing gray_bg">
        <div className="container">
          <div className="row mt30 mb30">
            <div className="col-md-6 col-sm-12 col-xs-12 text-center">
              <img
                className=""
                data-src="/images/eco/nft_img_benefit.webp"
                alt="Benefits of E-Commerce NFT"
                title="Benefits of NFT in E-Commerce"
                src="https://www.blockchainappfactory.com/images/eco/nft_img_benefit.webp"
              />{" "}
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 text-left">
              <div className="section-title underline text-left">
                <div className="sec_tit ">
                  <H2> Benefits of NFT in Ecommerce</H2>
                </div>
              </div>
              <p className="text-left mt10">
                Our NFT in E-commerce development will have many advantages,
              </p>
              <ul className="list-ico">
                <li>
                  The interoperable feature will let in NFTs made in different
                  blockchains since E-commerce is common to all platforms. NFT
                  interoperability support will increase the chance of the NFT
                  trade,
                </li>
                <li>
                  Immutable servers in the crypto space will never allow any
                  kind of assets to lose their state. All information and
                  transaction details, personal details, everything will be
                  shifted to decentralized servers to ensure security.
                </li>
                <li>
                  NFT in E-commerce will normalize the NFT trade. As a result, a
                  large number of NFT buyers will interact with the platform to
                  own the NFT. And contribute to widening the market of the NFT.
                </li>
                <li>
                  Our Technical assistance team will aid the customers
                  round-the-clock, where we focus on working to increase the
                  efficiency of our product and to provide a hassle-free
                  service.
                </li>
              </ul>
              <div className="text-left"> </div>
            </div>
          </div>
        </div>
      </div>
    </SecSeven>
  );
};

export default Sec7;
