import React from 'react'

function Sec8() {
  return (
    <div className="tech-points token-tech common_spacing">
  <div className="container">
    <div className="section-title">
      <h3 className="text-center font_wei">Blockchain Technology</h3>
      <hr />
      <p className="text-center">
        The Ethereum Blockchain with ERC-20 does not suffice the requirements of
        the asset backed tokens. The major issues include gas prices, congestion
        in the networks and protocol issues. To overcome the issues, Blockchain
        App Factory develops customized scalable blockchain and smart contracts
        to fit the requirements either on Ethereum or Hyperledger or Stellar.
      </p>
      <p className="text-center title-ptag">The following are the features:</p>
    </div>
    <div className="flex-sec">
      <div className="features-tech">
        {" "}
        <img
          width="40px"
          height="40px"
          src="./assets/images/poker-token.svg"
          alt=""
        />
        <h4>Legally Compliant Tokens</h4>
        <p>
          The tokens issued are embedded with smart contract which has the
          regulations of the registered jurisdiction coded. These include legal
          frameworks of fundraising, investor qualification rules &amp;
          transaction limits on transfer.{" "}
        </p>
      </div>
      <div className="features-tech">
        {" "}
        <img width="40px" height="40px" src="./assets/images/investor.svg" alt="" />
        <h4>Global Investor Participation</h4>
        <p>
          Issuance companies face problems during secondary trading when
          different countries are involved. Our tokens can be traded across
          borders with the idea that the tokens issued are securities and must
          comply with securities laws. The token sales and secondary trading are
          developed with conditionality on the smart contract.
        </p>
      </div>
      <div className="features-tech">
        {" "}
        <img width="40px" height="40px" src="./assets/images/money.svg" alt="" />
        <h4>Transparency </h4>
        <p>
          Blockchain ensures all the transactions including the conditional are
          visible to the financial regulators. The benefits of a transparent
          ecosystem will help the cryptocurrency market under the purview of the
          government regulation. The process of transfer agents are being
          automated the entrepreneurs can raise funds in a simpler and a cost
          effective way.
        </p>
      </div>
      <div className="features-tech">
        {" "}
        <img width="40px" height="40px" src="./assets/images/wallet1.svg" alt="" />
        <h4>Wallet</h4>
        <p>
          At Blockchain App Factory, we develop a technology which allows the
          issuance companies to reissue tokens to the investors if the investor
          loses their wallet keys subject to terms and conditions. The wallet
          must compatible to the legal requirements and investor must have the
          right to reclaim his lost tokens.{" "}
        </p>
      </div>
    </div>
  </div>
</div>

  )
}

export default Sec8