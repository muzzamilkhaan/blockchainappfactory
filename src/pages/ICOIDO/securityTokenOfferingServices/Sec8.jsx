import React from 'react'

const Sec8 = () => {
  return (
    <section className="simple-slide gray-bg">
    <div className="container">
      <h2 className="sec_tit underline text-center">
        Security Token Issuance Platform
      </h2>
      <div className="card">
        <div className="products" style={{ height: 385 }}>
          <div className="product active" product-id={1} product-color="#D18B49">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                {" "}
                <h5 className="sec_tit underline text-center">
                  Investor Management Dashboards
                </h5>
                <img
                  src="./assets/images/sec-side42.webp"
                  alt="Investor Management Dashboards"
                  className="img-responsive box-shadow"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <ul className="list-ico text-justify">
                  <li>
                    <p>
                      The dashboard provided by us is an all in one platform for
                      you to manage the KYC/AML records, Accredited Investors,
                      Market Cap, Fund Raising and Investments.
                    </p>
                  </li>
                  <li>
                    <p>
                      You can engage with your investors through proactive
                      disclosures and mail them for openings in further rounds of
                      investments.
                    </p>
                  </li>
                  <li>
                    <p>
                      You can see audit trails, checklists, activities, standard
                      reporting process in a secure way.
                    </p>
                  </li>
                  <li>
                    <p>
                      Investors can manage their portfolio in an effective way.
                    </p>
                  </li>
                  <li>
                    <p>
                      All the announcements(voting, holdings, new offerings etc)
                      can be transmitted through the dashboard.
                    </p>
                  </li>
                  <li>
                    <p>
                      All the transactions of the security tokens can be
                      categorized through the Capable Management
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="product" product-id={2} product-color="#542F13">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <h5 className="sec_tit underline text-center">
                  Investor Management Dashboards
                </h5>
                <img
                  src="images/sto/sto-dashboard-2.webp"
                  alt="Investor Management Dashboards"
                  className="img-responsive box-shadow"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <ul className="list-ico text-justify">
                  <li>
                    <p>
                      The dashboard provides transparency to the Securities Token
                      Ecosystem.
                    </p>
                  </li>
                  <li>
                    <p>
                      Bylaws, Shareholder agreements, SAFT etc. are kept in one
                      safe location allowing consistent view across platforms.
                    </p>
                  </li>
                  <li>
                    <p>
                      Tracking shareholder management with an ability to download
                      and confirm messages, voting items and track responses.
                    </p>
                  </li>
                  <li>
                    <p>
                      Issuance companies can distribute and the investors can
                      track the dividends.
                    </p>
                  </li>
                  <li>
                    <p>Investors can also vote through the dashboard.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <a className="btn" id="prev" href="#" ripple="" ripple-color="#666666">
            Prev
          </a>
          <a className="btn" id="next" href="#" ripple="" ripple-color="#666666">
            Next
          </a>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Sec8
