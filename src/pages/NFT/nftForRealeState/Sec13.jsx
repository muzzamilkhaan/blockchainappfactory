import React from "react";
import { SecThirteen } from "./nftForRealeStateComp";
import Faq from "../../../components/shared/Faq";
const Sec13 = () => {
  const FAQ = [
    {
      title: "What is an NFT Real Estate Marketplace?",
      desc: "An NFT real estate marketplace is the platform where plots of land on real-world or metaverses can be traded. The marketplace can either be centralized or decentralized, which varies the trading methods.",
    },
    {
      title: "How do I invest in NFT Real Estate?",
      desc: "Investing in NFT real estate is easy as you would only need to buy an NFT of the plot of land you wish to buy from a marketplace without much paperwork.",
    },
    {
      title: "How do I use NFT for Real Estate?",
      desc: "NFTs for real estate can be used as proof of ownership to back a real-world land or serve as the land in a metaverse, which can be used as collateral or primary document.",
    },
    {
      title: "How do I create a Real Estate NFT?",
      desc: "Creating real estate NFTs is easy, as you would need to import the details of the plot of land backed by the NFT through a smart contract which would execute transactions from there on.",
    },
  ];
  return (
    <SecThirteen className="my-4">
      <Faq data={FAQ} />
    </SecThirteen>
  );
};

export default Sec13;
