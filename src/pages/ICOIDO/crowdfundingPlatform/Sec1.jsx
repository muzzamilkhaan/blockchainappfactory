import React from "react";

const Sec1 = () => {
  return (
    <div className="banner">
      <div id="large-header" className="large-header">
        {" "}
        <img
          alt="Art Token Development"
          src="./assets/images/banner-bg20.webp"
        />{" "}
      </div>
      <div className="banner_content">
        <div className="container">
          <div className="contentall">
            <h1>White Label Crowdfunding Platform Development</h1>
            <p className="white mb30">
              Hire the best crowdfunding platform developers to build robust
              solutions that integrate the best market practices. <br /> With
              Web 3.0 a reality, ready-made crowdfunding platforms now become
              distributed to the world.
            </p>
            <style
              type="text/css"
              dangerouslySetInnerHTML={{
                __html:
                  "\n.nec-btn{\n    position: relative !important;\n    color:#fff !important;\n    border-radius:30px !important;\n    font-size: 11px;\n    text-transform: uppercase !important;\n    transform: scale(1.1,1.1) !important;\n    transition:all 0.3s ease-out 0s !important;\n    background: #47b475 !important;\n}\n.nec-btn:hover{\n    transform: scale(1,1) !important;\n    color:#fff !important;\n    background:#00a9e2!important;\n}\na.nectar-button.medium.regular.accent-color.regular-button.nec-btn {\n    margin-bottom: 15px!important;\n    display: inline-block;\n    margin-right: 26px!important;\n}\n.contentall a, a.home-talk-experts{\n\tpadding: 10px 20px !important;\n}\n",
              }}
            />
            <div className="cta_mine">
              <a
                rel="nofollow"
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
                href="#newsletter-form-sec"
                className="nectar-button medium regular accent-color regular-button nec-btn"
              >
                <span>Talk with our Experts</span>
              </a>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec1;
