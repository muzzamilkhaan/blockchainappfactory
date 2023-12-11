import React from "react";
import Button from "../../../components/Button";
const Sec3 = () => {
  return (
    <>
      <div className="intro_cnt common_spacing ">
        <div className="container">
          <div className="section-title text-center">
            <div className="sec_tit">
              <h2> Workflow Of An NFT Marketplace Platform</h2>{" "}
            </div>
            <hr />{" "}
          </div>
          <div className="row mt40">
            <div className="col-md-6 col-sm-12 col-xs-12 text-center">
              <img
                className="lazy"
                data-src="/images/nft-bsc/img1.webp"
                alt="NFT Marketplace Platform Workflow"
                title="Workflow Of An NFT Marketplace Platform"
                src="https://www.blockchainappfactory.com/images/nft-bsc/img1.webp"
              />
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <p className="mt10 text-justify">
                The workflow of an NFT marketplace is a very simple process. The
                user has to sign up in an NFT marketplace platform and integrate
                the platform with a digital wallet to store cryptocurrencies.
                After the initial processes are completed, the user will drop
                the NFT into the marketplace for the minting process, and after
                the minting process is finished the user provides the
                description of the newly minted non-fungible token. After the
                intermediate processes are completed, the NFT is listed in a
                listing system, and it is initiated into an auction to increase
                the value of the digital asset and the final process would be
                purchasing the NFT, which is done by using cryptocurrencies.
              </p>

              <Button
                btnContent="Talk with our expert"
                to="#newsletter-form-sec"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sec3;
