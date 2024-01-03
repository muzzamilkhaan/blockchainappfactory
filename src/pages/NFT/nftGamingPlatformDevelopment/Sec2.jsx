import React from "react";
import { SecTwo, Wrapper } from "./nftGamingPlatformDevelopmentComp";
import { H2 } from "../../../components";

const Sec2 = () => {
  return (
    // <Wrapper style={{  }}>
      <SecTwo>
        <section className="common_spacing uniq_features">
          <div className="why-blockchain-sec">
            <div className="container">
              <div
                className="common_h3 sec-tit underline text-center text-white"
                style={{ padding: "20px 0" }}
              >
                <H2 style={{ color: "#fff" }}>
                  {" "}
                  NFT Game Development: Transitioning to a New Era of Digital
                  Gaming{" "}
                </H2>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-md-6 pull-left">
                  {" "}
                  <img
                    className="md-flex"
                    data-src="images/nftg/Img-2.png"
                    alt="NFT Game Development"
                    title="NFT Game Development"
                    src="https://www.blockchainappfactory.com/images/nftg/Img-2.png"
                  />{" "}
                </div>
                <div
                  className="col-lg-6 col-md-6 col-sm-12 col-md-6 pull-right"
                  style={{ marginTop: '30px' }}
                >
                  <p className="text-white">
                    NFTs are here to rule the whole digital world, and games are
                    no exception! Indulge in the vibrant world of NFT gaming
                    with Blockchain App Factory’s premier NFT game development
                    capabilities. Our team utilizes sophisticated technology to
                    build gaming applications that maximize what NFTs offer to
                    gamers and game companies. <br />
                    <br />
                    With 10+ Years of experience launching feature-laden NFT
                    games, we have worked and continue working for many of the
                    world’s leading NFT gaming brands. Our NFT gaming solutions
                    include unique elements such as:
                  </p>
                  <ul className="text-white" style={{ marginTop: '30px' }}>
                    <li>
                      <img
                        src="https://www.blockchainappfactory.com/images/nftg/icon-logo.webp"
                        style={{ width: 23, marginRight: '10px' }}
                      />{" "}
                      Realistic Game Graphics
                    </li>
                    <li>
                      <img
                        src="https://www.blockchainappfactory.com/images/nftg/icon-logo.webp"
                        style={{ width: 23, marginRight: '10px' }}
                      />{" "}
                      Customizable NFT Game Marketplace
                    </li>
                    <li>
                      <img
                        src="https://www.blockchainappfactory.com/images/nftg/icon-logo.webp"
                        style={{ width: 23, marginRight: 10 }}
                      />{" "}
                      Creative Game Backdrop Development
                    </li>
                    <li>
                      <img
                        src="https://www.blockchainappfactory.com/images/nftg/icon-logo.webp"
                        style={{ width: 23, marginRight: 10 }}
                      />{" "}
                      Artistic In-Game Asset Creation
                    </li>
                    <li>
                      <img
                        src="https://www.blockchainappfactory.com/images/nftg/icon-logo.webp"
                        style={{ width: 23, marginRight: 10 }}
                      />{" "}
                      AR/VR Integration
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SecTwo>
    // </Wrapper>
  );
};

export default Sec2;
