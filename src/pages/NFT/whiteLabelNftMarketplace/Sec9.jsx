import React from 'react'

function Sec9() {
  return (
    <section className="service-section web-servic pad-tb">
  <div className="container">
    <div className="section-header underline text-center">
      <h2 className="text-white title-th">
        Revenue generators of your NFT Marketplace
      </h2>{" "}
    </div>
    <div className="row upset link-hover shape-num justify-content-center">
      <div
        className="col-lg-3 col-sm-6 mt30 shape-loc wow fadeInUp"
        data-wow-delay="0.2s"
        style={{
          visibility: "visible",
          animationDelay: "0.2s",
          animationName: "fadeInUp"
        }}
      >
        <div
          className="box4"
          style={{
            willChange: "transform",
            transform:
              "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
          }}
        >
          <div className="s-card-icon">
            <img
              className=""
              data-src="./assets/images/x.svg"
              alt="Commissions"
              src="./assets/images/x.svg"
            />
          </div>
          <h3>Commissions</h3>
          <p>
            Getting commissions for the creation, trade and purchase of NFTs in
            your marketplace is one of the revenue-generating processes from
            your marketplace.
          </p>
        </div>
      </div>
      <div
        className="col-lg-3 col-sm-6 mt30 shape-loc wow fadeInUp"
        data-wow-delay="0.4s"
        style={{
          visibility: "visible",
          animationDelay: "0.4s",
          animationName: "fadeInUp"
        }}
      >
        <div
          className="box4"
          style={{
            willChange: "transform",
            transform:
              "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
          }}
        >
          <div className="s-card-icon">
            <img
              data-src="./assets/images/completed-task.svg"
              className=""
              alt="Listing Fee"
              src="./assets/images/completed-task.svg"
            />
          </div>
          <h3>Listing Fee</h3>
          <p>
            Collection of listing fees for listing the NFTs in your marketplace
            increases your revenue flow and also facilitates the visibility of
            users NFT.{" "}
          </p>
        </div>
      </div>
      <div
        className="col-lg-3 col-sm-6 mt30 shape-loc wow fadeInUp"
        data-wow-delay="0.6s"
        style={{
          visibility: "visible",
          animationDelay: "0.6s",
          animationName: "fadeInUp"
        }}
      >
        <div
          className="box4"
          style={{
            willChange: "transform",
            transform:
              "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
          }}
        >
          <div className="s-card-icon">
            <img
              data-src="./assets/images/digital-marketing.svg"
              className=""
              alt="Marketing"
              src="./assets/images/digital-marketing.svg"
            />
          </div>
          <h3>Marketing </h3>
          <p>
            Marketing users of NFT with a service charge is one of the revenue
            generators in the NFT marketplace.
          </p>
        </div>
      </div>
      <div
        className="col-lg-3 col-sm-6 mt30 shape-loc wow fadeInUp"
        data-wow-delay="0.8s"
        style={{
          visibility: "visible",
          animationDelay: "0.8s",
          animationName: "fadeInUp"
        }}
      >
        <div
          className="box4 mb0"
          style={{
            willChange: "transform",
            transform:
              "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
          }}
        >
          <div className="s-card-icon">
            <img
              data-src="./assets/images/law.svg"
              alt="Auction"
              className=""
              src="./assets/images/law.svg"
            />
          </div>
          <h3>Auction</h3>
          <p>
            Listing NFTs in an auction portal or integrating an action portal in
            your marketplaces offers immediate liquidity for NFTs which is also
            a revenue generator.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Sec9