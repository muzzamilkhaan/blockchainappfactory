import React from "react";

function LandingSec8() {
  return (
    <>
      {/* <div id="client-video">
      <video autoPlay muted loop id="myVideo" poster="./assets/images/client-video.jpg">
        <source src="./assets/video/client.mp4" type="video/mp4" /> Your browser
        does not support HTML5 video.{" "}
      </video>
    </div> */}
      {/* <div className="container mt-0">
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 col-lg-offset-4 col-md-offset-4 col-sm-offset-4">
          <img
            className="lazy"
            data-src="./assets/images/home-page-image.webp"
            width="100%"
            height="auto"
            alt=""
            src="./assets/images/home-page-image.webp"
          />
        </div>
      </div>
    </div> */}
      <div className="home-sec-8  pb-5 flip-card-parent">
        <div className="section-title text-center">
          <h3 className="common_h3">
            Smart Contract Use Cases For Various Industries
          </h3>
          <p>
            Explore the possibilities of Smart contracts that help transfigure
            multiple global industries by introducing transparency,
            auditability, and speed to outdated workflows.
          </p>
          <hr />{" "}
        </div>
        <div className="card-wrapper">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="./assets/images/flipcard-sec8.png" alt="" />
                <h2>Retail & Ecommerce</h2>
                <p>To ensure interoperability and tran...</p>
              </div>
              <div className="flip-card-back">
                <h2>Supply Chain</h2>
                <p>
                  To ensure interoperability and transparency throughout the
                  whole supply chain, the blockchain's immutable ledger enables
                  seamless product tracking, and real-time process updates and
                  streamlines the entire transportation cycle.
                </p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="./assets/images/flipcard-sec8.png" alt="" />
                <h2>Retail & Ecommerce</h2>
                <p>To ensure interoperability and tran...</p>
              </div>
              <div className="flip-card-back">
                <h2>Supply Chain</h2>
                <p>
                  To ensure interoperability and transparency throughout the
                  whole supply chain, the blockchain's immutable ledger enables
                  seamless product tracking, and real-time process updates and
                  streamlines the entire transportation cycle.
                </p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="./assets/images/flipcard-sec8-one.png" alt="" height="179px"/>
                <h2>Retail & Ecommerce</h2>
                <p>To ensure interoperability and tran...</p>
              </div>
              <div className="flip-card-back">
                <h2>Supply Chain</h2>
                <p>
                  To ensure interoperability and transparency throughout the
                  whole supply chain, the blockchain's immutable ledger enables
                  seamless product tracking, and real-time process updates and
                  streamlines the entire transportation cycle.
                </p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="./assets/images/flipcard-sec8-two.png" alt="" />
                <h2>Retail & Ecommerce</h2>
                <p>To ensure interoperability and tran...</p>
              </div>
              <div className="flip-card-back">
                <h2>Supply Chain</h2>
                <p>
                  To ensure interoperability and transparency throughout the
                  whole supply chain, the blockchain's immutable ledger enables
                  seamless product tracking, and real-time process updates and
                  streamlines the entire transportation cycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingSec8;
