import React from "react";
import { SecTwo } from "./fractionalNftMarketplaceDevelopmentComp";
import { H2 } from "../../../components";
const Sec2 = () => {
  return (
    <SecTwo>
      <div className="intro_cnt common_spacing">
        <div className="container">
          <div className="section-title text-center underline">
            <div className="sec_tit">
              <div className="fact font-wei">
                <H2 style={{ color: "#161515" }}>
                  {" "}
                  NFT - beginning of the trailblazing market{" "}
                </H2>
              </div>
            </div>
          </div>
          <p className="mb14 text-center para fract">
            The evolution of cryptocurrencies took almost a decade to get the
            wide reach that it is experiencing now. People started realizing the
            real potential of the crypto market very slowly. But that's not the
            case with NFT. NFTs made a huge hit in the market in a very short
            span. Though the concept of NFT is different from the crypto market,
            NFT managed to hold a very strong position in the Digital space. The
            NFT is now not an instance of the crypto market. These magnificent
            features and characteristics made NFT to be recognized as one of the
            trusted collectibles.
          </p>
          <div className="text-center m14"></div>
        </div>
      </div>
    </SecTwo>
  );
};

export default Sec2;
