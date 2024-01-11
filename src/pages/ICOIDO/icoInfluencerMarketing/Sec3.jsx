import React from "react";

const Sec3 = () => {
  return (
    <section id="our_services" className="gray_bg">
      <div className="container">
        <div className="row">
          <h3 className="sec_tit underline text-center">
            Our ICO Influencer Marketing Strategies Include
          </h3>
        </div>
        <div className="row">
          <div className="grids">
            <div className="grid col-md-6 col-sm-6">
              <div className="feature-box-3">
                <div className="icon">
                  {" "}
                  <img src="./assets/images/icon-128.svg" />{" "}
                </div>
                <h4 className="feature-title">
                  Targeting well-known social networks
                </h4>
                <p className="feature-desc">
                  Since social media is abundantly filled with tons of posts by
                  cryptocurrency interested audiences. If a popular influencer
                  uses these channels, the viewership and engagement will break
                  new records.{" "}
                </p>
              </div>
            </div>
            <div className="grid col-md-6 col-sm-6">
              <div className="feature-box-3">
                <div className="icon">
                  {" "}
                  <img src="./assets/images/icon-129.svg" />{" "}
                </div>
                <h4 className="feature-title">Sharing blogs and articles</h4>
                <p className="feature-desc">
                  As the digital world relies on sensationalism, publishing
                  news-related content is the latest strategy to gain higher
                  traction. Content marketers who have proven experience can
                  curate content and ensure that regular interaction occurs.
                </p>
              </div>
            </div>
            <div className="grid col-md-6 col-sm-6 ">
              <div className="feature-box-3">
                <div className="icon">
                  {" "}
                  <img src="./assets/images/icon-130.svg" />{" "}
                </div>
                <h4 className="feature-title">Community management</h4>
                <p className="feature-desc">
                  Communities are the heartthrob that drive the craze of
                  cryptocurrencies. Respected ICO influencers can ensure popular
                  opinion and establish a solid brand reputation among the
                  members of a community.{" "}
                </p>
              </div>
            </div>
            <div className="grid col-md-6 col-sm-6">
              <div className="feature-box-3">
                <div className="icon">
                  {" "}
                  <img src="./assets/images/icon-131.svg" />{" "}
                </div>
                <h4 className="feature-title">Hiring agencies</h4>
                <p className="feature-desc">
                  {" "}
                  Famous agencies who have gone ground-breaking work in social
                  media management, PR, SEO, and advertising are also tapped for
                  undertaking strategic promotional activities.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt10">
          <style
            type="text/css"
            dangerouslySetInnerHTML={{
              __html:
                "\n.nec-btn{\n     position: relative !important;\n    color:#fff !important;\n    border-radius:30px !important;\n    font-size: 11px;\n    text-transform: uppercase !important;\n    transform: scale(1.1,1.1) !important;\n    transition:all 0.3s ease-out 0s !important;\n    background: #47b475 !important;\n}\n.nec-btn:hover{\n    transform: scale(1,1) !important;\n    color:#fff !important;\n    background:#00a9e2!important;\n}\na.nectar-button.medium.regular.accent-color.regular-button.nec-btn {\n    margin-bottom: 15px!important;\n    display: inline-block;\n    margin-right: 26px!important;\n}\n.contentall a, a.home-talk-experts{\n\tpadding: 10px 20px !important;\n}\n",
            }}
          />
          <div className="cta_mine">
            <a
              href="#newsletter-form-sec"
              className="nectar-button medium regular accent-color regular-button nec-btn"
            >
              <span>Talk with our Experts</span>
            </a>
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default Sec3;
