import React from "react";
import { SecOne, Wrapper } from "./nftGamingPlatformDevelopmentComp";

const Sec1 = () => {
  return (
    // <Wrapper>
    <SecOne>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12 text-left">
            <img
              className="img-responsive img-fuild"
              src="https://www.blockchainappfactory.com/images/nftg/NFT-Gaming.png"
              alt="NFT Gaming Platform Development"
              title="NFT Gaming Platform Development"
              width="100%"
            />
            <div className="content">
              <h1>NFT Game Development Company</h1>
              <p>
                Build a new-age game rich in gameplay, economy, and experiences
                with our NFT game development company. We ensure to deliver
                every little need you want with the utmost efficiency!
              </p>
              <div className="btn-button">
                <button className="neonShadow">Connect with whatsapp</button>
                <button className="neonShadow">Take your First Step!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecOne>
    // </Wrapper>
  );
};

export default Sec1;
