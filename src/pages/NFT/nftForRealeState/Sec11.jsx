import React from "react";
import { SecEleven } from "./nftForRealeStateComp";
import { H2 } from "../../../components";

const Sec11 = () => {
  return (
    <SecEleven>
      <section className="whychoose_sec common_spacing">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center">
              <img
                className="br"
                data-src="images/nft_real/benifits.webp"
                alt="NFT Marketplace for Real Estate"
                title="Benefits Of Real Estate NFT Marketplace"
                src="https://www.blockchainappfactory.com/images/nft_real/benifits.webp"
              />{" "}
            </div>
            <div className="col-md-6 mt40">
              <div className="section-title underline text-left">
                <div className="sec_tit">
                  <H2> Benefits of Real estate NFT marketplace </H2>
                </div>
              </div>
              <ul className="text-left">
                <li>
                  <div className="icon_img">
                    <img
                      className=""
                      data-src="images/nft_real/icon/blockchain1.webp"
                      alt=""
                      width="60px"
                      height="60px"
                      src="https://www.blockchainappfactory.com/images/nft_real/icon/blockchain1.webp"
                    />
                  </div>
                  <div className="content">
                    <p>
                      The very immovability of the real estate makes it a
                      desirable candidate for the 3rd parties with blockchain
                      access to be used as collateral.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon_img">
                    <img
                      className=""
                      data-src="images/nft_real/icon/trade.webp"
                      alt=""
                      width="60px"
                      height="60px"
                      src="https://www.blockchainappfactory.com/images/nft_real/icon/trade.webp"
                    />
                  </div>
                  <div className="content">
                    <p>
                      As in the real world, smart contracts can be designed in
                      such a way that can sell/ loan/Short-Term lease/ Long-term
                      Lease.{" "}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon_img">
                    <img
                      className=""
                      data-src="images/nft_real/icon/assets1.webp"
                      alt=""
                      width="60px"
                      height="60px"
                      src="https://www.blockchainappfactory.com/images/nft_real/icon/assets1.webp"
                    />
                  </div>
                  <div className="content">
                    <p>
                      Allows collecting virtual land as an asset that has real
                      value.{" "}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon_img">
                    <img
                      className=""
                      data-src="images/nft_real/icon/asset.webp"
                      alt=""
                      width="60px"
                      height="60px"
                      src="https://www.blockchainappfactory.com/images/nft_real/icon/asset.webp"
                    />
                  </div>
                  <div className="content">
                    <p>
                      No chance of falsely acquiring a piece of land would be a
                      plus.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </SecEleven>
  );
};

export default Sec11;
