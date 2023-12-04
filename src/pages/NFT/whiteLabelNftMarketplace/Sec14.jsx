import React from 'react'
import Faq from '../../../components/shared/Faq'

function Sec14() {
  const data = [
    {
      title: 'What is a Whitelabel NFT Marketplace?',
      desc: `A Whitelabel NFT marketplace is a pre-built platform that can
      be customized to suit your needs. Since the platform is built
      beforehand and fully tested, the platform works without flaws.
      The Whitelabel NFT marketplace platform can also work across
      blockchains with additional development.`
    },
    {
      title: 'Why should I opt for an NFT Whitelabel Marketplace?',
      desc: `You should opt for a White-label NFT marketplace since the
      platform can be launched quickly at lower costs. The platform
      also offers customizability, meaning that you will decide the
      features your NFT marketplace will have.`
    },
    {
      title: 'Is your Whitelabel NFT Marketplace Software User-friendly?',
      desc: `Our Whitelabel NFT marketplace software is extremely
      user-friendly as it allows extreme customization for business
      owners to have something unique. Also, at the final user-end
      (the customer), the NFT marketplace will function smoothly to
      ensure that the user has an excellent time using the platform.`
    },
    {
      title: `What are the Benefits of Using a Whitelabel NFT
      Marketplace?`,
      desc: `A Whitelabel NFT marketplace offers numerous benefits,
      including easier customization, encrypted security,
      decentralization, cost-effectiveness, and quick deployment.
      Utilizing this solution aids you greatly if you are starting
      up in the blockchain business space. Contact our experts for
      more details.`
    },
    {
      title: `What features does a Whitelabel NFT Marketplace Software
      comprise?`,
      desc: ` An NFT marketplace platform comprises features such as
      filters, search engines, storefront, listing portal, bidding
      portal, admin panel, crypto wallet, minting portal, and more.
      It is important to note that the power of designing your NFT
      marketplace lies with you, as all your needs will be
      fulfilled.`
    },
    {
      title: `How much time will it take to launch a White-label NFT
      marketplace Platform?`,
      desc: `While we can develop your Whitelabel NFT marketplace platform
      within a few days or months, the exact number of days cannot
      be generalized since everyone’s requirements tend to vary.
      Therefore, you should know that the time taken is minimal with
      less customization, although it would not take too long to
      develop a totally customized Whitelabel NFT marketplace.`
    },
  ]
  return (
    <Faq data={data} className={'common_spacing gray_bg'}/>
//     <div className="common_spacing gray_bg">
//   <div className="container">
//     <div className="section-top ">
//       <div className="section-header text-center ">
//         <h3 className="section-title mt20 underline">FAQ</h3>{" "}
//       </div>
//     </div>
//     <div className="row">
//       <div className="col-sm-12 col-md-12">
//         <div className="faq-content">
//           <div className="panel-group" id="accordion">
//             <div className="panel panel-default">
//               <div className="panel-heading">
//                 <h4 className="panel-title">
//                   <a
//                     className=""
//                     data-toggle="collapse"
//                     data-parent="#accordion"
//                     href="#faq1"
//                   >
//                     <span>What is a Whitelabel NFT Marketplace?</span>
//                   </a>
//                 </h4>{" "}
//               </div>
//               <div id="faq1" className="panel-collapse collapse in">
//                 <div className="panel-body">
//                   A Whitelabel NFT marketplace is a pre-built platform that can
//                   be customized to suit your needs. Since the platform is built
//                   beforehand and fully tested, the platform works without flaws.
//                   The Whitelabel NFT marketplace platform can also work across
//                   blockchains with additional development.
//                 </div>
//               </div>
//             </div>
//             <div className="panel panel-default">
//               <div className="panel-heading">
//                 <h4 className="panel-title">
//                   <a
//                     className="collapsed"
//                     data-toggle="collapse"
//                     data-parent="#accordion"
//                     href="#faq2"
//                   >
//                     <span>
//                       Why should I opt for an NFT Whitelabel Marketplace?
//                     </span>
//                   </a>
//                 </h4>{" "}
//               </div>
//               <div id="faq2" className="panel-collapse collapse">
//                 <div className="panel-body">
//                   You should opt for a White-label NFT marketplace since the
//                   platform can be launched quickly at lower costs. The platform
//                   also offers customizability, meaning that you will decide the
//                   features your NFT marketplace will have.
//                 </div>
//               </div>
//             </div>
//             <div className="panel panel-default">
//               <div className="panel-heading">
//                 <h4 className="panel-title">
//                   <a
//                     className="collapsed"
//                     data-toggle="collapse"
//                     data-parent="#accordion"
//                     href="#faq4"
//                   >
//                     <span>
//                       Is your Whitelabel NFT Marketplace Software User-friendly?
//                     </span>
//                   </a>
//                 </h4>{" "}
//               </div>
//               <div id="faq4" className="panel-collapse collapse">
//                 <div className="panel-body">
//                   Our Whitelabel NFT marketplace software is extremely
//                   user-friendly as it allows extreme customization for business
//                   owners to have something unique. Also, at the final user-end
//                   (the customer), the NFT marketplace will function smoothly to
//                   ensure that the user has an excellent time using the platform.
//                 </div>
//               </div>
//             </div>
//             <div className="panel panel-default">
//               <div className="panel-heading">
//                 <h4 className="panel-title">
//                   <a
//                     className="collapsed"
//                     data-toggle="collapse"
//                     data-parent="#accordion"
//                     href="#faq5-1"
//                   >
//                     <span>
//                       What are the Benefits of Using a Whitelabel NFT
//                       Marketplace?
//                     </span>
//                   </a>
//                 </h4>{" "}
//               </div>
//               <div id="faq5-1" className="panel-collapse collapse">
//                 <div className="panel-body">
//                   A Whitelabel NFT marketplace offers numerous benefits,
//                   including easier customization, encrypted security,
//                   decentralization, cost-effectiveness, and quick deployment.
//                   Utilizing this solution aids you greatly if you are starting
//                   up in the blockchain business space. Contact our experts for
//                   more details.
//                 </div>
//               </div>
//             </div>
//             <div className="panel panel-default">
//               <div className="panel-heading">
//                 <h4 className="panel-title">
//                   <a
//                     className="collapsed"
//                     data-toggle="collapse"
//                     data-parent="#accordion"
//                     href="#faq5"
//                   >
//                     <span>
//                       What features does a Whitelabel NFT Marketplace Software
//                       comprise?
//                     </span>
//                   </a>
//                 </h4>{" "}
//               </div>
//               <div id="faq5" className="panel-collapse collapse">
//                 <div className="panel-body">
//                   An NFT marketplace platform comprises features such as
//                   filters, search engines, storefront, listing portal, bidding
//                   portal, admin panel, crypto wallet, minting portal, and more.
//                   It is important to note that the power of designing your NFT
//                   marketplace lies with you, as all your needs will be
//                   fulfilled.
//                 </div>
//               </div>
//             </div>
//             <div className="panel panel-default">
//               <div className="panel-heading">
//                 <h4 className="panel-title">
//                   <a
//                     className="collapsed"
//                     data-toggle="collapse"
//                     data-parent="#accordion"
//                     href="#faq6"
//                   >
//                     <span>
//                       How much time will it take to launch a White-label NFT
//                       marketplace Platform?
//                     </span>
//                   </a>
//                 </h4>{" "}
//               </div>
//               <div id="faq6" className="panel-collapse collapse">
//                 <div className="panel-body">
//                   While we can develop your Whitelabel NFT marketplace platform
//                   within a few days or months, the exact number of days cannot
//                   be generalized since everyone’s requirements tend to vary.
//                   Therefore, you should know that the time taken is minimal with
//                   less customization, although it would not take too long to
//                   develop a totally customized Whitelabel NFT marketplace.
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

export default Sec14