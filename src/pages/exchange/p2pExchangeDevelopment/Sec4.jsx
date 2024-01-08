import React from "react";
// import { SecFour } from "./p2pExchangeDevComp";
// import { H2, Button } from "../../../components";

const Sec4 = () => {
  return (
    <div className="technologies">
    <div className="container">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h3 className="sec_tit underline text-center text-white">
          Leverage a Famous P2P Exchange Model for Your New App{" "}
        </h3>
        <p className="text-center white">
          Peer-to-peer exchanging of cryptocurrencies has become a norm in recent
          times, driving the importance of serving the community without intrusive
          operations. If you are planning to launch a P2P exchange platform, why
          not leverage the working model of an existing application to brighten
          your business prospects?
        </p>
        <ul>
          <li>
            <img
              className=""
              data-src="images/nftm/icons/binance-usd.webp"
              src="./assets/images/icon185.webp"
            />
            <p className="white">Binance P2P</p>
          </li>
          <li>
            <img
              className=""
              data-src="images/nftm/icons/KuCoin.webp"
              src="./assets/images/icon186.webp"

            />
            <p className="white" />
          </li>
          <li>
            <img
              className=""
              data-src="images/nftm/icons/bybit.webp"
              src="./assets/images/icon187.webp"

            />
            <p className="white" />
          </li>
          <li>
            <img
              className=""
              data-src="images/nftm/icons/okx.webp"
              src="./assets/images/icon188.webp"

            />
            <p className="white" />
          </li>
          <li>
            <img
              className=""
              data-src="images/nftm/icons/huobi.webp"
              src="./assets/images/icon189.webp"

            />
            <p className="white" />
          </li>
          <li>
            <img
              className=""
              data-src="images/nftm/icons/paxful.webp"
              style={{ width: 60 }}
              src="./assets/images/icon190.webp"

            />
            <p className="white">Paxful P2P</p>
          </li>
        </ul>
        <div className="clearfix" />
        <div className="text-center cta_mine txt">
          {" "}
          <a
            className="nectar-button medium regular accent-color regular-button nec-btn med-btn"
            target="_blank"
            href="https://api.whatsapp.com/send?l=en&text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&phone=916382665366"
            data-color-override="false"
            data-hover-color-override="false"
            data-hover-text-color-override="#fff"
          >
            <span>Connect with Whatsapp</span>
          </a>{" "}
          <a
            href="#newsletter-form-sec"
            className="nectar-button medium regular accent-color regular-button nec-btn med-btn"
          >
            <span>Talk with our Experts</span>
          </a>{" "}
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Sec4;
