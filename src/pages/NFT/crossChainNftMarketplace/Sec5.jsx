import React from "react";
import { SecFive } from "./crossChainNftMarketplaceComp";
import { H2, Button } from "../../../components";

const Sec5 = () => {
  return (
    <SecFive>
      <section className="gray-bg p-60 significance">
        <div className="container">
          <div className="row">
            <div className="section-title text-center">
              <div className="sec_tit">
                <div className="common_h1 section-title underline">
                  <H2 style={{ color: "#444444" }}>
                    {" "}
                    Cross-chain NFT Marketplace{" "}
                  </H2>
                </div>
              </div>
              <p className="text-center mt50 para">
                The NFT marketplace development with cross-chain compatibility
                includes various stages of development, putting together various
                elements and components of the crypto market. Here are the major
                key factors that are involved in our Cross-chain NFT
                marketplace.
              </p>
            </div>
          </div>
          <div className="row mt40">
            <div className="col-md-4 why_choose_1 col-sm-6 col-xs-12">
              <div className="icon-wrap">
                <img
                  className="lazy"
                  data-src="/images/cross_chain/icons/proposal.webp"
                  alt=""
                  src="https://www.blockchainappfactory.com/images/cross_chain/icons/proposal.webp"
                />{" "}
              </div>
              <h4>Connectivity Smart Contract</h4>
              <p className="para">
                This is the milestone of the entire crypto ecosystem, where we
                developed smart contracts to establish the connectivity between
                the blockchains. At the same time, these smart contracts
                automate various processes that require human intrusion.{" "}
              </p>
            </div>
            <div className="col-md-4 why_choose_1 col-sm-6 col-xs-12">
              <div className="icon-wrap ">
                <img
                  className="lazy"
                  data-src="/images/cross_chain/icons/user-interface.webp"
                  alt=""
                  src="https://www.blockchainappfactory.com/images/cross_chain/icons/user-interface.webp"
                />{" "}
              </div>
              <h4>User Interface</h4>
              <p className="para">
                {" "}
                The user interface of a product is much important than any other
                process. Taking that into concern, our development team will
                build a unique and attractive user interface. It will be liked
                by the users and keep them in the loop for visiting again.{" "}
              </p>
            </div>
            <div className="col-md-4 why_choose_1 col-sm-6 col-xs-12">
              <div className="icon-wrap">
                <img
                  className="lazy"
                  data-src="/images/cross_chain/icons/process.webp"
                  alt=""
                  src="https://www.blockchainappfactory.com/images/cross_chain/icons/process.webp"
                />{" "}
              </div>
              <h4>Master Control </h4>
              <p className="para">
                Master control is the privileged panel where the admin or owner
                of our development will be given certain privileges. This will
                help them to run the NFT marketplace very smoothly, and at the
                same time, it will be very useful to mitigate any kind of
                intrusion.{" "}
              </p>
            </div>
            <div className="col-md-4 why_choose_1 col-sm-6 col-xs-12">
              <div className="icon-wrap">
                {" "}
                <img
                  className="lazy"
                  data-src="/images/cross_chain/icons/hack.webp"
                  alt=""
                  src="https://www.blockchainappfactory.com/images/cross_chain/icons/hack.webp"
                />{" "}
              </div>
              <h4>Growth Hacking Tool</h4>
              <p className="para">
                A specific and exclusive tool to continuously monitor the
                development of your NFT marketplace with cross-chain
                compatibility. This tool will analyze everything about the NFT
                marketplace, including insights, the period people spend in the
                marketplace, and many others to enhance the marketplace.{" "}
              </p>
            </div>
            <div className="col-md-4 why_choose_1 col-sm-6 col-xs-12">
              <div className="icon-wrap">
                <img
                  className="lazy"
                  data-src="/images/cross_chain/icons/browser.webp"
                  alt=""
                  src="https://www.blockchainappfactory.com/images/cross_chain/icons/browser.webp"
                />{" "}
              </div>
              <h4>API’s </h4>
              <p className="para">
                {" "}
                The NFT marketplace with the cross-chain compatibility we serve
                will have all types of APIs that are essential to run the
                platform very smoothly. These APIs include wallets too. Our NFT
                marketplace will come with the web 3.0 based wallet and other
                API to perform advanced action in the marketplace.{" "}
              </p>
            </div>
            <div className="col-md-4 why_choose_1 col-sm-6 col-xs-12">
              <div className="icon-wrap">
                <img
                  className="lazy"
                  data-src="/images/cross_chain/icons/shield.webp"
                  alt=""
                  src="https://www.blockchainappfactory.com/images/cross_chain/icons/shield.webp"
                />{" "}
              </div>
              <h4>Security</h4>
              <p className="para">
                {" "}
                Though lockchain takes care of the privacy and security of the
                data, we take more concern towards providing a very perfect
                development. To succeed, NFT marketplaces are equipped with
                high-tier security protocols and firewalls to withstand any
                adversaries’ attack.{" "}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
             
              <div className="cta_mine">
                <div className="d-flex justify-content-center flex-wrap gap-3 ">
                  <Button
                    btnContent="Talk with our Experts"
                    to="#newsletter-form-sec"
                  />
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </section>
    </SecFive>
  );
};

export default Sec5;
