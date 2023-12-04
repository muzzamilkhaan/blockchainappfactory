import React from 'react'

function Sec1() {
  return (
    <div className="main">
      <div className="banner my_banner">
        <div className="banner-overlay" />
        <div className="banner_content">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 col-xs-12 text-left">
                <div className="contentall">
                  <div className="ovr">
                    <div itemScope="" itemType="http://schema.org/CreativeWork">
                      <div className="ban_tirt">
                        <h1 itemProp="name">
                          Decentralized Crypto Prediction Market Development
                        </h1>{" "}
                      </div>
                      <p itemProp="text">
                        Explore the world of Decentralized Prediction/Opinion Market
                        Development with our cutting-edge platform. Unlock a range
                        of extraordinary features that elevate the art of predicting
                        future events.{" "}
                      </p>
                      <div className="txt">
                        <a
                          href="#newsletter-form-sec"
                          className="nec-btn"
                          id="cyz"
                          style={{ borderRadius:"30px" }}
                        >
                          Talk To Our Experts
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12 text-center">
                {" "}
                <img
                  className="magic"
                  src="./assets/images/banner-img19.webp"
                  alt="Crypto Prediction Market Platform"
                  title="Crypto Prediction Market Platform"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Sec1