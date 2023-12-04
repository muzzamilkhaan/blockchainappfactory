import React from 'react'
import Faq from '../../../components/shared/Faq'

function Sec11() {
  const data = [
    {
      title: 'What are Crypto ETFs?',
      desc: ` Crypto ETFs are financial instruments that represent the price
      movement of cryptocurrencies. Bitcoin (BTC) and Ether (ETH)
      are commonly used by ETF providers due to their relevant
      stability and popularity.`
    },
    {
      title: 'What Makes Cryptocurrency ETFs Great?',
      desc: `Cryptocurrency ETFs are greatly beneficial as they offer lower
      entry barriers, open up crypto access, ease of liquidity,
      complete transparency, and sufficient regulatory oversight,
      which enhance trust among investors.`
    },
    {
      title: 'Is Crypto ETF Development a Good Business Idea?',
      desc: `Yes, crypto ETF development is a good business idea as it
      offers opportunities for businesses to maximize the crypto
      transition phase by providing the possibility to create
      applications and ETF contracts.`
    },
    {
      title: 'What are the Types of Crypto ETF Development Solutions?',
      desc: `Crypto ETF development solutions are of different types,
      including single asset crypto ETF, multi-asset crypto ETF, and
      crypto industry ETF. Each of these ETFs supports spot and
      futures contracts.`
    },
    {
      title: 'What is the Cost to Create a Crypto ETF Application?',
      desc: `The cost to create a crypto ETF application depends on several
      factors: the technology involved, legal elements, regulatory
      approvals, and exchange listings, alongside marketing efforts.`
    },
  ]
  return (
    <Faq data={data} className={'common_spacing gray_bg'}/>
    // <div className="common_spacing gray_bg">
    //   <div className="container">
    //     <div className="row">
    //       <h3 className="sec_tit mt20 underline text-center">FAQ</h3>
    //     </div>
    //     <div className="row">
    //       <div className="col-sm-12 col-md-12">
    //         <div className="faq-content">
    //           <div
    //             className="panel-group"
    //             id="accordion"
    //             role="tablist"
    //             aria-multiselectable="true"
    //           >
    //             <div className="panel panel-default">
    //               <div className="panel-heading" role="tab">
    //                 <h4 className="panel-title">
    //                   <a
    //                     className=""
    //                     role="button"
    //                     data-toggle="collapse"
    //                     data-parent="#accordion"
    //                     href="#faq1"
    //                   >
    //                     <span>What are Crypto ETFs? </span>
    //                   </a>
    //                 </h4>{" "}
    //               </div>
    //               <div
    //                 id="faq1"
    //                 className="panel-collapse collapse in"
    //                 role="tabpanel"
    //                 aria-labelledby="headingOne"
    //               >
    //                 <div className="panel-body">
    //                   Crypto ETFs are financial instruments that represent the price
    //                   movement of cryptocurrencies. Bitcoin (BTC) and Ether (ETH)
    //                   are commonly used by ETF providers due to their relevant
    //                   stability and popularity.
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="panel panel-default">
    //               <div className="panel-heading" role="tab">
    //                 <h4 className="panel-title">
    //                   <a
    //                     className="collapsed"
    //                     role="button"
    //                     data-toggle="collapse"
    //                     data-parent="#accordion"
    //                     href="#faq2"
    //                   >
    //                     <span>What Makes Cryptocurrency ETFs Great?</span>
    //                   </a>
    //                 </h4>{" "}
    //               </div>
    //               <div
    //                 id="faq2"
    //                 className="panel-collapse collapse"
    //                 role="tabpanel"
    //                 aria-labelledby="headingTwo"
    //               >
    //                 <div className="panel-body">
    //                   Cryptocurrency ETFs are greatly beneficial as they offer lower
    //                   entry barriers, open up crypto access, ease of liquidity,
    //                   complete transparency, and sufficient regulatory oversight,
    //                   which enhance trust among investors.
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="panel panel-default">
    //               <div className="panel-heading" role="tab">
    //                 <h4 className="panel-title">
    //                   <a
    //                     className="collapsed"
    //                     role="button"
    //                     data-toggle="collapse"
    //                     data-parent="#accordion"
    //                     href="#faq3"
    //                   >
    //                     <span>Is Crypto ETF Development a Good Business Idea?</span>
    //                   </a>
    //                 </h4>{" "}
    //               </div>
    //               <div
    //                 id="faq3"
    //                 className="panel-collapse collapse"
    //                 role="tabpanel"
    //                 aria-labelledby="headingTwo"
    //               >
    //                 <div className="panel-body">
    //                   Yes, crypto ETF development is a good business idea as it
    //                   offers opportunities for businesses to maximize the crypto
    //                   transition phase by providing the possibility to create
    //                   applications and ETF contracts.
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="panel panel-default">
    //               <div className="panel-heading" role="tab">
    //                 <h4 className="panel-title">
    //                   <a
    //                     className="collapsed"
    //                     role="button"
    //                     data-toggle="collapse"
    //                     data-parent="#accordion"
    //                     href="#faq4"
    //                   >
    //                     <span>
    //                       What are the Types of Crypto ETF Development Solutions?
    //                     </span>
    //                   </a>
    //                 </h4>{" "}
    //               </div>
    //               <div
    //                 id="faq4"
    //                 className="panel-collapse collapse"
    //                 role="tabpanel"
    //                 aria-labelledby="headingfour"
    //               >
    //                 <div className="panel-body">
    //                   Crypto ETF development solutions are of different types,
    //                   including single asset crypto ETF, multi-asset crypto ETF, and
    //                   crypto industry ETF. Each of these ETFs supports spot and
    //                   futures contracts.
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="panel panel-default">
    //               <div className="panel-heading" role="tab">
    //                 <h4 className="panel-title">
    //                   <a
    //                     className="collapsed"
    //                     role="button"
    //                     data-toggle="collapse"
    //                     data-parent="#accordion"
    //                     href="#faq5"
    //                   >
    //                     <span>
    //                       What is the Cost to Create a Crypto ETF Application?
    //                     </span>
    //                   </a>
    //                 </h4>{" "}
    //               </div>
    //               <div
    //                 id="faq5"
    //                 className="panel-collapse collapse"
    //                 role="tabpanel"
    //                 aria-labelledby="headingfive"
    //               >
    //                 <div className="panel-body">
    //                   The cost to create a crypto ETF application depends on several
    //                   factors: the technology involved, legal elements, regulatory
    //                   approvals, and exchange listings, alongside marketing efforts.
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

  )
}

export default Sec11