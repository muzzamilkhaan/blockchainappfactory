import React from 'react'
import Faq from '../../../components/shared/Faq'

function Sec13() {

  const data = [
    {
      title: 'What is Asset Tokenization?',
      desc: `Assets that can be both physically and digitally available can be converted into a token, which are built with the blockchain networks to make them tamper proof and they do have the efficiency to stay encrypted where only the authorised entry can access the information of the tokenized asset.`
    },
    {
      title: 'What is Tokenization Asset Platform?',
      desc: `Tokenization asset platforms are the place where the assets of any time can be tokenized into a tokenized asset. The tokenization asset platforms are equipped with all the technical components needed for the asset tokenization. They are the easy way to tokenize the asset.`
    },
    {
      title: 'What is Advantages of tokenized assets?',
      desc: `There are various advantages in the tokenized assets, they include the decentralized nature, once the asset is tokenized they will be more secure and their decentralized structure will take care of the privacy and anonymity of the owner.Asset ownership will be available at all times so it can’t be tampered.`
    }

  ]
  return (
    <Faq data={data} className={'product-section fag_sec common_spacing'}/>
    // <div class="product-section fag_sec common_spacing">
    //   <div class="container">
    //     <div class="section-top ">
    //       <div class="section-header text-center">
    //         <h2 class="section-title mt20 underline common_h3 font_wei">FAQ</h2> </div>
    //     </div>
    //     <div class="row">
    //       <div class="col-sm-12 col-md-12">
    //         <div class="faq-content">
    //           <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
    //             <div class="panel panel-default">
    //               <div class="panel-heading" role="tab">
    //                 <h3 class="panel-title">
    //                   <a class="" role="button" data-toggle="collapse" data-parent="#accordion" href="#faq1">
    //                     <span>What is Asset Tokenization?</span>
    //                   </a>
    //                 </h3> </div>
    //               <div id="faq1" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
    //                 <div class="panel-body"> Assets that can be both physically and digitally available can be converted into a token, which are built with the blockchain networks to make them tamper proof and they do have the efficiency to stay encrypted where only the authorised entry can access the information of the tokenized asset. </div>
    //               </div>
    //             </div>
    //             <div class="panel panel-default">
    //               <div class="panel-heading" role="tab">
    //                 <h3 class="panel-title">
    //                   <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#faq2">
    //                     <span>What is Tokenization Asset Platform?</span>
    //                   </a>
    //                 </h3> </div>
    //               <div id="faq2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
    //                 <div class="panel-body"> Tokenization asset platforms are the place where the assets of any time can be tokenized into a tokenized asset. The tokenization asset platforms are equipped with all the technical components needed for the asset tokenization. They are the easy way to tokenize the asset. </div>
    //               </div>
    //             </div>
    //             <div class="panel panel-default">
    //               <div class="panel-heading" role="tab">
    //                 <h3 class="panel-title">
    //                   <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#faq3">
    //                     <span>What is Advantages of tokenized assets?</span>
    //                   </a>
    //                 </h3> </div>
    //               <div id="faq3" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
    //                 <div class="panel-body"> There are various advantages in the tokenized assets, they include the decentralized nature, once the asset is tokenized they will be more secure and their decentralized structure will take care of the privacy and anonymity of the owner.Asset ownership will be available at all times so it can’t be tampered. </div>
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

export default Sec13