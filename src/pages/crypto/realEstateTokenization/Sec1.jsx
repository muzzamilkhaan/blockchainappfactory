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
                  <div className="ban_tirt" style={{ paddingTop: 80 , margin: 0}}>
                    <h1 itemProp="name">Real Estate Tokenization</h1>
                    <span
                      style={{
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: 26,
                        lineHeight: "1.3"
                      }}
                    >
                      Power Up Your Real Estate Investments
                    </span>
                  </div>
                  <p itemProp="text">
                    Embrace the power of fractional ownership and trade property
                    tokens effortlessly with our expert real estate tokenization
                    solutions.
                  </p>
                  <div className="sub_ff" style={{ marginTop: 30 }}>
                    <i className="fa fa-check" aria-hidden="true" />{" "}
                    <strong className="dev">
                      <span className="text-white">Simplifies Ownership </span>
                    </strong>
                    <i className="fa fa-check" aria-hidden="true" />{" "}
                    <strong className="dev">
                      <span className="text-white">Enhances Liquidity</span>
                    </strong>
                    <i className="fa fa-check" aria-hidden="true" />{" "}
                    <strong className="dev">
                      <span className="text-white">Extends Accessibility</span>
                    </strong>
                  </div>
                  <div className="txt">
                    &nbsp;&nbsp;
                    <a
                      href="#newsletter-form-sec"
                      className="nec-btn"
                      id="cyz"
                      style={{ borderRadius: "30px !important" }}
                    >
                      Talk With Our Experts
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 hidden-sm col-xs-12 text-center">
            {" "}
            <img
              className="magic"
              src="./assets/images/banner-img14.webp"
              alt=" "
              title=" "
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