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
                        <h1 itemProp="name">SRC-20 Token Development Company </h1>{" "}
                      </div>
                      <p itemProp="text">
                        Stay with the current trends with our exquisite SRC-20 token
                        development services. By doing so, be part of the widening
                        Bitcoin ecosystem by creating SRC-20 tokens that live
                        on-chain forever.
                      </p>
                      <div className="txt">
                        <a
                          href="#newsletter-form-sec"
                          className="nec-btn"
                          id="cyz"
                          style={{ borderRadius: "30px !important" }}
                        >
                          Discuss your Project
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
                  src="./assets/images/banner-img.webp"
                  alt="SRC-20 Token Development"
                  title="SRC-20 Token Development"
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