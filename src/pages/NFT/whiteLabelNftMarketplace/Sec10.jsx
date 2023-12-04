import React from 'react'

function Sec10() {
  return (
    <div id="our_services" className="defisec gray_bg">
  <div className="container">
    <div className="section-title text-center">
      <h3 className="common_h3 title-th sec_tit">Modify to Fit Your Needs</h3>
      <hr />
      <p>
        You can easily modify the Whitelabel NFT marketplace we provide to
        launch a platform that aligns with your brand and specific business
        needs.
      </p>
    </div>
    <div className="grids">
      <div className="grid col-md-4 col-md-offset-0 col-sm-8 col-sm-offset-2 ">
        <div className="feature-box-3">
          <div className="icon">
            {" "}
            <img
              data-src="./assets/images/support.webp"
              alt="Auction"
              className=""
              width="45px;"
              src="./assets/images/support.webp"
            />{" "}
          </div>
          <h4 className="feature-title common_h4">NFT Standard Support</h4>
          <p className="feature-desc mb0">
            You can customize your NFT marketplace to support assets created
            using NFT standards from various blockchains.
          </p>
        </div>
      </div>
      <div className="grid col-md-4 col-md-offset-0 col-sm-8 col-sm-offset-2 ">
        <div className="feature-box-3">
          <div className="icon">
            <img
              data-src="./assets/images/security.webp"
              alt="Auction"
              className=""
              width="45px;"
              src="./assets/images/security.webp"
            />{" "}
          </div>
          <h4 className="feature-title common_h4">Top-Notch Security</h4>
          <p className="feature-desc mb0">
            The ready-made NFT marketplace solution has been tested hundreds of
            times to ensure security at all times.
          </p>
        </div>
      </div>
      <div className="grid col-md-4 col-md-offset-0 col-sm-8 col-sm-offset-2 ">
        <div className="feature-box-3">
          <div className="icon">
            {" "}
            <img
              data-src="./assets/images/payment-gateways.webp"
              alt="Auction"
              className=""
              width="45px;"
              src="./assets/images/payment-gateways.webp"
            />
          </div>
          <h4 className="feature-title common_h4">Various Payment Options</h4>
          <p className="feature-desc mb0">
            The platform lets users pay for NFT asset purchases using cryptos,
            credit/debit cards, and wire transfers.
          </p>
        </div>
      </div>
    </div>
    <div className="text-center cta_mine mt40 txt">
      {" "}
      <a
        className="nectar-button medium regular accent-color regular-button nec-btn med-btn"
        target="_blank"
        href="https://api.whatsapp.com/send?l=en&text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&phone=916382665366"
        data-color-override="false"
        data-hover-color-override="false"
        data-hover-text-color-override="#fff"
        style={{borderRadius: 30}}
      >
        <span>Connect with Whatsapp</span>
      </a>{" "}
      <a
        href="#newsletter-form-sec"
        className="nectar-button medium regular accent-color regular-button nec-btn med-btn"
        style={{borderRadius: 30}}
      >
        <span>Talk with our Experts</span>
      </a>{" "}
    </div>
  </div>
</div>

  )
}

export default Sec10