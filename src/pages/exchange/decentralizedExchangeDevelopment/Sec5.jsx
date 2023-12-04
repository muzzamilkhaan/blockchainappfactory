import React from 'react'
import Faq from '../../../components/shared/Faq'

function Sec5() {
  const data = [
    {
      title: 'What is decentralized exchange development?',
      desc: `A DEX (decentralized exchange) is like an online market where
      people can directly trade cryptocurrencies. It's different
      from regular exchanges because you don't need a middleman to
      handle your money or make the trades for you.`
    },
    {
      title: 'How do you create a decentralized exchange?',
      desc: `<ul style={{ listStyleType: "disc" }}>
      <li>
        Design smart contracts for order matching and custody
      </li>
      <li>Build a user-friendly interface</li>
      <li>Enhance security (2FA, encryption)</li>
      <li>
        Integrate decentralized identity and payment gateways
      </li>
      <li>Test and audit for vulnerabilities</li>
      <li>Launch, boost liquidity, and promote</li>
      <li>Maintain and update for seamless trading</li>
    </ul>`
    },
    {
      title: 'How does a DEX make money?',
      desc: ` Decentralized exchanges earn money by charging fees when
      people trade on their platform. Some also have their own
      special tokens that can be used for trading and bring in extra
      income.`
    },
    {
      title: 'How much does it cost to create a decentralized exchange?',
      desc: `Creating a DeFi exchange from scratch typically begins at a
      cost of approximately $320,000.`
    },
    {
      title: 'What are the advantages of decentralized exchanges?',
      desc: `Decentralized exchanges offer cost savings because they have
      lower fees than centralized exchanges. This is because
      decentralized exchanges allow users to trade directly with
      each other without using a middleman, which reduces the fees
      compared to centralized exchanges.`
    },
  ]
  return (
    <Faq data={data} className={'product-section fag_sec p-50 gray_bg'} />


  )
}

export default Sec5