import React from "react";
import { SecFour } from "./nftMarketplaceAvalancheComp";
// import { Heading } from "../../../components/index";
import Button from "../../../components/Button";
const Sec4 = () => {
  return (
    <SecFour>
      <section id="Workflow" className="common_spacing gray_bg">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2 className="section-title1 underline mb20 text-center font-wei">
                Benefits of Creating a Marketplace in Avalanche
              </h2>
            </div>
          </div>
          <div className="row mt-30">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="work-process">
                <div className="work-icon">
                  {" "}
                  <img src="https://www.blockchainappfactory.com/images/avalanche/b1.webp" />{" "}
                </div>
                <h4>Robust and Permissionless</h4>
                <p>
                  An Avalanche-based NFT marketplace is more powerful due to its
                  nature as a public blockchain that does not require the owner
                  to know the entire user base, reducing unnecessary waste of
                  resources.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="work-process">
                <div className="work-icon">
                  {" "}
                  <img src="https://www.blockchainappfactory.com/images/avalanche/b2.webp" />{" "}
                </div>
                <h4>Scalable and Decentralized</h4>
                <p>
                  An NFT marketplace on Avalanche can be scalable to any extent
                  as its customer base increases and is highly decentralized.
                  Even individual users can trade NFTs between themselves if the
                  owner enables such a feature on the portal.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="work-process">
                <div className="work-icon">
                  {" "}
                  <img src="https://www.blockchainappfactory.com/images/avalanche/b3.webp" />{" "}
                </div>
                <h4>Adaptive</h4>
                <p>
                  Due to the presence of the Snow protocol, a Marketplace on the
                  Avalanche chain can perform highly if small-scale attacks
                  occur and can stay resilient during larger malicious attacks,
                  hence functioning effectively anytime.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-lg-offset-2 col-md-6 col-sm-12 ">
              <div className="work-process">
                <div className="work-icon">
                  {" "}
                  <img src="https://www.blockchainappfactory.com/images/avalanche/b4.webp" />{" "}
                </div>
                <h4>Safety from Double-spending</h4>
                <p>
                  An NFT marketplace on Avalanche ensures that double-spending
                  is prevented in any case, unlike other networks, as the Snow
                  protocols do not need synchronicity for safe operation.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="work-process">
                <div className="work-icon">
                  {" "}
                  <img src="https://www.blockchainappfactory.com/images/avalanche/b5.webp" />{" "}
                </div>
                <h4>Low Latency</h4>
                <p>
                  A marketplace, selling NFTs on the Avalanche blockchain can
                  have a finality time of below 1 second, ensuring that the
                  marketplace can expand to futuristic NFT applications based on
                  daily trading and retailing domains. Such a feature is
                  impossible in existing blockchains as users need to wait for
                  longer to reach finality during transactions.{" "}
                </p>
              </div>
            </div>
            {/* <div className="text-center">
              <div className="cta_mine">
                <a
                  className="nectar-button medium regular accent-color regular-button nec-btn"
                  target="_blank"
                  href="https://api.whatsapp.com/send?l=en&amp;text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&amp;phone=916382665366"
                  data-color-override="false"
                  data-hover-color-override="false"
                  data-hover-text-color-override="#fff"
                >
                  <span>Connect with Whatsapp</span>
                </a>
                <a
                  href="#newsletter-form-sec"
                  className="nectar-button medium regular accent-color regular-button nec-btn"
                >
                  <span>Talk with our Experts</span>
                </a>
              </div>{" "}
            </div> */}

            <div className="d-flex  gap-3 justify-content-center flex-wrap">
              <Button
                btnContent="Connect with Whatsapp"
                to="https://api.whatsapp.com/send?l=en&amp;text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&amp;phone=916382665366"
              />
              <Button
                btnContent="talk with our Experts"
                to="#newsletter-form-se"
              />
            </div>
          </div>
        </div>
      </section>
    </SecFour>
  );
};

export default Sec4;
