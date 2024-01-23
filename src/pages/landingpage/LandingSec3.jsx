import React, { useState } from "react";
import UnderLine from "../../components/UnderLine";
import LandingSec5 from "./LandingSec5";
import HorizontalScroll from "../../components/shared/HorizontalScrollbar/HorizontalScrollbar";
import CustomImgSlider from "../../components/shared/customImgSlider/customImgSlider";

function LandingSec3() {
  const [isMinimized, setMinimized] = useState({ index: "", show: 0 });
  const handleMinimizeClick = (indexx, showw) => {
    if (isMinimized.index === indexx && isMinimized.show === showw) {
      setMinimized({ index: "", show: 0 });
    } else {
      setMinimized({ index: indexx, show: showw });
    }
    // console.log(indexx, "indexx", showw, "showw");
  };
  return (
    <section className="space-pt-1 bg-dark-half-md tech-padding teck-1">
      <div className="container-fluid">
        <div className="row home-sec-3">
          <div className="section-title text-center col-xs-12 mb20">
            <h3 className="common_h3 text-white">Our Clients</h3>
            {/* <hr />{" "} */}
            <UnderLine height="2px" background="#fff" />
          </div>
          {/* <div className="col-md-3 col-sm-6 col-xs-6 mob-p-lr-6">
            <div className="boxy_client">
              <img
                className="img-fuild lazy"
                data-src="./assets/images/polygon-matic-logo.webp"
                width="74px"
                height="66px"
                alt=""
                src="./assets/images/artizia-sec-3.png"
              />
              <p className="text-center" style={{ fontSize: 12 }}>
                Our partnership with Polygon helps provide network support for
                client projects.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-6 mob-p-lr-6">
            <div className="boxy_client">
              <img
                className="img-fuild lazy"
                data-src="./assets/images/shell-logo-0.webp"
                width="134px"
                height="45px"
                alt=""
                src="./assets/images/shell-sec-3.png"
              />
              <p className="text-center" style={{ fontSize: 12 }}>
                Our experts offered development support for Shell’s digital
                solutions.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-6 mob-p-lr-6">
            <div className="boxy_client">
              <img
                className="img-fuild lazy"
                data-src="./assets/images/radioshack-svg.webp"
                width="182px"
                height="35px"
                alt=""
                src="./assets/images/Amigosound-white-logo.svg"
              />
              <p className="text-center" style={{ fontSize: 12 }}>
                We developed an NFT marketplace selling various digital assets
                for the firm.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-6 mob-p-lr-6">
            <div className="boxy_client">
              <img
                className="img-fuild lazy"
                data-src="./assets/images/McDonalds-logo.webp"
                width="65px"
                height="37px"
                alt=""
                src="./assets/images/img-client-sec-3.png"
              />
              <p className="text-center" style={{ fontSize: 12 }}>
                We built an app to automate supply chain solutions between
                various end users.
              </p>
            </div>
          </div> */}
          {/* ---------------------------IMGSLIDER----------------------------- */}
          <CustomImgSlider />
          {/* <div className="connect-with d-flex mt-30">
            <a
              className="nectar-button medium regular accent-color regular-button"
              style={{
                margin: "40px 10px 10px",
                visibility: "visible",
                borderRadius: "30px",
                background: "#30D4D1",
              }}
              target="_blank"
              href="https://api.whatsapp.com/send?l=en&text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&phone=916382665366"
              data-color-override="false"
              data-hover-color-override="false"
              data-hover-text-color-override="#fff"
              alt=""
            >
              View CaseStudies
            </a>
          </div> */}
        </div>
      </div>
      <LandingSec5 />
    </section>
  );
}

export default LandingSec3;
