import React from "react";
import { SecSeven } from "./nftTicketingMarketplaceComp";
import { H2 } from "../../../components";

const Sec7 = () => {
  return (
    <SecSeven>
      <section className="intro_cnt common_spacing gray_bg new_trend">
        <div className="container">
          <div className="row">
            <div className="section-title text-center underline">
              <div className="sec_tit">
                <H2>
                  New trends in the NFT ticketing space along with examples
                </H2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-12 col-sm-12">
              <ul className="list1 mt10 text-justify">
                <li>
                  <i className="fa-solid fa-caret-right"></i>
                  NFT ticketing is used in several cities at parking lots for
                  regular users. This system can be crucial in places where
                  security restrictions are followed.
                </li>
                <li>
                  <i className="fa-solid fa-caret-right"></i>
                  Dance shows from popular crews such as Jabbawockeez use NFT
                  ticketing platforms. Through NFT tickets, these events provide
                  premium experiences to the fans.
                </li>
                <li>
                  <i className="fa-solid fa-caret-right"></i>
                  Several exclusive virtual events also have used NFT tickets to
                  preserve their specialty. These events include webinars,
                  conferences, and performance events in different genres inside
                  metaverses.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </SecSeven>
  );
};

export default Sec7;
