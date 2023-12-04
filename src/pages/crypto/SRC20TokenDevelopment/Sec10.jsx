import React from 'react'
import Faq from '../../../components/shared/Faq'

function Sec10() {
  const data = [
    {
      title: 'What is an SRC-20 Token?',
      desc: `An SRC-20 token is created using the STAMPS protocol on the
      Bitcoin blockchain. These tokens are stored directly on the
      blockchain unspendable transaction outputs (UTXO), ensuring
      they cannot be pruned or modified by actions by an external
      member.`
    },
    {
      title: 'What are the Features of SRC-20 Tokens?',
      desc: `SRC-20 tokens have the following features:
      <ul style={{ listStyle: "circle" }}>
        <li>Permanent Storage On-chain</li>
        <li>Non-pruneable</li>
        <li>New Way to Represent Digital Assets on Bitcoin</li>
        <li>High Levels of Security</li>
      </ul>
      Note the standard is still evolving, and new features might be
      added in the near future.`
    },
    {
      title: 'What are the Advantages of SRC-20 Token Development?',
      desc: `SRC-20 token development offers the following benefits to
      businesses:
      <ul style={{ listStyle: "circle" }}>
        <li>Early-bird Advantage</li>
        <li>Chance of Higher ROI</li>
        <li>Lower Business Saturation</li>
        <li>Opportunities for Partnerships and Collaborations</li>
      </ul>
      With new features, more benefits will be on offer.`
    },
    {
      title: 'Which is the Best SRC-20 Token Development Company?',
      desc: `Blockchain App Factory is the best SRC-20 token development
      company due to its industry experience of 10+ Years. The
      company provides unparalleled services for ventures to create
      SRC-20 tokens from end to end at economical costs.`
    },
    {
      title: 'What is the Difference Between SRC-20 and BRC-20?',
      desc: `The SRC-20 token standard is based on the STAMPS protocol and
      is used to store digital assets on the Bitcoin network. On the
      other hand, the BRC-20 token standard is based on the Ordinals
      protocol and is used to store fungible tokens on Bitcoin.`
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
    //                     <span>What is an SRC-20 Token?</span>
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
    //                   An SRC-20 token is created using the STAMPS protocol on the
    //                   Bitcoin blockchain. These tokens are stored directly on the
    //                   blockchain unspendable transaction outputs (UTXO), ensuring
    //                   they cannot be pruned or modified by actions by an external
    //                   member.
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
    //                     <span>What are the Features of SRC-20 Tokens?</span>
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
    //                   SRC-20 tokens have the following features:
    //                   <ul style={{ listStyle: "circle" }}>
    //                     <li>Permanent Storage On-chain</li>
    //                     <li>Non-pruneable</li>
    //                     <li>New Way to Represent Digital Assets on Bitcoin</li>
    //                     <li>High Levels of Security</li>
    //                   </ul>
    //                   Note the standard is still evolving, and new features might be
    //                   added in the near future.
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
    //                       What are the Advantages of SRC-20 Token Development?
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
    //                   SRC-20 token development offers the following benefits to
    //                   businesses:
    //                   <ul style={{ listStyle: "circle" }}>
    //                     <li>Early-bird Advantage</li>
    //                     <li>Chance of Higher ROI</li>
    //                     <li>Lower Business Saturation</li>
    //                     <li>Opportunities for Partnerships and Collaborations</li>
    //                   </ul>
    //                   With new features, more benefits will be on offer.
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
    //                       Which is the Best SRC-20 Token Development Company?
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
    //                   Blockchain App Factory is the best SRC-20 token development
    //                   company due to its industry experience of 10+ Years. The
    //                   company provides unparalleled services for ventures to create
    //                   SRC-20 tokens from end to end at economical costs.
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
    //                       What is the Difference Between SRC-20 and BRC-20?
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
    //                   The SRC-20 token standard is based on the STAMPS protocol and
    //                   is used to store digital assets on the Bitcoin network. On the
    //                   other hand, the BRC-20 token standard is based on the Ordinals
    //                   protocol and is used to store fungible tokens on Bitcoin.
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

export default Sec10