import React from "react";
import { GrLink } from "react-icons/gr";
import { FaCheck } from "react-icons/fa";
import { GrTasks } from "react-icons/gr";
import { FaUsers } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { H2 } from "../index";
function WeSpotlightedIn() {
  return (
    <div id="get-quote" className="gray_bg">
      <section className="client">
        <div className="container clients1">
          <div className="row">
            <div className="section-title text-center col-xs-12">
              <div className="common_h3 text-dark">
                <H2 style={{ color: "#444444" }}> We Spotlighted In </H2>
              </div>
              <hr />
            </div>
            <div className="spl-logo-row">
              <img
                className="lazy spl-logo"
                data-src="./assets/images/ya.webp"
                alt="yahoo!-finance"
                width="150px"
                height="100%"
                src="./assets/images/ya.webp"
              />
              <img
                className="lazy spl-logo"
                data-src="./assets/images/mi.webp"
                alt="markets-insider"
                width="150px"
                height="100%"
                src="./assets/images/mi.webp"
              />
              <img
                className="lazy spl-logo"
                data-src="./assets/images/be.webp"
                alt="benzinga"
                width="150px"
                height="100%"
                src="./assets/images/be.webp"
              />
              <img
                className="lazy spl-logo"
                data-src="./assets/images/di.webp"
                alt="digital-journal"
                width="150px"
                height="100%"
                src="./assets/images/di.webp"
              />
              <img
                className="lazy spl-logo"
                data-src="./assets/images/ib.webp"
                alt="ibt"
                width="150px"
                height="100%"
                src="./assets/images/ib.webp"
              />
              <img
                className="lazy spl-logo"
                data-src="./assets/images/mw.webp"
                alt="market-watch"
                width="150px"
                height="100%"
                src="./assets/images/mw.webp"
              />
              <img
                className="lazy spl-logo"
                data-src="./assets/images/sa.webp"
                alt="seeking-alpha"
                width="150px"
                height="100%"
                src="./assets/images/sa.webp"
              />
              <img
                className="lazy spl-logo"
                data-src="./assets/images/si.webp"
                alt="street-insider"
                width="150px"
                height="100%"
                src="./assets/images/si.webp"
              />
              <img
                className="lazy spl-logo"
                data-src="./assets/images/c.webp"
                alt="crypto-news-btc"
                width="150px"
                height="100%"
                src="./assets/images/c.webp"
              />
            </div>
          </div>
        </div>
        <div className="container patner">
          <div className="row">
            <div className="section-title text-left">
              <h5 className="common_h3 text-dark text-center">
                We are Partnering With
              </h5>
            </div>
            <div className="col-md-12 col-sm-12 col-xs-12">
              <img
                className="lazy part-logo"
                data-src="./assets/images/certix.webp"
                alt="UAE"
                width="150px"
                height="100%"
                src="./assets/images/certix.webp"
              />
              <img
                style={{ background: "#000", padding: 3 }}
                className="lazy part-logo"
                data-src="./assets/images/xt.webp"
                alt="UAE"
                width="150px"
                height="100%"
                src="./assets/images/xt.webp"
              />
              <img
                className="lazy part-logo"
                data-src="./assets/images/bitmart.webp"
                alt="UAE"
                width="150px"
                height="100%"
                src="./assets/images/bitmart.webp"
              />
            </div>
            <div className="col-md-12 col-sm-12 col-xs-12 mt20">
              <img
                className="lazy part-logo"
                data-src="./assets/images/binance-logo.webp"
                alt="UAE"
                width="150px"
                height="100%"
                src="./assets/images/binance-logo.webp"
              />
              <img
                className="lazy part-logo"
                data-src="./assets/images/polygon-logo.webp"
                alt="UAE"
                width="150px"
                height="100%"
                src="./assets/images/polygon-logo.webp"
              />
              <img
                className="lazy part-logo"
                data-src="./assets/images/avalanche-logo.webp"
                alt="UAE"
                width="150px"
                height="100%"
                src="./assets/images/avalanche-logo.webp"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="common_newsletter">
        <div className="newsletter_videos">
          <div className="newsletter_videos_numbers">
            <div className="section-title text-center">
              <h5 className="common_h3">
                History is Boring! But numbers aren't!
              </h5>
              <hr />
            </div>
            <ul className="ul-style-4 list_growth m-t-50 history_ul">
              <li>
                {/* <i className="fa fa-link" aria-hidden="true" /> */}
                <span>
                  <GrLink />
                </span>
                Total Blockchain Experience <strong>10+ Years</strong>
              </li>
              <li>
                <span>
                  <FaCheck />
                </span>
                Projects Completed <strong>400</strong>
              </li>
              <li>
                <span>
                  <GrTasks />
                </span>{" "}
                Projects in progress <strong>50+</strong>
              </li>
              <li>
                <span>
                  <FaUsers />
                </span>{" "}
                Team <strong>500+</strong>
              </li>
              <li>
                <span>
                  <FaUsers />
                </span>{" "}
                Blockchain Experts <strong>150+</strong>
              </li>
            </ul>
          </div>
          <div className="newsletter_videos_videos">
            <a
              className="thumb fancybox-media1"
              allow-navigation=""
              href="https://youtu.be/DLlkNdIikLU"
              data-fancybox-group="gallery"
              title="ICO Development"
              rel="media-gallery"
            >
              <img
                data-src="./assets/images/video-bg.webp"
                className="lazy"
                alt="ICO Development"
                width="100%"
                style={{ position: "relative" }}
                src="./assets/images/video-bg.webp"
              />
              <span className="play" />
            </a>
          </div>
        </div>
        <div
          id="newsletter-form-sec"
          style={{ background: "#fff", padding: "70px 0px" }}
        >
          <div className="container">
            <div className="col-md-12">
              <div className="">
                <h5 className="section-title underline text-center">
                  Schedule A Call With Our Experts
                </h5>
                <p className="text-center">
                  Got a Web3 project in mind? We are excited to listen to your
                  visions!
                </p>
              </div>
            </div>
            <div className="clearfix">
              <br />
              <br />
            </div>
            <div style={{ background: "#022d62", borderRadius: 7 }}>
              <div className="col-md-5">
                <div className="contact-content">
                  <p>
                    Turn your ideas into reality with our expertise in web3
                    technology! Reach out to us today and discuss your project
                    or ask your queries to our proficient web3 experts.
                  </p>
                  <hr />
                  <a rel="nofollow" href="mailto:info@blockchainappfactory.com">
                    {/* <i className="fa fa-envelope" aria-hidden="true" title="Mail" />{" "} */}
                    <FaEnvelope />
                    &nbsp; info@blockchainappfactory.com
                  </a>
                  <a href="tel:+916382665366">
                    <i className="fa fa-phone-square" aria-hidden="true" />{" "}
                    &nbsp; +91 63826 65366
                  </a>
                </div>
              </div>
              <div className="col-md-7 pad-40-20">
                <form className="" id="mailForm_common" method="post">
                  <input type="hidden" name="page" defaultValue="contactus" />
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      className="form-control input-style-2"
                      id="name_common"
                      name="name"
                      placeholder="Full Name"
                      required=""
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control input-style-2"
                      id="email_common"
                      name="email"
                      placeholder="Email address"
                      required=""
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="subject">Phone</label>
                    <div className="intl-tel-input allow-dropdown">
                      <div className="flag-container">
                        <div
                          className="selected-flag"
                          tabIndex={0}
                          title="United States: +1"
                        >
                          <div className="iti-flag us" />
                          <div className="iti-arrow" />
                        </div>
                      </div>
                      <input
                        id="phone_common"
                        name="phone_dummy"
                        type="text"
                        required=""
                        autoComplete="off"
                        placeholder="(201) 555-0123"
                      />
                    </div>
                    <input
                      type="hidden"
                      name="phone"
                      id="phone_newsletter"
                      defaultValue=""
                    />
                    <input
                      type="hidden"
                      name="url"
                      id="url"
                      defaultValue="https://www.blockchainappfactory.com/"
                    />
                    <input
                      type="hidden"
                      defaultValue="202.47.39.79"
                      name="IP"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="skype">Your Skype ID</label>
                    <input
                      type="text"
                      className="form-control input-style-2"
                      id="skype_common"
                      name="skype"
                      placeholder="Skype ID"
                      required=""
                    />
                  </div>
                  <div className="form-group newsletter-btns text-left col-md-12 mb10">
                    <a
                      rel="nofollow"
                      href="https://join.skype.com/invite/c0fHGB5VrAXm"
                      target="_blank"
                      className="home-talk-experts space-right"
                      style={{ borderRadius: 30 }}
                    >
                      Connect with Skype
                    </a>{" "}
                    <span className="or" style={{ color: "#fff" }}>
                      (OR)
                    </span>
                    <a
                      target="_blank"
                      rel="nofollow"
                      href="https://api.whatsapp.com/send?l=en&text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&phone=916382665366"
                      className="home-talk-experts space-right"
                      style={{ borderRadius: 30 }}
                    >
                      Connect with Whatsapp
                    </a>
                  </div>
                  <div className="form-group col-md-12">
                    <label htmlFor="message">Message</label>
                    <textarea
                      className="form-control input-style-2"
                      id="textarea_common"
                      name="message"
                      placeholder="Enter your message.."
                      required=""
                      rows={3}
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <div
                      className="g-recaptcha"
                      data-sitekey="6LdmU-coAAAAANsYjKfjqRl9xG1NTV4f2aVzlthf"
                    >
                      <div style={{ width: 304, height: 78 }}>
                        <div>
                          <iframe
                            title="reCAPTCHA"
                            width={304}
                            height={78}
                            role="presentation"
                            name="a-e5ejhdmlt92j"
                            frameBorder={0}
                            scrolling="no"
                            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                            src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LdmU-coAAAAANsYjKfjqRl9xG1NTV4f2aVzlthf&co=aHR0cHM6Ly93d3cuYmxvY2tjaGFpbmFwcGZhY3RvcnkuY29tOjQ0Mw..&hl=en&v=-QbJqHfGOUB8nuVRLvzFLVed&size=normal&cb=r6vmaqqauxf"
                          />
                        </div>
                        <textarea
                          id="g-recaptcha-response"
                          name="g-recaptcha-response"
                          className="g-recaptcha-response"
                          style={{
                            width: 250,
                            height: 40,
                            border: "1px solid rgb(193, 193, 193)",
                            margin: "10px 25px",
                            padding: 0,
                            resize: "none",
                            display: "none",
                          }}
                          defaultValue={""}
                        />
                      </div>
                      <iframe style={{ display: "none" }} />
                    </div>
                    <br />
                    <button type="button" className="common_send_btn">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <div className="clearfix" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeSpotlightedIn;
