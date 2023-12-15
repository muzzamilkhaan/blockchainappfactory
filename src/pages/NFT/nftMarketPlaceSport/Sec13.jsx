import React from "react";
import { SecThirteen } from "./nftMarketPlaceSportComp";
import Faq from "../../../components/shared/Faq";
const Sec13 = () => {
  const FAQ = [
    {
      title: "What are sports NFT?",
      desc: "Sports collectibles like cards, stats, video clips, and many other special sports moments can be converted into NFTs. This is called the Sports NFT.",
    },
    {
      title: "Are NFTs the biggest opportunity in sports?",
      desc: "There are already some NFT sports marketplaces like NBA Top Shots that are making new records in the market. Sports has billions of fan bases which is a grand opening for the NFT sports.",
    },
    {
      title: "What do Sports NFTs Aim to Solve? ",
      desc: "NFT sports brings an opportunity for the user or sports fan to seize the moment and completely own them with uniqueness. NFT sports is offering many new opportunities for the initial level creators and stands as brand ambassadors for celebrities.",
    },
    {
      title: "How to create my own NFT Sports Marketplace?",
      desc: "Blockchain app factory is the best solution to create your NFT sports marketplace. We develop marketplaces with various features as inbuilt functionality to offer our clients a better experience.",
    },
  ];
  return (
    <SecThirteen>
      <Faq data={FAQ} />
    </SecThirteen>
  );
};

export default Sec13;
