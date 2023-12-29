import React from "react";
import { SecFourTeen } from "./nftDevelopmentServicesComp";
import { H2, Button } from "../../../components";

const Sec14 = () => {
  return (
    <SecFourTeen>
      <section className="common_spacing gray_bg" id="get">
        <div className="container">
          <div className="section-title text-center">
            <div className="sec_tit mb20">
              <div className="section-title underline mb20">
                <H2> Our NFT Development Service Packages </H2>
              </div>
            </div>
          </div>
          <div className="container-center">
            <div className="col-md-4 equalize">
              <div className="d_card bg1">
                <div className="content">
                  <h3 className="heading">NFT Based ICO Development</h3>
                  <p className="data-content">
                    Investors and business owners are striving to build an NFT
                    platform to reap the benefits of NFTs. We understand our
                    customers and offer an immediate fundraising opportunity by
                    launching ICOs for the startups.{" "}
                  </p>
                  <div className="text-center mt10">
                    <div className="d-flex justify-content-center flex-wrap gap-3 ">
                      <Button
                        btnContent="Get Quote"
                        to="#newsletter-form-sec"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 equalize">
              <div className="d_card bg2">
                <div className="content">
                  <h3 className="heading">
                    NFT Development: ICO + Marketplace
                  </h3>
                  <p className="data-content">
                    We offer an immediate fundraising opportunity by launching
                    and distributing ICOs as utility tokens for your marketplace
                    development. This offers instant financial support to
                    develop your NFT marketplace.{" "}
                  </p>
                  <div className="text-center mt10">
                    <div className="d-flex justify-content-center flex-wrap gap-3 ">
                      <Button
                        btnContent="Get Quote"
                        to="#newsletter-form-sec"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 equalize">
              <div className="d_card bg3">
                <div className="content">
                  <h3 className="heading">
                    NFT Development: ICO + MarketPlace + Governance Token
                  </h3>
                  <p className="data-content">
                    Our development assists your platform’s with the community
                    by offering governance tokens to the community. where the
                    token holders can vote their suggestion for the empowerment
                    of Marketplace{" "}
                  </p>
                  <div className="text-center mt10">
                    <div className="d-flex justify-content-center flex-wrap gap-3 ">
                      <Button
                        btnContent="Get Quote"
                        to="#newsletter-form-sec"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 equalize">
              <div className="d_card bg4">
                <div className="content">
                  <h3 className="heading">
                    NFT Development: ICO + Exchange Platform
                  </h3>
                  <p className="data-content">
                    We offer an immediate fundraising opportunity by launching
                    and distributing ICOs as utility tokens for the NFT exchange
                    platform development. The platform offers immediate
                    liquidity for your NFTs.
                  </p>
                  <div className="text-center mt10">
                    <div className="d-flex justify-content-center flex-wrap gap-3 ">
                      <Button
                        btnContent="Get Quote"
                        to="#newsletter-form-sec"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 equalize">
              <div className="d_card bg5">
                <div className="content">
                  <h3 className="heading">Custom NFT Development</h3>
                  <p className="data-content">
                    As the NFTs unlock the possibilities of digital
                    representation of unique assets with crazy innovation,
                    building a customised NFT marketplace for your business
                    requirements is the right choice to adapt the evolution of
                    NFTs in all aspects.{" "}
                  </p>
                  <div className="text-center mt10">
                    <div className="d-flex justify-content-center flex-wrap gap-3 ">
                      <Button
                        btnContent="Get Quote"
                        to="#newsletter-form-sec"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="text-center mt40">
            <div className="cta_mine">
              <a
                href="#newsletter-form-sec"
                className="nectar-button medium regular accent-color regular-button nec-btn"
              >
                <span>Talk with our Experts</span>
              </a>{" "}
            </div>
          </div>
        </div>
      </section>
    </SecFourTeen>
  );
};

export default Sec14;
