import React from "react";
import { SecSeven } from "./tokenGatingPlatformComp";
import { H2, H3 } from "../../../components";

const Sec7 = () => {
  return (
    <SecSeven>
      <section className="p-60 pre-ico-sec-1 gray-bg">
        <div className="container">
          <div className="row">
            <div className="main-sections">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="section-header underline text-center">
                  <div className="title-th sec_tit">
                    <H2>How Token Gating Works </H2>
                  </div>
                </div>
                <div className="why-adit container-center">
                  <p className="text-center">
                    NFT-based gated content has risen in popularity due to its
                    special utility that bridges businesses and consumers in
                    meaningful ways. Platforms driven by token-gated access tap
                    into a proven functional model that leverages exclusiveness
                    to the maximum extent.
                  </p>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 equalize">
                    <div className="card-big-shadow">
                      <div className="why-adit-list">
                        <div className="icon">
                          <img
                            className=""
                            data-src="images/token-gating-platform/icons/wallet.webp"
                            alt=""
                            src="https://www.blockchainappfactory.com/images/token-gating-platform/icons/wallet.webp"
                          />
                        </div>
                        <div className="content">
                          <H3 style={{marginBlock:"10px"}}>Connect Wallet</H3>
                          <p>
                            A user needs to connect their wallet with the
                            token-gated platform as a first step to accessing
                            the token-gated application.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 equalize">
                    <div className="card-big-shadow">
                      <div className="why-adit-list">
                        <div className="icon">
                          <img
                            className=""
                            data-src="images/token-gating-platform/icons/digital-assets.webp"
                            alt=""
                            src="https://www.blockchainappfactory.com/images/token-gating-platform/icons/digital-assets.webp"
                          />{" "}
                        </div>
                        <div className="content">
                          <H3 style={{marginBlock:"10px"}}>Asset Verification</H3>
                          <p>
                            An authentication mechanism screens the wallet to
                            check if the desired tokens are present to allow the
                            user to access the app.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 equalize">
                    <div className="card-big-shadow">
                      <div className="why-adit-list">
                        <div className="icon">
                          {" "}
                          <img
                            className=""
                            data-src="images/token-gating-platform/icons/experiences.webp"
                            alt=""
                            src="https://www.blockchainappfactory.com/images/token-gating-platform/icons/experiences.webp"
                          />{" "}
                        </div>
                        <div className="content">
                          <H3 style={{marginBlock:"10px"}}>Access to Platform </H3>
                          <p>
                            Upon successful verification, users can access the
                            NFT token-gated platform to gain exclusive
                            holder-only experiences.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center">
                Note these tokens can be both fungible and non-fungible,
                although NFTs are popularly used among token-gating businesses.
                Contact our experts today to know which token type will be
                desirable for your Web3 venture.
              </p>
            </div>
            <div className="row"></div>
          </div>
        </div>
      </section>
    </SecSeven>
  );
};

export default Sec7;
