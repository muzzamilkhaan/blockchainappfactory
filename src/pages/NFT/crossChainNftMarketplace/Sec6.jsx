import React from "react";
import { SecSix } from "./crossChainNftMarketplaceComp";
import { H2 } from "../../../components";

const Sec6 = () => {
  return (
    <SecSix>
      <section className="common_spacing">
        <div className="container">
          <div className="row">
            <div className="col-md-5 pull-left">
              {" "}
              <img
                className="lazy"
                data-src="/images/cross_chain/img_l.webp"
                src="https://www.blockchainappfactory.com/images/cross_chain/img_l.webp"
              />{" "}
            </div>
            <div className="col-md-7 pull-right">
              <div className="">
                <div className="section-title underline text-left">
                  <div className="sec_tit">
                    <H2 style={{ color: "#444444" }}>
                      Benefits of the NFT Marketplace with Cross-chain
                      Compatibility
                    </H2>
                  </div>
                </div>
                <div className="">
                  <ul className="list">
                    <li>
                      <i className="fa-solid fa-caret-right"></i>
                      Ownership of the non-fungible token will be tamper-proof.
                      Breaking the ownership will be an impossible task.
                    </li>
                    <li>
                      <i className="fa-solid fa-caret-right"></i>
                      The assets and all other information are stored in the
                      immutable servers, which are very safe, and they can’t be
                      lost at any cause. Liquidity is high in our NFT
                      marketplace, where there is no cooling period after making
                      a trade, and they are instantly available for the next
                      trade.
                    </li>
                    <li>
                      <i className="fa-solid fa-caret-right"></i>
                      Our cross-chain NFT marketplace will have 24/7 technical
                      support where any kind of technical assistance can be
                      availed instantly.
                    </li>
                    <li>
                      <i className="fa-solid fa-caret-right"></i>
                      The NFT marketplace development with cross-chain
                      compatibility can run on different platforms irrespective
                      of the operating systems and device types.
                    </li>
                    <li>
                      <i className="fa-solid fa-caret-right"></i>
                      The blockchain will have a complete log on everything that
                      happens in the marketplace, which makes the platform more
                      secure.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SecSix>
  );
};

export default Sec6;
