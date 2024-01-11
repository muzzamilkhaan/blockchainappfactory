import React from "react";
import { UnderLine } from "../../../components";

const Sec2 = () => {
  return (
    <section className="common_spacing overview gray_bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h2 className="sec_title text-center">Initial Exchange Offering</h2>
            {/* <hr /> */}
            <UnderLine background="#47b475"/>
            <div className="desc">
              <p>
                Initial Exchange Offering (IEO) is a fundraising mechanism where
                the issuers create tokens for their projects and raise funds
                using the user base of the exchange. IEOs are an agreement
                between the fundraising company and crypto-exchanges like IDAX,
                LATokens &amp; Binance, with some pre-conditions.
              </p>
              <p>
                Fundraising through IEO is considered safer by the investors
                since the crypto-exchanges would ensure due diligence before
                accepting any project. Initial Exchange Offering is a new
                booming trend and has the potential to change the way we look at
                token-based fundraising. This fundraising option gives the
                investors the confidence of liquidity while giving the projects
                a ready-made user base to target their marketing efforts. Also,
                it reduces the burden of the KYC/AML process on the issuers as
                the exchanges take the responsibility of verifying investors and
                projects.
              </p>
              <p>
                At Blockchain App Factory, we have the right kind of experience,
                team, and expertise in developing and marketing tokens for your
                Initial Exchange Offering projects. We can get you to start your
                crowdfunding campaign instantly through our strategic
                partnerships with leading Cryptocurrency Exchanges.
              </p>
              <div className="text-center">
                <style
                  type="text/css"
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n.nec-btn{\n     position: relative !important;\n    color:#fff !important;\n    border-radius:30px !important;\n    font-size: 11px;\n    text-transform: uppercase !important;\n    transform: scale(1.1,1.1) !important;\n    transition:all 0.3s ease-out 0s !important;\n    background: #47b475 !important;\n}\n.nec-btn:hover{\n    transform: scale(1,1) !important;\n    color:#fff !important;\n    background:#00a9e2!important;\n}\na.nectar-button.medium.regular.accent-color.regular-button.nec-btn {\n    margin-bottom: 15px!important;\n    display: inline-block;\n    margin-right: 26px!important;\n}\n.contentall a, a.home-talk-experts{\n    padding: 10px 20px !important;\n}\n",
                  }}
                />
                <div className="cta_mine">
                  <a
                    className="nectar-button medium regular accent-color regular-button nec-btn"
                    target="_blank"
                    href="https://api.whatsapp.com/send?l=en&text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&phone=916382665366"
                    data-color-override="false"
                    data-hover-color-override="false"
                    data-hover-text-color-override="#fff"
                  >
                    <span>Connect with Whatsapp</span>
                  </a>
                  <a
                    href="https://t.me/blockchain_appfactory"
                    target="_blank"
                    className="nectar-button medium regular accent-color regular-button nec-btn"
                  >
                    <span>Connect with Telegram</span>
                  </a>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec2;
