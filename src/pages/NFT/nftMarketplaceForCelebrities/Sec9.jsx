import React from "react";
import { SecNine } from "./nftMarketplaceForCelebritiesComp";
import { H2 } from "../../../components";

const Sec9 = () => {
  return (
    <SecNine>
      <div className="common_spacing">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <div className="section-title underline mb20 text-center font-wei">
                <H2> Top Celebrity NFT Marketplaces </H2>
              </div>{" "}
            </div>
          </div>
          <div className="row mt40">
            <div className="col-sm-12 col-md-12 col-lg-12 text-center">
              <div className="list-box">
                <ul className="primary-list">
                  <li>
                    <p className="port-txt">
                      <strong>
                        <i className="fa fa-caret-right"></i>nOFTEN
                      </strong>{" "}
                      is an exclusive celebrity NFT marketplace selling special
                      NFT items from iconic people.
                    </p>
                  </li>
                  <li>
                    <p className="port-txt">
                      <strong>
                        <i className="fa fa-caret-right"></i>WENEW
                      </strong>{" "}
                      by the famous digital artist Beeple sells iconic moments
                      as non-fungible tokens.
                    </p>
                  </li>
                  <li>
                    <p className="port-txt">
                      <strong>
                        <i className="fa fa-caret-right"></i>ArtOfficial{" "}
                      </strong>{" "}
                      by the crypto entrepreneur Gary Vaynerchuk allows people
                      to sell NFTs through auctions.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecNine>
  );
};

export default Sec9;
