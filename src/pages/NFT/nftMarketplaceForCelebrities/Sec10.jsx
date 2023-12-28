import React from "react";
import { SecTen } from "./nftMarketplaceForCelebritiesComp";
import { H2 } from "../../../components";

const Sec10 = () => {
  return (
    <SecTen>
      <section className="common_spacing">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <div className="section-title underline mb20 text-center font-wei">
                <H2> Features of our Celebrity NFT Platform </H2>
              </div>{" "}
            </div>
          </div>
          <div className="row gx-md-8 gx-xl-12 gy-10 align-items-center mt-20">
            <div className="col-lg-6">
              {" "}
              <img
                className="rounded-border"
                src="https://www.blockchainappfactory.com/images/cele/feature-celebrity.webp"
                alt="Celebrity NFT Marketplace Development"
                title="Celebrity NFT Marketplace Development"
              />{" "}
            </div>

            <div className="col-lg-6 order-lg-2">
              <div className="card me-lg-6">
                <div className="card-body p-6">
                  <div className="d-flex flex-row">
                    <div className="fle-text1">
                      {" "}
                      <span className="icon btn btn-circle btn-lg btn-soft-primary disabled me-4">
                        <span className="number">01</span>
                      </span>
                    </div>
                    <div className="fle-text">
                      <h5>Smart Contract Process</h5>
                      <p className="mt-5">
                        We incorporate smart contracts in our platform to
                        automate the process and provide utmost security to the
                        users.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card me-lg-6 mt-6">
                <div className="card-body p-6">
                  <div className="d-flex flex-row">
                    <div className="fle-text1">
                      {" "}
                      <span className="icon btn btn-circle btn-lg btn-soft-primary disabled me-4">
                        <span className="number">02</span>
                      </span>
                    </div>
                    <div className="fle-text">
                      <h5>Multifarious Mode of Payments</h5>
                      <p className="mt-5">
                        The platform can be designed in a way to accept both
                        cryptocurrency and fiat currency to increase adoption.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mx-lg-6 mt-6">
                <div className="card-body p-6">
                  <div className="d-flex flex-row">
                    <div className="fle-text1">
                      {" "}
                      <span className="icon btn btn-circle btn-lg btn-soft-primary disabled me-4">
                        <span className="number">03</span>
                      </span>
                    </div>
                    <div className="fle-text">
                      <h5>Splendid Interface</h5>
                      <p className="mt-5">
                        The marketplace is meticulously crafted with an engaging
                        user interface to make the participants have a seamless
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mx-lg-6 mt-6">
                <div className="card-body p-6">
                  <div className="d-flex flex-row">
                    <div className="fle-text1">
                      {" "}
                      <span className="icon btn btn-circle btn-lg btn-soft-primary disabled me-4">
                        <span className="number">04</span>
                      </span>
                    </div>
                    <div className="fle-text">
                      <h5>AML/KYC Compliance</h5>
                      <p className="mt-5">
                        The platform can also be incorporated with AML/KYC
                        features if required to verify the participants.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mx-lg-6 mt-6">
                <div className="card-body p-6">
                  <div className="d-flex flex-row">
                    <div className="fle-text1">
                      {" "}
                      <span className="icon btn btn-circle btn-lg btn-soft-primary disabled me-4">
                        <span className="number">05</span>
                      </span>
                    </div>
                    <div className="fle-text">
                      <h5>Smart Dashboard</h5>
                      <p className="mt-5">
                        We provide you with advanced and sophisticated dashboard
                        features to easily track data/information.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SecTen>
  );
};

export default Sec10;
