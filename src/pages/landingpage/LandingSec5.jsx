import React from "react";
import { useState } from "react";
import UnderLine from "../../components/UnderLine";

function LandingSec5() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section className="essential-features">
      <div className="container">
        <div className="row home-sec-5">
          <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
            <div className="side-tab">
              <div className="section-title text-left">
                <h2 className="title text-white" style={{ fontSize: 24 }}>
                  Top Trending Services Offered By Blockchain App Factory For
                  Business Development In Digital World
                </h2>
                {/* <hr style={{ marginLeft: 0 }} /> */}
                <UnderLine
                  style={{ marginLeft: "0" }}
                  background="#30D4D1"
                  height="2px"
                />
              </div>
              <div className="side-row">
                <button
                  className={`tablinks ${activeTab === 0 ? "active" : ""}`}
                  onClick={() => {
                    setActiveTab(0);
                  }}
                  id="defaultOpen"
                >
                  TOP SERVICES
                </button>
                <button
                  className={`tablinks ${activeTab === 1 ? "active" : ""}`}
                  onClick={() => {
                    setActiveTab(1);
                  }}
                >
                  NFT - NON-FUNGIBLE TOKEN
                </button>
                <button
                  className={`tablinks ${activeTab === 2 ? "active" : ""}`}
                  onClick={() => {
                    setActiveTab(2);
                  }}
                >
                  CRYPTO SOLUTIONS
                </button>
                <button
                  className={`tablinks ${activeTab === 3 ? "active" : ""}`}
                  onClick={() => {
                    setActiveTab(3);
                  }}
                >
                  FUNDRAISING
                </button>
                <button
                  className={`tablinks ${activeTab === 4 ? "active" : ""}`}
                  onClick={() => {
                    setActiveTab(4);
                  }}
                >
                  DEFI - DECENTRALIZED FINANCE
                </button>
                <button
                  className={`tablinks ${activeTab === 5 ? "active" : ""}`}
                  onClick={() => {
                    setActiveTab(5);
                  }}
                >
                  MARKETING
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
            <div
              id="firstTab"
              className="tabcontent1"
              style={{ display: activeTab === 0 ? "block" : "none" }}
            >
              <div className="container-center">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 equalize">
                  <div className="count-items-content">
                    <a href="nft-development-services" target="_blank">
                      <p>
                        <span style={{ color: "#30D4D1" }}>
                          Non-fungible Token
                        </span>{" "}
                        Take advantage of our top-notch services related to
                        non-fungible tokens to build your business to gain
                        recognition in the long run.
                      </p>{" "}
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 equalize">
                  <div className="count-items-content">
                    <a href="ai-development-company" target="_blank">
                      <p>
                        <span style={{ color: "#30D4D1" }}>AI Solutions</span>Create innovative AI solutions
                        with us to utilize high-end technology to improve
                        various aspects of your business resulting in success.
                      </p>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 equalize">
                  <div className="count-items-content">
                    <a href="metaverse-development-services" target="_blank">
                      {" "}
                      <p>
                        <span style={{ color: "#30D4D1" }}>Metaverse Development</span>Our metaverse
                        development expertise can aid you to begin a venture
                        based on virtual worlds that offers immersive user
                        experiences.
                      </p>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 equalize">
                  <div className="count-items-content">
                    <a href="web3-development-solutions" target="_blank">
                      <p>
                        <span style={{ color: "#30D4D1" }}>Web3 Solutions</span>Venture into the ever-growing
                        Web3 with our Web3 solutions. Our services include
                        creating and marketing NFT assets and DeFi platforms.
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="secondTab"
              className="tabcontent1"
              style={{ display: activeTab === 1 ? "block" : "none" }}
            >
              <div className="container-center">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 equalize">
                  <div className="count-items-content">
                    <a href="non-fungible-token-development" target="_blank">
                      <p>
                        <span style={{ color: "#30D4D1" }}>NFT Development</span>Raise the value of your
                        unique assets, collectibles, and other signature
                        products by tokenizing them as NFTs with our experts.
                      </p>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 equalize">
                  <div className="count-items-content">
                    <a href="nft-marketplace-development" target="_blank">
                      <p>
                        <span style={{ color: "#30D4D1" }}>NFT Marketplace </span>Build a feature-rich and
                        robust NFT marketplace based on multiple niches to
                        attract the Web3 community with assistance from our
                        experts.
                      </p>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 equalize">
                  <div className="count-items-content">
                    <a href="nft-launchpad-development-service" target="_blank">
                      {" "}
                      <p>
                        <span style={{ color: "#30D4D1" }}>NFT Launchpad </span>Our NFT Launchpad Development
                        is the best suited service for entrepreneurs planning to
                        build a NFT platform exclusively for primary sales.
                      </p>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 equalize">
                  <div className="count-items-content">
                    <a href="p2e-nft-game-development" target="_blank">
                      {" "}
                      <p>
                        <span style={{ color: "#30D4D1" }}>P2E NFT Game Solutions</span>We develop P2E NFT
                        game solutions built using advanced and prolific stacks
                        to provide unmatched Web3 gaming experiences for
                        players.
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="thirdTab"
              className="tabcontent1"
              style={{ display: activeTab === 2 ? "block" : "none" }}
            >
              <div className="container-center">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 equalize">
                  <div className="count-items-content">
                    <a href="cryptocurrency-exchange-software" target="_blank">
                      <p>
                        <span style={{ color: "#30D4D1" }}>Crypto Exchange </span>Launch your controlled,
                        centralized and decentralized crypto exchange platforms
                        with our experts using advanced blockchain stacks.
                      </p>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 equalize">
                  <div className="count-items-content">
                    <a href="cryptocurrency-development" target="_blank">
                      <p>
                        <span style={{ color: "#30D4D1" }}>Crypto Development</span>Reliable advice from our
                        competent experts to help you achieve the best from our
                        range of services for creating cryptocurrencies.
                      </p>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 equalize">
                  <div className="count-items-content">
                    <a href="cryptocurrency-wallet-development" target="_blank">
                      <p>
                        <span style={{ color: "#30D4D1" }}>Crypto Wallet </span>Secure cryptocurrency
                        transactions and store them with our
                        universally-compatible wallet highly immune to hard and
                        soft forks.
                      </p>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 equalize">
                  <div className="count-items-content">
                    <a href="crypto-payments-gateway" target="_blank">
                      <p>
                        <span style={{ color: "#30D4D1" }}>Crypto Payment </span>We ensure secure transaction
                        processing by creating crypto payment portals compatible
                        with the leading crypto and fiat currencies.
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="fourTab"
              className="tabcontent1"
              style={{ display: activeTab === 3 ? "block" : "none" }}
            >
              <div className="container-center">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 equalize">
                  <div className="count-items-content">
                    <a
                      href="decentralized-autonomous-organization"
                      target="_blank"
                    >
                      <p>
                        <span style={{ color: "#30D4D1" }}>DAO Services</span>Totally decentralize your
                        venture with our DAO services with smart contracts
                        contain all your needs which will be checked everytime.
                      </p>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 equalize">
                  <div className="count-items-content">
                    <a
                      href="decentralized-finance-defi-development"
                      target="_blank"
                    >
                      {" "}
                      <p>
                        <span style={{ color: "#30D4D1" }}>DeFi Development</span>Our DeFi development
                        services help you reap the benefits of cryptos that
                        offers less risk, P2P transactions, and high liquidity.
                      </p>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 equalize">
                  <div className="count-items-content">
                    <a href="ido-token-launchpad-services" target="_blank">
                      {" "}
                      <p>
                        <span style={{ color: "#30D4D1" }}>IDO Launchpad</span>Support budding Web3 startups
                        with an IDO launchpad developed by us that includes all
                        facets built from scratch and premade solutions.
                      </p>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 equalize">
                  <div className="count-items-content">
                    <a href="defi-dapp-development-company" target="_blank">
                      {" "}
                      <p>
                        <span style={{ color: "#30D4D1" }}>DApp Solutions</span>Use highly decentralized,
                        scalable, and featureful DApps created by our skilled
                        developers. We customize applications per your needs.
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="fiveTab"
              className="tabcontent1"
              style={{ display: activeTab === 4 ? "block" : "none" }}
            >
              <div className="container-center">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 equalize">
                  <div className="count-items-content">
                    <a href="ico-development" target="_blank">
                      {" "}
                      <p>
                        <span style={{ color: "#30D4D1" }}>ICO Development</span>Exemplary services to
                        provide complete and reliable ICO solutions for
                        successful cryptocurrency ventures through planned
                        fundraising.
                      </p>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 equalize">
                  <div className="count-items-content">
                    <a href="security-token-offering-services" target="_blank">
                      {" "}
                      <p>
                        <span style={{ color: "#30D4D1" }}>STO Development</span>Tokenize your securities
                        such as debt and bonds, to liquidate illiquid assets for
                        short-term financing through fundraising campaigns.
                      </p>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 equalize">
                  <div className="count-items-content">
                    <a href="initial-dex-offering-service" target="_blank">
                      <p>
                        <span style={{ color: "#30D4D1" }}>IDO Development</span>Gain a solid community and
                        funding powered by decentralized exchanges with our
                        experts in empowering IDO projects from step to step.
                      </p>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 equalize">
                  <div className="count-items-content">
                    <a href="real-estate-tokenization" target="_blank">
                      {" "}
                      <p>
                        <span style={{ color: "#30D4D1" }}>Real Estate Token</span>Tokenize real estate and
                        fractionalize ownership for greater profits using our
                        expertise in blockchain technology and high-end
                        security.
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="sixTab"
              className="tabcontent1"
              style={{ display: activeTab === 5 ? "block" : "none" }}
            >
              <div className="container-center">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 equalize">
                  <div className="count-items-content">
                    <a href="nft-marketing-services" target="_blank">
                      {" "}
                      <p>
                        <span style={{ color: "#30D4D1" }}>NFT Marketing</span>Promote your NFT items with
                        our creative NFT marketing services that promote across
                        mediums to garner attention for your NFT venture.
                      </p>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 equalize">
                  <div className="count-items-content">
                    <a href="discord-marketing-agency" target="_blank">
                      <p>
                        <span style={{ color: "#30D4D1" }}>Discord Marketing</span>Promote your Web3 venture
                        with our excellent Discord marketing services to reach
                        the Web3 community easily to gather your user base.
                      </p>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 equalize">
                  <div className="count-items-content">
                    <a href="ico-marketing-services" target="_blank">
                      {" "}
                      <p>
                        <span style={{ color: "#30D4D1" }}>ICO Marketing</span>Benefit from our strategic ICO
                        marketing campaigns with a powerful combination of
                        digital and Web3 promotions to attract investors.
                      </p>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 equalize">
                  <div className="count-items-content">
                    <a href="cryptocurrency-exchange-marketing" target="_blank">
                      {" "}
                      <p>
                        <span style={{ color: "#30D4D1" }}>Crypto Marketing</span>Our experts offer unique
                        marketing strategies to gain huge traction worldwide and
                        make your business go viral in the crypto market.
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingSec5;
