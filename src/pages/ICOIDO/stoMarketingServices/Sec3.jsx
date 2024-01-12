import React from 'react'

const Sec3 = () => {
  return (
    <div className="col-md-12 section-header common_spacing gray_bg">
  <div className="container">
    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
      <h2 className="small_h1 section-title underline font-wei">
        What is General Solicitation?{" "}
      </h2>
      <p className="section-subtitle mb20">
        The General Solicitation, according to the Securities and Exchange
        Commission (SEC) permits issuers to advertise and market their offering
        to the investors provided that:
      </p>
      <ul className="ul-style-4 list_growth padding-zero">
        <li>
          <p>
            <span className="space">
              <i className="fa fa-check" aria-hidden="true" />
            </span>
            An external agent, such as a broker, to be as an intermediary
          </p>
        </li>
        <li>
          <p>
            <span className="space">
              <i className="fa fa-check" aria-hidden="true" />
            </span>
            Use questionnaire requesting investors to provide self-verification
            regarding their financial status
          </p>
        </li>
        <li>
          <p>
            <span className="space">
              <i className="fa fa-check" aria-hidden="true" />
            </span>
            Use password protection preventing general public the general access
            to investment information on the websites.
          </p>
        </li>
      </ul>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
      {" "}
      <img
        src="./assets/images/sec-side45.webp"
        alt="What is General Solicitation?"
        title="What is General Solicitation?"
        className="img-responsive"
      />{" "}
    </div>
  </div>
</div>

  
  )
}

export default Sec3
