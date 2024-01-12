import React from 'react'

const Sec4 = () => {
  return (
    <section className="service-section web-servic pad-tb">
    <div className="container">
      <div className="section-header underline text-center">
        <h2 className="text-white font-wei">
          {" "}
          STO Smart contract development services
        </h2>
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
                data-src="/images/sto1/icon/ico.svg"
                alt="service"
                src="./assets/images/icon-213.svg"
              />
            </div>
            <h3>Token creation</h3>
            <p>
              By creating ERC-20 tokens, one gains the ability to develop multiple
              applications along with transferring tokens.{" "}
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
                data-src="/images/sto1/icon/token.svg"
                className=""
                src="./assets/images/icon-214.svg"
              />
            </div>
            <h3>Token Issuance</h3>
            <p>
              Token issuance supports smart contracts during private sales; The
              token will be transferred automatically once the payment is
              credited.
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
                data-src="/images/sto1/icon/contract.svg"
                className=""
                alt="service"
                src="./assets/images/icon-215.svg"
              />
            </div>
            <h3>Escrow contract </h3>
            <p>
              This helps to store Ether and ERC-20 tokens by writing
              contracts.This contract also allows the issuance of ether slash
              tokens.
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
                data-src="/images/sto1/icon/agreement.svg"
                alt="service"
                className=""
                src="./assets/images/icon-216.svg"
              />
            </div>
            <h3>Custom Smart Contract</h3>
            <p>
              Your smart contract can be customized based on the requirements of
              your transactions, fund exchanges, agreement with multiple
              investors.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Sec4
