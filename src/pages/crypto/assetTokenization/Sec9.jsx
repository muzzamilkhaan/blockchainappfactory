import React from 'react'

function Sec9() {
  return (
    <div className="tech-points common_spacing gray_bg">
  <div className="container">
    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <div className="section-title text-left">
        <h3 className="font_wei">Voting Rights</h3>
        <hr />{" "}
      </div>
      <p>
        A proprietary voting platform built on blockchain enhances security,
        transparency and scalability which is stored on a distributed ledger. An
        ecosystem of governance is created for your companies security token
        structure to meet your needs. This reduces the overhead in the voting
        process and makes the governance of your organization easier and
        increase trust among your investors.
      </p>
      <ul className="list-dots">
        <li>
          <p>
            The voting rights platform ensures a peer to peer, trustless secret
            ballot immune to intermediary attack and exposes vote manipulation
            if any.
          </p>
        </li>
        <li>
          <p>
            Through a off-chain layer, we ensure the scalability of the platform
            which can handle millions of votes per minute.
          </p>
        </li>
        <li>
          <p>
            Transparency is inherent to blockchain and the stakeholder can
            verify every vote in the system through fully auditable codes.
          </p>
        </li>
        <li>
          <p>
            There is no single point of weakness in the system with minimal risk
            of being compromised due to the decentralized nature of the system.{" "}
          </p>
        </li>
      </ul>
    </div>
    <div className="col-lg-6 col-md-6 hidden-sm hidden-xs mt50">
      {" "}
      <img
        data-src="./assets/images/vote-right.webp"
        alt="voting rights"
        title="Voting Rights"
        className="img-responsive"
        src="./assets/images/vote-right.webp"
      />{" "}
    </div>
  </div>
</div>

  )
}

export default Sec9