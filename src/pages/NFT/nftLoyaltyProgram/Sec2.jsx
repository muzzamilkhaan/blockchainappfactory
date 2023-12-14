import React from "react";
import { SecTwo } from "./nftLoyaltyProgramComp";
import { Button, H2 } from "../../../components/index";
const Sec2 = () => {
  return (
    <SecTwo>
      <div className="common_spacing">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 text-center">
              <div className="section-title text-center">
                <div className="title-th sec_tit underline">
                  <H2>Creating an NFT Loyalty Platform for Your Brand</H2>
                </div>{" "}
              </div>
              <p className="text-center mt20 para">
                As NFTs redefine how conventional online experiences go by, they
                have brought about sweeping changes in how customer loyalty
                schemes function. An NFT loyalty platform lets users leverage
                their rewards in more ways than before by rewarding their active
                involvement through cryptocurrencies and NFTs. Adding blockchain
                technology’s transparency and immutability to the mix further
                strengthens customer trust in your brand, as they can see their
                rewards stored securely and cannot be tampered with. With such
                leverage, you can forge closer connections with your customers
                and offer services that cater to their needs.
              </p>
              {/* <div className="contentall">
                <a
                  href="free-nft-consulting"
                  className="nec-btn"
                  // style="border-radius: 30px !important;"
                >
                  Book A Free Consultation!
                </a>
              </div> */}
              <div className="d-flex justify-content-center">
                <Button btnContent=" Book A Free Consultation!" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecTwo>
  );
};

export default Sec2;
