import React from "react";
import { SecFour } from "./p2pExchangeDevComp";
import { H2, Button } from "../../../components";

const Sec4 = () => {
  return (
    <SecFour>
      <div className="technologies1">
        <div className="container">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="sec_tit underline text-center text-white">
              <H2 style={{ color: "#fff" }}>
                {" "}
                Leverage a Famous P2P Exchange Model for Your New App{" "}
              </H2>
            </div>
            <p className="text-center white">
              Peer-to-peer exchanging of cryptocurrencies has become a norm in
              recent times, driving the importance of serving the community
              without intrusive operations. If you are planning to launch a P2P
              exchange platform, why not leverage the working model of an
              existing application to brighten your business prospects?
            </p>
            <ul>
              <li>
                <img
                  className=""
                  data-src="images/nftm/icons/opensea.webp"
                  src="https://www.blockchainappfactory.com/images/nftm/icons/opensea.webp"
                />
                <p className="white">Binance P2P</p>
              </li>
              <li>
                <img
                  className=""
                  data-src="images/nftm/icons/rarible.webp"
                  src="https://www.blockchainappfactory.com/images/nftm/icons/rarible.webp"
                />
                <p className="white">KuCoin P2P</p>
              </li>
              <li>
                <img
                  className=""
                  data-src="images/nftm/icons/superrare.webp"
                  src="https://www.blockchainappfactory.com/images/nftm/icons/superrare.webp"
                />
                <p className="white">Bybit P2P</p>
              </li>
              <li>
                <img
                  className=""
                  data-src="images/nftm/icons/nifty.webp"
                  src="https://www.blockchainappfactory.com/images/nftm/icons/nifty.webp"
                />
                <p className="white">OKX P2P</p>
              </li>
              <li>
                <img
                  className=""
                  data-src="images/nftm/icons/nba-1.webp"
                  src="https://www.blockchainappfactory.com/images/nftm/icons/nba-1.webp"
                />
                <p className="white">Huobi P2P</p>
              </li>
              <li>
                <img
                  className=""
                  data-src="images/nftm/icons/nba-1.webp"
                  src="https://www.blockchainappfactory.com/images/nftm/icons/nba-1.webp"
                />
                <p className="white">Paxful P2P</p>
              </li>
            </ul>
            <div className="clearfix"></div>
            <div className="text-center cta_mine txt">
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
            </div>
          </div>
        </div>
      </div>
    </SecFour>
  );
};

export default Sec4;
