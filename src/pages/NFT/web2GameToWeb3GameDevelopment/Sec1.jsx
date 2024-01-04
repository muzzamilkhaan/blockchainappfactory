import React from "react";
import { SecOne } from "./web2GameToWeb3GameDevelopmentComp";

const Sec1 = () => {
  return (
    <SecOne>
      <div className="banner my_banner">
        <div className="banner-overlay"></div>
        <div className="banner_content">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-sm-12 col-xs-12 text-left">
                <div className="contentall">
                  <div className="ovr">
                    <div>
                      <div className="ban_tirt">
                        <h1>Web 2.0 Game into Web 3.0 Game Development</h1>{" "}
                      </div>
                      <p>
                        It's time to level up! Upgrade your web 2.0 games to web
                        3.0 games and give players a chance to monetize their
                        gameplay through our web 3.0 game development services.
                      </p>
                      <div className="txt">
                        {" "}
                        <a
                          href="#newsletter-form-sec"
                          className="nec-btn"
                          id="cyz"
                          //   style="border-radius: 30px !important;"
                        >
                          Talk With Our Expert
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-sm-12 col-xs-12 text-center">
                {" "}
                <img
                  className="magic"
                  src="https://www.blockchainappfactory.com/images/web2-game-to-web3-game-development/banner-img.webp"
                  alt=" "
                  title=" "
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecOne>
  );
};

export default Sec1;
