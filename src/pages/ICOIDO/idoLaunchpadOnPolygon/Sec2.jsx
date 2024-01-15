import React from 'react'

const Sec2 = () => {
  return (
    <section className="intro_cnt common_spacing">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12 col-xs-12">
          <div className="section-title underline text-left pt20">
            <div className="sec_tit">
              <h2>What is Polygon? </h2>
            </div>
          </div>
          <p className="mt10 text-left">
            Polygon is a layer-2 protocol running on Ethereum that resolves the
            long-standing issue encountered by the Ethereum chain – Network
            congestion and higher gas fees. It was started in 2017 as Matic. It
            aims to transform Ethereum into an internet of blockchains like Cosmos
            and Polkadot while utilizing the robustness and security features of
            Ethereum. Polygon uses the Proof-of-Stake (POS) system, which results
            in the chain’s higher network speed and lower gas fees.
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <img src="./assets/images/sec-side65.webp" alt="" />
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Sec2
