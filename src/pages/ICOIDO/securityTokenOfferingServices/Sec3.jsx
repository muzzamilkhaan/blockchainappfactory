import React from "react";

const Sec3 = () => {
  return (
    <section className="tech-points common_spacing">
      <div className="container">
        <div className="row">
          <h4 className="sec_tit underline text-center">
            Security Token Technology
          </h4>
          <p className="text-center">
            The Ethereum Blockchain with ERC-20 does not suffice the
            requirements of the securities backed tokens. The major issues
            include gas prices, congestion in the networks and protocol issues.
            To overcome the issues, Blockchain App Factory develops customized
            scalable blockchain and smart contracts to fit the requirements
            either on Ethereum or Hyperledger or Stellar.
          </p>
          <p className="text-center title-ptag">
            The following are the features :
          </p>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <ul
            id="nav-tabs-wrapper"
            className="nav nav-tabs nav-pills nav-stacked "
            style={{ justifyContent: "center", borderBottom: 0 }}
          >
            <li className="active">
              <a href="#vtab6" data-toggle="tab">
                <p>Legally Compliant Tokens</p>
              </a>
            </li>
            <li>
              <a href="#vtab7" data-toggle="tab">
                <p>Global Investor Participation</p>{" "}
              </a>
            </li>
            <li>
              <a href="#vtab8" data-toggle="tab">
                <p>Transparency</p>{" "}
              </a>
            </li>
            <li>
              <a href="#vtab9" data-toggle="tab">
                <p>Wallet</p>{" "}
              </a>
            </li>
            <div className="clearfix" />
          </ul>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="tab-content">
            <div role="tabpanel" className="tab-pane in active" id="vtab6">
              <div className="flex-sec">
                <div>
                  <div className="flex-sec_icon">
                    {" "}
                    <img src="./assets/images/icon-token1.svg" />
                  </div>
                  <h4>Legally Compliant Tokens</h4>
                  <p>
                    The tokens issued are embedded with smart contract which has
                    the regulations of the registered jurisdiction coded. These
                    include legal frameworks of fundraising, investor
                    qualification rules &amp; transaction limits on transfer.
                  </p>
                </div>
              </div>
            </div>
            <div role="tabpanel" className="tab-pane fade" id="vtab7">
              <div className="flex-sec">
                <div>
                  <div className="flex-sec_icon">
                    {" "}
                    <img src="images/sto/investor.svg" />
                  </div>
                  <h4>Global Investor Participation</h4>
                  <p>
                    Issuance companies face problems during secondary trading
                    when different countries are involved. Our tokens can be
                    traded across borders with the idea that the tokens issued
                    are securities and must comply with securities laws. The
                    token sales and secondary trading are developed with
                    conditionality on the smart contract.
                  </p>
                </div>
              </div>
            </div>
            <div role="tabpanel" className="tab-pane fade" id="vtab8">
              <div className="flex-sec">
                <div>
                  <div className="flex-sec_icon">
                    {" "}
                    <img src="images/sto/money.svg" />
                  </div>
                  <h4>Transparency</h4>
                  <p>
                    Blockchain ensures all the transactions including the
                    conditional are visible to the financial regulators. The
                    benefits of a transparent ecosystem will help the
                    cryptocurrency market under the purview of the government
                    regulation. The process of transfer agents are being
                    automated the entrepreneurs can raise funds in a simpler and
                    a cost effective way.
                  </p>
                </div>
              </div>
            </div>
            <div role="tabpanel" className="tab-pane fade" id="vtab9">
              <div className="flex-sec">
                <div>
                  <div className="flex-sec_icon">
                    {" "}
                    <img src="./assetsimages/.svg" />
                  </div>
                  <h4>Wallet</h4>
                  <p>
                    At Blockchain App Factory, we develop a technology which
                    allows the issuance companies to reissue tokens to the
                    investors if the investor loses their wallet keys subject to
                    terms and conditions. The wallet must compatible to the
                    legal requirements and investor must have the right to
                    reclaim his lost tokens.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contentall text-center">
          <a
            rel="nofollow"
            className="nectar-button medium regular accent-color regular-button nec-btn"
            target="_blank"
            href="https://api.whatsapp.com/send?l=en&text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&phone=916382665366"
            data-color-override="false"
            data-hover-color-override="false"
            data-hover-text-color-override="#fff"
          >
            <span>Connect with Whatsapp</span>
          </a>
          <a
            href="#newsletter-form-sec"
            rel="nofollow"
            className="nec-btn"
            style={{
              borderRadius: "30px !important",
              textTransform: "none !important",
            }}
          >
            Talk to Our Experts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sec3;
