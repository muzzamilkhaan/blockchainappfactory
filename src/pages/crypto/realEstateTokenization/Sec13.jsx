import React from 'react'

function Sec13() {
  return (
    <section id="our_services" className="common_spacing ">
  <div className="container">
    <div className="row">
      <div className="section-title text-center">
        <h2 className="sec_tit underline mb20">
          Real Estate NFT Marketplace: Redefining The Real Estate Investments
        </h2>
        <p>
          An NFT marketplace for real estate leverages blockchain technology to
          tokenize unique real estate assets as NFTs. Each NFT represents
          ownership of a specific property, and its value is securely stored on
          the blockchain. This innovative approach revolutionizes the way real
          estate is bought, sold, and traded by enabling fractional ownership
          and seamless transactions of properties. This real estate tokenization
          platform offers a digital ecosystem where buyers and sellers can
          interact, trade, and invest in real estate NFTs with ease, efficiency,
          and transparency.
        </p>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pull-left">
        {" "}
        <img
          alt=""
          title=""
          data-src="./assets/images/img-3.webp"
          className="lazy"
          src="./assets/images/img-3.webp"
        />{" "}
      </div>
      <div
        className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pull-right"
        style={{ marginTop: 20 }}
      >
        <ul className="list-ico">
          <li>
            Investors can buy fractions of high-value properties, reducing entry
            barriers and enabling diversified portfolios.
          </li>
          <li>
            NFTs enable faster and easier property trading, enhancing liquidity
            in the real estate market.
          </li>
          <li>
            Investors worldwide can engage in cross-border property
            transactions, expanding market reach.
          </li>
          <li>
            Real estate NFTs offer new avenues for investment and exposure to a
            growing digital asset class.
          </li>
          <li>
            Elimination of traditional intermediaries leads to lower transaction
            fees and reduced administrative complexities
          </li>
        </ul>
        <div className="cta_mine text-left" style={{ alignItems: "left" }}>
          <a
            href="https://www.blockchainappfactory.com/nft-for-realestate"
            className="nectar-button medium regular accent-color regular-button nec-btn"
            target="_blank"
          >
            <span>Let’s Dive Deeper</span>
          </a>
        </div>
      </div>
    
    </div>
  </div>
</section>

  )
}

export default Sec13