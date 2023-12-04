import React from 'react'

function LandingSec12() {
  return (
    <div className="whychooseus gray_bg common_spacing" style={{ marginTop: 87 }}>
    <div className="container">
      <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
        <div className="section-title">
          <h2 className="common_h3 text-left  m-b-30">Why Choose Us?</h2>
          <p>
            Blockchain App Factory is a technological giant in the making and is
            continuously evolving by learning from our previous experiences. We
            propel ahead with our learnings and transform into a technological
            giant.{" "}
          </p>
          <ul className="text-left">
            <li>
              <div className="icon-img">
                <img
                  className="lazy"
                  data-src="./assets/images/developer.svg"
                  alt=""
                  width="35px"
                  height="35px"
                  src="./assets/images/developer.svg"
                />
              </div>
              <div className="content">
                <h3>Technical Prowess</h3>
                <p>
                  Our team of blockchain enthusiasts have worked with 400+
                  projects in cryptocurrency and blockchain development projects.
                </p>
              </div>
            </li>
            <li>
              <div className="icon-img">
                <img
                  className="lazy"
                  data-src="./assets/images/marketing_team.svg"
                  alt=""
                  width="35px"
                  height="35px"
                  src="./assets/images/marketing_team.svg"
                />
              </div>
              <div className="content">
                <h3>Proven Marketing Team</h3>
                <p>
                  Our marketing team has experience in leading variety of NFT and
                  ICO projects to deliver successful marketing campaigns.
                </p>
              </div>
            </li>
            <li>
              <div className="icon-img">
                <img
                  className="lazy"
                  data-src="./assets/images/dev_team.svg"
                  alt=""
                  width="35px"
                  height="35px"
                  src="./assets/images/dev_team.svg"
                />
              </div>
              <div className="content">
                <h3>Leadership Team</h3>
                <p>
                  Our leadership team is a cross-functional team with 500+
                  combined experience in the nascent technology business.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-5 col-md-5 m-t-50 text-center hidden-xs hidden-sm">
        {" "}
      </div>
    </div>
  </div>
  )
}

export default LandingSec12