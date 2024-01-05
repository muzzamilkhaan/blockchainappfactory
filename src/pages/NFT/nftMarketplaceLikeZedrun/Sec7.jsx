import React from 'react'

const Sec7 = () => {
  return (
    <div className="intro_cnt common_spacing">
    <div className="container">
      <div className="section-title text-center underline">
        <div className="sec_tit">
          <h2>Griffin Race</h2>{" "}
        </div>
      </div>
      <p className="mt10 text-center para">
        After breeding the horse, the user can take part in the very first race of
        the where there are 12 slots available in which the first position will be
        awarded 4 points, the Second position will get 3 points, and the third
        position will get 2 points, and the fourth position will get 1 point. But
        the 9 to 12 th position will be depreciated in points.{" "}
      </p>
      <div className="text-center mt20">
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "\n.nec-btn{\n     position: relative !important;\n    color:#fff !important;\n    border-radius:30px !important;\n    font-size: 11px;\n    text-transform: uppercase !important;\n    transform: scale(1.1,1.1) !important;\n    transition:all 0.3s ease-out 0s !important;\n    background: #47b475 !important;\n}\n.nec-btn:hover{\n    transform: scale(1,1) !important;\n    color:#fff !important;\n    background:#00a9e2!important;\n}\na.nectar-button.medium.regular.accent-color.regular-button.nec-btn {\n    margin-bottom: 15px!important;\n    display: inline-block;\n    margin-right: 26px!important;\n}\n.contentall a, a.home-talk-experts{\n    padding: 10px 20px !important;\n}\n"
          }}
        />
        <div className="cta_mine">
          <a
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
            href="https://t.me/blockchain_appfactory"
            target="_blank"
            className="nectar-button medium regular accent-color regular-button nec-btn"
          >
            <span>Connect with Telegram</span>
          </a>
        </div>{" "}
      </div>
    </div>
  </div>
  
  )
}

export default Sec7
