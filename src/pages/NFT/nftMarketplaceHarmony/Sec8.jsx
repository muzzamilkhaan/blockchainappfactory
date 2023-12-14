import React from "react";
import { SecEight } from "./nftMarketplaceHarmonyComp";
import { Button, H2 } from "../../../components";

const Sec8 = () => {
  return (
    <SecEight>
      <div className="intro_cnt common_spacing gray_bg">
        <div className="container">
          <div className="section-title text-center underline">
            <div className="sec_tit">
              <H2>
                Why Harmony platform a great fit for developing An NFT
                marketplace?
              </H2>
            </div>
          </div>
          <p className="mt10 text-center para">
            The NFT marketplaces are very flexible, they can be developed over
            many various blockchain networks. But as the growth of blockchain in
            the NFT field increases, the issue also increases. In order to
            eradicate those issues, the development evolution of blockchain is
            continuing. Harmony blockchain is the latest evolved form of
            blockchain which is highly secure and has an incredibly high
            transaction speed, it processes transactions with 2-second
            transaction finality. At the present time, the growth and evolution
            of NFTs and other crypto protocols are vast and they all require an
            efficient cross-chain decentralized exchange platform, to receive
            the best out of them. Harmony blockchain is the perfect solution for
            the current NFT marketplace trading processes. It has high-level
            cross-chain compatibility and scalability features. The salient
            futuristic features of Harmony makes it a perfect fit for business
            entities to develop their NFT marketplace.{" "}
          </p>

          <div className="d-flex  justify-content-center gap-3 flex-wrap">
            <Button
              btnContent="Connect with Whatsapp"
              target="_blank"
              to="https://api.whatsapp.com/send?l=en&amp;text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&amp;phone=916382665366"
            />
            <Button btnContent="Talk with our Experts" />
          </div>
        </div>
      </div>
    </SecEight>
  );
};

export default Sec8;
