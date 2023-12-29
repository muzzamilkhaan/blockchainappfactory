import React from "react";
import { SecTen } from "./nftExchangeDevelopmentComp";
import { H2 } from "../../../components";

const Sec10 = () => {
  return (
    <SecTen>
      <div className="common_spacing uniq_features">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-md-12 pull-left">
              <img
                className=""
                data-src="/images/nfte/busi.webp"
                alt="NFT Exchange Platform Benefits"
                title="Business Benefits of NFT Exchange Platform"
                src="https://www.blockchainappfactory.com/images/nfte/busi.webp"
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-md-12 pull-right">
              <div className="common_h3 sec-tit underline text-left font-wei">
                <H2> Business Benefits of NFT exchange platform owners </H2>
              </div>
              <ul>
                <li>
                  {" "}
                  <i className="fa-solid fa-circle-arrow-right" />
                  Robust platform
                </li>
                <li>
                  {" "}
                  <i className="fa-solid fa-circle-arrow-right" />
                  Cost-efficient
                </li>
                <li>
                  {" "}
                  <i className="fa-solid fa-circle-arrow-right" />
                  Customization
                </li>
                <li>
                  {" "}
                  <i className="fa-solid fa-circle-arrow-right" />
                  Plug &amp; play
                </li>
                <li>
                  {" "}
                  <i className="fa-solid fa-circle-arrow-right" />
                  Huge market visibility
                </li>
                <li>
                  {" "}
                  <i className="fa-solid fa-circle-arrow-right" />
                  Audience traction
                </li>
                <li>
                  {" "}
                  <i className="fa-solid fa-circle-arrow-right" />
                  Precisely Tested
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SecTen>
  );
};

export default Sec10;
