import React from "react";

const Sec7 = () => {
  return (
    <section className="cta_01">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12">
            <h2 className="text-left">
              Accelerate future crypto businesses with a ready-made IDO
              launchpad platform!
            </h2>
            <div className="mt10 text-left">
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
          <div className="col-lg-4" />
        </div>
      </div>
    </section>
  );
};

export default Sec7;
