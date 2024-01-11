import React, { useEffect, useState } from "react";
import Header from "../../headerFooter/Header";
import Footer from "../../headerFooter/Footer";
import "./createYourOwnTokenAndCoin.css";
import WeSpotlightedIn from "./WeSpotlightedIn";
import UnderLine from "../UnderLine";
// import { useLocation } from "react-router-dom";

function CreateYourOwnTokenAndCoin({headerBgColor , toggleHeaderBgColor , linkColor}) {
  // const location = useLocation();
  // const baseUrl = location.pathname.split("/")[1];
  // console.log("BaseURL:", baseUrl);
  
  const [tab1, setTab1] = useState(true);
  const [tab2, setTab2] = useState(true);
  const [tab1State, setTab1State] = useState(0);
  const [tab2State, setTab2State] = useState(0);

  useEffect(() =>{
    toggleHeaderBgColor('#fff' , '#444')
  })
  return (
    <>
      <div id="create-your-own-token-and-coin" style={{position:"relative",overflow:"hidden"}}>
        <div className="banner-overlay1"></div>
        {/* <Header headerBgColor={headerBgColor}/> */}
        <div className="main">
          <div className="banner my_banner">
            <div className="banner_content">
              <div className="container">
                <div className="row">
                  <div className="contentall">
                    <div className="ovr">
                      <div className="col-md-12 col-sm-12 col-xs-12 text-left">
                        <div className="ban_tirt">
                          <h1 itemProp="name" className="text-center">
                            Create Your Own Cryptocurrency Instantly With Us!
                          </h1>
                          <p itemProp="text" className="text-center">
                            Do you want to create your own token? You are merely
                            steps away from realizing your crypto business
                            dreams! Speak with our seasoned crypto developers
                            who create token projects efficiently.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12 col-xs-12 text-center">
                        <div className="free-consult">
                          <h2>
                            Fill out the form so that we can discuss further!
                          </h2>
                          <div className="tabs">
                            {/* <div className="tabby-tab">
                              <input
                                type="radio"
                                id="tab-1"
                                name="tabby-tabs"
                                checked={tab1}
                                onClick={() => {
                                  setTab1(true), setTab2(false);
                                }}
                              />
                              <label htmlFor="tab-1">Crypto Coin</label>
                              <div className="tabby-content">
                                <form id="msform">
                                  <ul id="progressbar">
                                    <li className="active" id="account">
                                      <strong>Step 1</strong>
                                    </li>
                                    <li
                                      id="personal"
                                      className={`${
                                        tab1State === 1 ? "active" : ""
                                      }`}
                                    >
                                      <strong>Step 2</strong>
                                    </li>
                                  </ul>
                                  {tab1State === 0 ? (
                                    <fieldset>
                                      <div className="form-card">
                                        <label className="fieldlabels">
                                          Coin Name: *
                                        </label>{" "}
                                        <input
                                          type="text"
                                          name="coin-name"
                                          id="coin_name"
                                          placeholder="Coin Name"
                                        />
                                        <select name="algorithm" id="algorithm">
                                          <option selected="" value="">
                                            Hashing Algorithm: *
                                          </option>
                                          <option value="SHA-256 Algorithm">
                                            SHA-256 Algorithm
                                          </option>
                                          <option value="X11 Algorithm">
                                            X11 Algorithm
                                          </option>
                                          <option value="PIVX Algorithm">
                                            PIVX Algorithm
                                          </option>
                                          <option value="Scrypt Algorithm">
                                            Scrypt Algorithm
                                          </option>
                                          <option value="Equihash Algorithm">
                                            Equihash Algorithm
                                          </option>
                                          <option value="Ethash Algorithm">
                                            Ethash Algorithm
                                          </option>
                                          <option value="Other">Other</option>
                                        </select>
                                        <select name="budget" id="budget">
                                          <option selected="" value="">
                                            Budget: *
                                          </option>
                                          <option value="$5000 - $10000">
                                            $5000 - $10000
                                          </option>
                                          <option value="$10000 - $25000">
                                            $10000 - $25000
                                          </option>
                                          <option value="$25000 - $100000">
                                            $25000 - $100000
                                          </option>
                                          <option value="$100000 - $250000">
                                            $100000 - $250000
                                          </option>
                                        </select>
                                        <select
                                          name="blockchain"
                                          id="blockchain"
                                        >
                                          <option selected="" value="">
                                            Select Blockchain: *
                                          </option>
                                          <option value="Ethereum">
                                            Ethereum
                                          </option>
                                          <option value="Polygon">
                                            Polygon
                                          </option>
                                          <option value="BNB Chain">
                                            BNB Chain
                                          </option>
                                          <option value="Solana">Solana</option>
                                          <option value="Avalanche">
                                            Avalanche
                                          </option>
                                          <option value="Cardano">
                                            Cardano
                                          </option>
                                          <option value="Tron">Tron</option>
                                          <option value="Shardeum">
                                            Shardeum
                                          </option>
                                          <option value="Tezos">Tezos</option>
                                          <option value="Fantom">Fantom</option>
                                          <option value="Harmony">
                                            Harmony
                                          </option>
                                          <option value="Polkadot">
                                            Polkadot
                                          </option>
                                        </select>
                                        <select
                                          name="whitepaper"
                                          id="whitepaper"
                                        >
                                          <option selected="" value="">
                                            Do You Need a Whitepaper?: *
                                          </option>
                                          <option value="Yes">Yes</option>
                                          <option value="No">No</option>
                                        </select>
                                        <select name="campaign" id="campaign">
                                          <option selected="" value="">
                                            Do You Need a Crypto Fundraising
                                            Campaign?: *
                                          </option>
                                          <option value="Yes - ICO">
                                            Yes - ICO
                                          </option>
                                          <option value="Yes - IEO">
                                            Yes - IEO
                                          </option>
                                          <option value="Yes - STO">
                                            Yes - STO
                                          </option>
                                          <option value="Yes - IDO">
                                            Yes - IDO
                                          </option>
                                          <option value="No">No</option>
                                        </select>
                                      </div>{" "}
                                      <input
                                        type="button"
                                        name="next"
                                        className="next action-button"
                                        defaultValue="Next"
                                        onClick={() => {
                                          setTab1State(1);
                                        }}
                                      />
                                    </fieldset>
                                  ) : (
                                    <fieldset>
                                      <div className="form-card">
                                        <label className="fieldlabels">
                                          Name: *
                                        </label>{" "}
                                        <input
                                          type="text"
                                          name="fname"
                                          placeholder="Name"
                                          id="name"
                                        />
                                        <label className="fieldlabels">
                                          Email: *
                                        </label>{" "}
                                        <input
                                          type="text"
                                          name="lname"
                                          placeholder="Email ID"
                                          id="email"
                                        />
                                        <label className="fieldlabels">
                                          Phone No.: *
                                        </label>{" "}
                                        <input
                                          type="text"
                                          name="phno"
                                          id="phone"
                                          placeholder="Phone No."
                                        />
                                        <textarea
                                          id="message"
                                          placeholder="Message"
                                          defaultValue={""}
                                        />
                                        <div
                                          className="g-recaptcha"
                                          data-sitekey="6LdmU-coAAAAANsYjKfjqRl9xG1NTV4f2aVzlthf"
                                        >
                                          <div
                                            style={{ width: 304, height: 78 }}
                                          >
                                            <div>
                                              <iframe
                                                title="reCAPTCHA"
                                                width={304}
                                                height={78}
                                                role="presentation"
                                                name="a-mtx4d21ecdtc"
                                                frameBorder={0}
                                                scrolling="no"
                                                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                                                src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LdmU-coAAAAANsYjKfjqRl9xG1NTV4f2aVzlthf&co=aHR0cHM6Ly93d3cuYmxvY2tjaGFpbmFwcGZhY3RvcnkuY29tOjQ0Mw..&hl=en&v=-QbJqHfGOUB8nuVRLvzFLVed&size=normal&cb=bqpwca8q9v0m"
                                              />
                                            </div>
                                            <textarea
                                              id="g-recaptcha-response"
                                              name="g-recaptcha-response"
                                              className="g-recaptcha-response"
                                              style={{
                                                width: 250,
                                                height: 40,
                                                border:
                                                  "1px solid rgb(193, 193, 193)",
                                                margin: "10px 25px",
                                                padding: 0,
                                                resize: "none",
                                                display: "none",
                                              }}
                                              defaultValue={""}
                                            />
                                          </div>
                                        </div>
                                        <br />
                                      </div>{" "}
                                      <input
                                        type="button"
                                        name="submit"
                                        className="next action-button"
                                        id="coin-btn"
                                        defaultValue="submit"
                                      />
                                      <input
                                        type="button"
                                        name="previous"
                                        className="previous action-button-previous"
                                        defaultValue="Previous"
                                        onClick={() => {
                                          setTab1State(0);
                                        }}
                                      />
                                    </fieldset>
                                  )}
                                </form>
                                <div className="clearfix" />
                              </div>
                            </div> */}
                            <div className="tabby-tab">
                              <input
                                type="radio"
                                id="tab-2"
                                name="tabby-tabs"
                                checked={tab2}
                                onClick={() => {
                                  setTab1(false), setTab2(true);
                                }}
                              />
                              <label htmlFor="tab-2">Crypto Token</label>
                              <div className="tabby-content">
                                <form id="msform">
                                  <ul id="progressbar">
                                    <li className="active" id="payment">
                                      <strong>Step 1</strong>
                                    </li>
                                    <li
                                      id="confirm"
                                      className={`${
                                        tab2State === 1 ? "active" : ""
                                      }`}
                                    >
                                      <strong>Step 2</strong>
                                    </li>
                                  </ul>
                                  {tab2State === 0 ? (
                                    <fieldset>
                                      <div className="form-card">
                                        <label className="fieldlabels">
                                          Coin Name: *
                                        </label>{" "}
                                        <input
                                          type="text"
                                          name="coin-name"
                                          placeholder="Coin Name"
                                          id="coinname"
                                        />
                                        <select
                                          name="token_type"
                                          id="token_type"
                                        >
                                          <option selected="" value="">
                                            Choose a Token Type: *
                                          </option>
                                          <option value="Utility">
                                            Utility
                                          </option>
                                          <option value="Security">
                                            Security
                                          </option>
                                          <option value="Governance">
                                            Governance
                                          </option>
                                          <option value="Community">
                                            Community
                                          </option>
                                          <option value="Fundraising">
                                            Fundraising
                                          </option>
                                          <option value="NFT">NFT</option>
                                          <option value="Other">Other</option>
                                        </select>
                                        <select name="budget" id="token_budget">
                                          <option selected="" value="">
                                            Budget: *
                                          </option>
                                          <option value="$5000 - $10000">
                                            $5000 - $10000
                                          </option>
                                          <option value="$10000 - $25000">
                                            $10000 - $25000
                                          </option>
                                          <option value="$25000 - $100000">
                                            $25000 - $100000
                                          </option>
                                          <option value="$100000 - $250000">
                                            $100000 - $250000
                                          </option>
                                        </select>
                                        <select
                                          name="blockchain"
                                          id="token_blockchain"
                                        >
                                          <option selected="" value="">
                                            Select Blockchain: *
                                          </option>
                                          <option value="Ethereum">
                                            Ethereum
                                          </option>
                                          <option value="Polygon">
                                            Polygon
                                          </option>
                                          <option value="BNB Chain">
                                            BNB Chain
                                          </option>
                                          <option value="Solana">Solana</option>
                                          <option value="Avalanche">
                                            Avalanche
                                          </option>
                                          <option value="Cardano">
                                            Cardano
                                          </option>
                                          <option value="Tron">Tron</option>
                                          <option value="Shardeum">
                                            Shardeum
                                          </option>
                                          <option value="Tezos">Tezos</option>
                                          <option value="Fantom">Fantom</option>
                                          <option value="Harmony">
                                            Harmony
                                          </option>
                                          <option value="Polkadot">
                                            Polkadot
                                          </option>
                                        </select>
                                        <select
                                          name="whitepaper"
                                          id="token_whitepaper"
                                        >
                                          <option selected="" value="">
                                            Do You Need a Whitepaper?: *
                                          </option>
                                          <option value="Yes">Yes</option>
                                          <option value="No">No</option>
                                        </select>
                                        <select
                                          name="campaign"
                                          id="token_campaign"
                                        >
                                          <option selected="" value="">
                                            Do You Need a Crypto Fundraising
                                            Campaign?: *
                                          </option>
                                          <option value="Yes - ICO">
                                            Yes - ICO
                                          </option>
                                          <option value="Yes - IEO">
                                            Yes - IEO
                                          </option>
                                          <option value="Yes - STO">
                                            Yes - STO
                                          </option>
                                          <option value="Yes - IDO">
                                            Yes - IDO
                                          </option>
                                          <option value="No">No</option>
                                        </select>
                                      </div>{" "}
                                      <input
                                        type="button"
                                        name="next"
                                        className="next action-button"
                                        defaultValue="Next"
                                        onClick={() => {
                                          setTab2State(1);
                                        }}
                                      />
                                    </fieldset>
                                  ) : (
                                    <fieldset>
                                      <div className="form-card">
                                        <label className="fieldlabels">
                                          Name: *
                                        </label>{" "}
                                        <input
                                          type="text"
                                          name="fname"
                                          placeholder="Name"
                                          id="client_name"
                                        />
                                        <label className="fieldlabels">
                                          Email: *
                                        </label>{" "}
                                        <input
                                          type="text"
                                          name="lname"
                                          placeholder="Email ID"
                                          id="client_email"
                                        />
                                        <label className="fieldlabels">
                                          Phone No.: *
                                        </label>{" "}
                                        <input
                                          type="text"
                                          name="phno"
                                          id="client_phone"
                                          placeholder="Phone No."
                                        />
                                        <textarea
                                          name="message"
                                          id="client_message"
                                          placeholder="Message"
                                          defaultValue={""}
                                        />
                                        <div
                                          className="g-recaptcha"
                                          data-sitekey="6LfVvuMoAAAAAM0fUXKym9Bb3qEAj5HaqIMrrMOS"
                                        >
                                          <div
                                            style={{ width: 304, height: 78 }}
                                          >
                                            <div>
                                              <iframe
                                                title="reCAPTCHA"
                                                width={304}
                                                height={78}
                                                role="presentation"
                                                name="a-f6roez9xg2t5"
                                                frameBorder={0}
                                                scrolling="no"
                                                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                                                src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LfVvuMoAAAAAM0fUXKym9Bb3qEAj5HaqIMrrMOS&co=aHR0cHM6Ly93d3cuYmxvY2tjaGFpbmFwcGZhY3RvcnkuY29tOjQ0Mw..&hl=en&v=-QbJqHfGOUB8nuVRLvzFLVed&size=normal&cb=yr3ets3e54lk"
                                              />
                                            </div>
                                            <textarea
                                              id="g-recaptcha-response-1"
                                              name="g-recaptcha-response"
                                              className="g-recaptcha-response"
                                              style={{
                                                width: 250,
                                                height: 40,
                                                border:
                                                  "1px solid rgb(193, 193, 193)",
                                                margin: "10px 25px",
                                                padding: 0,
                                                resize: "none",
                                                display: "none",
                                              }}
                                              defaultValue={""}
                                            />
                                          </div>
                                        </div>
                                        <br />
                                      </div>{" "}
                                      <input
                                        type="button"
                                        id="token-btn"
                                        name="submit"
                                        className="next action-button"
                                        defaultValue="submit"
                                      />
                                      <input
                                        type="button"
                                        name="previous"
                                        className="previous action-button-previous"
                                        defaultValue="Previous"
                                        onClick={() => {
                                          setTab2State(0);
                                        }}
                                      />
                                    </fieldset>
                                  )}
                                </form>
                              </div>
                            </div>
                          </div>
                          <div className="clearfix" />
                        </div>
                      </div>
                      <div
                        className="col-md-6 col-sm-12 col-xs-12"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          minHeight: 700,
                        }}
                      >
                        <div
                          itemScope=""
                          itemType="http://schema.org/CreativeWork"
                        >
                          <h2>
                            We Can Answer the Most Pressing Questions You Might
                            Have:
                          </h2>
                          <ul className="banner-list">
                            <li>
                              Do you want to create your own coin but need
                              clarification on how?
                            </li>
                            <li>
                              Are you unsure of your token project’s feasibility
                              as a business?
                            </li>
                            <li>
                              Do you want to know how to create your own token
                              business?
                            </li>
                            <li>
                              Want to launch crypto coin on the best
                              blockchains?
                            </li>
                            <li>
                              Looking to utilize an advancing business model for
                              the future?
                            </li>
                          </ul>
                          <p itemProp="text">
                            And everything else! We are here to assist you with
                            our industry and technology expertise to power your
                            dream cryptocurrency venture!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="space-pt bg-dark-half-md tech-padding teck">
            <div className="container">
              <div className="row justify-content-md-center text-center">
                <div className="section-title text-center ">
                  <h3 className="common_h3 text-white">Our Clients</h3>
                  {/* <hr /> */}
                  <UnderLine height="2px" background="#fff" />
                </div>
              </div>
              <div className="row mt50">
                <div className="col-sm-12 ">
                  <div
                    className="category category-grid-style-01 aos-item aos-init"
                    data-aos="fade-up"
                    data-aos-duration={500}
                  >
                    <div className="category-item aos-item ">
                      <div className="category-icon">
                        {" "}
                        <img
                          className="img-fuild"
                          //   style={{ height: 80 }}
                          width="80px"
                          height="80px"
                          src="./assets/images/polygon-matic-logo.webp"
                          alt=""
                        />{" "}
                      </div>
                    </div>
                    <div className="category-item aos-item">
                      <div className="category-icon">
                        {" "}
                        <img
                          className="img-fuild"
                          //   style={{ height: 80 }}
                          width="80px"
                          height="80px"
                          src="./assets/images/shell-logo-0.webp"
                          alt=""
                        />{" "}
                      </div>
                    </div>
                    <div className="category-item aos-item">
                      <div className="category-icon">
                        {" "}
                        <img
                          className="img-fuild"
                          //   style={{ height: 100 }}
                          width="80px"
                          height="80px"
                          src="./assets/images/radioshack-svg.webp"
                          alt=""
                        />{" "}
                      </div>
                    </div>
                    <div className="category-item aos-item">
                      <div className="category-icon">
                        {" "}
                        <img
                          className="img-fuild"
                          //   style={{ height: 100 }}
                          src="./assets/images/McDonalds-logo.webp"
                          alt=""
                        />{" "}
                      </div>
                    </div>
                    <div className="category-item aos-item">
                      <div className="category-icon">
                        {" "}
                        <img
                          className="img-fuild"
                          //   style={{ height: 100 }}
                          src="./assets/images/EconetLogo-svg.webp"
                          alt=""
                        />{" "}
                      </div>
                    </div>
                    <div className="category-item aos-item">
                      <div className="category-icon">
                        {" "}
                        <img
                          className="img-fuild"
                          //   style={{ height: 100 }}
                          src="./assets/images/LI&FUNG-svg.webp"
                          alt=""
                        />{" "}
                      </div>
                    </div>
                    <div className="category-item aos-item">
                      <div className="category-icon">
                        {" "}
                        <img
                          className="img-fuild"
                          //   style={{ height: 100 }}
                          src="./assets/images/globant-logo-dark-svg.webp"
                          alt=""
                        />{" "}
                      </div>
                    </div>
                    <div className="category-item aos-item">
                      <div className="category-icon">
                        {" "}
                        <img
                          className="img-fuild"
                          //   style={{ height: 100 }}
                          src="./assets/images/bh.webp"
                          alt=""
                        />{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <WeSpotlightedIn />
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default CreateYourOwnTokenAndCoin;
