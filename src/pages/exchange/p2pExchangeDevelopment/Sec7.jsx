import React from "react";
import { SecSeven, Sec6 } from "./p2pExchangeDevComp";
import { H2,Button } from "../../../components";

const Sec7 = () => {
  return (
    <SecSeven>
      <Sec6 backgroundColor="#f6f6f6">
        <div className="common_spacing gray_bg">
          <div className="container">
            <div className="row">
              <h2 className="sec_tit underline text-center">
                Our P2P exchange platform development process
              </h2>
            </div>
            <div className="col-md-12 mt30">
              <div className="timeline-center">
                <div className="timeline-row row m-0">
                  <div className="tm-detail tm-det tm-det-left">
                    <h4 className="common_h4 mb10 tm-det-tit">Step 1</h4>
                    <ul className="process-list">
                      <li>
                        <p>
                          Research, requirements gathering, and exchange
                          preparation that suits your business model.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="tm-icon roadmap-icon-outer">
                    {" "}
                    <i
                      className="fa fa-search-plus"
                      aria-hidden="true"
                    ></i>{" "}
                  </div>
                </div>
                <div className="timeline-row row m-0">
                  <div className="tm-detail tm-det tm-det-right">
                    <h4 className="mb10 common_h4 tm-det-tit">Step 2</h4>
                    <ul className="process-list">
                      <li>
                        <p>
                          {" "}
                          Essential technology integrations such as UX/UI
                          enhanced security with legal compliance based on the
                          geography of exchange corporation.{" "}
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="tm-icon roadmap-icon-outer">
                    {" "}
                    <i className="fa fa-desktop" aria-hidden="true"></i>{" "}
                  </div>
                </div>
                <div className="timeline-row row m-0">
                  <div className="tm-detail tm-det tm-det-left">
                    <h4 className="common_h4 mb10 tm-det-tit">Step 3</h4>
                    <ul className="process-list">
                      <li>
                        <p>Trading engine installation.</p>
                      </li>
                    </ul>
                  </div>
                  <div className="tm-icon roadmap-icon-outer">
                    {" "}
                    <i className="fa fa-cogs" aria-hidden="true"></i>{" "}
                  </div>
                </div>
                <div className="timeline-row row m-0">
                  <div className="tm-detail tm-det tm-det-right">
                    <h4 className="mb10 common_h4 tm-det-tit">Step 4</h4>
                    <ul className="process-list">
                      <li>
                        <p>
                          Integration of various blockchains into the platform.{" "}
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="tm-icon roadmap-icon-outer">
                    {" "}
                    <i className="fa fa-btc" aria-hidden="true"></i>{" "}
                  </div>
                </div>
                <div className="timeline-row row m-0">
                  <div className="tm-detail tm-det tm-det-left">
                    <h4 className="common_h4 mb10 tm-det-tit">Step 5</h4>
                    <ul className="process-list">
                      <li>
                        <p>Listing of tokens/ coins. </p>
                      </li>
                    </ul>
                  </div>
                  <div className="tm-icon roadmap-icon-outer">
                    {" "}
                    <i className="fa fa-list" aria-hidden="true"></i>{" "}
                  </div>
                </div>
                <div className="timeline-row row m-0">
                  <div className="tm-detail tm-det tm-det-right">
                    <h4 className="mb10 common_h4 tm-det-tit">Step 6</h4>
                    <ul className="process-list">
                      <li>
                        <p>Delivery of exchange platform.</p>
                      </li>
                    </ul>
                  </div>
                  <div className="tm-icon roadmap-icon-outer">
                    {" "}
                    <i className="fa fa-exchange" aria-hidden="true"></i>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="text-center"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              btnContent="Connect with Whatsapp"
              to="https://api.whatsapp.com/send?l=en&amp;text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&amp;phone=916382665366"
              target="_blank"
            />
          </div>
        </div>
      </Sec6>
    </SecSeven>
  );
};

export default Sec7;
