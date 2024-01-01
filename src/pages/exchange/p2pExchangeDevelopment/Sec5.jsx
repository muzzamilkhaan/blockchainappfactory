import React from "react";
import { SecFive } from "./p2pExchangeDevComp";
import { H2, Button } from "../../../components";
import {
  Card,
  ExchangeCardSec4,
  YourComponent,
} from "../../../components/cards/Card";
import { Sec4 } from "./p2pExchangeDevComp";
const Sec5 = () => {
  const ExchangeSec4 = [
    {
      img: "https://www.blockchainappfactory.com/images/p2p/seo-and-web.webp",
      title: "User Registration",
    },
    {
      img: "https://www.blockchainappfactory.com/images/p2p/kyc.webp",
      title: "KYC/AML verification",
    },
    {
      img: "https://www.blockchainappfactory.com/images/p2p/seo-and-web.webp",
      title: "User Registration",
    },
    {
      img: "https://www.blockchainappfactory.com/images/p2p/kyc.webp",
      title: "KYC/AML verification",
    },
  ];
  const ExchangeSec5 = [
    {
      img: "https://www.blockchainappfactory.com/images/p2p/interview.webp",
      title: "Order matching between buyers and sellers",
    },
    {
      img: "https://www.blockchainappfactory.com/images/p2p/check.webp",
      title: "Confirmation of order from the buyers and sellers",
    },
    {
      img: "https://www.blockchainappfactory.com/images/p2p/loan.webp",
      title:
        "The smart contracts-based escrow holds the assets, that is to be sold",
    },
    {
      img: "https://www.blockchainappfactory.com/images/p2p/ecommerce.webp",
      title: "The Buyer makes the payment for the purchase",
    },
  ];
  const ExchangeSec6 = [
    {
      img: "https://www.blockchainappfactory.com/images/p2p/bill.webp",
      title: "Confirmation from the seller regarding payment",
    },
    {
      img: "https://www.blockchainappfactory.com/images/p2p/wallet.webp",
      title: "Escrow releases the asset and transfers to the buyer’s wallet",
    },
    {
      img: "https://www.blockchainappfactory.com/images/p2p/digital-wallet.webp",
      title: "Buyer stores the asset in the cold wallet. ",
    },
  ];
  return (
    <SecFive>
      {/* <div className="pr_wo common_spacing">
        <div className="container">
          <div className="row">
            <div className="sec_tit underline text-center">
              <H2> A Guide to the Working Process of P2P Crypto Exchanges </H2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-6">
              <div
                className="equal-height work_pr work_pr_1"
                // style="min-height: 141px;"
              >
                <div className="work_ic">
                  {" "}
                  <img
                    className=""
                    data-src="images/p2p/seo-and-web.webp"
                    src="https://www.blockchainappfactory.com/images/p2p/seo-and-web.webp"
                  />{" "}
                </div>
                <div className="work_cnt">
                  <p>User Registration</p>
                </div>{" "}
                <img
                  className="arrr"
                  data-src="images/p2p/arw.webp"
                  src="https://www.blockchainappfactory.com/images/p2p/arw.webp"
                />{" "}
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6">
              <div
                className="equal-height work_pr work_pr_2"
                // style="min-height: 141px;"
              >
                <div className="work_ic">
                  {" "}
                  <img
                    className=""
                    data-src="images/p2p/kyc.webp"
                    src="https://www.blockchainappfactory.com/images/p2p/kyc.webp"
                  />{" "}
                </div>
                <div className="work_cnt">
                  <p>KYC/AML verification</p>
                </div>{" "}
                <img
                  className="arrr"
                  data-src="images/p2p/arw.webp"
                  src="https://www.blockchainappfactory.com/images/p2p/arw.webp"
                />{" "}
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6">
              <div
                className="equal-height work_pr work_pr_3"
                // style="min-height: 141px;"
              >
                <div className="work_ic">
                  {" "}
                  <img
                    className=""
                    data-src="images/p2p/order.webp"
                    src="https://www.blockchainappfactory.com/images/p2p/order.webp"
                  />{" "}
                </div>
                <div className="work_cnt">
                  <p>Placement of order</p>
                </div>{" "}
                <img
                  className="arrr"
                  data-src="images/p2p/arw.webp"
                  src="https://www.blockchainappfactory.com/images/p2p/arw.webp"
                />{" "}
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6">
              <div
                className="equal-height work_pr work_pr_4"
                // style="min-height: 141px;"
              >
                <div className="work_ic">
                  {" "}
                  <img
                    className=""
                    data-src="images/p2p/resume.webp"
                    src="https://www.blockchainappfactory.com/images/p2p/resume.webp"
                  />{" "}
                </div>
                <div className="work_cnt">
                  <p>Creating a wallet address</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6">
              <div
                className="equal-height work_pr work_pr_5"
                // style="min-height: 186px;"
              >
                <div className="work_ic">
                  {" "}
                  <img
                    className=""
                    data-src="images/p2p/interview.webp"
                    src="https://www.blockchainappfactory.com/images/p2p/interview.webp"
                  />{" "}
                </div>
                <div className="work_cnt">
                  <p>Order matching between buyers and sellers</p>
                </div>{" "}
                <img
                  className="arrr"
                  data-src="images/p2p/arw.webp"
                  src="https://www.blockchainappfactory.com/images/p2p/arw.webp"
                />{" "}
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6">
              <div
                className="equal-height work_pr work_pr_6"
                // style="min-height: 186px;"
              >
                <div className="work_ic">
                  {" "}
                  <img
                    className=""
                    data-src="images/p2p/check.webp"
                    src="https://www.blockchainappfactory.com/images/p2p/check.webp"
                  />{" "}
                </div>
                <div className="work_cnt">
                  <p>Confirmation of order from the buyers and sellers</p>
                </div>{" "}
                <img
                  className="arrr"
                  data-src="images/p2p/arw.webp"
                  src="https://www.blockchainappfactory.com/images/p2p/arw.webp"
                />{" "}
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6">
              <div
                className="equal-height work_pr work_pr_7"
                // style="min-height: 186px;"
              >
                <div className="work_ic">
                  {" "}
                  <img
                    className=""
                    data-src="images/p2p/loan.webp"
                    src="https://www.blockchainappfactory.com/images/p2p/loan.webp"
                  />{" "}
                </div>
                <div className="work_cnt">
                  <p>
                    The smart contracts-based escrow holds the assets, that is
                    to be sold
                  </p>
                </div>{" "}
                <img
                  className="arrr"
                  data-src="images/p2p/arw.webp"
                  src="https://www.blockchainappfactory.com/images/p2p/arw.webp"
                />{" "}
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6">
              <div
                className="equal-height work_pr work_pr_8"
                // style="min-height: 186px;"
              >
                <div className="work_ic">
                  {" "}
                  <img
                    className=""
                    data-src="images/p2p/ecommerce.webp"
                    src="https://www.blockchainappfactory.com/images/p2p/ecommerce.webp"
                  />{" "}
                </div>
                <div className="work_cnt">
                  <p>The Buyer makes the payment for the purchase</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6 lt_row ">
              <div
                className="equal-height work_pr work_pr_9"
                // style="min-height: 163px;"
              >
                <div className="work_ic">
                  {" "}
                  <img
                    className=""
                    data-src="images/p2p/bill.webp"
                    src="https://www.blockchainappfactory.com/images/p2p/bill.webp"
                  />{" "}
                </div>
                <div className="work_cnt">
                  <p>Confirmation from the seller regarding payment</p>
                </div>{" "}
                <img
                  className="arrr"
                  data-src="images/p2p/arw.webp"
                  src="https://www.blockchainappfactory.com/images/p2p/arw.webp"
                />{" "}
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6">
              <div
                className="equal-height work_pr work_pr_10"
                // style="min-height: 163px;"
              >
                <div className="work_ic">
                  {" "}
                  <img
                    className=""
                    data-src="images/p2p/wallet.webp"
                    src="https://www.blockchainappfactory.com/images/p2p/wallet.webp"
                  />{" "}
                </div>
                <div className="work_cnt">
                  <p>
                    Escrow releases the asset and transfers to the buyer’s
                    wallet
                  </p>
                </div>{" "}
                <img
                  className="arrr"
                  data-src="images/p2p/arw.webp"
                  src="https://www.blockchainappfactory.com/images/p2p/arw.webp"
                />{" "}
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6 work_pr_ls">
              <div
                className="equal-height work_pr work_pr_11"
                // style="min-height: 163px;"
              >
                <div className="work_ic">
                  {" "}
                  <img
                    className=""
                    data-src="images/p2p/digital-wallet.webp"
                    src="https://www.blockchainappfactory.com/images/p2p/digital-wallet.webp"
                  />{" "}
                </div>
                <div className="work_cnt">
                  <p>Buyer stores the asset in the cold wallet. </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="cta_mine">
              <div className="d-flex justify-content-center flex-wrap gap-3 ">
                <Button
                  btnContent="Talk with our Experts"
                  to="#newsletter-form-sec"
                />
              </div>
            </div>{" "}
          </div>
        </div>
      </div> */}

      {/*  */}
      <Sec4 backgroundColor="white">
        <H2 className="sec_tit underline text-center sec4-h3 mt30">
          A Guide to the Working Process of P2P Crypto Exchanges
        </H2>
        <ExchangeCardSec4 data={ExchangeSec4} />
        <ExchangeCardSec4 data={ExchangeSec5} />
        <ExchangeCardSec4 data={ExchangeSec6} />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            btnContent=" Talk with our Experts"
            to="#newsletter-form-sec"
          />
        </div>
      </Sec4>
    </SecFive>
  );
};

export default Sec5;
