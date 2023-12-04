import React from 'react'
import Faq from '../../../components/shared/Faq'

function Sec4() {
  const data = [
    {
      title: 'How long does it take to Build a Cryptocurrency Exchange?',
      desc: `The time to build a cryptocurrency exchange depends entirely
      upon the type of exchange you want and your customization
      preferences. However, opting for tailor-made, white label
      cryptocurrency exchange software will save a lot of time
      compared to developing from the ground up.`
    },
    {
      title: `How much does it cost to develop White Label Crypto
      Exchange?`,
      desc: `Again, the cost to build a white label crypto exchange totally
      depends upon your requirements, customization preferences, and
      the features that you decide. But, compared to gathering
      equipment and developing from scratch, white label solutions
      are cost-effective.`
    },
    {
      title: `Is It Possible to Launch Your Crypto Exchange Platform in
      a Short Time?`,
      desc: `Yes, it is possible to launch your crypto exchange platform in
      a short time using our ready-made, customizable solutions. Our
      pre-made solution is easy to work on, with sufficient room to
      add features that can be integrated in a short time at
      economical costs.`
    },
    {
      title: `Who offers the best crypto exchange solutions?`,
      desc: `Blockchain App Factory offers the best crypto exchange
      solutions. With a team of massively experienced developers,
      you are assured that the solutions are feature-rich, robust,
      highly secure, and scalable and available to hit the market in
      no time at cost-friendly prices.`
    },
    {
      title: `What is Cryptocurrency Exchange Development?`,
      desc: `Cryptocurrency exchange development helps entrepreneurs to
      build cryptocurrency exchange platforms from scratch. The
      process consists of teams for design, development, testing,
      legalities, and marketing to ensure the platform meets all
      user-end, business, and regulatory requirements to enable
      seamless operations.`
    },
    {
      title: `What are the Benefits of Cryptocurrency Exchange
      Development?`,
      desc: `Cryptocurrency exchange development offers several benefits to
      businesses. The main ones include enabling faster
      cross-country transactions, tighter security against hacks,
      and opportunities for tapping into other business models.
      Additional benefits can be gained based on how you frame your
      exchange.`
    },
    {
      title: `How Much Does It Cost to Develop a Crypto Exchange?`,
      desc: `The cost of cryptocurrency exchange development depends on how
      you plan your business. The user features and back-end
      protocols determine how much you spend developing the crypto
      exchange. It also depends on the extent of your marketing
      campaigns.`
    },
    {
      title: `How Can I Build a Cryptocurrency Exchange?`,
      desc: `You can start building a cryptocurrency exchange by planning
      for it. This is followed by the core cryptocurrency exchange
      development process that includes prototyping, designing,
      developing, testing, and launching. To make the process
      easier, you can collaborate with our company.`
    },
    {
      title: `What Makes Crypto Exchange a Good Business Idea?`,
      desc: `Cryptocurrency exchange development is a good business idea
      since the platform’s model is based on daily user activity.
      Hence, generating income through various means and
      establishing yourself in the crypto space becomes easier.
      Blockchain App Factory can help you build featureful crypto
      exchange applications.`
    },
  ]
  return (
    <Faq data={data} className={'common_spacing gray_bg'}/>
    // <div className="common_spacing gray_bg">
    //   <div className="container">
    //     <div className="row">
    //       <div className="section-header text-center">
    //         <h4 className="sec-tit underline">FAQ</h4>
    //       </div>
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
    //                 <h5 className="panel-title">
    //                   <a
    //                     className=""
    //                     role="button"
    //                     data-toggle="collapse"
    //                     data-parent="#accordion"
    //                     href="#faq1"
    //                   >
    //                     <span>
    //                       How long does it take to Build a Cryptocurrency Exchange?
    //                     </span>
    //                   </a>
    //                 </h5>
    //               </div>
    //               <div
    //                 id="faq1"
    //                 className="panel-collapse collapse in"
    //                 role="tabpanel"
    //                 aria-labelledby="headingOne"
    //               >
    //                 <div className="panel-body">

    //                   The time to build a cryptocurrency exchange depends entirely
    //                   upon the type of exchange you want and your customization
    //                   preferences. However, opting for tailor-made, white label
    //                   cryptocurrency exchange software will save a lot of time
    //                   compared to developing from the ground up.
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="panel panel-default">
    //               <div className="panel-heading" role="tab">
    //                 <h5 className="panel-title">
    //                   <a
    //                     className="collapsed"
    //                     role="button"
    //                     data-toggle="collapse"
    //                     data-parent="#accordion"
    //                     href="#faq2"
    //                   >
    //                     <span>
    //                       How much does it cost to develop White Label Crypto
    //                       Exchange?
    //                     </span>
    //                   </a>
    //                 </h5>
    //               </div>
    //               <div
    //                 id="faq2"
    //                 className="panel-collapse collapse"
    //                 role="tabpanel"
    //                 aria-labelledby="headingTwo"
    //               >
    //                 <div className="panel-body">

    //                   Again, the cost to build a white label crypto exchange totally
    //                   depends upon your requirements, customization preferences, and
    //                   the features that you decide. But, compared to gathering
    //                   equipment and developing from scratch, white label solutions
    //                   are cost-effective.
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="panel panel-default">
    //               <div className="panel-heading" role="tab">
    //                 <h5 className="panel-title">
    //                   <a
    //                     className="collapsed"
    //                     role="button"
    //                     data-toggle="collapse"
    //                     data-parent="#accordion"
    //                     href="#faq3"
    //                   >
    //                     <span>
    //                       Is It Possible to Launch Your Crypto Exchange Platform in
    //                       a Short Time?
    //                     </span>
    //                   </a>
    //                 </h5>
    //               </div>
    //               <div
    //                 id="faq3"
    //                 className="panel-collapse collapse"
    //                 role="tabpanel"
    //                 aria-labelledby="headingThree"
    //               >
    //                 <div className="panel-body">
    //                   Yes, it is possible to launch your crypto exchange platform in
    //                   a short time using our ready-made, customizable solutions. Our
    //                   pre-made solution is easy to work on, with sufficient room to
    //                   add features that can be integrated in a short time at
    //                   economical costs.
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="panel panel-default">
    //               <div className="panel-heading" role="tab">
    //                 <h5 className="panel-title">
    //                   <a
    //                     className="collapsed"
    //                     role="button"
    //                     data-toggle="collapse"
    //                     data-parent="#accordion"
    //                     href="#faq4"
    //                   >
    //                     <span>Who offers the best crypto exchange solutions?</span>
    //                   </a>
    //                 </h5>
    //               </div>
    //               <div
    //                 id="faq4"
    //                 className="panel-collapse collapse"
    //                 role="tabpanel"
    //                 aria-labelledby="headingSix"
    //               >
    //                 <div className="panel-body">

    //                   Blockchain App Factory offers the best crypto exchange
    //                   solutions. With a team of massively experienced developers,
    //                   you are assured that the solutions are feature-rich, robust,
    //                   highly secure, and scalable and available to hit the market in
    //                   no time at cost-friendly prices.
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="panel panel-default">
    //               <div className="panel-heading" role="tab">
    //                 <h5 className="panel-title">
    //                   <a
    //                     className="collapsed"
    //                     role="button"
    //                     data-toggle="collapse"
    //                     data-parent="#accordion"
    //                     href="#faq5"
    //                   >
    //                     <span>What is Cryptocurrency Exchange Development?</span>
    //                   </a>
    //                 </h5>
    //               </div>
    //               <div
    //                 id="faq5"
    //                 className="panel-collapse collapse"
    //                 role="tabpanel"
    //                 aria-labelledby="headingSix"
    //               >
    //                 <div className="panel-body">

    //                   Cryptocurrency exchange development helps entrepreneurs to
    //                   build cryptocurrency exchange platforms from scratch. The
    //                   process consists of teams for design, development, testing,
    //                   legalities, and marketing to ensure the platform meets all
    //                   user-end, business, and regulatory requirements to enable
    //                   seamless operations.
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="panel panel-default">
    //               <div className="panel-heading" role="tab">
    //                 <h5 className="panel-title">
    //                   <a
    //                     className="collapsed"
    //                     role="button"
    //                     data-toggle="collapse"
    //                     data-parent="#accordion"
    //                     href="#faq6"
    //                   >
    //                     <span>
    //                       What are the Benefits of Cryptocurrency Exchange
    //                       Development?
    //                     </span>
    //                   </a>
    //                 </h5>
    //               </div>
    //               <div
    //                 id="faq6"
    //                 className="panel-collapse collapse"
    //                 role="tabpanel"
    //                 aria-labelledby="headingSix"
    //               >
    //                 <div className="panel-body">
    //                   Cryptocurrency exchange development offers several benefits to
    //                   businesses. The main ones include enabling faster
    //                   cross-country transactions, tighter security against hacks,
    //                   and opportunities for tapping into other business models.
    //                   Additional benefits can be gained based on how you frame your
    //                   exchange.
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="panel panel-default">
    //               <div className="panel-heading" role="tab">
    //                 <h5 className="panel-title">
    //                   <a
    //                     className="collapsed"
    //                     role="button"
    //                     data-toggle="collapse"
    //                     data-parent="#accordion"
    //                     href="#faq7"
    //                   >
    //                     <span>
    //                       How Much Does It Cost to Develop a Crypto Exchange?
    //                     </span>
    //                   </a>
    //                 </h5>
    //               </div>
    //               <div
    //                 id="faq7"
    //                 className="panel-collapse collapse"
    //                 role="tabpanel"
    //                 aria-labelledby="headingSix"
    //               >
    //                 <div className="panel-body">

    //                   The cost of cryptocurrency exchange development depends on how
    //                   you plan your business. The user features and back-end
    //                   protocols determine how much you spend developing the crypto
    //                   exchange. It also depends on the extent of your marketing
    //                   campaigns.
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="panel panel-default">
    //               <div className="panel-heading" role="tab">
    //                 <h5 className="panel-title">
    //                   <a
    //                     className="collapsed"
    //                     role="button"
    //                     data-toggle="collapse"
    //                     data-parent="#accordion"
    //                     href="#faq8"
    //                   >
    //                     <span>How Can I Build a Cryptocurrency Exchange?</span>
    //                   </a>
    //                 </h5>
    //               </div>
    //               <div
    //                 id="faq8"
    //                 className="panel-collapse collapse"
    //                 role="tabpanel"
    //                 aria-labelledby="headingSix"
    //               >
    //                 <div className="panel-body">

    //                   You can start building a cryptocurrency exchange by planning
    //                   for it. This is followed by the core cryptocurrency exchange
    //                   development process that includes prototyping, designing,
    //                   developing, testing, and launching. To make the process
    //                   easier, you can collaborate with our company.
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="panel panel-default">
    //               <div className="panel-heading" role="tab">
    //                 <h5 className="panel-title">
    //                   <a
    //                     className="collapsed"
    //                     role="button"
    //                     data-toggle="collapse"
    //                     data-parent="#accordion"
    //                     href="#faq9"
    //                   >
    //                     <span>
    //                       What Makes Crypto Exchange a Good Business Idea?
    //                     </span>
    //                   </a>
    //                 </h5>
    //               </div>
    //               <div
    //                 id="faq9"
    //                 className="panel-collapse collapse"
    //                 role="tabpanel"
    //                 aria-labelledby="headingSix"
    //               >
    //                 <div className="panel-body">

    //                   Cryptocurrency exchange development is a good business idea
    //                   since the platform’s model is based on daily user activity.
    //                   Hence, generating income through various means and
    //                   establishing yourself in the crypto space becomes easier.
    //                   Blockchain App Factory can help you build featureful crypto
    //                   exchange applications.
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

export default Sec4