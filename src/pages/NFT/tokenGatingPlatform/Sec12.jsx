import React from "react";
import { SecTwelve } from "./tokenGatingPlatformComp";
import Faq from "../../../components/shared/Faq";
const Sec12 = () => {
  const FAQ = [
    {
      title: "What are SocialFi Development Solutions?",
      desc: "SocialFi development solutions integrate decentralized finance (DeFi) with social media by enabling users to incentivize their time spent online and creators to incentivize and exclusive their content.",
    },
    {
      title: "Why is SocialFi Popular Among Content Creators?",
      desc: "The SocialFi model allows content creators to own complete rights to the content they had created in the app through NFTs, which enables them to gain royalties for reposts and remixes.",
    },
    {
      title: "Is SocialFi Platform Development a Good Business Model?",
      desc: "SocialFi platform development is a great business model as more people have started realizing the need for ultimate data privacy and incentivization for their screen time, and SocialFi does just that!",
    },
    {
      title: "What are the Benefits of Creating SocialFi Applications?",
      desc: "Creating SocialFi applications offers a plethora of benefits, including:\n- Decentralized storage\n - Censorship resistance \n - Tokenized rewards\n - Complete rights to content\n - Protection from deplatforming",
    },
    {
      title:
        " Which Company Offers the Best Decentralized Social Media Platform Development Services?",
      desc: "Blockchain App Factory offers the best SocialFi platform development services for businesses of all scales, from startups to global brands, powered by new-gen technology and experienced developers.",
    },
  ];
  return (
    <SecTwelve>
      <Faq data={FAQ} />
    </SecTwelve>
  );
};

export default Sec12;
