import React from 'react'

function Sec8() {
  const data = [
    {
      title: 'How are the BRC-20 tokens traded?',
      desc: `For trading a BRC-20 token, you can start by integrating a
      Bitcoin wallet to create an account. Here, you can store the
      tokens after minting directly on the blockchain for easy trade
      using the ordinal protocol and data inscription.`
    }
  ]
  return (
    // <Faq data={data} className={'common_spacing gray_bg'}/>
    <div className="product-section fag_sec p-50">
    <div className="container">
      <div className="row">
        <h5 className="sec_tit underline mt20 text-center">FAQ</h5>{" "}
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-12">
          <div className="faq-content">
            <div
              className="panel-group"
              id="accordion"
              role="tablist"
              aria-multiselectable="true"
            >
              <div className="panel panel-default">
                <div className="panel-heading" role="tab">
                  <h6 className="panel-title">
                    <a
                      className=""
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#faq1"
                    >
                      <span> What is White label exchange software?</span>
                    </a>
                  </h6>{" "}
                </div>
                <div
                  id="faq1"
                  className="panel-collapse collapse in"
                  role="tabpanel"
                  aria-labelledby="headingOne"
                >
                  <div className="panel-body">
                    {" "}
                    It is a ready-made solution with customized features according
                    to your business requirements. It is more beneficial than
                    developing software from scratch.{" "}
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab">
                  <h6 className="panel-title">
                    <a
                      className="collapsed"
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#faq2"
                    >
                      <span>
                        How should I promote my white-label cryptocurrency
                        exchange to have a wide reach?{" "}
                      </span>
                    </a>
                  </h6>{" "}
                </div>
                <div
                  id="faq2"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="headingTwo"
                >
                  <div className="panel-body">
                    You can promote your Whitelabel cryptocurrency exchange to a
                    wider audience using a strategic marketing campaign. Our
                    marketing professionals can help you in this regard as they
                    are experienced in using various crypto marketing strategies
                    to reach target audiences.{" "}
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab">
                  <h6 className="panel-title">
                    <a
                      className="collapsed"
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#faq3"
                    >
                      <span>
                        How do white label bitcoin exchanges make money?{" "}
                      </span>
                    </a>
                  </h6>{" "}
                </div>
                <div
                  id="faq3"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="headingThree"
                >
                  <div className="panel-body">
                    They have plenty of revenue sources through commission imposed
                    on trading, listing fees, fund collection, and display of
                    advertisements on the platform.{" "}
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab">
                  <h6 className="panel-title">
                    <a
                      className="collapsed"
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#faq4"
                    >
                      <span>
                        {" "}
                        How much does it cost to develop a white label bitcoin
                        exchange software?
                      </span>
                    </a>
                  </h6>{" "}
                </div>
                <div
                  id="faq4"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="headingFour"
                >
                  <div className="panel-body">
                    It depends on various factors such as the requirements of the
                    client, time spent on development, skillsets of the team,
                    features demanded, and much more. Get in touch with our team
                    to know an accurate estimate of your budget.
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab">
                  <h6 className="panel-title">
                    <a
                      className="collapsed"
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#faq5"
                    >
                      <span>
                        {" "}
                        Who are the best white label cryptocurrency developers in
                        India?
                      </span>
                    </a>
                  </h6>{" "}
                </div>
                <div
                  id="faq5"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="headingFive"
                >
                  <div className="panel-body">
                    {" "}
                    Blockchain App Factory is undoubtedly the best white label
                    cryptocurrency developers in India. We have served a variety
                    of industries and satisfied a huge number of customers with
                    our impeccable services. There is simply no firm better than
                    us currently when it comes to cryptocurrency development.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Sec8