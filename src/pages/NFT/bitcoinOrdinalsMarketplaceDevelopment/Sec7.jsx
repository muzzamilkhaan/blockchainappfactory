import React from 'react'
import Faq from '../../../components/shared/Faq'

function Sec7() {
  const data = [
    {
      title: 'How does the Bitcoin-based Ordinal NFT Marketplace work?',
      desc: `The new buzz of the crypto market is the Bitcoin network’s
      Ordinal NFT Marketplace. It is built over the Bitcoin
      blockchain, with digital assets minted directly onto the chain
      using JSON data programming. By connecting your Bitcoin wallet
      to your account, you can trade Bitcoin NFTs efficiently, as
      their utility is set to grow exponentially in the future.`
    },
    {
      title: 'How can one trade Bitcoin NFTs?',
      desc: `The Bitcoin NFTs, or the ordinals, are minted by inscribing
      data, which can be a picture, text, or video, upon a satoshi
      (Sat). These Bitcoin NFTs require no side chain as they can be
      tracked directly using the blocks and nodes in the Bitcoin
      blockchain by the user. Unlike other networks, these crypto
      assets are only supported by a Bitcoin Wallet, from where you
      can trade easily.`
    },
    {
      title: 'Where to develop a customized NFT marketplace on Bitcoin?',
      desc: `Among several agencies in the market, Blockchain App Factory
      is the most trusted and reliable Bitcoin Ordinals Marketplace
      development company offering a wide variety of services for
      informed trading for users with a feature-filled platform.`
    },
  ]
  return (
    <Faq data={data} className={'common_spacing gray_bg'}/>
  //   <div className="common_spacing gray_bg">
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
  //                     <span>
  //                       How does the Bitcoin-based Ordinal NFT Marketplace work?
  //                     </span>
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
  //                   The new buzz of the crypto market is the Bitcoin network’s
  //                   Ordinal NFT Marketplace. It is built over the Bitcoin
  //                   blockchain, with digital assets minted directly onto the chain
  //                   using JSON data programming. By connecting your Bitcoin wallet
  //                   to your account, you can trade Bitcoin NFTs efficiently, as
  //                   their utility is set to grow exponentially in the future.{" "}
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
  //                     <span>How can one trade Bitcoin NFTs?</span>
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
  //                   The Bitcoin NFTs, or the ordinals, are minted by inscribing
  //                   data, which can be a picture, text, or video, upon a satoshi
  //                   (Sat). These Bitcoin NFTs require no side chain as they can be
  //                   tracked directly using the blocks and nodes in the Bitcoin
  //                   blockchain by the user. Unlike other networks, these crypto
  //                   assets are only supported by a Bitcoin Wallet, from where you
  //                   can trade easily.{" "}
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
  //                       Where to develop a customized NFT marketplace on Bitcoin?
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
  //                   Among several agencies in the market, Blockchain App Factory
  //                   is the most trusted and reliable Bitcoin Ordinals Marketplace
  //                   development company offering a wide variety of services for
  //                   informed trading for users with a feature-filled platform.{" "}
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

export default Sec7