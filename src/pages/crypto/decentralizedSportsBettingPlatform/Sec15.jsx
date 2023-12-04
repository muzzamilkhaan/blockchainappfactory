import React from 'react'
import Faq from '../../../components/shared/Faq'

function Sec15() {
  const data = [
    {
      title: 'What is Prompt Engineering?',
      desc: `Prompt engineering is the process of creating prompts for AI
      language models to derive the answers we need. The sector has
      been undergoing massive evolution following the abundance of
      large-scale language models (LLM).`
    },
    {
      title: 'What are Some Popular LLMs Where AI Prompt Engineering Can be Used?',
      desc: ` Popular LLMs where AI prompt engineering solutions can be used
      include the OpenAI ecosystem, BARD, LLaMA, PaLM 2, Claude, and
      Stable Diffusion. With expert assistance, you can create
      prompts fitting your business needs.`
    },
    {
      title: 'Which Major Industries Use Prompt Engineering Solutions?',
      desc: `Many real-world industries use prompt engineering solutions to
      maximize efficiency by automating simple tasks. Major ones
      include marketing, insurance, healthcare, customer service,
      education, and transportation.`
    },
    {
      title: 'Is It Worthy to Invest in Generative AI Prompt Engineering Efforts?',
      desc: `Yes, it is worth investing in generative AI prompt engineering
      efforts for your business. The resultant solutions facilitate
      efficient operations by eliminating repetitive tasks from
      human workers through automation.`
    },
    {
      title: 'Where Can I Find the Best AI Prompt Engineering Team?',
      desc: `Blockchain App Factory is a well-known AI prompt engineering
      company renowned for its experts who build prompting solutions
      that work effortlessly on various AI language models even
      during times of high user demand.`
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
    //                     <span>What is Prompt Engineering?</span>
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
    //                   Prompt engineering is the process of creating prompts for AI
    //                   language models to derive the answers we need. The sector has
    //                   been undergoing massive evolution following the abundance of
    //                   large-scale language models (LLM).
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
    //                       What are Some Popular LLMs Where AI Prompt Engineering Can
    //                       be Used?
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
    //                   Popular LLMs where AI prompt engineering solutions can be used
    //                   include the OpenAI ecosystem, BARD, LLaMA, PaLM 2, Claude, and
    //                   Stable Diffusion. With expert assistance, you can create
    //                   prompts fitting your business needs.
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
    //                       Which Major Industries Use Prompt Engineering Solutions?
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
    //                   Many real-world industries use prompt engineering solutions to
    //                   maximize efficiency by automating simple tasks. Major ones
    //                   include marketing, insurance, healthcare, customer service,
    //                   education, and transportation.
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
    //                       Is It Worthy to Invest in Generative AI Prompt Engineering
    //                       Efforts?
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
    //                   Yes, it is worth investing in generative AI prompt engineering
    //                   efforts for your business. The resultant solutions facilitate
    //                   efficient operations by eliminating repetitive tasks from
    //                   human workers through automation.
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
    //                       Where Can I Find the Best AI Prompt Engineering Team?
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
    //                   Blockchain App Factory is a well-known AI prompt engineering
    //                   company renowned for its experts who build prompting solutions
    //                   that work effortlessly on various AI language models even
    //                   during times of high user demand.
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

export default Sec15