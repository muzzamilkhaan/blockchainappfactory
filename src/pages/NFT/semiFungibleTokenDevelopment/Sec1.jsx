import React from "react";
import { SecOne } from "./semiFungibleTokenDevelopmentComp";

const Sec1 = () => {
  return (
    <SecOne>
      <div className="banner my_banner">
        <div className="banner-overlay"></div>
        <div className="banner_content">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="contentall">
                  <div className="ban_tirt">
                    <h1>Semi-fungible Token Development Solutions</h1>{" "}
                  </div>
                  <p>
                    Avail the best of both worlds through semi-fungible tokens,
                    an emerging concept to better leverage blockchain technology
                    for real-world applications.
                  </p>
                  <div className="txt">
                    <a
                      href="contact"
                      rel="nofollow"
                      className="nec-btn"
                      id="cyz"
                    //   style="border-radius: 30px !important; text-transform: capitalize !important;"
                    >
                      Connect with our experts
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12"></div>
            </div>
          </div>
        </div>
      </div>
    </SecOne>
  );
};

export default Sec1;
