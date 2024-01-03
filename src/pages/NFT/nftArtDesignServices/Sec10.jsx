import React from "react";
import { SecTen } from "./nftArtDesignServicesComp";
import Faq from "../../../components/shared/Faq";

const Sec10 = () => {
  const FAQ = [
    {
      title: "Which Businesses Can Benefit from an NFT Art Design Agency?",
      desc: "Businesses of all scales across industries can benefit from an NFT art design agency. Individual creators, startups, enterprises, brands, and collaborative businesses can tap into our NFT design agency’s expertise to unleash breathtaking artworks. Contact us to learn more about crafting NFT art.",
    },
    {
      title: "What are the Various Kinds of NFT Art Design Services Available?",
      desc: "Our company offers numerous NFT art design services to client projects, including 2D NFT design, 3D NFT modeling and design, NFT animation designs, NFT avatar creation, NFT collection creation, NFT art rarity configuration, NFT art traits assembly, NFT marketplace design, and NFT marketing videos.",
    },
    {
      title:
        "Which Type of NFTs Can an NFT Art Creation Services Provider Create?",
      desc: "Types of NFTs an NFT art creation services provider can craft include gaming characters, metaverse avatars, artworks, music clips, video moments, generative images, fashion accessories, and digital collectibles. Connect with our professionals to learn how your NFT project can utilize our expertise.",
    },
    {
      title: "What is the Cost of NFT Art Creation?",
      desc: "The cost of NFT art creation depends on several factors, including the number of NFTs, the technology used, the complexity of creativity needed, the number of traits and variations, and the need for storyboards, minting engines, and listing services. Contact us to get a customized quote today!",
    },
    {
      title: "Which is the Best NFT Art Character Design Company?",
      desc: "Blockchain App Factory is the best NFT art character design company with vast experience in crafting visually inspiring artworks and images for global projects. Our professionals can aid you in all aspects of designing and listing your NFT art character collection. Talk to us to learn more!",
    },
  ];
  return (
    <SecTen>
      <Faq data={FAQ} />
    </SecTen>
  );
};

export default Sec10;
