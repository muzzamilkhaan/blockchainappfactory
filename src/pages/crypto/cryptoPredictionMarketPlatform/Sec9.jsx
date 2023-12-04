import React from 'react'
import Faq from '../../../components/shared/Faq'

function Sec9() {
  const data = [
    {
      title: 'What is a Crypto Prediction Market?',
      desc: `A crypto prediction market allows users to place bets on
      future events in a decentralized manner. Such a platform is
      not controlled by any central entity, making the accuracy of
      the outcomes more real.`
    },
    {
      title: 'What are the Features Offered by Our Decentralized Prediction Markets?',
      desc: `Our decentralized prediction markets offer multiple useful
      features for users like markets list, search &amp; filter,
      categories, integrated wallet, leaderboard, sell shares, chat
      box, and user dashboards.`
    },
    {
      title: 'What are the Benefits Provided by Our Crypto Opinion Trading App?',
      desc: ` Benefits our crypto opinion trading app offers include
      decentralization, crowd wisdom, incentivization, risk
      management, information discovery, market forecasting, market
      liquidity, and non-restrictive access.`
    },
    {
      title: 'Are Crypto Prediction Markets and Crypto Prediction Platforms Different?',
      desc: `Yes, crypto prediction markets and crypto prediction platforms
      are different. While the former lets users bet on future event
      outcomes, the latter lets users gain insights about crypto
      market trends.`
    },
    {
      title: 'Why Should You Choose Our Crypto Prediction Market Development Team?',
      desc: `As a top-rated DeFi development company, Blockchain App
      Factory has been behind the success of numerous DeFi
      platforms, and the crypto prediction markets we build can be
      vital to your venture’s success.`
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
    //                     <span>What is a Crypto Prediction Market?</span>
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
    //                   A crypto prediction market allows users to place bets on
    //                   future events in a decentralized manner. Such a platform is
    //                   not controlled by any central entity, making the accuracy of
    //                   the outcomes more real.
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
    //                     <span>
    //                       What are the Features Offered by Our Decentralized
    //                       Prediction Markets?
    //                     </span>
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
    //                   Our decentralized prediction markets offer multiple useful
    //                   features for users like markets list, search &amp; filter,
    //                   categories, integrated wallet, leaderboard, sell shares, chat
    //                   box, and user dashboards.{" "}
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
    //                     <span>
    //                       What are the Benefits Provided by Our Crypto Opinion
    //                       Trading App?
    //                     </span>
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
    //                   Benefits our crypto opinion trading app offers include
    //                   decentralization, crowd wisdom, incentivization, risk
    //                   management, information discovery, market forecasting, market
    //                   liquidity, and non-restrictive access.
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
    //                       Are Crypto Prediction Markets and Crypto Prediction
    //                       Platforms Different?
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
    //                   Yes, crypto prediction markets and crypto prediction platforms
    //                   are different. While the former lets users bet on future event
    //                   outcomes, the latter lets users gain insights about crypto
    //                   market trends.{" "}
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
    //                       Why Should You Choose Our Crypto Prediction Market
    //                       Development Team?
    //                     </span>
    //                   </a>
    //                 </h4>{" "}
    //               </div>
    //               <div
    //                 id="faq5"
    //                 className="panel-collapse collapse"
    //                 role="tabpanel"
    //                 aria-labelledby="headingfour"
    //               >
    //                 <div className="panel-body">
    //                   As a top-rated DeFi development company, Blockchain App
    //                   Factory has been behind the success of numerous DeFi
    //                   platforms, and the crypto prediction markets we build can be
    //                   vital to your venture’s success.
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

export default Sec9