import React from "react";
import { SecEight } from "./p2pExchangeDevComp";
import { H2 } from "../../../components";

const Sec8 = () => {
  return (
    <SecEight>
      <div className="ben_sec common_spacing">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12 section-header">
              <div className="section-header">
                <div className="sec_tit underline text-left">
                 <H2> 5 Key Benefits of Our P2P Exchange Development Services </H2>
                </div>{" "}
              </div>
              <ul>
                <li>
                  <i className="fa fa-credit-card" aria-hidden="true"></i>
                  Quicker, risk-free transactions
                </li>
                <li>
                  <i className="fa fa-shield" aria-hidden="true"></i>Secure
                  payments
                </li>
                <li>
                  <i className="fa fa-usd" aria-hidden="true"></i>Low trading
                  costs
                </li>
                <li>
                  <i className="fa fa-phone" aria-hidden="true"></i>24x7
                  customer support
                </li>
                <li>
                <i className="fa-regular fa-lightbulb"></i>
                  Cutting-edge blockchain solutions.{" "}
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12  pull-left text-center">
              {" "}
              <img
                className="be_sc"
                data-src="images/p2p/p2p_admin.webp"
                alt="P2P Exchange Platform Development"
                title="Benefits Of Our P2P Exchange Platform"
                src="https://www.blockchainappfactory.com/images/p2p/p2p_admin.webp"
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </SecEight>
  );
};

export default Sec8;
