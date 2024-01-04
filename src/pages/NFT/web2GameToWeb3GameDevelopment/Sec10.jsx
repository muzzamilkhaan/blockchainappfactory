import React from "react";
import { SecTen } from "./web2GameToWeb3GameDevelopmentComp";
import { H2, Button } from "../../../components";

const Sec10 = () => {
  return (
    <SecTen>
      <div class="common_spacing uniq_features ">
        <div class="why-blockchain-sec">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12 col-md-12 text-center">
                <img
                  class=""
                  data-src="/images/web2-game-to-web3-game-development/img1.webp"
                  alt=" "
                  title=" "
                  src="https://www.blockchainappfactory.com/images/web2-game-to-web3-game-development/img1.webp"
                />
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-md-12">
                <div
                  class="common_h3 sec-tit underline text-left"
                  //   style="padding: 20px 0;"
                >
                  <H2> Why Prefer Us? </H2>
                </div>
                <p>
                  Blockchain App Factory is a crew of adept gaming and
                  blockchain avengers who give lives to your web3 gaming dreams.
                  Know the strengths of our entity and primary reasons to prefer
                  us for transforming your web 2.0 game to web 3.0 game.{" "}
                </p>
                <p>
                  <strong>
                    150+ Blockchain Developers | 40+ Game Experts | 30+ Visual
                    Creators | 70+ Web3 Marketing Strategists{" "}
                  </strong>{" "}
                </p>
                <ul>
                  <li>
                    {" "}
                    <i className="fa-solid fa-circle-arrow-right" />
                    Truly a Blockchain Gaming Expert
                  </li>
                  <li>
                    {" "}
                    <i className="fa-solid fa-circle-arrow-right" />
                    Proficient Blockchain Experts
                  </li>
                  <li>
                    {" "}
                    <i className="fa-solid fa-circle-arrow-right" />
                    Tailor-Made Solutions
                  </li>
                  <li>
                    {" "}
                    <i className="fa-solid fa-circle-arrow-right" />
                    Advanced Tech Stack{" "}
                  </li>
                  <li>
                    {" "}
                    <i className="fa-solid fa-circle-arrow-right" />
                    Multi-Chain Compatibility
                  </li>
                  <li>
                    {" "}
                    <i className="fa-solid fa-circle-arrow-right" />
                    High-End Security Protocols
                  </li>
                  <li>
                    {" "}
                    <i className="fa-solid fa-circle-arrow-right" />
                    On-Time Delivery
                  </li>
                </ul>
                <div class="txt">
                  {" "}
                  <div className="d-flex justify-content-start flex-wrap gap-3 ">
                    <Button
                      btnContent="Talk with our Experts"
                      to="#newsletter-form-sec"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecTen>
  );
};

export default Sec10;
