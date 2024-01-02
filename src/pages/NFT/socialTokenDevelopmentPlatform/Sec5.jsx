import React from "react";
import { SecFive } from "./socialTokenDevelopmentPlatformComp";
import { H2 } from "../../../components";

const Sec5 = () => {
  return (
    <SecFive>
      <div id="post-ico-services" className="gray_bg">
        <div className="container">
          <div className="section-title text-center">
            <div className="common_h3 font-wei">
              <H2 style={{ color: "#2b2c2d" }}> Types of social tokens</H2>
            </div>
            <hr />
          </div>
          <div className="grids">
            <div className="grid col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="technicalbox text-center">
                <div className="technical-icon">
                  <span>
                    <i className="fa fa-usd" aria-hidden="true"></i>
                  </span>
                </div>
                <h3 className="tit-1">Personal token</h3>
                <hr />
                <p>
                  Personal tokens are the token issued by individuals to
                  represent their digital currency. This facilitates self
                  employees and creators to acquire the benefits of digital
                  currencies. An artist can make art for someone and earn an
                  hourly charge in the form of their digital currency. This
                  digital token circulation in the market earns popularity for
                  your work and increases the value of your token too.
                </p>
              </div>
            </div>
            <div className="grid col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="technicalbox text-center">
                <div className="technical-icon">
                  <span>
                    <i className="fa fa-users" aria-hidden="true"></i>
                  </span>
                </div>
                <h3 className="tit-1">Community Token</h3>
                <hr />
                <p>
                  Community tokens are created by an organization or a bunch of
                  people to represent themselves as a whole community. These
                  tokens can be issued for the resemblance of their organization
                  for its contribution, also can be issued to third parties to
                  participate in their organization. A user can purchase the
                  social token from the community and participate in the
                  community. Also, if a community serves someone, they receive
                  their return in the form of their tokens. This will facilitate
                  their popularity and token circulation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecFive>
  );
};

export default Sec5;
