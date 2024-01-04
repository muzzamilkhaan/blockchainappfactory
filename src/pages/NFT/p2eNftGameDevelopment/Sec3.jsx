import React from "react";
import { SecThree } from "./p2eNftGameDevelopmentComp";
import { H2, Button } from "../../../components";

const Sec3 = () => {
  return (
    <SecThree>
      <div className="common_spacing">
        <div className="container">
          <div className="section-title text-center">
            <div className="title-th sec_tit underline">
              <H2> What is a P2E NFT Game? </H2>
            </div>{" "}
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 text-center">
              <p className="text-center mt20">
                P2E, aka Play-to-Earn, is the latest gaming model that has
                seized the attention of gamers worldwide. It enables players to
                monetize their gameplay and earn real money for all their
                victories, bonuses, and level-ups in the game. Mostly, the
                rewards will be in the form of cryptocurrencies.{" "}
              </p>
              <p>
                A P2E NFT game is a one-of-a-kind game that will have in-game
                assets as NFTs. The game assets such as weapons, characters,
                accessories, skins, etc., will be tokenized into NFTs, and
                holders can buy, sell, or trade them in the marketplaces. It
                opens the gates for gamers to generate a steady income stream
                through playing. And, the best part of the P2E NFT games is that
                these crypto assets (obtained as rewards) can be either used in
                the game to procure the available in-game assets or can be
                withdrawn to personal wallets.{" "}
              </p>
              <div className="text-center">
                <div className="cta_mine">
                  <div className="d-flex justify-content-center flex-wrap gap-3 ">
                    <Button
                      btnContent="Connect with Whatsapp"
                      target="_blank"
                      to="https://api.whatsapp.com/send?l=en&amp;text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&amp;phone=916382665366"
                    />
                    <Button
                      btnContent="Talk with our Experts"
                      to="#newsletter-form-sec"
                    />
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecThree>
  );
};

export default Sec3;
