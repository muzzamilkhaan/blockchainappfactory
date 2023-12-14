import React from "react";
import { SecEleven } from "./tokenGatingPlatformComp";
import { H2 } from "../../../components";

const Sec11 = () => {
  return (
    <SecEleven>
      <div className="common_spacing" style={{ background: "#368b5a" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 text-center">
              <div className="section-title text-center">
                <div className="title-th sec_tit underline text-white">
                  <H2 style={{ color: "#fff" }}>
                    {" "}
                    Why Choose Us to Create an NFT Token-Gated Platform?
                  </H2>
                </div>{" "}
              </div>
              <p className="text-center mt20 text-white para">
                At Blockchain App Factory, we focus on providing top-notch
                platforms powered by sophisticated technology stacks. Our
                experience in using numerous blockchains for development
                purposes, coupled with our longevity, gives you an edge even
                before your platform is designed. With our services, you can
                launch an NFT token-gated platform rich with features and
                functionality with all the customizations you want. Are you
                thinking of bringing specialized experiences to your loyal
                customers? Opt for our prolific token-gated platform development
                services to realize your Web3 business aspirations today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </SecEleven>
  );
};

export default Sec11;
