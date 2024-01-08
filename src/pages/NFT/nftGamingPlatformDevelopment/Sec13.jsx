import React from "react";
import Faq2 from "../../../components/shared/Faq2";
import { H2 } from "../../../components";
import styled from "styled-components";

const FaqContentStyle = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  @media (max-width: 767px) {
    /* margin: 15px; */
  }
`;
const Sec13 = () => {
  //   const FaqContentStyle = {
  //     width: "100%",
  //     maxWidth: "900px",
  //     margin: "0 auto",
  //     "@media (max-width: 767px)": {
  //       margin: "20px", // Adjust the margin as needed for mobile devices
  //     },
  //   };
  const FAQ = [
    {
      title: "What is NFT In-game Development?",
      desc: " NFT in-game development refers to the process of creating NFTs working in gaming applications. The process can either be applied to an existing Web2 game or an NFT-based game built from scratch.",
    },
    {
      title: "What is an NFT Gaming Platform?",
      desc: "An NFT gaming platform allows players to earn in-game cryptocurrencies as they play the game. The application is powered by the active trading of NFTs and in-game coins that drive the game’s value. ",
    },
    {
      title: "Is It Profitable to Create an NFT Game?",
      desc: "Yes, it is profitable to create an NFT game if you have a great imaginative idea. To ensure your idea can yield profits, work with the best NFT game developers to bring your dream gaming platform to life.",
    },
    {
      title: "How Do NFT Game Companies Make Money?",
      desc: "NFT game companies usually make money by charging a fee for in-app transactions, new asset listings, marketing partnerships, and real-world businesses that can amount to thousands to millions of dollars.",
    },
    {
      title: "Can You Make Money Playing NFT Games?",
      desc: " NFT games are decentralized, and it offers the user to utilize the game assets outside the game as NFTs. And the users can make money selling those NFTs in marketplaces. ",
    },
    {
      title: "What is the NFT Game Development Cost?",
      desc: " The NFT game development cost mainly depends on certain factors associated with the process, like the number of features involved and the level of customization. ",
    },
    {
      title: "How Much Does It Cost to Build an NFT Game?",
      desc: "The cost to build an NFT game differs for each project due to various factors, such as technology, gaming genre, creative needs, features, and security provisions. Contact us to get a close estimate.",
    },
    {
      title: "How Will NFT Develop in the Gaming Industry?",
      desc: "NFTs have become inseparable in today’s gaming industry as more people want their gaming experience to be monetarily worthy. As time flies by, NFTs will become the basic element for games of all kinds.",
    },
  ];
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-12">
          <FaqContentStyle >
          <Faq2 data={FAQ} />
          </FaqContentStyle>
        </div>
      </div>
    </div>
  );
};

export default Sec13;
