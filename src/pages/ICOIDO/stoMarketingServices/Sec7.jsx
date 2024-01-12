import React from 'react'

const Sec7 = () => {
  return (
    <div
    className="col-md-12 section-header common_spacing gray_bg"
    id="marketing-strategy"
  >
    <div className="container">
      <div className="piller-individual">
        <div className="text-left">
          <h2 className="small_h1 section-title underline font-wei">
            STO Marketing Strategy
          </h2>
          <p>
            We have been through the ICO markets and have been successful in
            strategizing for the successful fundraising. Marketing starts with a
            Strategy. Without a strategy, a project cannot survive the test of
            time. In addition, we do strategy reviews to get more insights from
            the market for future marketing activities.
          </p>
          <p>A value-driven marketing strategy has the following benefits :</p>
          <ul className="ul-style-4 list_growth padding-zero">
            <li>
              <p>
                <i className="fa fa-check" aria-hidden="true" />
                Brings clarity, focus and direction to the project
              </p>
            </li>
            <li>
              <p>
                <i className="fa fa-check" aria-hidden="true" />
                Brings together a multi-functional team together to achieve a
                common goal
              </p>
            </li>
            <li>
              <p>
                <i className="fa fa-check" aria-hidden="true" />
                Develops systems, techniques for resources to deliver the vision
              </p>
            </li>
          </ul>
        </div>
        <div>
          <div className="board-shapes">
            <div className="board-bg">
              {" "}
              <img
                src="/images/sto-marketing/marketing-strategy.webp"
                alt="STO Marketing Strategy"
                title="STO Marketing Strategy"
                className="img-responsive"
              />{" "}
            </div>
            <div className="board-image">
              {" "}
              <img
                src="/images/sto-marketing/marketing-strategy.webp"
                alt="STO Marketing Strategy"
                title="STO Marketing Strategy"
                className="img-responsive"
              />{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "\n.nec-btn{\n    position: relative !important;\n    color:#fff !important;\n    border-radius:30px !important;\n    font-size: 11px;\n    text-transform: uppercase !important;\n    transform: scale(1.1,1.1) !important;\n    transition:all 0.3s ease-out 0s !important;\n    background: #47b475 !important;\n}\n.nec-btn:hover{\n    transform: scale(1,1) !important;\n    color:#fff !important;\n    background:#00a9e2!important;\n}\na.nectar-button.medium.regular.accent-color.regular-button.nec-btn {\n    margin-bottom: 15px!important;\n    display: inline-block;\n    margin-right: 26px!important;\n}\n.contentall a, a.home-talk-experts{\n\tpadding: 10px 20px !important;\n}\n"
          }}
        />
        <div className="cta_mine">
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

export default Sec7
