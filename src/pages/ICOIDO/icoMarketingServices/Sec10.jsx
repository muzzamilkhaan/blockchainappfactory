import React from 'react'
import Faq from '../../../components/shared/Faq'

function Sec10() {
  const data = [
    {
      title: 'What is ICO Marketing?',
      desc: `ICO’s potential has reached far beyond the crypto market and
      as a result people from various sets of spaces are surging to
      develop their ICO. ICO marketing can be the only proper way to
      get rid of the huge waiting line and get the limelight for
      yourself and for your projects.`
    },
    {
      title: `What differentiates ICO marketing from other marketing
      Services?`,
      desc: `ICO Token Marketing services are more different from the other
      marketing services. In ICO marketing services the investors
      will invest in it based on the roadmap and innovative
      whitepaper. Where the traditional marketing services will work
      on attracting the people with perks.`
    },
    {
      title: `How can I do my ICO Marketing successfully?`,
      desc: `ICO marketing services are the best way to make your ICO an
      popular one. There are many marketing services available in
      the market and hiring the best team with various number of
      strategies will be the best way to do ICO marketing
      successfully.`
    },
    {
      title: `How to find the Best ICO Marketing company?`,
      desc: `The best ICO marketing company can be found by analyzing the
      experience they have in the market as a marketing agency.
      Having insights of their experience in the ICO development and
      their product that made a name for itself in the crypto market
      will help in knowing the best ICO marketing company.`
    },
    {
      title: `How Much Does ICO Marketing Cost?`,
      desc: `The ICO marketing cost depends on the extent of promotional
      expertise required for the project. At Blockchain App Factory,
      we provide both pre-equipped marketing packages as well as
      customized ICO marketing packages for businesses to choose
      from.`
    },
  ]
  return (
    <Faq data={data} className={'common_spacing gray_bg'}/>
    // <section className="common_spacing gray_bg">
    //   <div className="container">
    //     <div className="row">
    //       <h6 className="sec_tit underline text-center">FAQ</h6>{" "}
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
    //                     <span>What is ICO Marketing? </span>
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
    //                   {" "}
    //                   ICO’s potential has reached far beyond the crypto market and
    //                   as a result people from various sets of spaces are surging to
    //                   develop their ICO. ICO marketing can be the only proper way to
    //                   get rid of the huge waiting line and get the limelight for
    //                   yourself and for your projects.{" "}
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
    //                       What differentiates ICO marketing from other marketing
    //                       Services?
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
    //                   {" "}
    //                   ICO Token Marketing services are more different from the other
    //                   marketing services. In ICO marketing services the investors
    //                   will invest in it based on the roadmap and innovative
    //                   whitepaper. Where the traditional marketing services will work
    //                   on attracting the people with perks.{" "}
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
    //                     <span>How can I do my ICO Marketing successfully?</span>
    //                   </a>
    //                 </h4>{" "}
    //               </div>
    //               <div
    //                 id="faq3"
    //                 className="panel-collapse collapse"
    //                 role="tabpanel"
    //                 aria-labelledby="headingThree"
    //               >
    //                 <div className="panel-body">
    //                   {" "}
    //                   ICO marketing services are the best way to make your ICO an
    //                   popular one. There are many marketing services available in
    //                   the market and hiring the best team with various number of
    //                   strategies will be the best way to do ICO marketing
    //                   successfully.{" "}
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
    //                     <span>How to find the Best ICO Marketing company?</span>
    //                   </a>
    //                 </h4>{" "}
    //               </div>
    //               <div
    //                 id="faq4"
    //                 className="panel-collapse collapse"
    //                 role="tabpanel"
    //                 aria-labelledby="headingFour"
    //               >
    //                 <div className="panel-body">
    //                   {" "}
    //                   The best ICO marketing company can be found by analyzing the
    //                   experience they have in the market as a marketing agency.
    //                   Having insights of their experience in the ICO development and
    //                   their product that made a name for itself in the crypto market
    //                   will help in knowing the best ICO marketing company.{" "}
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
    //                     <span>How Much Does ICO Marketing Cost?</span>
    //                   </a>
    //                 </h4>{" "}
    //               </div>
    //               <div
    //                 id="faq5"
    //                 className="panel-collapse collapse"
    //                 role="tabpanel"
    //                 aria-labelledby="headingFour"
    //               >
    //                 <div className="panel-body">
    //                   The ICO marketing cost depends on the extent of promotional
    //                   expertise required for the project. At Blockchain App Factory,
    //                   we provide both pre-equipped marketing packages as well as
    //                   customized ICO marketing packages for businesses to choose
    //                   from.{" "}
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

  )
}

export default Sec10