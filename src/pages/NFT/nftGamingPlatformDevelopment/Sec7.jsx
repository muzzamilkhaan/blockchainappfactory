import React from "react";
import { SecSeven } from "./nftGamingPlatformDevelopmentComp";
import { H2 } from "../../../components";

const Sec7 = () => {
  return (
    <SecSeven>
      <section className="shard_master-node">
        <div className="container">
          <div className="row real-estate-list">
            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 hidden-xs">
              <img
                className=""
                data-src="images/nftg/cta2.png"
                alt="NFT Gaming Platform"
                title="NFT Gaming Platform"
                src="https://www.blockchainappfactory.com/images/nftg/cta2.png"
              />
            </div>
            <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
              <div className="section-title text-center" style={{padding:"3em"}}>
                <H2 style={{ color: "#fff",padding:"30px 0px" }}>
                  Pave the Path to Launch a Successful NFT Game with Our Expert
                  Team!
                </H2>
                <a href="#newsletter-form-sec" className="btn_new">
                  <button className="neonShadow">Talk to our Experts</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SecSeven>
  );
};

export default Sec7;
