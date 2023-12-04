import React from 'react'

function Sec1() {
  return (
    <div className="main" style={{ background: "#020941" }}>
  <div className="flex-reverse">
    <div className="banner my_banner " style={{ height: "700px!important" , backgroundImage : ' url(./assets/images/banner-bg1.webp)'}}>
      <div id="large-header" className="large-header"></div>
      <div className="banner_content">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12 text-left">
              <div className="contentall">
                <div className="ovr">
                  <div itemScope="" itemType="http://schema.org/CreativeWork">
                    <div className="ban_tirt">
                      <span style={{ fontWeight: "normal", fontSize: 19 }}>
                        Create Your New Cryptocurrency with the Best
                      </span>
                      <h1 itemProp="name">
                        Cryptocurrency Development Company
                      </h1>{" "}
                    </div>
                    <p itemProp="text">
                      Become a renowned crypto business with our cryptocurrency
                      development company. Be it forming your tokenomics or
                      letting your coin known to the world, our experts bring
                      the best game to unleash your cryptocurrency in style.
                      Make massive strides as a crypto project with our domain
                      expertise.
                    </p>
                    <div className="txt">
                      <a
                        href="https://www.blockchainappfactory.com/create-your-own-token-and-coin"
                        rel="nofollow"
                        className="nec-btn"
                        id="cyz"
                        style={{
                          borderRadius: "30px",
                          textTransform: "capitalize"
                        }}
                      >
                        Create your own coin
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-sm-12 col-xs-12 text-center"
            >
              {" "}
              <img
                className="magic"
                src="./assets/images/banner-img1.webp"
                alt="Crypto Development Company"
                title="Crypto Development Company"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  )
}

export default Sec1