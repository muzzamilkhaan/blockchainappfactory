import React from 'react'

const Sec5 = () => {
  return (
    <section className="pros-trading common_spacing gray_bg">
    <div className="container">
      <div className="row">
        <h4 className="sec_tit underline text-center">Benefits</h4>
      </div>
      <div className="row mt20">
        <div className="flip-box-row eto-exchange-flip">
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="flip-box">
              <div className="flip-icon-outer">
                {" "}
                <img src="./assets/images/icon-148.svg" className="flip-icon" />{" "}
              </div>
              <h5 className="flip-tit">Automated Dividends</h5>
              <p className="flip-txt">
                The dividends from the investments will be automatically
                transferred to the investor’s wallet. The wallet is secured on the
                blockchain with Elliptic Curve Cryptography.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="flip-box">
              <div className="flip-icon-outer">
                {" "}
                <img src="./assets/images/icon-149.svg" className="flip-icon" />{" "}
              </div>
              <h5 className="flip-tit">Voting rights</h5>
              <p className="flip-txt">
                Similar to the shareholders, the equity token holders have the
                right to vote in the decisions of the company, hence ensuring
                transparency.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="flip-box">
              <div className="flip-icon-outer">
                {" "}
                <img src="./assets/images/icon-150.svg" className="flip-icon" />{" "}
              </div>
              <h5 className="flip-tit">Profit share rights</h5>
              <p className="flip-txt">
                You can share the profits of the company with the token holders in
                the form of tokens, by directly depositing into the investor’s
                wallet.
              </p>
            </div>
          </div>
        </div>
        <div className="flip-box-row eto-exchange-flip">
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="flip-box">
              <div className="flip-icon-outer">
                {" "}
                <img src="./assets/images/icon-151.svg" className="flip-icon" />{" "}
              </div>
              <h5 className="flip-tit">Buyback rights</h5>
              <p className="flip-txt">
                The company buys the shares from the investors at the market
                price, hence re-absorbing part of the ownership distributed to the
                investors.{" "}
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="flip-box">
              <div className="flip-icon-outer">
                {" "}
                <img src="./assets/images/icon-151.svg" className="flip-icon" />{" "}
              </div>
              <h5 className="flip-tit">Cash flow</h5>
              <p className="flip-txt">
                The company’s cash flow per share is on the smart contract, making
                it immutable. The company can be transparent about its earnings,
                per token, with its investors.{" "}
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="flip-box">
              <div className="flip-icon-outer">
                {" "}
                <img src="./assets/images/icon-151.svg" className="flip-icon" />{" "}
              </div>
              <h5 className="flip-tit">Holdings in another fund</h5>
              <p className="flip-txt">
                The equity tokens can be deposited into a fund or with a custodian
                service who can handle or hedge the funds in an efficient way.{" "}
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
              "\n.nec-btn{\n     position: relative !important;\n    color:#fff !important;\n    border-radius:30px !important;\n    font-size: 11px;\n    text-transform: uppercase !important;\n    transform: scale(1.1,1.1) !important;\n    transition:all 0.3s ease-out 0s !important;\n    background: #47b475 !important;\n}\n.nec-btn:hover{\n    transform: scale(1,1) !important;\n    color:#fff !important;\n    background:#00a9e2!important;\n}\na.nectar-button.medium.regular.accent-color.regular-button.nec-btn {\n    margin-bottom: 15px!important;\n    display: inline-block;\n    margin-right: 26px!important;\n}\n.contentall a, a.home-talk-experts{\n\tpadding: 10px 20px !important;\n}\n"
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
  
  )
}

export default Sec5
