import React from "react";
import { SecOne } from "./nftMarketplaceSolanaComp";
import { Button, H2, H1 } from "../../../components/index";
const Sec1 = () => {
  return (
    <SecOne>
      <div className="banner blockchain-counsulting">
        <div
          id="large-header"
          className="large-header"
          // style="height: 492px;"
        >
          {" "}
        </div>
        <div className="container banner_content contentall">
          <H1>Solana NFT Marketplace Development</H1>
          <div className="banner_sub">
            Experience high-speed transaction processing by trading NFTs on the
            Solana based NFT marketplace.
          </div>
          <div className="banner_btn">
            <a
              href="#newsletter-form-sec"
              className="nectar-button medium regular accent-color regular-button nec-btn"
            >
              <strong>Talk with our Experts</strong>
            </a>
            <a
              href="https://nft.bafdemo.com/"
              target="_blank"
              className="nectar-button medium regular accent-color regular-button nec-btn"
            >
              View Demo
            </a>
          </div>
        </div>
      </div>
    </SecOne>
  );
};

export default Sec1;
