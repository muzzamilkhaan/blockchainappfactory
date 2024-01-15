import React, { useState } from "react";

const Sec15 = () => {
  const [activeTab, setActiveTab] = useState("Zeroswap");
  const handleTabClick = (e, tabName) => {
    e.preventDefault();
    setActiveTab(tabName);
  };
  return (
    <section className="common_spacing">
      <div className="container">
        <div className="row">
          <div className="col-md-12 section-header text-center">
            <h2 className="common_h2 section-title underline font-wei">
              IDO Launchpad Projects
            </h2>
            <p className="text-center">
              Launchpads are initiating access to digital investment by
              providing early access to a high number of people. When executed
              effectively, designed with teams and investors in mind, IDO
              launchpads can offer successful token issuance events in the
              platform.Some examples of IDO launchpad projects,
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-md-2" />
          <div className="col-md-8 col-lg-8">
            <div className="tab" role="tabpanel">
              <ul className="nav nav-tabs" role="tablist">
                <li
                  role="presentation"
                  className={activeTab === "Zeroswap" ? "active" : ""}
                >
                  <a
                    href="#"
                    onClick={(e) => handleTabClick(e,"Zeroswap")}
                    aria-controls="home"
                    role="tab"
                  >
                    Zeroswap
                  </a>
                </li>
                <li
                  role="presentation"
                  className={activeTab === "DAO Maker" ? "active" : ""}
                >
                  <a
                    href="#"
                    onClick={(e) => handleTabClick(e,"DAO Maker")}
                    aria-controls="profile"
                    role="tab"
                  >
                    DAO Maker
                  </a>
                </li>
                <li
                  role="presentation"
                  className={activeTab === "Trustswap" ? "active" : ""}
                >
                  <a
                    href="# "
                    onClick={(e) => handleTabClick(e,"Trustswap")}
                    aria-controls="messages"
                    role="tab"
                  >
                    Trustswap
                  </a>
                </li>
              </ul>
              <div className="tab-content tabs">
                <div
                  role="tabpanel"
                  className={`tab-pane fade ${
                    activeTab === "Zeroswap" ? "in active" : ""
                  }`}
                >
                  <h3>Zeroswap</h3>
                  <p>
                    Zeroswap is a multi-chain reconcilable decentralized
                    exchange initiator protocol concentrated on creating
                    zero-fee transactions possible. Zeroswap provides economical
                    trades with gasless transactions by making use of
                    transaction fee mining. A unanimous governance mechanism is
                    introduced in this platform to adapt to a decentralized
                    network as it changes over time and most importantly it
                    allows access to liquidity on multi chains from all
                    decentralized liquidity investors.
                  </p>
                </div>
                <div
                  role="tabpanel"
                  className={`tab-pane fade ${
                    activeTab === "DAO Maker" ? "in active" : ""
                  }`}
                >
                  <h3>DAO Maker</h3>
                  <p>
                    DAO Maker is a launchpad platform designed for retail
                    ventures who are looking for investing in equity and tokens.
                    By using this launchpad platform, it reduces the risk of
                    funding via DAO Maker for both investors and start-ups.
                  </p>
                </div>
                <div
                  role="tabpanel"
                  className={`tab-pane fade ${
                    activeTab === "Trustswap" ? "in active" : ""
                  }`}
                >
                  <h3>Trustswap</h3>
                  <p>
                    Trustswap is a type of IDO Launchpad that specializes in
                    decentralized finance transactions rectifying primary
                    problems with split payments, subscriptions, and cross-chain
                    token swaps. This launchpad allows the developers to accept
                    payments for subscriptions at ease where both the parties at
                    the end can trust that the payments are processed in a
                    timely manner. This platform is vital for the investment
                    sector as token distributions are split into portions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec15;
