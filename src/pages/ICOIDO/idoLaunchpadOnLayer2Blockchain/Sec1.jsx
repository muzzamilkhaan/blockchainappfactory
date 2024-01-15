import React from 'react'

const Sec1 = () => {
  return (
    <div className="banner my_banner">
    <div className="banner_content">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-xs-12 text-left">
            <div className="contentall">
              <div className="ovr">
                <div itemScope="" itemType="http://schema.org/CreativeWork">
                  <div className="ban_tirt">
                    <h1 itemProp="name">
                      IDO Launchpad Development on a Layer-2 Blockchain
                    </h1>{" "}
                  </div>
                  <p itemProp="text">
                    Boost your Web3 business prospects with IDO launchpad
                    development on a layer-2 blockchain. Redefine how new-gen
                    projects are launched to the market using high-efficiency
                    layer-2 blockchain networks.
                  </p>
                  <div className="txt">
                    {" "}
                    <a
                      href="#newsletter-form-sec"
                      className="nec-btn"
                      id="cyz"
                      style={{ borderRadius: "30px !important" }}
                    >
                      Talk With Our Expert
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12 text-center">
            {" "}
            <img
              className="magic"
              src="./assets/images/banner-side4.webp"
              alt=" "
              title=" "
            />{" "}
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Sec1
