import React from 'react'

function Sec4() {
  return (
    <section className="common_spacing ">
      <div className="container">
        <div className="row">
          <div className="section-title text-center">
            <div className="sec_tit mb20">
              <h2 className="section-title underline mb20">
                Exciting Features of Creating SRC-20 Tokens
              </h2>{" "}
            </div>
            <p style={{ fontSize: 16 }}>
              SRC-20 token creation offers businesses a new range of possibilities
              owing to its usage of the STAMPS protocol. Not only that, it offers
              numerous features that ventures can use to captivate the market.{" "}
            </p>
          </div>
        </div>
        <div className="row mt40">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb10">
            <ul className="step-points">
              <li>
                <i className="fa fa-link" />
                <div className="step-points-content">
                  <h3>On-Chain Presence</h3>
                  <p>
                    SRC-20 tokens are present on the Bitcoin blockchain forever and
                    cannot be modified or pruned due to their use of unspendable
                    transaction output.
                  </p>
                </div>
              </li>
              <li>
                <i className="fa fa-lock" />
                <div className="step-points-content">
                  <h3>High-level Security</h3>
                  <p>
                    SRC-20 token development solutions live on the Bitcoin network,
                    making them highly safe from any possible manipulation from
                    external malicious actors.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb10">
            <ul className="step-points">
              <li>
                <i className="fa fa-key" />
                <div className="step-points-content">
                  <h3>Key Burn</h3>
                  <p>
                    A mandatory requirement for SRC-20 token creation, KeyBurn aids
                    in ensuring unspendable outputs do not get spent, erasing assets
                    stored as a result.
                  </p>
                </div>
              </li>
              <li>
                <i className="fa fa-user-plus" />
                <div className="step-points-content">
                  <h3>Unique Naming</h3>
                  <p>
                    SRC-20 development presents a unique naming convention that
                    allows one to use emojis in a sophisticated way in the ticker
                    for an SRC-20 token.
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

export default Sec4