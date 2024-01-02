import React from "react";
import { SecFour } from "./socialTokenDevelopmentPlatformComp";
import { H2 } from "../../../components";

const Sec4 = () => {
  return (
    <SecFour>
      <section className="product-features package_includes common_spacing">
        <div className="container">
          <div className="row">
            <div className="section-title text-center">
              <div className="sec_tit mb20">
                <div className="section-title underline mb20">
                  <H2 style={{ color: "#2b2c2d" }}>
                    {" "}
                    Functions of social tokens{" "}
                  </H2>
                </div>
              </div>
            </div>
            <div className="col-md-12 text-center">
              <div className="col-lg-3">
                <div className="Package_list">
                  <img src="https://www.blockchainappfactory.com/images/sub/icon/salary.webp" />
                  <span>Income share agreement</span>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="Package_list">
                  <img src="https://www.blockchainappfactory.com/images/sub/icon/online-community.webp" />
                  <span>Control over community</span>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="Package_list">
                  <img src="https://www.blockchainappfactory.com/images/sub/icon/box.webp" />
                  <span>Service distribution</span>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="Package_list">
                  <img src="https://www.blockchainappfactory.com/images/sub/icon/assets.webp" />
                  <span>Backed by assets and NFTs</span>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="Package_list">
                  <img src="https://www.blockchainappfactory.com/images/sub/icon/representation.webp" />
                  <span>Self Representation</span>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="Package_list">
                  <img src="https://www.blockchainappfactory.com/images/sub/icon/working.webp" />
                  <span>Representation of their work and community</span>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="Package_list">
                  <img src="https://www.blockchainappfactory.com/images/sub/icon/virtual.webp" />
                  <span>Acts as a digital currency</span>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="Package_list">
                  <img src="https://www.blockchainappfactory.com/images/sub/icon/lock.webp" />
                  <span>Access to the community</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SecFour>
  );
};

export default Sec4;
