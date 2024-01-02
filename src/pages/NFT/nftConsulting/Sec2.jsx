import React from "react";
import { SecTwo } from "./nftConsultingComp";
import { H2 } from "../../../components";

const Sec2 = () => {
  return (
    <SecTwo>
      <section className="common_spacing">
        <div className="container">
          <div className="text-center">
            <div className="sec_tit underline">
              <H2> Why is NFT Consulting important? </H2>
            </div>
          </div>
          <div className="col-lg-12">
            <p className="mt10 mb10 text-center">
              Non-fungible tokens (NFTs) have grown in stature in recent years
              due to increased adoption among the crypto-savvy community that
              saw their endless potential. Such prominence gives rise to more
              and more businesses based on these virtual tokens, which has given
              rise to competition in the Web3 world. Hence, NFT consulting is
              deemed necessary for an NFT-based startup venture to appeal to the
              community and take a special spot in the congested space.
              Blockchain App Factory helps humble Web3 ventures achieve their
              dreams through client-specific NFT consulting services.
            </p>
          </div>
        </div>
      </section>
    </SecTwo>
  );
};

export default Sec2;
