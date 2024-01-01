import React, { useState } from "react";
import { SecOne } from "./nftMintingPlatformDevelopmentComp";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Sec1 = () => {
  const [phoneValue, setPhoneValue] = useState("");

  const handlePhoneInput = (value, data) => {
    // The selected country code is available in the `data` object
    console.log(data);

    // Update the state with the phone number
    setPhoneValue(value);
  };
  return (
    <SecOne>
      <div className="banner my_banner">
        <div className="banner-overlay"></div>
        <div className="banner_content">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-6 col-sm-6 col-xs-12 text-left">
                <div className="contentall">
                  <div className="ovr">
                    <div className="ban_tirt">
                      <h1>NFT minting platform development</h1>{" "}
                    </div>
                    <p>
                      Excel your crypto investment by minting a unique NFT with
                      a digital representation of your unique collectible.
                    </p>
                    <div className="cta_mine">
                      <a
                        rel="nofollow"
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
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 col-sm-6 col-xs-12 text-center banner_form">
                <div className="ban_form">
                  <h4>Talk to our experts</h4>
                  <form className="" id="banForm_common" method="post">
                    <input type="hidden" name="page" defaultValue="contactus" />
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        className="form-control input-style-2"
                        id="name_common"
                        name="name"
                        placeholder="Full Name"
                        required=""
                      />{" "}
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control input-style-2"
                        id="email_common"
                        name="email"
                        placeholder="Email address"
                        required=""
                      />{" "}
                    </div>
                    <div className="form-group">    
                      <PhoneInput
                        country={"us"} // Default country
                        value={phoneValue}
                        onChange={handlePhoneInput}
                        // inputStyle={{padding:"20px 191px"}}
                        inputClass="Phone-custom"
                        inputProps={{
                          name: "phone_dummy",
                          id: "phone_banner",
                          required: true,
                          autoComplete: "off",
                          placeholder: "(201) 555-0123",
                        }}
                      />
                      {/* <label htmlFor="subject">Phone</label>
                      <div className="intl-tel-input allow-dropdown"> */}

                      {/* <div className="flag-container">
                          <div
                            className="selected-flag"
                            tabIndex={0}
                            title="United States: +1"
                          >
                            <div className="iti-flag us" />
                            <div className="iti-arrow" />
                          </div>
                        </div> */}
                      {/* <input
                          id="phone_banner"
                          name="phone_dummy"
                          type="text"
                          oninput="if (!window.__cfRLUnblockHandlers) return false; this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
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
                        defaultValue="https://www.blockchainappfactory.com/nft-minting-platform-development"
                      />
                      <input
                        type="hidden"
                        defaultValue="203.212.30.33"
                        name="IP"
                      />{" "} */}
                    </div>
                    <div className="form-group">
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
                    <div className="form-group text-center submit_btn_b">
                      <button type="button" className="common_send_btn">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecOne>
  );
};

export default Sec1;
