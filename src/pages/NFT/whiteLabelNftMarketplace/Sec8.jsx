import React from 'react'

function Sec8() {
  return (
    <section
  className="common_spacing bg-grey"
  id="viewdemo"
  style={{ border: "1px solid #eee" }}
>
  <div className="container">
    <div className="row">
      <div className="col-lg-8 col-lg-offset-2 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
        <div className="section-title text-center">
          <h2 className="sec_tit underline mb20">
            Watch Our Whitelabel NFT Marketplace Demo
          </h2>
          <p>
            Dive In, Experience our craftsmanship with our Interactive product
            demo
          </p>
        </div>
        <div className="text-center">
          {" "}
          <img
            className="rnd_img"
            alt="NFT Marketplace Demo"
            title="Watch Our NFT Marketplace Demo"
            data-src="./assets/images/nft-view-demo3.webp"
            width="100%"
            height="100%"
            src="./assets/images/nft-view-demo3.webp"
          />{" "}
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-offset-2 col-lg-8 col-md-offset-3 col-md-6 col-sm-12 text-center">
        <div className="solution_calltoaction mt20" id="solution_div">
          <a
            href="https://nft.bafdemo.com/"
            className="new_lanbtn res_btn_new_lan"
          >
            Live Demo
          </a>{" "}
          &nbsp;&nbsp;
          <a href="#newsletter-form-sec" className="new_lanbtn">
            Talk with our Experts
          </a>{" "}
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Sec8