import React from 'react'

function Sec5() {
  return (
    <section className="roadmap" id="roadmap">
  <div className="transition-gradient-after adjust-top" />
  <div className="container">
    <div className="dots-vert" />
    <div className="row mb40">
      <div className="section-title text-center">
        <div className="sec_tit mb20">
          <h2 className="section-title underline mb20">
            How do Decentralized{" "}
            <span style={{ color: "#47b475" }}>Prediction Markets Work?</span>
          </h2>
        </div>
        <p>
          Decentralized Prediction Markets are unique platforms that use
          blockchain technology and collective intelligence to predict future
          events accurately.{" "}
        </p>
      </div>
    </div>
    <div className="row d-flex">
      <div className="col-md-12">
        <ul className="workflow">
          <li>
            <img
              className=""
              data-src="./assets/images/leadership.webp"
              src="./assets/images/leadership.webp"
            />
            <h3>Crowd Wisdom</h3>
            <br />
            <p>
              {" "}
              Users can buy and trade prediction shares on the platform for
              real-world events like elections, sports, or cryptocurrencies.
              These shares show how likely an event is to happen.
            </p>
          </li>
          <li>
            <img
              className=""
              data-src="./assets/images/marketing.webp"
              src="./assets/images/marketing.webp"
            />
            <h3>Market Creation</h3>
            <br />
            <p>
              Anyone can make a prediction market on a decentralized platform.
              They decide what the event is, the possible outcomes, and how much
              the shares cost. People who create markets are often rewarded for
              accuracy.
            </p>
          </li>
          <li>
            <img
              className=""
              data-src="./assets/images/trading.webp"
              src="./assets/images/trading.webp"
            />
            <h3>Trading</h3>
            <br />
            <p>
              Participants can buy or sell prediction shares, and their prices
              change depending on what people think. The prices reflect what the
              community collectively believes will happen.
            </p>
          </li>
          <li>
            <img
              className=""
              data-src="./assets/images/business-report.webp"
              src="./assets/images/business-report.webp"
            />
            <h3>Reporting and Outcome</h3>
            <br />
            <p>
              When the event occurs, the market's result is reported. This is
              done through trusted sources, data feeds, or a fair agreement. The
              outcome decides the value of prediction shares.
            </p>
          </li>
          <li>
            <img
              className=""
              data-src="./assets/images/rewards.webp"
              src="./assets/images/rewards.webp"
            />
            <h3>Rewards</h3>
            <br />
            <p>
              People who hold shares in the right outcome get rewarded with
              cryptocurrency. Those who guessed wrong lose their investment.
              This encourages accuracy.
            </p>
          </li>
          <li>
            <img
              className=""
              data-src="./assets/images/decentralization.webp"
              src="./assets/images/decentralization.webp"
            />
            <h3>Decentralization</h3>
            <br />
            <p>
              Decentralized prediction markets use blockchain tech, ensuring
              honesty, security, and immutability. Smart contracts automate
              everything, removing the need for middlemen.
            </p>
          </li>
          <li>
            <img
              className=""
              data-src="./assets/images/marketplaces.webp"
              src="./assets/images/marketplaces.webp"
            />
            <h3>Legal Considerations</h3>
            <br />
            <p>
              {" "}
              Depending on where you are, participating in prediction markets
              may have legal rules. It's crucial to know and follow your local
              regulations when using these markets.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

  )
}

export default Sec5