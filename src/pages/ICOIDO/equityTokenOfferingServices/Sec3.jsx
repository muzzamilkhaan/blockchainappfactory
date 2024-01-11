import React from "react";

const Sec3 = () => {
  return (
    <section className="common_spacing gray_bg">
      <div className="container">
        <div className="row">
          <h3 className="sec_tit underline text-center">
            Types of Equity Tokens
          </h3>
        </div>
        <div className="row mt40">
          <div className="col-lg-6">
            <h4 className="equity_tit underline">Dilutable Tokens</h4>
            <p className="text-justify">
              You can authorize to create a lot of stock, however, release on a
              part of it to the investors and shareholders. The remaining
              unissued stocks can be used for later sale. Only when all unissued
              shares are sold is when the existing shareholders have diluted
              their shares. The number of tokens represents the number of shares
              in the company which is etched on a smart contract. As the company
              grows the stake held by the investor reduces, however, the stake
              is more valuable.{" "}
            </p>
            <h4 className="equity_tit underline">Non-Dilutable Tokens</h4>
            <p className="text-justify">
              Each token is equal to a percentage share on the company forever.
              The investor holds the percentage of the company, as long as the
              token is his/her wallet. The anti-dilution premium is added as an
              insurance, for the investor to remain in the company without
              diluting their assets. The provides an opportunity to get a future
              value at the present. Dilutable equity tokens are recommended
              instead of non-dilutable tokens.{" "}
            </p>
          </div>
          <div className="col-lg-6 col-xs-12">
            <img className="mt40" src="./assets/images/sec-side38.webp" />
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
