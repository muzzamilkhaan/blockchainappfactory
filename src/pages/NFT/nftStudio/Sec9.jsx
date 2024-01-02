import React from "react";
import { SecNine } from "./nftStudioComp";

const Sec9 = () => {
  return (
    <SecNine>
      <section className="bg_7">
        <div className="container-fluid">
          <div className="row d-flex">
            <div className="col-lg-6 col-md-6 col-sm-12 nopadding">
              <div className="w-100">
                {" "}
                <img
                  src="https://www.blockchainappfactory.com/images/nft_studio/bg-7.webp"
                  alt="Generative NFT Projects"
                  title="Our Extended Features"
                />{" "}
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 vcenter-item bg_white nopadding">
              <div className="content p-40">
                <h2 className="text_w">Our Extensive Features</h2>
                <div className="row">
                  <div className="col-lg-6 mt10">
                    <ul className="list text_w">
                      <li>
                        <i className="fa-regular fa-square-check" />
                        Decentralized
                      </li>
                      <li>
                        <i className="fa-regular fa-square-check" />
                        Security
                      </li>
                      <li>
                        <i className="fa-regular fa-square-check" />
                        Authenticity
                      </li>
                      <li>
                        <i className="fa-regular fa-square-check" />
                        Immutable
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul className="list">
                      <li>
                        {" "}
                        <i className="fa-regular fa-square-check" />
                        Multichain support
                      </li>
                      <li>
                        {" "}
                        <i className="fa-regular fa-square-check" />
                        Interoperability
                      </li>
                      <li>
                        {" "}
                        <i className="fa-regular fa-square-check" />
                        Transparency
                      </li>
                      <li>
                        {" "}
                        <i className="fa-regular fa-square-check" />
                        Personalization
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SecNine>
  );
};

export default Sec9;
