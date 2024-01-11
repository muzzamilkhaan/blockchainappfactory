import React from 'react'

const Sec4 = () => {
  return (
    <div id="ret-inv" className="gray_bg common_spacing">
  <div className="container">
    <div className="section-title text-center mb30">
      <h2 className="font-wei">Types of Crowdfunding Platform</h2>
      <hr />
      <p className="larg-para">
        Our solutions team can design a crowdfunding platform tailored to meet
        any of your asset classes, investor types or any other requirement you
        may have.
      </p>
    </div>
    <div className="row">
      <div className="col-md-12 types text-center">
        <h2 className="font-wei">Asset Type</h2>
        <ul className="type-list asset">
          <li className="equal-height feature-box-3" style={{ minHeight: 163 }}>
            <a className="Real_Estate">
              <div className="icon">
                {" "}
                <img src="./assets/images/icon-152.svg" />{" "}
              </div>
              <h3 className="feature-title">
                Real Estate Investment Management Software
              </h3>
            </a>
          </li>
          <li className="equal-height feature-box-3" style={{ minHeight: 163 }}>
            <a className="Equity">
              <div className="icon">
                {" "}
                <img src="./assets/images/icon-153.svg" />{" "}
              </div>
              <h3 className="feature-title">
                White-labelled Private Equity Platforms
              </h3>
            </a>
          </li>
          <li className="equal-height feature-box-3" style={{ minHeight: 163 }}>
            <a className="Debt">
              <div className="icon">
                {" "}
                <img src="./assets/images/icon-154.svg" />{" "}
              </div>
              <h3 className="feature-title">
                Debt Crowdfunding <br />
                Platform
              </h3>
            </a>
          </li>
          <li className="equal-height feature-box-3" style={{ minHeight: 163 }}>
            <a className="Infrastructure">
              <div className="icon">
                {" "}
                <img src="./assets/images/icon-155.svg" />{" "}
              </div>
              <h3 className="feature-title">
                White Label Crowdfunding Platform for Infrastructure
              </h3>
            </a>
          </li>
        </ul>
      </div>
      <div className="col-md-12 types text-center">
        <h2 className="font-wei">Investment Type</h2>
        <ul className="type-list investment">
          <li className="equal-height feature-box-3" style={{ minHeight: 137 }}>
            <div className="icon">
              {" "}
              <img src="./assets/images/icon-151.svg" />{" "}
            </div>
            <h5 className="feature-title">LP Shares</h5>{" "}
          </li>
          <li className="equal-height feature-box-3" style={{ minHeight: 137 }}>
            <div className="icon">
              {" "}
              <img src="./assets/images/icon-156.svg" />{" "}
            </div>
            <h5 className="feature-title">General Shares</h5>{" "}
          </li>
          <li className="equal-height feature-box-3" style={{ minHeight: 137 }}>
            <div className="icon">
              {" "}
              <img src="./assets/images/icon-157.svg" />{" "}
            </div>
            <h5 className="feature-title">Alternative Assets</h5>{" "}
          </li>
          <li className="equal-height feature-box-3" style={{ minHeight: 137 }}>
            <div className="icon">
              {" "}
              <img src="./assets/images/icon-158.svg" />{" "}
            </div>
            <h5 className="feature-title">Venture Capital</h5>{" "}
          </li>
          <li className="equal-height feature-box-3" style={{}}>
            <div className="icon">
              {" "}
              <img src="./assets/images/icon-159.svg" />{" "}
            </div>
            <h5 className="feature-title">Multi-manager Investment</h5>{" "}
          </li>
        </ul>
      </div>
    </div>
    <div className="connect-with text-center mt20">
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\n.nec-btn{\n     position: relative !important;\n    color:#fff !important;\n    border-radius:30px !important;\n    font-size: 11px;\n    text-transform: uppercase !important;\n    transform: scale(1.1,1.1) !important;\n    transition:all 0.3s ease-out 0s !important;\n    background: #47b475 !important;\n}\n.nec-btn:hover{\n    transform: scale(1,1) !important;\n    color:#fff !important;\n    background:#00a9e2!important;\n}\na.nectar-button.medium.regular.accent-color.regular-button.nec-btn {\n    margin-bottom: 15px!important;\n    display: inline-block;\n    margin-right: 26px!important;\n}\n.contentall a, a.home-talk-experts{\n    padding: 10px 20px !important;\n}\n"
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

  )
}

export default Sec4
