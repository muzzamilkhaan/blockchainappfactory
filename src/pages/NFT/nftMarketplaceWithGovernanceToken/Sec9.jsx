import React from "react";
import { SecNine } from "./nftMarketplaceWithGovernanceTokenComp";
import Faq from "../../../components/shared/Faq";

const Sec9 = () => {
  const FAQ = [
    {
      title: "What are governance tokens?",
      desc: "Governance tokens are the crypto coins that can be used to provide certain rights to the users who are eligible to take part in the community that drives a particular platform.",
    },
    {
      title: "Why are governance tokens valuable",
      desc: "The governance tokens are much valuable in a platform as they play a vital role in decision making and enhancing the marketplace.",
    },
    {
      title: "What does a governance token do?",
      desc: "The governance token will give certain rights to a particular user who has constantly been contributing to the platform.",
    },
    {
      title: "How do I get a governance token?",
      desc: "The governance token can be earned by meeting various thresholds such as staking, owning native tokens.",
    },
  ];
  return (
    <SecNine>
      <Faq data={FAQ} />
    </SecNine>
  );
};

export default Sec9;
