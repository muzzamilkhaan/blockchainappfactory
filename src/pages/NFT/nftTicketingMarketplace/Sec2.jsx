import React from "react";
import { SecTwo } from "./nftTicketingMarketplaceComp";
import { H2 } from "../../../components";

const Sec2 = () => {
  return (
    <SecTwo>
      <section className="intro_cnt common_spacing gray_bg">
        <div className="container">
          <div className="col-lg-12">
            <div className="section-title text-center underline">
              <div className="sec_tit">
                <H2> What are the NFT ticketing systems?</H2>
              </div>
            </div>
            <p className="mt10 mb10 text-center para">
              NFT ticketing systems are platforms where tickets tokenized into
              non-fungible tokens are sold. These platforms provide digital
              tickets that cannot be duplicated. Also, secondary sales of these
              provide royalties to the original event manager/artist. It is even
              possible for event managers to set a price ceiling for secondary
              sales. Setting price limits help to ensure that fans do not spend
              a lot on tickets. NFT ticketing platforms have already been
              successful post the NFT boom. The trend is expected to continue as
              such in the Web3 world. Popular NFT ticketing platforms include
              GUTS, YellowHearts, Seatlab, NFT TiX, and WICKET.
            </p>
          </div>
        </div>
      </section>
    </SecTwo>
  );
};

export default Sec2;
