import React from "react";
import { SecFour } from "./nftExchangeDevelopmentComp";
import { H2, Button } from "../../../components";

const Sec4 = () => {
  return (
    <SecFour>
      <div className="intro_cnt common_spacing">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <div className="common_h3 text-center font-wei underline">
                  <H2> How does Our NFT Exchange Software Works? </H2>
                </div>
                <p className="text-center">
                  The workflow NFT trading marketplace involves lined up
                  procedures to be followed in order to build a successful NFT.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="pro-map">
                <div className="pro-map-line">
                  <div className="pro-map-line-content">
                    <span className="post">Sign In/ Sign Up</span>
                    <p className="description">
                      Reach the NFT trading platform you deed to purchase and
                      enter the login credential if you already have an account.
                    </p>
                    <p className="description">
                      If you don’t have an account, just create an account in
                      the exchange platform by filling out the required fields.
                    </p>
                  </div>
                </div>
                <div className="pro-map-line">
                  <div className="pro-map-line-content">
                    <span className="post">Miniting/ Listing</span>
                    <p className="description">
                      Once you logged in, connect the account with your crypto
                      wallet in order to proceed with making the transaction.
                    </p>
                    <p className="description">
                      After connecting the wallet, upload your asset and give
                      your desired choice, finally mint your own NFT.
                    </p>
                  </div>
                </div>
                <div className="pro-map-line">
                  <div className="pro-map-line-content">
                    <span className="post">Selling NFT</span>
                    <p className="description">
                      Set up the description, your profile, and secondary fee
                      and customize the property of your NFT asset.
                    </p>
                    <p className="description">
                      You can sell the NFT asset and set the trade rule “fixed
                      price” or “auction” and let the world explore your NFT.
                    </p>
                  </div>
                </div>
                <div className="pro-map-line">
                  <div className="pro-map-line-content">
                    <span className="post">Buying NFT</span>
                    <p className="description">
                      Search for the desired NFT exchange marketplace based on
                      your requirement and business objective
                    </p>
                    <p className="description">
                      Buy them if it suits the crypto-wallet that you integrated
                      earlier with the NFT exchange platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
    </SecFour>
  );
};

export default Sec4;
