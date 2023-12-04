import React from 'react'
import WeSpotlightedIn from '../../../components/shared/WeSpotlightedIn'

function Sec2() {
  return (
    <section className="product-section p-50 gray_bg" id="coinexchange-section">
    <div className="container">
      <div className="section-top ">
        <div className="section-header text-center ">
          <h3 className="section-title mt20 underline sec-tit">
            Our Cryptocurrency Exchange App Development Products
          </h3>
          <p className="text-center">
            Create an extensive customized cryptocurrency exchange app software
            built by <br />
            our dedicated and seasoned Blockchain engineers for easy transaction
            solutions.{" "}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12 padding-10"> </div>
        <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12 padding-10"> </div>
      </div>
      <div className="row view_demo_sec">
        <div className="col-lg-6 col-sm-12 col-md-6 col-xs-12">
          <h4 className=" mt20 text-center text-bold">
            Coinbase Like <br />
            Controlled Exchange
          </h4>
          <img
            data-src="./assets/images/demo1.webp"
            className="img-responsive"
            alt="Coinbase Like Controlled Exchange Demo"
            title="Coinbase Like Controlled Exchange Demo"
            src="./assets/images/demo1.webp"
          />
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6 col-xs-12 pt20">
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
              defaultValue="https://www.blockchainappfactory.com/cryptocurrency-exchange-software"
            />
          </form>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Sec2