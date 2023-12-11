import React from "react";
import { SecNine } from "./nftMarketPlaceBSCComp";
import Button from "../../../components/Button";
const Sec9 = () => {
  return (
    <>
      <SecNine>
        <div id="ico-developement" className="why_binance">
          <div className="container">
            <div className="row">
              <div className="col-md-12 section-header text-center mb40">
                <div className="bnr-box">
                  <h2 className="common_h1 section-title underline text-white">
                    Why Binance Smart Chain Platform Is More Suited For The
                    Development Of The NFT Marketplace?
                  </h2>
                  <p className="section-subtitle text-white">
                    The most common type of NFT marketplace platforms is built
                    on the Ethereum blockchain. The Ethereum based NFT
                    marketplace platform is widely recognized by the crypto
                    community, and it is relied upon more often in the domain.
                    From crypto enthusiasts to the general audience, they are
                    dependent on the Ethereum based NFT marketplace. Due to this
                    high usage of transacting, it gives rise to high network
                    congestion and high transaction costs. In order to solve
                    these major challenges, NFT marketplaces are built on the
                    Binance Smart Chain platform. This Binance smart chain NFT
                    marketplace platform eliminates network congestions and
                    keeps the transaction costs at an economical level.
                  </p>
                  <div
                    className="col-md-12 cta_algn mt-4"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button
                      btnContent="Talk with our Experts"
                      to="#newsletter-form-sec"
                    />
                  </div>
                  <div className="mt20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SecNine>
    </>
  );
};

export default Sec9;
