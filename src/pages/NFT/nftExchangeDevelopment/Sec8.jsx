import React from "react";
import { SecEight } from "./nftExchangeDevelopmentComp";
import { H2 } from "../../../components";

const Sec8 = () => {
  return (
    <SecEight>
      <div className="common_spacing uniq_features gray_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-md-12 pull-left">
              <img
                className=""
                data-src="/images/nfte/feat1.webp"
                alt="NFT Exchange Security Features"
                title="Security features for NFT Exchange"
                src="https://www.blockchainappfactory.com/images/nfte/feat1.webp"
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-md-12 pull-right">
              <div className="common_h3 sec-tit underline text-left font-wei">
                <H2> Security features of our NFT exchange platform </H2>
              </div>
              <ul>
                <li>
                  <i className="fa-solid fa-circle-arrow-right" /> HTTP
                  Authentication.
                </li>
                <li>
                  <i className="fa-solid fa-circle-arrow-right" />
                  Cross-Site Request Forgery Protection.
                </li>
                <li>
                  {" "}
                  <i className="fa-solid fa-circle-arrow-right" />
                  Prevents Jail Login.
                </li>
                <li>
                  {" "}
                  <i className="fa-solid fa-circle-arrow-right" />
                  Anti-Denial of Service.
                </li>
                <li>
                  <i className="fa-solid fa-circle-arrow-right" />
                  Data Encryption.
                </li>
                <li>
                  <i className="fa-solid fa-circle-arrow-right" />
                  Anti-Distributed Denial of Service.
                </li>
                <li>
                  <i className="fa-solid fa-circle-arrow-right" />
                  Server-Side Protection.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SecEight>
  );
};

export default Sec8;
