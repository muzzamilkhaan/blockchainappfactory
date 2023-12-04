import React from 'react'

function Sec10() {
  return (
    <div className="tech-points common_spacing">
  <div className="container">
    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <div className="section-title text-left">
        <h3 className="font_wei">KYC/AML Automation</h3>
        <hr />{" "}
      </div>
      <p>
        In the regulated TAO, the basic requirements are KYC/AML verification
        reduces the risk through reputation scoring which helps issuance
        companies identify high-risk individuals . This helps you prove your
        investor's identity,risk-based authentication and preventing identity
        fraud. In addition, you can also reduce money laundering activities.{" "}
      </p>
      <p>
        KYC/AML automation help in efficient onboarding of the investors in a
        quicker time frame.. In addition, you can stay ahead of the regulations
        through a flexible interface where you can respond to new developments
        with ease.{" "}
      </p>
    </div>
    <div className="col-lg-6 col-md-6 hidden-sm hidden-xs">
      {" "}
      <img
        data-src="./assets/images/kyc-img.webp"
        alt="KYC/AML Automation"
        title="KYC/AML Automation"
        className="img-responsive"
        src="./assets/images/kyc-img.webp"
      />{" "}
    </div>
  </div>
</div>

  )
}

export default Sec10