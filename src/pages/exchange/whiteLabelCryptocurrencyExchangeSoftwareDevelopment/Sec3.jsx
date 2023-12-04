import React from 'react'

function Sec3() {
  return (
    <section className="product-section gray_bg p-50" id="coinexchange-section">
  <div className="container">
    <div className="section-top ">
      <div className="section-header text-center ">
        <h3 className="sec_tit underline mt20">
          White Label Cryptocurrency Exchange Products Demo
        </h3>
      </div>
    </div>
    <div className="row view_demo_sec">
      <div className="col-lg-6 col-sm-12 col-md-6 col-xs-12 padding-10">
        <h4 className=" mt20 text-center text-bold">
          Customised Binance Competitor
        </h4>{" "}
        <img
          data-src="./assets/images/coinage.webp"
          className="img-responsive lazy"
          alt="White Label Cryptocurrency Exchange Development Services"
          title="White Label Cryptocurrency Exchange Development Services"
          src="./assets/images/coinage.webp"
        />
      </div>
      <div className="col-lg-6 col-sm-12 col-md-6 col-xs-12 padding-10 pt30">
        <form
          className="form-side"
          id=" "
          method="post"
          action=""
          style={{ background: "#2a2a2a", borderRadius: 7, padding: 20 }}
        >
          <h4 className="text-white">Need Demo?</h4>
          <hr />
          <div className="form-group">
            <label htmlFor="email" className="text-white">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email_sticky"
              placeholder="Your Email"
            />{" "}
          </div>
          <div className="form-group">
            <label className="text-white">messages</label>
            <textarea
              placeholder=" Write text here..."
              id="textarea_sticky"
              name="message"
              defaultValue={""}
            />
          </div>
          <div className="form-group">
            <input
              type="button"
              id="submit"
              className="demo_submit"
              defaultValue="Request Demo"
              style={{ maxWidth: 200 }}
            />{" "}
          </div>
          <input
            type="hidden"
            name="page_url"
            id="page_url"
            defaultValue="https://www.blockchainappfactory.com/white-label-cryptocurrency-exchange-software-development"
          />
        </form>
      </div>
    </div>
  </div>
</section>

  )
}

export default Sec3