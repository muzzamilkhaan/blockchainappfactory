import React from "react";

const Sec1 = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="row bannerTxt">
          <div className="col-md-10 col-md-offset-1 col-sm-6 col-xs-12">
            <div className="banner_cnt text-center">
              <h1>
                <span>Initial Exchange Offering (IEO)</span>
              </h1>
              <p>
                Your IEO Development &amp; Marketing Destination - Strategic
                Partnership with Top Exchanges!
              </p>
              <div className="ban_btn">
                <a
                  href="#newsletter-form-sec"
                  className="nectar-button medium regular accent-color regular-button nec-btn"
                >
                  <span>Talk with our Experts</span>
                </a>
                <a
                  href="#pricing_tabs"
                  className=" nectar-button medium regular accent-color regular-button nec-btn"
                  alt="IEO Development Services"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overlay" />
    </section>
  );
};

export default Sec1;
