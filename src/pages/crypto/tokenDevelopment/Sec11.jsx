import React from 'react'

function Sec11() {
  return (
    <section className="integration">
      <div className="container container-center">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="section-title text-center">
            <h3 className="title-th sec_tit underline">
              Standards Your Token Development Platform Can Incorporate
            </h3>
            <p>
              Select a standard for your token development platform. We deliver what
              you exactly need!
            </p>
          </div>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12 equalize">
          <div className="integration-items">
            <div className="icons">
              {" "}
              <img
                className="lazy"
                data-src="./assets/images/ethereum.webp"
                src="./assets/images/ethereum-green.webp"
              />
            </div>
            <h4>Ethereum </h4>
            <p>
              ERC-20
              <br /> ERC-721
              <br /> ERC-1155
              <br /> ERC-4337
            </p>
          </div>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12 equalize">
          <div className="integration-items">
            <div className="icons">
              {" "}
              <img
                className="lazy"
                data-src="./assets/images/bep.webp"
                style={{ width: 54 }}
                src="./assets/images/bep.webp"
              />{" "}
            </div>
            <h4>BNB Chain </h4>
            <p>
              BEP-20
              <br /> BEP-721
              <br /> BEP-1155
            </p>
          </div>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12 equalize">
          <div className="integration-items">
            <div className="icons">
              {" "}
              <img
                className="lazy"
                data-src="./assets/images/trc.webp"
                style={{ width: 54 }}
                src="./assets/images/trc.webp"
              />{" "}
            </div>
            <h4>Tron </h4>{" "}
            <p>
              TRC-20
              <br /> TRC-721
              <br /> TRC-1155
            </p>
          </div>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12 equalize">
          <div className="integration-items">
            <div className="icons">
              {" "}
              <img
                className="lazy"
                data-src="./assets/images/spl.webp"
                style={{ width: 54 }}
                src="./assets/images/spl.webp"
              />{" "}
            </div>
            <h4>Solana </h4> <p>SPL</p>
          </div>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12 equalize">
          <div className="integration-items">
            <div className="icons">
              {" "}
              <img
                className="lazy"
                data-src="./assets/images/nep.webp"
                style={{ width: 54 }}
                src="./assets/images/nep.webp"
              />{" "}
            </div>
            <h4>NEAR Protocol</h4>
            <p>
              NEP-141
              <br /> NEP-171
            </p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Sec11