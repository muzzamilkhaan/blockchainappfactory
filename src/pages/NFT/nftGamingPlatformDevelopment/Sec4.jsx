import React from "react";
import { SecFour } from "./nftGamingPlatformDevelopmentComp";
import { H2 } from "../../../components";

const Sec4 = () => {
  return (
    <SecFour>
      <section className="shard_master-node">
        <div className="container">
          <div className="row real-estate-list">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div
                className="section-title text-center"
                style={{ padding: "2em" }}
              >
                <div
                  style={{ color: "#fff", fontWeight: 700, marginBottom: 30 }}
                >
                  <H2 style={{ color: "#fff" }}>
                    {" "}
                    Imagine Your Novel Gaming Idea in Real-life with Our NFT
                    Game Development Services!{" "}
                  </H2>
                </div>
                <a href="#newsletter-form-sec" className="btn_new">
                  <button className="neonShadow">Talk to our Experts</button>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 hidden-xs">
              <img
                className=""
                data-src="images/nftg/cta1.png"
                alt="NFT Game Development Services"
                title="NFT Game Development Services"
                src="https://www.blockchainappfactory.com/images/nftg/cta1.png"
              />
            </div>
          </div>
        </div>
      </section>
    </SecFour>
  );
};

export default Sec4;
