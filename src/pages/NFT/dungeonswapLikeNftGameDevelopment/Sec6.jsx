import React from "react";

const Sec6 = () => {
  return (
    <section className="feature-main white-bg">
      <div className="container">
        <div className="section-title text-center underline">
          <div className="sec_tit">
            <h2>Technical dependencies</h2>
          </div>
        </div>
        <p className="text-center" style={{ color: "#000" }}>
          Explaining the technical dependencies, our NFT gaming platform like
          DungeaonSwap is structured with the advanced blockchain network, and
          the stacks used were high performing and most responsive in the
          current trend. Our NFT gaming platform like DungeonSwap can be built
          on different blockchain platforms. The NFT token standards are
          utilized based on the requirements, and they can also be altered if
          there is a need or demand.{" "}
        </p>
      </div>
      <div className="container-fluid fluid-padd">
        <div className="row row-eq-height no-gutter">
          <div className="col-lg-4 col-md-12 feature-box-03-bg-1">
            <div className="feature-box-03 text-white clearfix">
              <div className="info">
                {" "}
                <i className="">
                  <img src="./assets/images/immutable.webp" />
                </i>
                <h4 className="text-white mt-2 mb-2">Immutable </h4>
                <p>
                  The decentralized storage management system will keep the
                  data’s information lost proof.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 feature-box-03-bg-2">
            <div className="feature-box-03 text-white clearfix">
              <div className="info">
                {" "}
                <i className="">
                  <img src="./assets/images/security2.webp" />
                </i>
                <h4 className="text-white mt-2 mb-2">Security</h4>
                <p>
                  The security protocol bundles will actively mitigate any kinds
                  of threats and establish a secure platform.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 feature-box-03-bg-3">
            <div className="feature-box-03 text-white clearfix">
              <div className="info">
                {" "}
                <i className="">
                  <img src="./assets/images/frontend.webp" />
                </i>
                <h4 className="text-white mt-2 mb-2">Front-end</h4>
                <p>
                  {" "}
                  User interfaces are carved with the industry’s advanced
                  front-end technologies and libraries to achieve utmost
                  responsiveness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec6;
