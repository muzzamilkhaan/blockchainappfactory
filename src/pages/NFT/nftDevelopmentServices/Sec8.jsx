import React from "react";
import { SecEight } from "./nftDevelopmentServicesComp";
import { H2, Button } from "../../../components";
import Sec16 from "./Sec16";
import Sec17 from "./Sec17";

const Sec8 = () => {
  return (
    <SecEight>
      <section className="perfect-script common_spacing">
        <div className="container">
          <div className="row">
            <div className="sec_tit underline text-center mb20">
              <H2>
                Intriguing Features of our Non Fungible Token Development{" "}
              </H2>
            </div>
            <p className="text-center">
              NFTs offer a lot of features advantageous to businesses, creators,
              and collectors. We will see some of the points below.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-center">
              <div className="perfect-script-items">
                <div className="icon">
                  <img
                    className="lazy"
                    data-src="images/demo/icon/ownership.webp"
                    src="https://www.blockchainappfactory.com/images/demo/icon/ownership.webp"
                  />{" "}
                </div>
                <div className="content">
                  <h3 className="font-wei">Ownership</h3>
                  <p>
                    NFTs offer proof of ownership for buyers, helping them to
                    truly own the asset supported by the NFT on the blockchain.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-center">
              <div className="perfect-script-items">
                <div className="icon">
                  <img
                    className="lazy"
                    data-src="images/demo/icon/transactions.webp"
                    src="https://www.blockchainappfactory.com/images/demo/icon/transactions.webp"
                  />{" "}
                </div>
                <div className="content">
                  <h3 className="font-wei">Transferability</h3>
                  <p>
                    NFT assets can be transferred easily as transactions involve
                    blockchains which make the process quicker and verifiable.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-center">
              <div className="perfect-script-items">
                <div className="icon">
                  <img
                    className="lazy"
                    data-src="images/demo/icon/creator.webp"
                    src="https://www.blockchainappfactory.com/images/demo/icon/creator.webp"
                  />{" "}
                </div>
                <div className="content">
                  <h3 className="font-wei">Royalties for Reselling</h3>
                  <p>
                    Creators can earn royalties easily whenever an NFT is resold
                    by including relevant conditions in smart contracts.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-center">
              <div className="perfect-script-items">
                <div className="icon">
                  <img
                    className="lazy"
                    data-src="images/demo/icon/growth.webp"
                    src="https://www.blockchainappfactory.com/images/demo/icon/growth.webp"
                  />{" "}
                </div>
                <div className="content">
                  <h3 className="font-wei">Inclusive Growth</h3>
                  <p>
                    NFT assets can be transferred easily as transactions involve
                    blockchains which make the process quicker and verifiable.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-offset-3 col-lg-6 col-md-6 col-sm-6 col-xs-12 text-center">
              <div className="perfect-script-items">
                <div className="icon">
                  <img
                    className="lazy"
                    data-src="images/demo/icon/authenticity.webp"
                    src="https://www.blockchainappfactory.com/images/demo/icon/authenticity.webp"
                  />{" "}
                </div>
                <div className="content">
                  <h3 className="font-wei">Authenticity</h3>
                  <p>
                    NFTs help people ensure the authenticity of assets over the
                    blockchain to verify whether a product is original easily.
                  </p>
                </div>
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
      </section>

      <div className="shard_master-node">
        <div className="container">
          <div className="row real-estate-list">
            <div className="section-title text-center">
              <div
                className="font_wei"

                // style="color: #fff; font-weight: 600;"
              >
                <H2 style={{ color: "#fff" }}>
                  {" "}
                  Launch a Custom NFT Solution Today to Leverage the Emerging
                  Web3 Market!{" "}
                </H2>
              </div>{" "}
            </div>
            <div className="col-md-12 text-center mt20">
              <div className="d-flex justify-content-center flex-wrap gap-3 ">
                <Button
                  btnContent="Hire our NFT Developers"
                  to="#newsletter-form-sec"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*----------------------------- SECTION 16 ----------------------------------------*/}
      <Sec16 />
      {/*----------------------------- SECTION 17 ----------------------------------------*/}
      <Sec17 />
    </SecEight>
  );
};

export default Sec8;
