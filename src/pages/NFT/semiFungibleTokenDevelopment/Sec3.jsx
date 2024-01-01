import React from "react";
import { SecThree } from "./semiFungibleTokenDevelopmentComp";
import { H2 } from "../../../components";

const Sec3 = () => {
  return (
    <SecThree>
      <section className="common_spacing gray_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="sec_tit underline text-left">
                <H2> What is a Semi-fungible Token (SFT)? </H2>
              </div>
              <p className="mt10 mb10 text-justify">
                A semi-fungible token (SFT) is a virtual token that possesses
                both fungible and non-fungible nature. Initially, an SFT would
                be fungible where a token can be exchanged for another with the
                same value, after which it becomes non-fungible while
                remembering its attributes. These are a newer extension of the
                current blockchain-based applications and aim to combat the
                shortcomings of the existing applications. For example, a ticket
                to a game can be exchanged with another ticket for the same game
                in the same seating region before the game. But, after the game,
                though, the ticket loses its redeemable nature and becomes a
                collectible, and cannot be exchanged for another ticket for any
                reason whatsoever. The expiring nature of semi-fungible tokens
                becomes instrumental in their conversion from fungible tokens to
                non-fungible tokens.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                className="img-responsive rounded-border"
                src="https://www.blockchainappfactory.com/images/semi-fungible-token-development/semi_01.webp"
                alt="SFT Development"
                title="Semi Fungible Token Development"
              />{" "}
            </div>
          </div>
        </div>
      </section>
    </SecThree>
  );
};

export default Sec3;
