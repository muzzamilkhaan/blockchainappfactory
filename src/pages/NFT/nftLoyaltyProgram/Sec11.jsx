import React from "react";
import { SecEleven } from "./nftLoyaltyProgramComp";
import Faq from "../../../components/shared/Faq";
const Sec11 = () => {
  const FAQ = [
    {
      title: "What is an NFT Loyalty Platform?",
      desc: "An NFT loyalty platform lets customers earn loyalty points in the form of NFTs from a business by engaging with the tasks listed. These rewards can be redeemed to make purchases or get services from the business.",
    },
    {
      title: "What are the Benefits of a Web3 Loyalty Program?",
      desc: "Web3 loyalty programs offer a number of benefits as they mainly use NFTs. Some include:\n\n- Access to real-time data for businesses \n- Unique incentives provided to customers \n - Possibility to link multiple loyalty programs under an umbrella \n  - Appeal to the new-gen consumer population",
    },
    {
      title: "What are the Different NFT Loyalty Program Types in Place?",
      desc: "NFT loyalty platform development lets businesses utilize different program types that brands can use to appeal to their users. Some include:\n\n - Points Programs \n- Tiers Programs  \n- Value Programs \n- Paid Programs",
    },
    {
      title:
        "How Much Time It Takes for a Business Launch from a Whitelabel NFT Loyalty Platform? ",
      desc: "Typically, it takes 7 - 28 days for a business to launch its NFT loyalty program from a Whitelabel NFT loyalty platform. The minimal time incurred is due to the lesser need for development and testing practices during the process as the application is pre-built.",
    },
    {
      title:
        " Which is the Best NFT Loyalty Platform Development Company in 2023? ",
      desc: "Blockchain App Factory provides top-level NFT loyalty platform development for clients of all scales, including premium brands and emerging startups. Our services ensure all client demands are fulfilled while ensuring all Web3 elements are included in the platform.",
    },
  ];
  return (
    <SecEleven>
      <Faq data={FAQ} />
    </SecEleven>
  );
};

export default Sec11;
