import React from 'react'

const Sec2 = () => {
  return (
    <section className="common_spacing">
  <div className="container">
    <div className="row">
      <h2 className="sec_tit underline text-center">
        Equity Token Platform Development
      </h2>
    </div>
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12">
        <p className="text-justify">
          {" "}
          The Equity Financing of new companies is common practice to dilute
          shares to raise capital. The traditional method involves the existing
          shareholders diluting the company for new investors to raise capital
          in several rounds. There are two stages in equity token based finance;
          Private Locked up Stage and Public Liquidity Stage. You can keep the
          stocks as non-dilutable during the lock-in period. The tokens are
          available for investors through Equity Token Offering(ETOs){" "}
        </p>
        <p className="text-justify">
          ETO development is typically carried out with the objective of raising
          capital through share dilution. Current shareholders in a firm dilute
          their holdings so that fresh investors can infuse new capital through
          multiple rounds of funding. There are two phases in equity-based
          financing — public liquidity stage and private locked upstage. Over
          the lock-in period, the stock can be retained as non-dilutable. The
          tokens are distributed to investors via Equity Token Offerings (ETOs).
        </p>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 eto_list">
        <p className="mt20">
          <strong className="equity_title">
            Equity Token Offerings provide the following advantages to
            prospective investors:{" "}
          </strong>
        </p>
        <ul>
          <li>Voting rights,</li>
          <li>Automated dividends,</li>
          <li>Buyback rights,</li>
          <li>Profit share rights,</li>
          <li>Holdings in another fund, and finally</li>
          <li>Cash flow.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

  )
}

export default Sec2
