import React from 'react'

const Sec3 = () => {
  return (
    <section className="common_spacing overview ">
    <div className="container">
      <div className="container">
        <div className="row">
          <div className="col-md-12 section-header text-center">
            <h2 className="common_h2 section-title underline" style={{color:"#2b2c2d"}}>
              How does it differ from ICO?
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12 m-t-50 m-b-50">
              <div className="Fund-img">
                <img
                  src="./assets/images/sec-side37.webp"
                  alt="Initial Exchange Offering"
                  title="How does it differ from ICO"
                />
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-6 col-xs-12 ">
              <div className="differlist">
                <img src="./assets/images/icon-132.webp" />
                <div className="diffTxt">
                  <h4 className="">Fundraising Environment</h4>
                  <p>
                    In ICO, you need investor and admin dashboards to conduct the
                    fundraising process. However, if you go with IEO, the
                    fundraising takes place at the Exchange.
                  </p>
                </div>
              </div>
              <div className="differlist">
              <img src="./assets/images/icon-133.webp" />
                <div className="diffTxt">
                  <h4 className="">Screening</h4>
                  <p>
                    Exchanges will screen the projects and investors based on
                    their parameters before launching on its platform reducing
                    your cost of compliance.
                  </p>
                </div>
              </div>
              <div className="differlist">
              <img src="./assets/images/icon-134.webp" />
                <div className="diffTxt">
                  <h4 className="">Smart Contracts</h4>
                  <p>
                    You don’t need to manage smart contracts as you do in ICOs.
                    The smart contracts are managed by the Exchange.
                  </p>
                </div>
              </div>
              <div className="differlist">
              <img src="./assets/images/icon-135.webp" />
                <div className="diffTxt">
                  <h4 className="">KYC/AML</h4>
                  <p>
                    KYC/AML services will be managed by the exchanges itself,
                    thereby saving time, cost and resources involved in boarding
                    investors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Sec3
