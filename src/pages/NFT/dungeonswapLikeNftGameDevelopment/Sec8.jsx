import React from "react";
import Faq from "../../../components/shared/Faq";

const Sec8 = () => {
  const FAQ = [
    {
      title: "What is a Dungeonswap NFT Game?",
      desc: " Dungeonswap is an NFT game that is dedicated to creating user-centric and sustainable decentralized ecosystems. This game is the first RPG-themed game to be built on the Binance Smart Chain network. ",
    },
    {
      title: "Is DungeonSwap play to earn?",
      desc: " Yes, the Dungeonswap NFT game comes under the category of play-to-earn games where players get paid for playing the games with the help of NFTs and blockchain technology. ",
    },
    {
      title:
        "What are the features of the DungeonSwap Like the NFT gaming platform?",
      desc: " The most commonly acknowledged features of the DungeonSwap NFT game are exclusive NFT marketplace, cross-chain functionality, efficient commerce market, etc. ",
    },
    {
      title: "How do I launch an NFT Gaming Platform like DungeonSwap? ",
      desc: " In order to launch an NFT gaming platform like DungeonSwap, hiring a world-class NFT development company is ideal. ",
    },
    {
      title: "How do you make money in DungeonSwap? ",
      desc: " In the DungeonSwap NFT game, the in-game assets that are represented as NFTs are traded over its marketplace or on secondary marketplaces. This is an effective way to earn money in this game. ",
    },
    {
      title:
        "What are the benefits of an NFT Gaming Platforms like DungeonSwap?",
      desc: " The major benefit of an NFT gaming platform like DungeonSwap is the ability to monetize in-game assets and provide a platform for players to earn money and liquidate their gameplays in the NFT marketplace for profits. ",
    },
  ];
  return (
    <div>
      <Faq data={FAQ} />
    </div>
  );
};

export default Sec8;
