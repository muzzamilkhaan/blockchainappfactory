import React from "react";

const Sec1 = () => {
  return (
    <div className="main">
      <div className="banner my_banner">
        <div className="banner-overlay" />
        <div className="banner_content">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-xs-12 text-left">
                <div className="contentall">
                  <div className="contentall_text">
                    <div className="ban_tirt">
                      <span style={{ fontWeight: "normal", fontSize: 19 }}>
                        Create an Executive STO Campaign with Our
                      </span>
                      <h1 itemProp="name">
                        {" "}
                        Security Token Development Company
                      </h1>{" "}
                    </div>{" "}
                    <span className="text_color"> </span>
                    <p itemProp="text">
                      Create crypto tokens representing securities for
                      brand-building and crowdfunding with our renowned security
                      token development company. Tap into our excellence in STO
                      development to elevate your crypto venture to the next
                      level!{" "}
                    </p>
                  </div>
                  <div className="txt">
                    <div className="txt">
                      <a
                        href="https://www.blockchainappfactory.com/create-your-own-token-and-coin"
                        rel="nofollow"
                        className="nec-btn"
                        id="cyz"
                        style={{
                          borderRadius: "30px ",
                          textTransform: "capitalize ",
                          marginLeft: 0,
                        }}
                      >
                        Create your own token
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 text-center">
                <img src="./assets/images/banner-side2.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec1;
