import React from "react";
import { SecFour } from "./nftMintingPlatformDevelopmentComp";
import { Button, H2 } from "../../../components";
const Sec4 = () => {
  return (
    <SecFour>
      <div className="pros-trading common_spacing">
        <div className="container">
          <div className="section-title text-center">
            <div className="sec_tit mb20">
              <H2 className="section-title underline mb20">
                NFT Minting Process
              </H2>
            </div>
          </div>
          <div className="mt60">
            <div className="row flip-box-row eto-exchange-flip">
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="flip-box">
                  <div className="flip-icon-outer">
                    {" "}
                    <img
                      className="flip-icon lazy"
                      data-src="/images/nftmi/icon/digital.svg"
                      width="90"
                      src="https://www.blockchainappfactory.com/images/nftmi/icon/digital.svg"
                    />{" "}
                  </div>
                  <h4 className="flip-tit">Choose your NFT</h4>
                  <p className="flip-txt">
                    Choose your digital asset and description with accuracy.
                    Once you're ready, start minting.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="flip-box">
                  <div className="flip-icon-outer">
                    {" "}
                    <img
                      className="flip-icon lazy"
                      data-src="/images/nftmi/icon/wallet.svg"
                      width="90"
                      src="https://www.blockchainappfactory.com/images/nftmi/icon/wallet.svg"
                    />{" "}
                  </div>
                  <h4 className="flip-tit">Sign your NFT</h4>
                  <p className="flip-txt">
                    Make the transaction through your wallet. Once the digital
                    asset is signed for creating NFT, the NFT will be linked to
                    your Ethereum address and wallet. You will also receive the
                    royalty for your NFT on each sale.{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="flip-box">
                  <div className="flip-icon-outer">
                    {" "}
                    <img
                      className="flip-icon lazy"
                      data-src="/images/nftmi/icon/transaction.svg"
                      width="90"
                      src="https://www.blockchainappfactory.com/images/nftmi/icon/transaction.svg"
                    />{" "}
                  </div>
                  <h4 className="flip-tit">Approve gas fee</h4>
                  <p className="flip-txt">
                    Approve the gas fee from your wallet to complete the
                    minting. Gas fees transaction fees to connect with the
                    Ethereum blockchain.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="flip-box">
                  <div className="flip-icon-outer">
                    {" "}
                    <img
                      className="flip-icon lazy"
                      data-src="/images/nftmi/icon/gas-pump.svg"
                      width="90"
                      src="https://www.blockchainappfactory.com/images/nftmi/icon/gas-pump.svg"
                    />{" "}
                  </div>
                  <h4 className="flip-tit">Mint your NFT</h4>
                  <p className="flip-txt">
                    The NFT minting process begins once the gas fee is approved.
                    The digital representation of unique assets will be deployed
                    through smart contracts. You can view the status of your
                    minting process.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="flip-box">
                  <div className="flip-icon-outer">
                    {" "}
                    <img
                      className="flip-icon lazy"
                      data-src="/images/nftmi/icon/line-chart.svg"
                      width="90"
                      src="https://www.blockchainappfactory.com/images/nftmi/icon/line-chart.svg"
                    />{" "}
                  </div>
                  <h4 className="flip-tit">Avoid double-minting</h4>
                  <p className="flip-txt">
                    It is preferred to avoid double minting while the
                    transaction is in process. Multiple clicks on the
                    transaction event may lead to double transactions.{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="flip-box">
                  <div className="flip-icon-outer">
                    {" "}
                    <img
                      className="flip-icon lazy"
                      data-src="/images/nftmi/icon/business-report.svg"
                      width="90"
                      src="https://www.blockchainappfactory.com/images/nftmi/icon/business-report.svg"
                    />{" "}
                  </div>
                  <h4 className="flip-tit">Minted NFTs</h4>
                  <p className="flip-txt">
                    You will now be able to see your minted NFT in your
                    dashboard after the approval of your transaction.{" "}
                  </p>
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
