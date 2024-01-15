import React from 'react'

const Sec12 = () => {
  return (
    <section className="cta_03" id="demo">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <h2 className="text-center">
            Look Around Our Whitelabel IDO Launchpad
          </h2>
          <p className="text-center">
            Our seamless Whitelabel IDO launchpad platform assists in effortless
            fundraising campaigns, while costing you a little of your time and
            monetary sources.
          </p>
          <div className="mt10 text-center"></div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
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
              defaultValue="https://www.blockchainappfactory.com/white-label-ido-launchpad"
            />
          </form>
        </div>
        <div className="col-lg-4" />
      </div>
    </div>
  </section>
  
  )
}

export default Sec12
