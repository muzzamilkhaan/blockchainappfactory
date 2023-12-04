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
                <div className="ban_tirt">
                  <h1>
                    {" "}
                    Crypto ICO Marketing -Launch Your ICO Into The Future Of
                    Success
                  </h1>{" "}
                </div>
                <p>
                  Work with the world’s best ICO marketing agency to promote your
                  ICO project!
                </p>
                <div className="cta_mine">
                  <a
                    className="nectar-button medium regular accent-color regular-button nec-btn"
                    href="#pricing-tabs"
                    data-color-override="false"
                    data-hover-color-override="false"
                    data-hover-text-color-override="#fff"
                  >
                    <span>View Pricing</span>
                  </a>
                  <a
                    href="#newsletter-form-sec"
                    className="nectar-button medium regular accent-color regular-button nec-btn"
                  >
                    <span>Talk with our Experts</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 text-center">
              {" "}
              <img
                src="./assets/images/ico-marketing-banner.webp"
                style={{ marginTop: 40 }}
                alt="ICO Marketing"
                title="ICO Marketing"
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  

  )
}

export default Sec1