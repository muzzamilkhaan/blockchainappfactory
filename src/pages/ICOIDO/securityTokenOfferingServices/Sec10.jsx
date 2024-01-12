import React from 'react'

const Sec10 = () => {
  return (
    <section
    className="tech-points common_spacing"
    style={{ background: "linear-gradient( 180deg , #076769 0%, #003335)" }}
  >
    <div className="container">
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div className="section-title text-left">
          <h4 className="sec_tit underline text-left text-white">
            Voting Rights
          </h4>
        </div>
        <p className="text-white">
          A proprietary voting platform built on blockchain enhances security,
          transparency and scalability which is stored on a distributed ledger. An
          ecosystem of governance is created for your companies security token
          structure to meet your needs. This reduces the overhead in the voting
          process and makes the governance of your organization easier and
          increase trust among your investors.
        </p>
        <ul className="list-dots text-white">
          <li>
            The voting rights platform ensures a peer to peer, trustless secret
            ballot immune to intermediary attack and exposes vote manipulation if
            any.
          </li>
          <li>
            Through a off-chain layer, we ensure the scalability of the platform
            which can handle millions of votes per minute.
          </li>
          <li>
            Transparency is inherent to blockchain and the stakeholder can verify
            every vote in the system through fully auditable codes.
          </li>
          <li>
            There is no single point of weakness in the system with minimal risk
            of being compromised due to the decentralized nature of the system.
          </li>
        </ul>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div className="section-title text-left">
          <h4 className="sec_tit underline text-left text-white">
            KYC/AML Automation
          </h4>
        </div>
        <p className="text-white">
          In the regulated STO, the basic requirements are KYC/AML verification
          reduces the risk through reputation scoring which helps issuance
          companies identify high-risk individuals . This helps you prove your
          investor's identity,risk-based authentication and preventing identity
          fraud. In addition, you can also reduce money laundering activities.
          <br />
          <br />
          KYC/AML automation help in efficient onboarding of the investors in a
          quicker time frame.. In addition, you can stay ahead of the regulations
          through a flexible interface where you can respond to new developments
          with ease.
        </p>
      </div>
    </div>
  </section>
  
  )
}

export default Sec10
