import React from 'react'

const Sec8 = () => {
  return (
    <section id="ret-inv" className="gray_bg common_spacing">
    <div className="container">
      <div className="section-title text-center underline mb30">
        <div className="sec_tit">
          <h2>Features we offer in our IDO Launchpad on Binance Smart Chain</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <ul className="m_s">
            <li className="binance-smart">
              <div className="icon">
                {" "}
                <img
                  className="feature-icon"
                  data-src="/images/ido-bsc/icon/kyc-binance.webp"
                  width={45}
                  src="./assets/images/icon-330.webp"
                />{" "}
              </div>
              <h3 className="feature-title">KYC Portal</h3>
              <p className="feature-desc mb0">
                Our IDO launchpad on Binance Smart Chain has a KYC portal by
                default, which helps in preventing various scams and money
                laundering challenges easily.
              </p>
            </li>
            <li>
              <div className="icon">
                {" "}
                <img
                  className=""
                  data-src="/images/ido-bsc/icon/token-listing.webp"
                  width={45}
                  src="./assets/images/icon-331.webp"
                />{" "}
              </div>
              <h3 className="feature-title">Token listing</h3>
              <p className="feature-desc mb0">
                Our token listing feature will help the users of our IDO launchpad
                to handle the listing process very easily. This will help ease up
                the IDO launching process.
              </p>
            </li>
            <li>
              <div className="icon">
                {" "}
                <img
                  className=""
                  data-src="/images/ido-bsc/icon/trading.webp"
                  width={45}
                  src="./assets/images/icon-332.webp"
                />{" "}
              </div>
              <h3 className="feature-title">Immediate trading</h3>
              <p className="feature-desc mb0">
                {" "}
                Our IDO launchpad doesn’t have any wait time, and the user can
                start trading after the moment they launch the project without any
                issue.
              </p>
            </li>
            <li>
              <div className="icon">
                {" "}
                <img
                  className=""
                  data-src="/images/ido-bsc/icon/liquidity.webp"
                  width={45}
                  src="./assets/images/icon-333.webp"
                />{" "}
              </div>
              <h3 className="feature-title">Instant liquidity</h3>
              <p className="feature-desc mb0">
                Since the IDO will be listed on the decentralized exchange, the
                liquidity is very high. Liquidity acts as a severe advantage for
                the users.{" "}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Sec8
