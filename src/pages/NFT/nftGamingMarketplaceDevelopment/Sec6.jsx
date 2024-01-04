import React from 'react'

const Sec6 = () => {
  return (
    <div
    className="common_spacing"
    style={{ background: "linear-gradient(140deg, #00d28a, #78b0fa)" }}
  >
    <div className="container">
      <div className="section-title text-center">
        <h3 className="title-th sec_tit underline" style={{ color: "#fff" }}>
          Our Versatile Platform Support
        </h3>{" "}
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-6 col-xs-12 text-center">
          <img
            className=""
            data-src="/images/nft-game-marketplace-development/web.webp"
            alt=" "
            title=" "
            src="./assets/images/sec-side2.webp"
          />
          <p className="text-center mt20">
            <a href="#newsletter-form-sec">
              {" "}
              <strong
                style={{
                  color: "#fff",
                  fontSize: 22,
                  background: "rgba(0, 0, 0, 0.5)",
                  padding: "10px 30px",
                  borderRadius: 30
                }}
              >
                Web Portal
              </strong>
            </a>{" "}
          </p>
        </div>
        <div className="col-md-6 col-sm-6 col-xs-12 text-center">
          <img
            className=""
            data-src="/images/nft-game-marketplace-development/mobile.webp"
            alt=" "
            title=" "
            src="./assets/images/sec-side3.webp"
          />
          <p className="text-center mt20">
            <a href="#newsletter-form-sec">
              <strong
                style={{
                  color: "#fff",
                  fontSize: 22,
                  background: "rgba(0, 0, 0, 0.5)",
                  padding: "10px 30px",
                  borderRadius: 30
                }}
              >
                Mobile Application
              </strong>
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Sec6
