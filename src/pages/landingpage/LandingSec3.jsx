import React from "react";
import UnderLine from "../../components/UnderLine";

function LandingSec3() {
  return (
    <section className="space-pt-1 bg-dark-half-md tech-padding teck-1">
      <div className="container">
        <div className="row">
          <div className="section-title text-center col-xs-12 mb20">
            <h3 className="common_h3 text-white">Our Clients</h3>
            {/* <hr />{" "} */}
            <UnderLine height="2px" background="#fff" />
          </div>
          <div className="col-md-3 col-sm-6 col-xs-6 mob-p-lr-6">
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
          </div>
          {/* <div className="col-md-3 col-sm-6 col-xs-6 mob-p-lr-6">
          <div className="boxy_client">
            <img
              className="img-fuild lazy"
              data-src="./assets/images/EconetLogo-svg.webp"
              width="85px"
              height="85px"
              alt=""
              src="./assets/images/EconetLogo-svg.webp"
            />
            <p className="text-center" style={{ fontSize: 12 }}>
              We created a blockchain solution for a superapp with multiple
              functionalities.
            </p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-6 mob-p-lr-6">
          <div className="boxy_client">
            <img
              className="img-fuild lazy"
              data-src="./assets/images/LI&FUNG-svg.webp"
              width="85px"
              height="85px"
              alt=""
              src="./assets/images/LI&FUNG-svg.webp"
            />
            <p className="text-center" style={{ fontSize: 12 }}>
              We created a blockchain-based system to govern the firm’s supply and
              logistics.
            </p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-6 mob-p-lr-6">
          <div className="boxy_client">
            <img
              className="img-fuild lazy"
              data-src="./assets/images/globant-logo-dark-svg.webp"
              width="85px"
              height="85px"
              alt=""
              src="./assets/images/globant-logo-dark-svg.webp"
            />
            <p className="text-center" style={{ fontSize: 12 }}>
              Globant’s featureful music NFT marketplace “Enigma” was created by
              our experts.
            </p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-6 mob-p-lr-6">
          <div className="boxy_client">
            <img
              className="img-fuild lazy"
              data-src="./assets/images/bh.webp"
              width="85px"
              height="85px"
              alt=""
              src="./assets/images/bh.webp"
            />
            <p className="text-center" style={{ fontSize: 12 }}>
              Our team built “Trufin”, an options trading platform based on
              blockchains.
            </p>
          </div>
        </div>
        <div className="text-center">
          <a
            href="https://www.blockchainappfactory.com/case-studies"
            className="nectar-button medium regular accent-color regular-button"
            id="cyz"
            style={{
              borderRadius: "30px",
              padding: "10px 25px",
              textAlign: "center",
              background: "#03b787",
              color: "#fff"
            }}
          >
            View CaseStudies
          </a>
        </div> */}
          <div className="connect-with d-flex mt-30">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingSec3;
