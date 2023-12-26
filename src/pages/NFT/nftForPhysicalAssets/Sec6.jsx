import React from "react";
import { SecSix } from "./nftForPhysicalAssetsComp";
import { H2 } from "../../../components";

const Sec6 = () => {
  return (
    <SecSix>
      <section className="common_spacing gray_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 text-center">
              <div className="section-title text-center">
                <div className="sec_tit underline">
                  <H2>NFT as Collateral</H2>
                </div>
                <p className="text-center mt20 para">
                  There are platforms for NFT collateralization that offer you a
                  cryptocurrency loan. If other users on the platform accept
                  your offer, the loan amount will be automatically transferred
                  to your account. These loans are bound by the smart contract,
                  which helps you to trust the process. If the bearer is not
                  able to return the loan amount by a defined time, Ownership of
                  collateralized NFT will be transferred to the lender. This
                  breaks the myths about NFT, saying that NFT is not an
                  investable asset. In reality, NFTs will act as more sturdy
                  collateral than any other in the existing.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SecSix>
  );
};

export default Sec6;
