import React from "react";
import { SecEight } from "./nftMusicMarketplaceDevelopmentComp";
import Faq from "../../../components/shared/Faq";
const Sec8 = () => {
  const FAQ = [
    {
      title: "Can you sell music as an NFT?",
      desc: "Of Course Yes, Many use cases are evolving with the trend of NFTs and now, It knocks the doors of the music industry to elevate their potential abruptly to the world through NFTs.",
    },
    {
      title: "What does NFT mean in music? ",
      desc: "The digital file will be encrypted and minted under the standard of NFT where the user can purchase the exclusive music albums in the form of NFTs which can be redeemed to avail the original music album.",
    },
    {
      title: "How do I invest in NFT music? ",
      desc: "Investment in NFT is a promising opportunity to build your wealth .Music’s flamboyance and its wide audience will increase the value of your Music NFT. Mint your personalised music albums ,compositions into NFTs that showcase you and your NFT to the world.",
    },
    {
      title: "How to Create a Music NFT platform? ",
      desc: "Developing a Music NFT platform is time consuming and requires a lot of energy and skills. Engaging with a pioneering NFT development company like blockchain App Factory is an effective option to deploy your music NFT platform at ease.",
    },
  ];
  return (
    <SecEight>
      <Faq data={FAQ} />
    </SecEight>
  );
};

export default Sec8;
