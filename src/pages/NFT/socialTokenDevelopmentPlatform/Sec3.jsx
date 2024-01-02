import React from "react";
import { SecThree } from "./socialTokenDevelopmentPlatformComp";
import { H2, Button } from "../../../components";

const Sec3 = () => {
  return (
    <SecThree>
      <div className="ct_warp">
        <div className="container">
          <H2 className="text-white">
            What is the importance of Social Token?
          </H2>
          <div className="col-md-12">
            <p className="text-center mt40">
              Social tokens are the tokens developed under ERC-20 that enable
              the user to represent their services in digital format. The user
              can charge their service cost in the form of tokens they
              represent. These tokens can be exchanged in the liquidity pool.
              It’s been a tradition for creators to publish their work in
              mediums like YouTube or other platforms which takes 10-20% of
              revenue as service charge with restrictions. This social token
              allows the creators like musicians, artists and writers to issue
              their own token to the users. This facilitates the user to gain
              access to the exclusive contents to the users without any
              allocation for service charge and restrictions.
            </p>
          </div>
          <div className="cta_mine">
            <div className="d-flex justify-content-center flex-wrap gap-3 ">
              <Button
                btnContent="Connect with Whatsapp"
                target="_blank"
                to="https://api.whatsapp.com/send?l=en&amp;text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&amp;phone=916382665366"
              />
              <Button
                btnContent="Talk with our Experts"
                to="#newsletter-form-sec"
              />
            </div>
          </div>{" "}
        </div>
      </div>
    </SecThree>
  );
};

export default Sec3;
