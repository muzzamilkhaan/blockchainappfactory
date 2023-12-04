import React from 'react'
import Faq from '../../../components/shared/Faq'

function Sec7() {
  const data = [
    {
      title: 'How are the BRC-20 tokens traded?',
      desc: `For trading a BRC-20 token, you can start by integrating a
      Bitcoin wallet to create an account. Here, you can store the
      tokens after minting directly on the blockchain for easy trade
      using the ordinal protocol and data inscription.`
    },
    {
      title: 'Will a BRC-20 token development agency help mint BRC-20 tokens?',
      desc: `Yes. A BRC-20 token development company aids you in delivering
      robust services like tokenomics, token evaluation, deployment,
      etc., for your BRC-20 tokens that can be used in diverse
      applications within the Bitcoin ecosystem. Blockchain App
      Factory is one of the first few in the market to offer
      credible launches.`
    },
    {
      title: 'What distinct qualities do an ERC 20 token and a BRC-20 token have?',
      desc: `An ERC-20 token, developed on Ethereum, is built using smart
      contracts, while BRC-20 tokens are inscribed directly on the
      blockchain using JSON data programming. One of the other
      significant distinctions is that BRC-20, they can only be
      supported by a Bitcoin wallet.`
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
    //                     <span>How are the BRC-20 tokens traded?</span>
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
    //                   For trading a BRC-20 token, you can start by integrating a
    //                   Bitcoin wallet to create an account. Here, you can store the
    //                   tokens after minting directly on the blockchain for easy trade
    //                   using the ordinal protocol and data inscription.{" "}
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
    //                       Will a BRC-20 token development agency help mint BRC-20
    //                       tokens?
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
    //                   Yes. A BRC-20 token development company aids you in delivering
    //                   robust services like tokenomics, token evaluation, deployment,
    //                   etc., for your BRC-20 tokens that can be used in diverse
    //                   applications within the Bitcoin ecosystem. Blockchain App
    //                   Factory is one of the first few in the market to offer
    //                   credible launches.{" "}
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
    //                       What distinct qualities do an ERC 20 token and a BRC-20
    //                       token have?
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
    //                   An ERC-20 token, developed on Ethereum, is built using smart
    //                   contracts, while BRC-20 tokens are inscribed directly on the
    //                   blockchain using JSON data programming. One of the other
    //                   significant distinctions is that BRC-20, they can only be
    //                   supported by a Bitcoin wallet.{" "}
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