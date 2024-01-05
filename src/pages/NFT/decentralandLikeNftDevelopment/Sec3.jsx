import React from 'react'

const Sec3 = () => {
  return (
    <div className="intro_cnt common_spacing gray_bg">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="section-title text-center">
            <h2 className="sec_tit underline">What is an NFT Marketplace?</h2>{" "}
          </div>
          <p className="mt10 text-center">
            Non-fungible Tokens are known as NFT, they are unique digital assets
            that cannot be interchanged since they hold a certain unique value for
            each token. In order to initiate the transaction process for NFTs, a
            special platform is required. It is called the NFT marketplace. Buying
            and selling of NFTs take place on this platform. It charges a gas fee
            for every transaction that takes place and the gas fees are paid in
            any form.{" "}
          </p>
        </div>
      </div>
      <div className="text-center cta_mine">
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
  </div>
  
  )
}

export default Sec3
