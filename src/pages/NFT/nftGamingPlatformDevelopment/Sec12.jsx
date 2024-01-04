import React from "react";
import { SecTwelve } from "./nftGamingPlatformDevelopmentComp";
import { H2 } from "../../../components";

const Sec12 = () => {
  return (
    <SecTwelve>
      <section className="common_spacing uniq_features">
        <div className="why-blockchain-sec">
          <div className="container">
            <div
              className="common_h3 sec-tit underline text-center text-white"
              style={{ padding: "20px 0" }}
            >
              <H2 style={{ color: "#fff" }}>
                {" "}
                Why Choose Blockchain App Factory to Build Your NFT Game?{" "}
              </H2>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-md-6 pull-left">
                {" "}
                <img
                  className="md-flex"
                  data-src="images/nftg/Img-1.png"
                  alt="Build Your NFT Game"
                  title="Build Your NFT Game"
                  src="https://www.blockchainappfactory.com/images/nftg/Img-1.png"
                />{" "}
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-md-6 pull-right">
                <p className="text-white">
                  Blockchain App Factory is a world-renowned NFT game
                  development company with over 7 years of experience in the
                  industry. Our gaming solutions are an ensemble of ultimate
                  gameplay, realistic graphics, sustainable mechanisms, and
                  vibrant economies driven by users. We make this possible using
                  a variety of Web3 elements, including blockchains, virtual
                  reality, augmented reality, and artificial intelligence.{" "}
                  <br />
                  <br />
                  All our NFT game development solutions have achieved top-tier
                  success with high user numbers, thriving in-game economies,
                  and humongous profits for gaming enterprises. Get in touch
                  with one of our professionals today to realize your grand
                  gaming idea and attain success!
                </p>
                <ul className="text-white">
                  <li>
                    <img
                      src="https://www.blockchainappfactory.com/images/nftg/icon-logo.webp"
                      style={{ width: 23, marginRight: 10 }}
                    />{" "}
                    Expertise in Game Development and Design
                  </li>
                  <li>
                    <img
                      src="https://www.blockchainappfactory.com/images/nftg/icon-logo.webp"
                      style={{ width: 23, marginRight: 10 }}
                    />{" "}
                    Excellence in NFT Development for Games
                  </li>
                  <li>
                    <img
                      src="https://www.blockchainappfactory.com/images/nftg/icon-logo.webp"
                      style={{ width: 23, marginRight: 10 }}
                    />{" "}
                    Creative Professionals with Years of Experience
                  </li>
                  <li>
                    <img
                      src="https://www.blockchainappfactory.com/images/nftg/icon-logo.webp"
                      style={{ width: 23, marginRight: 10 }}
                    />{" "}
                    Agile Development Methodologies
                  </li>
                  <li>
                    <img
                      src="https://www.blockchainappfactory.com/images/nftg/icon-logo.webp"
                      style={{ width: 23, marginRight: 10 }}
                    />{" "}
                    Multi and Cross-chain Capabilities
                  </li>
                  <li>
                    <img
                      src="https://www.blockchainappfactory.com/images/nftg/icon-logo.webp"
                      style={{ width: 23, marginRight: 10 }}
                    />{" "}
                    Full-fledged Support for Clients
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SecTwelve>
  );
};

export default Sec12;
