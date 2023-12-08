import React from "react";
import { useState } from "react";
import { FaMobileAlt, FaEnvelope } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function Header() {
  const [dropdown, setDropdown] = useState(0);
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="header menu-style-1">
        <div className="top-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 d-flex flex-wrap-wrap justify-content-between">
                <div className="cont-det">
                  <a href="tel:+916382665366">
                    <FaMobileAlt />
                    +91 63826 65366
                  </a>
                  <a href="mailto:info@blockchainappfactory.com">
                    <FaEnvelope />
                    info@blockchainappfactory.com
                  </a>
                </div>
                <div className="loc">
                  <p className="">
                    <IoLocationSharp />
                    Our Global Offices : Japan | USA | UK | UAE | Singapore
                    |Malaysia | Australia | India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <Link className="logo" to={"/"}>
            <img
              src="./assets/images/logo-green.webp"
              alt=" Blockchain Development Company"
              title="Enterprise Blockchain Technology Solution & Services Provider"
              width="177px"
              height="35px"
              className="logo-img"
            />
          </Link>
          <span
            className="mob_nav_ic"
            style={{ fontSize: 30, cursor: "pointer" }}
            // onClick="if (!window.__cfRLUnblockHandlers) return false; openNav()"
            onClick={() => {
              setOpen(true);
            }}
          >
            ☰
          </span>
          <nav
            className="menu sidenav"
            style={{ width: open ? "100%" : "" }}
            id="mySidenav"
          >
            <button
              type="button"
              className="closebtn"
              // onClick="if (!window.__cfRLUnblockHandlers) return false; closeNav()"
              onClick={() => {
                setOpen(false);
              }}
            >
              <i className="fa fa-close" />
            </button>
            <a href="#" className="menu-mobile" />
            <ul className="main-menu">
              <li
                className="menu-item menu-dropdown-icon"
                onMouseEnter={() => {
                  setDropdown(1);
                }}
                onMouseLeave={() => {
                  setDropdown(0);
                }}
              >
                <a className="">
                  Crypto <b className="caret" />
                </a>
                <ul
                  className="mega-submenu menu_desk menu_desk_crypto"
                  style={{
                    display: dropdown === 1 ? "block" : "none",
                    opacity: 1,
                  }}
                >
                  <li className="has-subsubmenu">
                    <h4>Crypto/Token</h4>
                    <ul
                      className="mega-submenu1 normal-sub"
                      style={{ opacity: 1 }}
                    >
                      <li>
                        <Link to={"/cryptocurrency-development"}>
                          Cryptocurrency Development
                        </Link>
                      </li>
                      <li>
                        <Link to={"/token-development"}>Token Development</Link>
                      </li>
                      <li>
                        <Link to={"/ethereum-token-development"}>
                          Ethereum Token Development
                        </Link>
                      </li>
                      <li>
                        <Link to={"/tron-token-development"}>
                          Tron Token Development
                        </Link>
                      </li>
                      <li>
                        <Link to={"/brc-20-token-development"}>
                          BRC 20 Token Development
                        </Link>
                      </li>
                      <li>
                        <Link to={"/src-20-token-development"}>
                          SRC 20 Token Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={
                            "/binance-smart-chain-bep20-like-token-development"
                          }
                        >
                          BEP - 20 Token Development
                        </Link>
                      </li>
                      <li>
                        <Link to={"/stable-coin-development"}>
                          Stable Coin Development
                        </Link>
                      </li>
                      <li>
                        <Link to={"/white-paper-development"}>
                          White Paper Development
                        </Link>
                      </li>
                      <li>
                        <Link to={"/cryptocurrency-mlm-software-development"}>
                          Cryptocurrency MLM Software
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-subsubmenu">
                    <h4>Tokenization</h4>
                    <ul className="mega-submenu1 normal-sub">
                      <li>
                        <Link to={"/art-tokenization"}>Art Tokenization</Link>
                      </li>
                      <li>
                        <Link to={"/asset-tokenization"}>
                          Asset Tokenization
                        </Link>
                      </li>
                      <li>
                        <Link to={"/real-estate-tokenization"}>
                          Real Estate Tokenization
                        </Link>
                      </li>
                      <li>
                        <Link to={"/tokenization-platform-development"}>
                          Tokenization Platform Development
                        </Link>
                      </li>
                      <li>
                        <Link to={"/real-estate-tokenization-essential-guide"}>
                          Real Estate Tokenization Essential Guide
                        </Link>
                      </li>
                      <li>
                        <Link to={"/crypto-etf-development"}>
                          Crypto ETF Development
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-subsubmenu">
                    <h4>Crypto Guide</h4>
                    <ul className="mega-submenu1 normal-sub">
                      <li>
                        <Link to={"/how-to-launch-crypto-token"}>
                          How to Launch Crypto token
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="has-subsubmenu">
                    <h4>Custom Solutions</h4>
                    <ul className="mega-submenu1 normal-sub">
                      <li>
                        <Link to={"/crypto-prediction-market-platform"}>
                          Crypto Prediction Market Platform
                        </Link>
                      </li>
                      <li>
                        <Link to={"/decentralized-sports-betting-platform"}>
                          Decentralizes Sports Betting Platform
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                {/* <ul
                                    className="mega-submenu menu_desk menu_desk_ico"
                                    style={{ display: dropdown === 1 ? "block" : "none", opacity: 1 }}

                                >
                                    <li className="has-subsubmenu">
                                        <h4>Crypto/Token</h4>
                                        <ul className="mega-submenu1 normal-sub" style={{ display: dropdown === 1 ? "block" : "none" }}>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/cryptocurrency-development">
                                                    Cryptocurrency Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/token-development">
                                                    Token Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/ethereum-token-development">
                                                    Ethereum Token Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/tron-token-development">
                                                    Tron Token Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/brc-20-token-development">
                                                    BRC 20 Token Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/src-20-token-development">
                                                    SRC 20 Token Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/binance-smart-chain-bep20-like-token-development">
                                                    BEP - 20 Token Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/stable-coin-development">
                                                    Stable Coin Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/white-paper-development">
                                                    White Paper Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/cryptocurrency-mlm-software-development">
                                                    Cryptocurrency MLM Software
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="has-subsubmenu">
                                        <h4>Tokenization</h4>
                                        <ul className="mega-submenu1 normal-sub">
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/art-tokenization">
                                                    Art Tokenization
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/asset-tokenization">
                                                    Asset Tokenization
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/real-estate-tokenization">
                                                    Real Estate Tokenization
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/tokenization-platform-development">
                                                    
                                                    Tokenization Platform Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/real-estate-tokenization-essential-guide">
                                                    
                                                    Real Estate Tokenization Essential Guide
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/crypto-etf-development">
                                                    
                                                    Crypto ETF Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/bitcoin-ordinals-token-development">
                                                    
                                                    Bitcoin Ordinals Token Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/bitcoin-ordinals-token-marketing">
                                                    
                                                    Bitcoin Ordinals Token Marketing
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="has-subsubmenu">
                                        <h4>Crypto Guide</h4>
                                        <ul className="mega-submenu1 normal-sub">
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/how-to-launch-crypto-token">
                                                    How to Launch Crypto token
                                                </a>
                                            </li>
                                        </ul>
                                        <h4>Custom Solutions</h4>
                                        <ul className="mega-submenu1 normal-sub">
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/crypto-prediction-market-platform">
                                                    Crypto Prediction Market Platform
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://www.blockchainappfactory.com/decentralized-sports-betting-platform
                              "
                                                >
                                                    Decentralized Sports Betting Platform
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul> */}
              </li>
              <li
                className="menu-item menu-dropdown-icon"
                onMouseEnter={() => {
                  setDropdown(2);
                }}
                onMouseLeave={() => {
                  setDropdown(0);
                }}
              >
                <a className="">
                  Exchange <b className="caret" />
                </a>
                <ul
                  className="mega-submenu menu_desk menu_desk_exchange"
                  style={{
                    display: dropdown === 2 ? "block" : "none",
                    opacity: 1,
                  }}
                >
                  <li className="has-subsubmenu">
                    <h4>Exchange</h4>
                    <ul
                      className="mega-submenu1 normal-sub"
                      style={{ display: "none" }}
                    >
                      <li>
                        <Link to={"/cryptocurrency-exchange-software"}>
                          Cryptocurrency Exchange Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={
                            "/white-label-cryptocurrency-exchange-software-development"
                          }
                        >
                          White label Crypto Exchange
                        </Link>
                      </li>
                      <li>
                        <Link to={"/decentralized-exchange-development"}>
                          Decentralized Exchange Development
                        </Link>
                      </li>
                      <li>
                        <Link to={"/p2p-exchange-development"}>
                          P2P Exchange Development
                        </Link>
                      </li>

                      {/*<li>
                                                <a href="https://www.blockchainappfactory.com/crypto-prediction-market-platform">
                                                    Crypto Prediction Market Platform
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/crypto-exchange-like-wazirx">
                                                    Cryptocurrency Exchange Like Wazirx
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/crypto-exchange-like-binance">
                                                    Cryptocurrency Exchange Like Binance
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/crypto-exchange-like-coinbase">
                                                    Cryptocurrency Exchange Like Coinbase
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/listing-service">
                                                    Exchange Listing Services
                                                </a>
                                            </li> */}
                    </ul>
                  </li>
                  {/* <li className="has-subsubmenu">
                                        <h4>Exchange Clone</h4>
                                        <ul className="mega-submenu1 normal-sub">
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/poloniex-clone">
                                                    Poloniex Clone
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/sushiswap-clone">
                                                    Sushiswap Clone
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/bitstamp-clone">
                                                    Bitstamp Clone
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/coinbase-clone">
                                                    Coinbase Clone
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/binance-clone">
                                                    Binance Clone
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/bitfinex-clone">
                                                    Bitfinex Clone
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/paxful-clone">
                                                    Paxful Clone
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/bakeryswap-clone">
                                                    Bakeryswap Clone
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/okx-clone">
                                                    OKX Clone
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/huobi-clone">
                                                    Huobi Clone
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/kraken-clone">
                                                    Kraken Clone
                                                </a>
                                            </li>
                                        </ul>
                                    </li> */}
                  {/* <li className="has-subsubmenu">
                                        <h4>Wallet</h4>
                                        <ul className="mega-submenu1 normal-sub">
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/cryptocurrency-wallet-development">
                                                    Crypto Wallet Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/crypto-payments-gateway">
                                                    Crypto-Payment Development
                                                </a>
                                            </li>
                                            <li className="">
                                                <a href="https://www.blockchainappfactory.com/metamask-like-wallet-development">
                                                    Metamask like Wallet Development
                                                </a>
                                            </li>
                                        </ul>
                                    </li> */}
                </ul>
              </li>
              <li
                className="menu-item menu-dropdown-icon"
                onMouseEnter={() => {
                  setDropdown(3);
                }}
                onMouseLeave={() => {
                  setDropdown(0);
                }}
              >
                <a className="">
                  NFT
                  <b className="caret" />
                </a>
                <ul
                  className="mega-submenu menu_desk-nft row m-0"
                  style={{
                    display: dropdown === 3 ? "block" : "none",
                    opacity: 1,
                  }}
                >
                  <li className="col-xs-12 col-sm-12 col-lg-3 col-md-12 has-subsubmenu">
                    <h4>Marketplace Development</h4>
                    <ul className="mega-submenu1 normal-sub">
                      <li>
                        <Link to={"/nft-marketplace-development"}>
                          NFT Marketplace Development
                        </Link>
                      </li>
                      <li>
                        <Link to={"/white-label-nft-marketplace"}>
                          White-Label NFT Marketplace
                        </Link>
                      </li>
                      <li>
                        <Link to={"/bitcoin-ordinals-marketplace-development"}>
                          Bitcoin Ordinals Marketplace
                        </Link>
                      </li>
                      <li>
                        <Link to={"/nft-marketplace-on-ethereum"}>
                          NFT Marketplace On Ethereum
                        </Link>
                      </li>
                      <li>
                        <Link to={"/nft-marketplace-in-matic"}>
                          NFT Marketplace On Matic
                        </Link>
                      </li>
                      <li>
                        <Link to={"/nft-marketplace-on-binance-smart-chain"}>
                          NFT Marketplace On BSC
                        </Link>
                      </li>
                      {/*
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-marketplace-in-matic">
                                                    NFT Marketplace On Matic
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-marketplace-on-binance-smart-chain">
                                                    NFT Marketplace on BSC
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-marketplace-development-on-astar">
                                                    NFT Marketplace On Astar
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-marketplace-on-avalanche">
                                                    NFT Marketplace on Avalanche
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-development-in-sidechain">
                                                    NFT Development On Sidechain
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/solana-based-nft-marketplace-development">
                                                    NFT Marketplace On Solana
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/zksync2-integration-in-nft-platform">
                                                    Zksync2.0 Integration Service
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-marketplace-on-harmony">
                                                    NFT Marketplace On Harmony
                                                </a>
                                            </li> */}
                    </ul>
                    {/* <h4>Custom Solutions</h4>
                                        <ul className="mega-submenu1 normal-sub">
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-loyalty-program">
                                                    NFT Loyalty Program
                                                </a>
                                            </li>
                                        </ul> */}
                  </li>
                  {/* <li className="col-xs-12 col-sm-12 col-lg-3 col-md-12 has-subsubmenu">
                                        <h4>Marketplace Solutions</h4>
                                        <ul className="mega-submenu1 normal-sub">
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-music-marketplace-development">
                                                    NFT Marketplace for Music
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-art-marketplace-development">
                                                    NFT Marketplace for Art
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-for-sports">
                                                    NFT Marketplace For Sports
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-for-realestate">
                                                    NFT for Real estate
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-for-physical-assets">
                                                    NFT for Physical assets
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-in-ecommerce">
                                                    NFT in E-commerce
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-ticketing-marketplace">
                                                    NFT Ticketing Marketplace
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-aggregator-marketplace-development">
                                                    NFT Aggregator Marketplace
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/cross-chain-nft-marketplace">
                                                    Cross-Chain NFT Marketplace
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/dao-enabled-nft-platform">
                                                    DAO Enabled NFT Platform
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-marketplace-with-governance-token">
                                                    Marketplace with Governance
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/celebrity-nft-marketplace-development">
                                                    Celebrity NFT Marketplace
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/carbon-credits-development">
                                                    Carbon Credits Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/phygital-nft-marketplace">
                                                    Phygital NFT Marketplace
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/fractional-nft-marketplace-development">
                                                    Fractional NFT Marketplace
                                                </a>
                                            </li>
                                        </ul>
                                    </li> */}
                  {/* <li className="col-xs-12 col-sm-12 col-lg-3 col-md-12 has-subsubmenu">
                                        <h4>NFT Services</h4>
                                        <ul
                                            className="mega-submenu1 normal-sub"
                                            style={{ display: "none" }}
                                        >
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-development-services">
                                                    NFT Development Services
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-launchpad-development-service">
                                                    NFT Launchpad Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-exchange-development">
                                                    NFT Exchange Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-wallet-development">
                                                    NFT Wallet Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-minting-platform-development">
                                                    NFT minting platform
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-layer-2-development">
                                                    NFT Layer 2 Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/create-nft-ecosystem">
                                                    NFT Ecosystem
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/semi-fungible-token-development">
                                                    SFT Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/carbon-credits-development">
                                                    Carbon Credits Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/social-token-development-platform">
                                                    Social Token Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-staking-platform-development">
                                                    NFT Staking platform
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-streaming-platform-development-solutions">
                                                    NFT Streaming Platform
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-consulting">
                                                    NFT Consulting Service
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-studio">
                                                    NFT Studio
                                                </a>
                                            </li>
                                            <h4>Report</h4>
                                            <ul className="mega-submenu1 normal-sub">
                                                <li>
                                                    <a href="https://www.blockchainappfactory.com/nft-adoption-market-analysis-report">
                                                        NFT Adoption Report
                                                    </a>
                                                </li>
                                            </ul>
                                        </ul>
                                    </li> */}
                  {/* <li className="col-xs-12 col-sm-12 col-lg-3 col-md-12 has-subsubmenu">
                                        <h4>NFT Gaming</h4>
                                        <ul className="mega-submenu1 normal-sub" style={{ opacity: 1 }}>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-gaming-platform-development">
                                                    NFT Gaming Platform
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/p2e-nft-game-development">
                                                    Play2Earn Game Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/web2-game-to-web3-game-development">
                                                    Web2 to Web3 Game
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-lottery-game-development">
                                                    NFT Lottery Game Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-gaming-marketplace-development">
                                                    NFT Game Marketplace
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-racing-game-development">
                                                    NFT Racing Game
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/casino-nft-games-development">
                                                    NFT Casino Game
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-rpg-game-development">
                                                    NFT RPG Game Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/move-to-earn-nft-platform">
                                                    Move To Earn NFT Platform
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-game-development-like-splinterlands">
                                                    Splinterlands Like NFT Game
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/dungeonswap-like-nft-game-development">
                                                    Dungeon Swap Like NFT Game
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/mycryptoheroes-like-nft-game-development ">
                                                    My Crypto Heros Like NFT Game
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-marketplace-like-zedrun">
                                                    Zed Run Like NFT Game
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/decentraland-like-nft-development">
                                                    Decentraland Like NFT Game
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-game-development-like-revv-racing">
                                                    Revv Racing Like NFT Game
                                                </a>
                                            </li>
                                        </ul>
                                    </li> */}
                </ul>
              </li>
              {/* <li className="menu-item menu-dropdown-icon" onMouseEnter={() => { setDropdown(4) }} onMouseLeave={() => { setDropdown(0) }}>
                                <a className="" href="">
                                    Marketing
                                    <b className="caret" />
                                </a>
                                <ul
                                    className="mega-submenu menu_desk menu_desk_ico row m-0"
                                    style={{ display: dropdown === 4 ? "block" : "none", opacity: 1 }}
                                >
                                    <li className="col-xs-12 col-sm-12 col-lg-3 has-subsubmenu">
                                        <ul className="mega-submenu1 normal-sub">
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-marketing-services">
                                                    NFT Marketing Services
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/crypto-marketing-agency">
                                                    Crypto Marketing Services
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/token-marketing-services">
                                                    Token Marketing Services
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/crypto-pr-agency">
                                                    Crypto PR Agency
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-marketing-strategies-guide">
                                                    NFT Marketing Strategies Guide
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-marketplace-marketing">
                                                    NFT Marketplace Marketing Services
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-collectibles-marketing-services">
                                                    NFT Collectibles Marketing
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-game-marketing-services">
                                                    NFT Game Marketing
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-telegram-marketing-services">
                                                    
                                                    NFT Telegram Marketing
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-influencer-marketing-services">
                                                    NFT Influencer Marketing
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/influencer-marketing-agency">
                                                    Influencer Marketing Agency
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-pr-media-marketing-services">
                                                    NFT PR/Media Marketing
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="col-xs-12 col-sm-12 col-lg-3 has-subsubmenu">
                                        <ul className="mega-submenu1 normal-sub">
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-community-management">
                                                    NFT Community Management
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/crypto-community-management">
                                                    Crypto Community Management
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/nft-discord-marketing-services">
                                                    NFT Discord Marketing
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/discord-marketing-agency">
                                                    Discord Marketing
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/discord-server-marketing">
                                                    Discord Server Marketing
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/discord-brand-marketing-services">
                                                    Discord Brand Marketing
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/discord-game-marketing-agency">
                                                    Discord Game Marketing
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/defi-marketing-company">
                                                    DeFi Marketing Services
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/cryptocurrency-exchange-marketing">
                                                    Cryptocurrency Exchange Marketing
                                                </a>
                                            </li>
                                            <li className="">
                                                <a href="https://www.blockchainappfactory.com/web3-marketing-services">
                                                    Web 3.0 Marketing Services
                                                </a>
                                            </li>
                                            <li className="">
                                                <a href="https://www.blockchainappfactory.com/crypto-twitter-marketing">
                                                    Crypto Twitter Marketing
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="col-xs-12 col-sm-12 col-lg-3 has-subsubmenu">
                                        <ul className="mega-submenu1 normal-sub">
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/ico-marketing-services">
                                                    ICO Marketing
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/ico-community-marketing">
                                                    ICO Community Marketing
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/ico-telegram-marketing">
                                                    ICO Telegram Marketing
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/ico-influencer-marketing">
                                                    ICO Influencer Marketing
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/ico-youtube-influencer-marketing">
                                                    ICO Youtube Influencer
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/sto-marketing-services">
                                                    STO Marketing
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/ido-marketing-services">
                                                    IDO Marketing
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li> */}
              <li
                className="menu-item menu-dropdown-icon"
                onMouseEnter={() => {
                  setDropdown(5);
                }}
                onMouseLeave={() => {
                  setDropdown(0);
                }}
              >
                <a className="" href="">
                  ICO/IDO <b className="caret" />
                </a>
                <ul
                  className="mega-submenu menu_desk menu_desk_ico"
                  style={{
                    display: dropdown === 5 ? "block" : "none",
                    opacity: 1,
                  }}
                >
                  <li className="has-subsubmenu">
                    <h4>ICO</h4>
                    <ul className="mega-submenu1 normal-sub">
                      <li>
                        <Link to={"/ico-development"}>ICO Development</Link>
                      </li>
                      <li>
                        <Link to={"/ico-marketing-services"}>
                          ICO Marketing
                        </Link>
                      </li>
                      <li>
                        <Link to={"/ico-community-marketing"}>
                          ICO Community Marketing
                        </Link>
                      </li>
                      {/* <li>
                                                <a href="https://www.blockchainappfactory.com/ico-telegram-marketing">
                                                    ICO Telegram Marketing
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/ico-influencer-marketing">
                                                    ICO Influencer Marketing
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/initial-exchange-offering-services">
                                                    IEO Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/equity-token-offering-services">
                                                    ETO Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/crowdfunding-platform">
                                                    Crowdfunding Platform
                                                </a>
                                            </li> */}
                    </ul>
                  </li>
                  {/* <li className="has-subsubmenu">
                                        <h4>STO</h4>
                                        <ul className="mega-submenu1 normal-sub">
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/security-token-offering-services">
                                                    STO Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/sto-marketing-services">
                                                    STO Marketing
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/sto-smart-contracts-development">
                                                    STO Smart Contracts
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="has-subsubmenu">
                                        <h4>IDO/Launchpad</h4>
                                        <ul className="mega-submenu1 normal-sub">
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/initial-dex-offering-service">
                                                    IDO Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/ido-marketing-services">
                                                    IDO Marketing
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/white-label-ido-launchpad">
                                                    White Label IDO Launchpad
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/ido-token-launchpad-services">
                                                    IDO Token Launchpad
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/ido-launchpad-development-on-bsc">
                                                    IDO Launchpad On BSC
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/ido-launchpad-development-on-ethereum">
                                                    IDO Launchpad On Ethereum
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/ido-launchpad-development-in-multichain">
                                                    IDO Launchpad In Multichain
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/ido-launchpad-on-polygon">
                                                    IDO Launchpad On Polygon
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/igo-launchpad-development">
                                                    IGO Launchpad Development
                                                </a>
                                            </li>
                                        </ul>
                                    </li> */}
                </ul>
              </li>
              {/* <li className="menu-item menu-dropdown-icon" onMouseEnter={() => { setDropdown(6) }} onMouseLeave={() => { setDropdown(0) }}>
                                <a className="" href="">
                                    Web 3.0
                                    <b className="caret" />
                                </a>
                                <ul
                                    className="mega-submenu menu_desk menu_desk_ico"
                                    style={{ display: dropdown === 6 ? "block" : "none", opacity: 1 }}
                                >
                                    <li className="has-subsubmenu ">
                                        <h4>Web 3.0</h4>
                                        <ul className="mega-submenu1 normal-sub">
                                            <li className="">
                                                <a href="https://www.blockchainappfactory.com/web3-development-solutions">
                                                    Web 3.0 Development
                                                </a>
                                            </li>
                                            <li className="">
                                                <a href="https://www.blockchainappfactory.com/web3-dapp-development">
                                                    Web3 dApp Development
                                                </a>
                                            </li>
                                            <li className="">
                                                <a href="https://www.blockchainappfactory.com/web3-wallet-development">
                                                    Web3 Wallet Development
                                                </a>
                                            </li>
                                            <li className="">
                                                <a href="https://www.blockchainappfactory.com/web3-game-development">
                                                    Web 3.0 Game Development
                                                </a>
                                            </li>
                                            <li className="">
                                                <a href="https://www.blockchainappfactory.com/web3-gaming-studio">
                                                    Web3 Gaming Studio
                                                </a>
                                            </li>
                                            <li className="">
                                                <a href="https://www.blockchainappfactory.com/web3-marketing-services">
                                                    Web 3.0 Marketing Services
                                                </a>
                                            </li>
                                            <li className="">
                                                <a href="https://www.blockchainappfactory.com/socialfi-platform-development">
                                                    SocialFi Platform Development
                                                </a>
                                            </li>
                                            <li className="">
                                                <a href="https://www.blockchainappfactory.com/tipcoin-clone">
                                                    Tipcoin Clone
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="has-subsubmenu ">
                                        <h4>Blockchain</h4>
                                        <ul className="mega-submenu1 normal-sub">
                                            <li className="">
                                                <a href="https://www.blockchainappfactory.com/blockchain-development-company">
                                                    Blockchain Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/white-label-blockchain-solutions">
                                                    White Label Blockchain Solutions
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/custom-blockchain-development-on-avalanche">
                                                    Custom Blockchain On Avalanche
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/custom-blockchain-development-on-polygon">
                                                    Custom Blockchain On Polygon
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/blockchain-game-development">
                                                    Blockchain Game Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/solana-blockchain-development-company">
                                                    Solana Blockchain Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/blockchain-consulting-services">
                                                    Blockchain / Web3.0 Consulting
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/proof-of-reserve">
                                                    Proof Of Reserve
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/defi-platform-like-synthetix">
                                                    Defi Platform like Synthetix
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="has-subsubmenu ">
                                        <h4>&nbsp;</h4>
                                        <ul className="mega-submenu1 normal-sub">
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/blockchain-for-finance">
                                                    Blockchain for Finance
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/blockchain-for-pharma-industry">
                                                    Blockchain for Pharma Industry
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/protocol-implementation-services">
                                                    Protocol Implementation
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/cross-chain-bridge-development">
                                                    Cross Chain Bridge Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/evm-compatible-chains-service">
                                                    EVM Compatible Blockchain and Service
                                                </a>
                                            </li>
                                            <li className="">
                                                <a href="https://www.blockchainappfactory.com/smart-contract-development">
                                                    Smart Contract Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/dapps-development">
                                                    DApps Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/peer-to-peer-lending-software">
                                                    P2P Lending Software
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/layer-1-blockchain-solutions">
                                                    Layer-1 Blockchain Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/appchain-development">
                                                    Appchain Development
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li> */}
              {/* <li className="menu-item menu-dropdown-icon" onMouseEnter={() => { setDropdown(7) }} onMouseLeave={() => { setDropdown(0) }}>
                                <a href="#" className="">
                                    AI
                                    <b className="caret" />
                                </a>
                                <ul
                                    className="mega-submenu normal-sub"
                                    style={{ display: dropdown === 7 ? "block" : "none", opacity: 1 }}
                                >
                                    <li>
                                        <a href="https://www.blockchainappfactory.com/chatgpt-applications-development">
                                            ChatGPT Application Development
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.blockchainappfactory.com/chatgpt-integration-service">
                                            ChatGPT Integration Service
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.blockchainappfactory.com/ai-development-company">
                                            AI Development
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.blockchainappfactory.com/ai-video-analytics-software">
                                            Ai Video Analytics Software
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.blockchainappfactory.com/ai-product-marketing-services">
                                            AI Product Marketing
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.blockchainappfactory.com/ai-prompt-engineering">
                                            AI Prompt Engineering
                                        </a>
                                    </li>
                                </ul>
                            </li> */}
              {/* <li className="menu-item menu-dropdown-icon" onMouseEnter={() => { setDropdown(8) }} onMouseLeave={() => { setDropdown(0) }}>
                                <a href="" className="">
                                    
                                    Metaverse <b className="caret" />
                                </a>
                                <ul
                                    className="mega-submenu normal-sub"
                                    style={{ display: dropdown === 8 ? "block" : "none", opacity: 1 }}
                                >
                                    <li>
                                        <a href="https://www.blockchainappfactory.com/metaverse-development-services">
                                            Metaverse Development Services
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.blockchainappfactory.com/metaverse-marketplace-development">
                                            Metaverse NFT Marketplace Development
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.blockchainappfactory.com/metaverse-healthcare-solutions">
                                            Metaverse Healthcare Solutions
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.blockchainappfactory.com/nft-metaverse-launchpad-development">
                                            NFT Metaverse Launchpad Development
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.blockchainappfactory.com/nft-metaverse-game-development">
                                            Metaverse NFT Game Development
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.blockchainappfactory.com/metaverse-nft-art-gallery">
                                            Metaverse Art Gallery
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.blockchainappfactory.com/metaverse-avatar-development">
                                            Metaverse Avatar Development
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.blockchainappfactory.com/metaverse-3d-space-development">
                                            Metaverse 3D Space Development
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.blockchainappfactory.com/metaverse-event-platform-development">
                                            Metaverse Event Platform
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.blockchainappfactory.com/metaverse-platform-for-social-interaction">
                                            Metaverse Platform for Social Interaction
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.blockchainappfactory.com/metaverse-virtual-working-space">
                                            Metaverse Virtual Working Space
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.blockchainappfactory.com/metaverse-applications-development">
                                            Metaverse App Development
                                        </a>
                                    </li>
                                </ul>
                            </li> */}
              {/* <li className="menu-item menu-dropdown-icon" onMouseEnter={() => { setDropdown(9) }} onMouseLeave={() => { setDropdown(0) }}>
                                <a className="" href="">
                                    DeFi
                                    <b className="caret" />
                                </a>
                                <ul className="mega-submenu menu_desk menu_desk_ico"
                                    style={{ display: dropdown === 9 ? "block" : "none", opacity: 1 }}
                                >
                                    <li className="has-subsubmenu ">
                                        <ul className="mega-submenu1 normal-sub">
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/decentralized-finance-defi-development">
                                                    DeFi Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/pancakeswap-like-decentralized-exchange">
                                                    DeFi Platform like Pancakeswap
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/decentralized-autonomous-organization">
                                                    DAO Services
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/whitelabel-swap-exchange-development-services">
                                                    Whitelabel Swap Exchange Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/pinksale-like-launchpad-development">
                                                    Pinksale Like Launchpad Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/defi-staking-platform-development">
                                                    DeFi Staking Platform Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/defi-yield-farming-development">
                                                    Defi Yield Farming Development
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="has-subsubmenu ">
                                        <ul className="mega-submenu1 normal-sub">
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/defi-lending-and-borrowing-platform-development">
                                                    DEFI Lending and Borrowing Platform
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/defi-smart-contract-development-company">
                                                    DeFi Smart Contract Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/defi-marketing-company">
                                                    DeFi Marketing Services
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/defi-dapp-development-company">
                                                    DeFi Application Development Services
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/defi-token-development-services">
                                                    DeFi Token Development Services
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/defi-wallet-development-services">
                                                    DeFi Wallet Development Solution
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/defi-synthetic-assets-development">
                                                    Defi Synthetic Assets Development
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="has-subsubmenu ">
                                        <ul className="mega-submenu1 normal-sub">
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/defi-tokenization-development">
                                                    Defi Tokenization development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/defi-crowdfunding-platform-development">
                                                    Defi crowdfunding platform
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/defi-real-estate-platform">
                                                    Defi Real estate platform
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/defi-exchange-development-company">
                                                    Defi Exchange Development Solution
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/decentralized-exchange-like-uniswap">
                                                    Defi Platform Like Uniswap
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/decentralized-exchange-like-yearn-finance">
                                                    
                                                    DeFi Protocol Development like yearn finance
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.blockchainappfactory.com/defi-protocol-development-like-aave">
                                                    
                                                    DeFi Lending And Borrowing Protocol Like Aave
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li> */}
              <li className="menu-item">
                <Link to={"/contact"}>Contact Us</Link>
              </li>
              {/* <li className="menu-item cnt_m menu-dropdown-icon" onMouseEnter={() => { setDropdown(10) }} onMouseLeave={() => { setDropdown(0) }}>
                                <a href="" className="hidden-xs">
                                    contact <b className="caret" />
                                </a>
                                <ul
                                    className="mega-submenu normal-sub"
                                    style={{ display: dropdown === 10 ? "block" : "none", opacity: 1 }}
                                >
                                    <li>
                                        <a href="https://www.blockchainappfactory.com/contact">
                                            contact us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.blockchainappfactory.com/our-services">
                                            Our Services
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.blockchainappfactory.com/about-us">
                                            about us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.blockchainappfactory.com/newsroom">
                                            Newsroom
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.blockchainappfactory.com/blockchainappfactory-reviews">
                                            Reviews
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.blockchainappfactory.com/become-our-partner">
                                            Become Our Partner
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.blockchainappfactory.com/blog/"
                                            target="_blank"
                                        >
                                            blog
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.blockchainappfactory.com/case-studies">
                                            Case Study
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.blockchainappfactory.com/privacy-policy">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.blockchainappfactory.com/terms-and-condition">
                                            Terms and Condition
                                        </a>
                                    </li>
                                </ul>
                            </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
