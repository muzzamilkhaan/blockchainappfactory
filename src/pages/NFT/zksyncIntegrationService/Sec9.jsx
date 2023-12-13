import React from "react";
import { SecNine } from "./ZksyncIntegrationServiceComp";
import { H2, Button } from "../../../components";

const Sec9 = () => {
  return (
    <SecNine>
      <div
        id="ret-inv"
        className="common_spacing"
        style={{
          backgroundImage: "linear-gradient( 311deg , #4c0673 0%, #020e28)",
        }}
        // style="background-image: linear-gradient( 311deg , #4c0673 0%, #020e28);"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="text-white">
                <H2 style={{ color: "#fff" }}>
                  Extend Your Threshold in the Web3 Realm by Integrating Your
                  Venture in zkSync 2.0!
                </H2>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="text-center">
                <div className="d-flex gap-3 justify-content-center flex-wrap mt-5">
                  <Button
                    btnContent="Connect with Whatsapp"
                    to="https://api.whatsapp.com/send?l=en&text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&phone=916382665366"
                    target="_target"
                  />
                  <Button btnContent="Talk with our Experts" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecNine>
  );
};

export default Sec9;
