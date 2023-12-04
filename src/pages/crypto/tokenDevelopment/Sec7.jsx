import React from 'react'

function Sec7() {
  return (
    <section className="common_spacing">
      <div className="container">
        <div className="row">
          <div className="section-title text-center">
            <div className="sec_tit mb20">
              <h3 className="section-title underline mb20">
                Custom Token Development Solution Types We Create
              </h3>{" "}
            </div>
            <p style={{ fontSize: 16 }}>
              Our custom token development solutions provide you with the ability to
              integrate different use cases into crypto tokens. We believe that
              defining a token’s functionality forms a business’s soul.
            </p>
          </div>
        </div>
        <div className="row mt40">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb10">
            <ul className="step-points">
              <li>
                <i className="fa fa-lock" />
                <div className="step-points-content">
                  <h4>Security Tokens</h4>
                  <p>
                    Security tokens represent rights of ownership, value transfer,
                    and promise of returns of external assets (digital/physical)
                    registered on the blockchain.
                  </p>
                </div>
              </li>
              <li>
                <i className="fa fa-life-ring" />
                <div className="step-points-content">
                  <h4>Utility Tokens</h4>
                  <p>
                    Utility tokens offer several functions to holders, including
                    spending and voting capabilities that businesses can utilize to
                    maintain their market value.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb10">
            <ul className="step-points">
              <li>
              <i className="fa-regular fa-circle-dot"></i>
                <div className="step-points-content">
                  <h4>Asset Tokens</h4>
                  <p>
                    Asset tokens represent digital and physical assets as blockchain
                    entries without much utility, similar to ownership documentation
                    in the real world.
                  </p>
                </div>
              </li>
              <li>
                <i className="fa fa-adjust" />
                <div className="step-points-content">
                  <h4>Equity Tokens</h4>
                  <p>
                    Equity tokens represent shares of the underlying assets, similar
                    to share bonds in the real world, entitling holders to changes
                    in the assets’ value.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Sec7