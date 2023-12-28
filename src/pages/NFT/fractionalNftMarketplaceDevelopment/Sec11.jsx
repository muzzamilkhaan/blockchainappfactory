import React from "react";
import { SecEleven } from "./fractionalNftMarketplaceDevelopmentComp";
import Faq from "../../../components/shared/Faq";

const Sec11 = () => {
  const FAQ = [
    {
      title: "Can you buy fractional NFTs?",
      desc: "Fractional NFT can be bought easily, similar to the traditional NFTs the fractional NFTs have their own marketplace. People can interact with the market to buy a fractional NFT.",
    },
    {
      title: "How to Buy and Sell Fractionalized NFTs?",
      desc: "The fractionalized NFTs can be bought and also sold in the dedicated fractionalized NFT market. The fractional NFTs can also be brought back with the buyout option in those specialized NFT marketplaces.",
    },
    {
      title: "How Does Fractional NFT Work?",
      desc: "The fractionalized NFTs can be bought and also sold in the dedicated fractionalized NFT market. The fractional NFTs can also be brought back with the buyout option in those specialized NFT marketplaces.",
    },
    {
      title: "Why Fractional Asset Ownership Makes Art More Accessible? ",
      desc: "Fractionalizing an asset automatically makes it more accessible and more trade-friendly. The value of the NFT will be dropped very large as a part of it can only be claimed for ownership.",
    },
    {
      title: "Where can the Fractional NFT be applied? ",
      desc: "The fractional NFTs can be applied in various sectors, they can literally make every NFT into fractionalized NFT. FOr eg Art, music, video, real estate, and many other assets.",
    },
  ];

  return (
    <SecEleven>
      <Faq data={FAQ} />
    </SecEleven>
  );
};

export default Sec11;
