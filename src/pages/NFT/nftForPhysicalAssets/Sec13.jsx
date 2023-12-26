import React from "react";
import { SecThirteen } from "./nftForPhysicalAssetsComp";
import Faq from "../../../components/shared/Faq";

const Sec13 = () => {
  const FAQ = [
    {
      title: "What is a Physical NFT?",
      desc: " Physical Non Fungible tokens are the assets that are physically available, these physical assets are assigned with a unique value to maintain the uniqueness and indivisible characteristics of the NFTs. ",
    },
    {
      title: "What is the use of a Physical NFT?",
      desc: " Physical NFT concept will aid numerous artists, creators, and many other professionals in the way of making opportunities to monetize their work and at the same time, they act as an excellent aid in the rare collectible collection. ",
    },
    {
      title: "How do I redeem a Physical NFT?",
      desc: " NFTs can be redeemed in order to hold the owner of certain physical assets. This can be done in any NFT physical asset marketplace. ",
    },
    {
      title: "Can I sell physical items as NFT?",
      desc: " Yes, NFT and Blockchain app factory will support you to develop and sell a physical NFT in order to widen the market of NFT. NFT is top in the market and surpassing billions just easily. ",
    },
  ];
  return (
    <SecThirteen>
      <Faq data={FAQ} />
    </SecThirteen>
  );
};

export default Sec13;
