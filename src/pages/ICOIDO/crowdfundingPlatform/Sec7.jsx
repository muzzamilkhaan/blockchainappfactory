import React from "react";

const Sec7 = () => {
  return (
    <div id="Equity" className="common_spacing">
      <div className="container">
        <div className="row">
        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 text-center pull-left">
            {" "}
            <img
              alt="Private Equity Crowdfunding Platform"
              src="./assets/images/sec-side41.svg"
              width={360}
              title="Private Equity Crowdfunding Platform"
            />{" "}
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 pull-right">
            <div className="section-title">
              <h2 className="section-title underline mb20 font-wei">
                Private Equity Crowdfunding Platform Features
              </h2>{" "}
            </div>
            <div className="real-estate">
              <div className="icon">
                {" "}
                <img src="/images/icons/management.webp" alt="" />{" "}
              </div>
              <div className="content">
                <h3>Performance Evaluation</h3>
                <p>
                  Assess the company’s performance with sophisticated analytics
                  for prospective investors for better due -diligence.
                </p>
              </div>
            </div>
            <div className="real-estate">
              <div className="icon">
                {" "}
                <img src="/images/icons/funds.webp" alt="" />{" "}
              </div>
              <div className="content">
                <h3>Fund Management and Accounting</h3>
                <p>
                  Monitor transactions with a fully functional ledger solution
                  with internal investor reporting, capital calls and drawdowns.
                </p>
              </div>
            </div>
            <div className="real-estate">
              <div className="icon">
                {" "}
                <img src="/images/icons/valuation.webp" alt="" />{" "}
              </div>
              <div className="content">
                <h3>Valuations</h3>
                <p>
                  Build advanced valuation models by tracking the valuation
                  process which includes assumptions and valuation results.{" "}
                </p>
              </div>
            </div>
            <div className="real-estate">
              <div className="icon">
                {" "}
                <img src="/images/icons/agreement.webp" alt="" />{" "}
              </div>
              <div className="content">
                <h3>Deal Sourcing</h3>
                <p>
                  Deal-sourcing activities at one streamline location for deal
                  information include financial performance to manage due
                  diligence processes.
                </p>
              </div>
            </div>
            <div className="real-estate">
              <div className="icon">
                {" "}
                <img src="/images/icons/investor.webp" alt="" />{" "}
              </div>
              <div className="content">
                <h3>Investor Communications</h3>
                <p>
                  All your investors receive information including financial
                  reporting in a secure data rooms and interactive dashboards.
                </p>
              </div>
            </div>
          </div>
        
        </div>
        <div className="connect-with text-center mt20">
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
  );
};

export default Sec7;
