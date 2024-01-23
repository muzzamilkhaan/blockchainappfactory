import React from "react";
import { useState, useEffect } from "react";
import { FaMobileAlt, FaEnvelope } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import LogoSVG from "../components/shared/SVG/logo";

function Header({ headerBgColor, linkColor, colorLogo }) {
  const [dropdown, setDropdown] = useState(0);
  const [open, setOpen] = useState(false);
  const [fixedHeader, setFixedHeader] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [logoToRender, setLogoToRender] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      let triggerPosition = 500;
      const scrollPosition = window.scrollY;
      setFixedHeader(scrollPosition > triggerPosition);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fixedHeader]);

  const darkLogo = <img src="./assets/images/dark-logo.jpg" alt="Dark Logo" />;
  const whiteLogo = <img src="./assets/images/white.svg" alt="White Logo" />;
  // let logoToRender;
  useEffect(() => {
    const changeLogo = () => {
      if (headerBgColor === "transparent" && fixedHeader === false) {
        setLogoToRender(whiteLogo);
      } else if (fixedHeader) {
        setLogoToRender(darkLogo);
      } else if (headerBgColor == undefined) {
        setLogoToRender(whiteLogo);
      } else {
        setLogoToRender(darkLogo);
      }
      // const logoToRender = fixedHeader
      //   ? darkLogo
      //   : headerBgColor === "transparent"
      //   ? whiteLogo
      //   : darkLogo;
    };
    changeLogo();
    // console.log("logoToRender", logoToRender);
  }, [headerBgColor, linkColor, fixedHeader]);

  return (
    <>
      <div
        className={`header menu-style-1 ${fixedHeader ? "header-active" : ""}`}
        style={{ backgroundColor: fixedHeader ? "" : headerBgColor }}
      >
        <div className="top-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 d-flex flex-wrap-wrap justify-content-between">
                <div className="cont-det">
                  <a href="tel:+916382665366">
                    <FaMobileAlt color="#30D4D1" />
                    +91 63826 65366
                  </a>
                  <a href="mailto:info@blockchainappfactory.com">
                    <FaEnvelope color="#30D4D1" />
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
            {/* {logoToRender} */}
            <LogoSVG logoColor={colorLogo} fixedHeader={fixedHeader} />
          </Link>
          <span
            className={`mob_nav_ic ${fixedHeader ? "humburger-active" : ""}`}
            style={{ fontSize: 30, cursor: "pointer", color: "#fff" }}
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
            {/* <button>CREATE TOKEN</button> */}
            <a href="#" className="menu-mobile" />
            <ul className="main-menu">
              <li
                className="menu-item menu-dropdown-icon create-token-style"
                style={{}}
              >
                <Link to="/create-your-own-token-and-coin " className="anchor">
                  <button className="create-token-button">CREATE TOKEN </button>
                </Link>
              </li>
              <li
                className="menu-item menu-dropdown-icon"
                onMouseEnter={() => {
                  setDropdown(1);
                }}
                onMouseLeave={() => {
                  setDropdown(0);
                }}
              >
                <a className="" style={{ color: fixedHeader ? "" : linkColor }}>
                  {" "}
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
                      <li>
                        <Link to={"/bitcoin-ordinals-token-development"}>
                          Bitcoin Ordinals Token Development
                        </Link>
                      </li>
                      <li>
                        <Link to={"/bitcoin-ordinals-token-marketing"}>
                          Bitcoin Ordinals Token Marketing
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
                    <h4> Custom Solutions</h4>
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
                <a className="" style={{ color: fixedHeader ? "" : linkColor }}>
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
                    </ul>
                  </li>
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
                <a className="" style={{ color: fixedHeader ? "" : linkColor }}>
                  NFT
                  <b className="caret" />
                </a>
                <ul
                  className="mega-submenu menu_desk-nft row m-0"
                  style={{
                    display: dropdown === 3 ? "flex" : "none",
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
                      <li>
                        <Link to={"/nft-marketplace-development-on-astar"}>
                          NFT Marketplace On Astar
                        </Link>
                      </li>
                      <li>
                        <Link to={"/nft-marketplace-on-avalanche"}>
                          NFT Marketplace On Avalanche
                        </Link>
                      </li>
                      <li>
                        <Link to={"/nft-development-in-sidechain"}>
                          NFT Marketplace On Sidechain
                        </Link>
                      </li>
                      <li>
                        <Link to={"/solana-based-nft-marketplace-development"}>
                          NFT Marketplace On Solana
                        </Link>
                      </li>
                      <li>
                        <Link to={"/zksync2-integration-in-nft-platform"}>
                          Zksync2.0 Integration Service
                        </Link>
                      </li>
                      <li>
                        <Link to={"/nft-marketplace-on-harmony"}>
                          Nft Marketplace On Harmony
                        </Link>
                      </li>
                    </ul>
                    <h4>Custom Solutions</h4>
                    <ul className="mega-submenu1 normal-sub">
                      <li>
                        <Link to={"/nft-loyalty-program"}>
                          Nft Loyalty Program
                        </Link>
                      </li>
                      <li>
                        <Link to={"token-gating-platform"}>
                          Token Gating Platform
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="col-xs-12 col-sm-12 col-lg-3 col-md-12 has-subsubmenu">
                    <h4>Marketplace Solutions</h4>
                    <ul className="mega-submenu1 normal-sub">
                      <li>
                        <Link to="nft-music-marketplace-development">
                          NFT Marketplace for Music
                        </Link>
                      </li>
                      <li>
                        <Link to="nft-art-marketplace-development">
                          NFT Marketplace for Art
                        </Link>
                      </li>
                      <li>
                        <a href="nft-for-sports">NFT Marketplace For Sports</a>
                      </li>
                      <li>
                        <a href="nft-for-realestate">NFT for Real estate</a>
                      </li>
                      <li>
                        <a href="nft-for-physical-assets">
                          NFT for Physical assets
                        </a>
                      </li>
                      <li>
                        <a href="nft-in-ecommerce">NFT in E-commerce</a>
                      </li>
                      <li>
                        <a href="nft-ticketing-marketplace">
                          NFT Ticketing Marketplace
                        </a>
                      </li>
                      <li>
                        <a href="nft-aggregator-marketplace-development">
                          NFT Aggregator Marketplace
                        </a>
                      </li>
                      <li>
                        <a href="cross-chain-nft-marketplace">
                          Cross-Chain NFT Marketplace
                        </a>
                      </li>
                      <li>
                        <a href="dao-enabled-nft-platform">
                          DAO Enabled NFT Platform
                        </a>
                      </li>
                      <li>
                        <a href="nft-marketplace-with-governance-token">
                          Marketplace with Governance
                        </a>
                      </li>
                      <li>
                        <a href="nft-marketplace-for-celebrities">
                          Celebrity NFT Marketplace
                        </a>
                      </li>
                      <li>
                        <a href="carbon-credits-development">
                          Carbon Credits Development
                        </a>
                      </li>
                      <li>
                        <a href="phygital-nft-marketplace">
                          Phygital NFT Marketplace
                        </a>
                      </li>
                      <li>
                        <a href="fractional-nft-marketplace-development">
                          Fractional NFT Marketplace
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/*  */}
                  <li className="col-xs-12 col-sm-12 col-lg-3 col-md-12 has-subsubmenu">
                    <h4>NFT Services</h4>
                    <ul
                      className="mega-submenu1 normal-sub"
                      style={{ display: "none" }}
                    >
                      <li>
                        <Link to="nft-development-services">
                          NFT Development Services
                        </Link>
                      </li>
                      <li>
                        <Link to="nft-launchpad-development-service">
                          NFT Launchpad Development
                        </Link>
                      </li>
                      <li>
                        <Link to="nft-exchange-development">
                          NFT Exchange Development
                        </Link>
                      </li>
                      <li>
                        <Link to="nft-wallet-development">
                          NFT Wallet Development
                        </Link>
                      </li>
                      <li>
                        <Link to="nft-minting-platform-development">
                          NFT minting platform
                        </Link>
                      </li>
                      <li>
                        <Link to="nft-layer-2-development">
                          NFT Layer 2 Development
                        </Link>
                      </li>
                      <li>
                        <Link to="create-nft-ecosystem">NFT Ecosystem</Link>
                      </li>
                      <li>
                        <Link to="semi-fungible-token-development">
                          SFT Development
                        </Link>
                      </li>
                      <li>
                        <Link href="carbon-credits-development">
                          Carbon Credits Development
                        </Link>
                      </li>
                      <li>
                        <Link to="social-token-development-platform">
                          Social Token Development
                        </Link>
                      </li>
                      <li>
                        <Link to="nft-staking-platform-development">
                          NFT Staking platform
                        </Link>
                      </li>
                      <li>
                        <Link to="nft-streaming-platform-development-solutions">
                          NFT Streaming Platform
                        </Link>
                      </li>
                      <li>
                        <Link to="nft-consulting">NFT Consulting Service</Link>
                      </li>
                      <li>
                        <Link to="nft-studio">NFT Studio</Link>
                      </li>
                      <li>
                        <Link to="nft-art-design-services">
                          NFT Art Design Services
                        </Link>
                      </li>
                      <h4>Report</h4>
                      <ul className="mega-submenu1 normal-sub">
                        <li>
                          <Link to="nft-adoption-market-analysis-report">
                            NFT Adoption Report
                          </Link>
                        </li>
                      </ul>
                    </ul>
                  </li>
                  <li className="col-xs-12 col-sm-12 col-lg-3 col-md-12 has-subsubmenu">
                    <h4>NFT Gaming</h4>
                    <ul
                      className="mega-submenu1 normal-sub"
                      style={{ opacity: 1 }}
                    >
                      <li>
                        <Link to="nft-gaming-platform-development">
                          NFT Gaming Platform
                        </Link>
                      </li>
                      <li>
                        <Link to="p2e-nft-game-development">
                          Play2Earn Game Development
                        </Link>
                      </li>
                      <li>
                        <Link to="web2-game-to-web3-game-development">
                          Web2 to Web3 Game
                        </Link>
                      </li>
                      <li>
                        <Link to="nft-lottery-game-development">
                          NFT Lottery Game Development
                        </Link>
                      </li>
                      <li>
                        <Link to="nft-gaming-marketplace-development">
                          NFT Game Marketplace
                        </Link>
                      </li>
                      <li>
                        <Link to="nft-racing-game-development">
                          NFT Racing Game
                        </Link>
                      </li>
                      <li>
                        <Link to="casino-nft-games-development">
                          NFT Casino Game
                        </Link>
                      </li>
                      <li>
                        <Link to="nft-rpg-game-development">
                          NFT RPG Game Development
                        </Link>
                      </li>
                      <li>
                        <Link to="move-to-earn-nft-platform">
                          Move To Earn NFT Platform
                        </Link>
                      </li>
                      <li>
                        <Link to="nft-game-development-like-splinterlands">
                          Splinterlands Like NFT Game
                        </Link>
                      </li>
                      <li>
                        <Link to="dungeonswap-like-nft-game-development">
                          Dungeon Swap Like NFT Game
                        </Link>
                      </li>
                      <li>
                        <Link to="mycryptoheroes-like-nft-game-development">
                          My Crypto Heros Like NFT Game
                        </Link>
                      </li>
                      <li>
                        <Link to="nft-marketplace-like-zedrun">
                          Zed Run Like NFT Game
                        </Link>
                      </li>
                      <li>
                        <Link to="decentraland-like-nft-development">
                          Decentraland Like NFT Game
                        </Link>
                      </li>
                      <li>
                        <Link to="nft-game-development-like-revv-racing">
                          Revv Racing Like NFT Game
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li
                className="menu-item menu-dropdown-icon"
                onMouseEnter={() => {
                  setDropdown(5);
                }}
                onMouseLeave={() => {
                  setDropdown(0);
                }}
              >
                <a
                  className=""
                  href=""
                  style={{ color: fixedHeader ? "" : linkColor }}
                >
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
                      <li>
                        <Link to="ico-telegram-marketing">
                          ICO Telegram Marketing
                        </Link>
                      </li>
                      <li>
                        <Link to="ico-influencer-marketing">
                          ICO Influencer Marketing
                        </Link>
                      </li>
                      <li>
                        <Link to="initial-exchange-offering-services">
                          IEO Development
                        </Link>
                      </li>
                      <li>
                        <Link to="equity-token-offering-services">
                          ETO Development
                        </Link>
                      </li>
                      <li>
                        <Link to="crowdfunding-platform">
                          Crowdfunding Platform
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-subsubmenu">
                    <h4>STO</h4>
                    <ul className="mega-submenu1 normal-sub">
                      <li>
                        <Link to="security-token-offering-services">
                          STO Development
                        </Link>
                      </li>
                      <li>
                        <Link to="sto-marketing-services">STO Marketing</Link>
                      </li>
                      <li>
                        <Link to="sto-smart-contracts-development">
                          STO Smart Contracts
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-subsubmenu">
                    <h4>IDO/Launchpad</h4>
                    <ul className="mega-submenu1 normal-sub">
                      <li>
                        <Link to="initial-dex-offering-service">
                          IDO Development
                        </Link>
                      </li>
                      <li>
                        <Link to="ido-marketing-services">IDO Marketing</Link>
                      </li>
                      <li>
                        <Link to="white-label-ido-launchpad">
                          White Label IDO Launchpad
                        </Link>
                      </li>
                      <li>
                        <Link to="ido-token-launchpad-services">
                          IDO Token Launchpad
                        </Link>
                      </li>
                      <li>
                        <Link to="ido-launchpad-on-layer-2-blockchain">
                          IDO Launchpad On Layer 2
                        </Link>
                      </li>
                      <li>
                        <Link to="ido-launchpad-development-on-bsc">
                          IDO Launchpad On BSC
                        </Link>
                      </li>
                      <li>
                        <Link to="ido-launchpad-development-on-ethereum">
                          IDO Launchpad On Ethereum
                        </Link>
                      </li>
                      <li>
                        <Link to="ido-launchpad-development-in-multichain">
                          IDO Launchpad In Multichain
                        </Link>
                      </li>
                      <li>
                        <Link to="ido-launchpad-on-polygon">
                          IDO Launchpad On Polygon
                        </Link>
                      </li>
                      <li>
                        <Link to="igo-launchpad-development">
                          IGO Launchpad Development
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className="menu-item">
                <Link
                  to={"/contact"}
                  style={{ color: fixedHeader ? "" : linkColor }}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
