import React, { useState } from "react";

const Sec9 = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (index) => {
    // console.log("click");
    // console.log("activeTab:", activeTab);
    setActiveTab(activeTab === index ? null : index);
  };
  return (
    <section className="common_spacing">
      <div className="pricing-table" id="pricing-tabs">
        <div className="container">
          <div className="data">
            <div className="section-title">
              <h2 className="sec_tit underline text-center">
                {" "}
                Security Token Packages{" "}
              </h2>{" "}
            </div>
            <div className="accordion" id="accordion2">
              <table className="table-striped" style={{ width: "100%" }}>
                <tbody> </tbody>
                <thead>
                  <tr className="pr_pack">
                    <th rowSpan={1}>Legally Compliant Token Architecture</th>
                    <th>$20,000</th>
                    <th>$50,000</th>
                    <th>$90,000</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="theme-color-bg text-white" colSpan={4}>
                      Technology
                    </th>
                  </tr>
                  <tr>
                    <td>Custom Ethereum Token</td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/no.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/no.webp" />
                    </td>
                  </tr>
                  <tr>
                    <td>Own Blockchain</td>
                    <td>
                      <img src="./assets/images/no.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>Hyperledger Burrow</td>
                    <td>
                      <img src="./assets/images/no.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                  </tr>
                  <tr>
                    <td>Integrated Voting Rights Platform</td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                  </tr>
                  <tr>
                    <td>Token Wallet as per Regulatory Protocol</td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                  </tr>
                  <tr>
                    <td>Investor Managment Dashboard</td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                  </tr>
                  <tr>
                    <td>Automated KYC/AML Integration </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                  </tr>
                  <tr>
                    <td>Automated Accredited Investor Verification</td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                  </tr>
                  <tr>
                    <td>Stake Holder Registry</td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                  </tr>
                  <tr>
                    <td>Integrated Dividend Issuance Platform</td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                  </tr>
                  <tr>
                    <td>KYC/AML records Registry</td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                  </tr>
                  <tr>
                    <td>Accredited Investors Registry</td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                  </tr>
                  <tr>
                    <td>Market Capitalization Details</td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                  </tr>
                  <tr>
                    <td>Funds Raised &amp; Investment Details</td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                  </tr>
                  <tr>
                    <td>Integrated Help Desk on Dashboard</td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                  </tr>
                  <tr>
                    <td>Audit Reports &amp; Checklists </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                  </tr>
                  <tr>
                    <td>Portfolio Management for Investors</td>
                    <td>
                      <img src="./assets/images/no.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                  </tr>
                  <tr>
                    <td>Announcements within Dashboard</td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                  </tr>
                  <tr>
                    <td>Uploading Legal Documents &amp; Disclaimers</td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                  </tr>
                  <tr>
                    <td>Investor Prospectus</td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                  </tr>
                  <tr>
                    <td>Whitepaper (Owner's Manual) </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                  </tr>
                  <tr>
                    <td>Customized Website </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                    <td>
                      <img src="./assets/images/yes.webp" />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="accordion-group">
                <div className="accordion-heading">
                  {" "}
                  <a
                    className={`accordion-toggle tab_high ${
                      activeTab === 0 ? "active" : ""
                    }`}
                    onClick={() => handleTabClick(0)}
                    data-toggle="collapse"
                    data-parent="#accordion2"
                    href="#collapseOne"
                  >
                    {" "}
                    Legal &amp; Regulations{" "}
                  </a>{" "}
                </div>
                <div
                  id="collapseOne"
                  className={`accordion-body collapse ${
                    activeTab === 0 ? "in" : ""
                  }`}
                >
                  <div className="accordion-inner">
                    <table className="table-striped" style={{ width: "100%" }}>
                      <tbody>
                        <tr>
                          <td>Preliminary Checks </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                        </tr>
                        <tr>
                          <td>Development of Documents</td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                        </tr>
                        <tr>
                          <td>Customized Website </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                        </tr>
                        <tr>
                          <td>Token Purchase Agreement</td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                        </tr>
                        <tr>
                          <td>Development of the Token’s Legal Structure</td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Disclaimers for the website and marketing materials
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                        </tr>
                        <tr>
                          <td>Token Crowdsale Terms</td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Private Placement Agreement with Private Investors
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                        </tr>
                        <tr>
                          <td>Legal Opinion on the Sale of Tokens</td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                        </tr>
                        <tr>
                          <td>SAFT Agreement</td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                        </tr>
                        <tr>
                          <td>Token Purchase Agreement</td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                        </tr>
                        <tr>
                          <td>Company Valuation Audit</td>
                          <td>
                            <img src="./assets/images/no.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="accordion-group">
                <div className="accordion-heading">
                  {" "}
                  <a
                    className={`accordion-toggle tab_high ${
                      activeTab === 1 ? "active" : ""
                    }`}
                    onClick={() => handleTabClick(1)}
                    data-toggle="collapse"
                    data-parent="#accordion2"
                    href="#collapseTwo"
                  >
                    {" "}
                    Incorporation - Pre STO{" "}
                  </a>{" "}
                </div>
                <div
                  id="collapseTwo"
                  className={`accordion-body collapse ${
                    activeTab === 1 ? "in" : ""
                  }`}
                >
                  <div className="accordion-inner">
                    <table className="table-striped" style={{ width: "100%" }}>
                      <tbody>
                        <tr>
                          <td>Establishment of the holding company in Malta</td>
                          <td>
                            <img src="./assets/images/no.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                          <td>-</td>
                        </tr>
                        <tr>
                          <td>Establishment of the holding company in USA</td>
                          <td>
                            <img src="./assets/images/no.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/no.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                        </tr>
                        <tr>
                          <td>Establishment of the Maltese trading company</td>
                          <td>
                            <img src="./assets/images/no.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                          <td>-</td>
                        </tr>
                        <tr>
                          <td>Establishment of the USA trading company</td>
                          <td>
                            <img src="./assets/images/no.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/no.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                        </tr>
                        <tr>
                          <td>Registration of the Operation Company</td>
                          <td>
                            <img src="./assets/images/no.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Legal Agreements between Holding and Main
                            Operational Company
                          </td>
                          <td>
                            <img src="./assets/images/no.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                        </tr>
                        <tr>
                          <td>Local Directors if Required</td>
                          <td>
                            <img src="./assets/images/no.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                        </tr>
                        <tr>
                          <td>Registered Office</td>
                          <td>
                            <img src="./assets/images/no.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                        </tr>
                        <tr>
                          <td>Tax Compliance</td>
                          <td>
                            <img src="./assets/images/no.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                        </tr>
                        <tr>
                          <td>Application of Licenses</td>
                          <td>
                            <img src="./assets/images/no.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="accordion-group">
                <div className="accordion-heading">
                  {" "}
                  <a
                    // className="accordion-toggle tab_high"
                    data-toggle="collapse"
                    data-parent="#accordion2"
                    href="#collapseThree"
                    className={`accordion-toggle tab_high ${
                      activeTab === 2 ? "active" : ""
                    }`}
                    onClick={() => handleTabClick(2)}
                  >
                    {" "}
                    During STO{" "}
                  </a>{" "}
                </div>
                <div
                  id="collapseThree"
                  className={`accordion-body collapse ${
                    activeTab === 2 ? "in" : ""
                  }`}
                >
                  <div className="accordion-inner">
                    <table className="table-striped" style={{ width: "100%" }}>
                      <tbody>
                        <tr>
                          <td>Liaise with MFSA &amp; MDIA for Compliance</td>
                          <td>
                            <img src="./assets/images/no.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                          <td>-</td>
                        </tr>
                        <tr>
                          <td>Liaise with SEC for Compliance</td>
                          <td>
                            <img src="./assets/images/no.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/no.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="accordion-group">
                <div className="accordion-heading">
                  {" "}
                  <a
                    // className="accordion-toggle tab_high"
                    data-toggle="collapse"
                    data-parent="#accordion2"
                    href="#collapseFour"
                    className={`accordion-toggle tab_high ${
                      activeTab === 3 ? "active" : ""
                    }`}
                    onClick={() => handleTabClick(3)}
                  >
                    {" "}
                    Post STO{" "}
                  </a>{" "}
                </div>
                <div
                  id="collapseFour"
                  className={`accordion-body collapse ${
                    activeTab === 3 ? "in" : ""
                  }`}
                >
                  <div className="accordion-inner">
                    <table className="table-striped" style={{ width: "100%" }}>
                      <tbody>
                        <tr>
                          <td>Accounting &amp; Book Keeping</td>
                          <td>
                            <img src="./assets/images/no.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                          <td>
                            <img src="./assets/images/yes.webp" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <table className="table-striped" style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td style={{ padding: "20px 0px" }}>&nbsp;</td>
                    <td className="btnpro">
                      <a
                        type="button"
                        className=""
                        data-toggle="modal"
                        data-target="#myModal"
                      >
                        Order Now
                      </a>
                    </td>
                    <td className="btnpro">
                      <a
                        type="button"
                        className=""
                        data-toggle="modal"
                        data-target="#myModal1"
                      >
                        Order Now
                      </a>
                    </td>
                    <td className="btnpro">
                      <a
                        type="button"
                        className=""
                        data-toggle="modal"
                        data-target="#myModal2"
                      >
                        Order Now
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec9;
