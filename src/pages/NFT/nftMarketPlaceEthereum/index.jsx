import React from "react";
import {
  BannerContainer,
  BannerLayout,
  BannerOverlay,
  LeftLayout,
  RightLayout,
  ButtonContainer,
  Button,
  Sec2,
  Sec3,
  LayoutSec3,
  LeftSec3,
  RightSec3,
  Sec4,
  LayoutSec4,
  LeftSec4,
  RightSec4,
  ButtonSec4,
  Sec5,
} from "./nftMarketPlaceEthereumComp";
import { NftCard } from "../../../components/cards/nftCard/NftCard";

const Sec5Card = [
  {
    img: "https://www.blockchainappfactory.com/images/nft-marketplace-on-ethereum/icons/e1.webp",
    title: "Storefront",
    desc: "The storefront is a user-end dashboard that has all the details for an NFT product, including descriptions, price, ownership, etc.",
  },
  {
    img: "https://www.blockchainappfactory.com/images/nft-marketplace-on-ethereum/icons/e2.webp",
    title: "Search Engine",
    desc: "An advanced search engine feature helps users in searching their favorite NFT assets without needing to navigate across the platform.",
  },
  {
    img: "https://www.blockchainappfactory.com/images/nft-marketplace-on-ethereum/icons/e3.webp",
    title: "Filter and Sort",
    desc: "These features are integral parts of the sophisticated search engine, which further eases users to reach their favorite NFT products.",
  },
  {
    img: "https://www.blockchainappfactory.com/images/nft-marketplace-on-ethereum/icons/e4.webp",
    title: "Listing Portal",
    desc: "The portal helps sellers list their NFT items easily by providing options to enter information, including details, pricing, and sale mode.",
  },
  {
    img: "https://www.blockchainappfactory.com/images/nft-marketplace-on-ethereum/icons/e5.webp",
    title: "Bidding Portal",
    desc: "The portal helps buyers place their bids on an NFT asset. Live bid updates should be displayed for the viewers.",
  },
  {
    img: "https://www.blockchainappfactory.com/images/nft-marketplace-on-ethereum/icons/e6.webp",
    title: "Status Portal",
    desc: "The portal helps sellers to know the status of their NFT products during every stage, right from the moderation stage.",
  },
  {
    img: "https://www.blockchainappfactory.com/images/nft-marketplace-on-ethereum/icons/e7.webp",
    title: "Cryptocurrency Wallet",
    desc: "A crypto wallet helps in processing every NFT asset transaction, which can be built-in or integrated from trusted external vendors.",
  },
  {
    img: "https://www.blockchainappfactory.com/images/nft-marketplace-on-ethereum/icons/e8.webp",
    title: "Ratings and Reviews",
    desc: "These assist new buyers in knowing about the best NFTs and give a way to reach sellers for existing users.",
  },
];
const nftMarketPlaceEthereum = () => {
  return (
    <>
      <BannerContainer>
        {/* <BannerOverlay></BannerOverlay> */}
        <BannerLayout>
          <LeftLayout>
            <div className="">
              <h1 className="h1">NFT Marketplace on Ethereum</h1>
              <p className="p1">
                Create your NFT marketplace on Ethereum to appeal to the biggest
                hub for NFT enthusiasts and benefit from the legendary
                blockchain.
              </p>
            </div>
            <ButtonContainer>
              <Button className="btn-Banner">CONNECT WITH WHATSAPP</Button>
              <Button>TALK WITH OUR EXPERTS</Button>
            </ButtonContainer>
          </LeftLayout>
          <RightLayout>
            <img
              src="https://www.blockchainappfactory.com/images/nft-marketplace-on-ethereum/banner_01.webp"
              alt=""
            />
          </RightLayout>
        </BannerLayout>
      </BannerContainer>
      <Sec2 backgroundColor="white" paddingBlock="5vw">
        <h2 className="sec_tit underline text-center sec2-h2">
          NFT Marketplace – A Brief Introduction
        </h2>
        <p className="p1">
          An NFT marketplace is a software platform where people can purchase,
          sell, and trade assets backed by non-fungible tokens (NFTs). If you
          wonder why one should buy NFTs, these tokens can work as proof of
          ownership and authenticity for assets they back. One can find various
          kinds of assets sold as NFTs on these platforms. Common NFT assets
          include artworks, music, video clips, collectible cards, in-game
          items, plots on metaverses, and even unique physical collectibles. NFT
          marketplaces are hosted on blockchain networks that form the basis of
          the future’s internet. Ethereum is one of the popular blockchains for
          NFT marketplace ventures. Other popular blockchain networks among NFT
          marketplaces include Binance Smart Chain, Polygon, Solana, Flow,
          Harmony, Avalanche, and Astar.
        </p>
      </Sec2>
      <Sec3 backgroundColor="#f2f2f2">
        <h2 className="sec_tit underline text-center sec3-h2">
          Ethereum – The Blockchain Legacy
        </h2>
        <LayoutSec3>
          <LeftSec3>
            <p className="p1">
              Ethereum is a blockchain network conceived by Vitalik Buterin in
              2013 and released in 2015. It was one of the first blockchain
              networks after Bitcoin came into existence. Due to its early entry
              into space, Ethereum has already earned legendary status in the
              blockchain world. The network helps developers build DApps
              (decentralized applications) and smart contracts, which paved the
              way for the first NFTs. Since its inception, Ethereum has been the
              home of numerous NFT marketplaces, profile picture (PFP)
              communities, blockchain games, and cryptocurrency exchanges.{" "}
            </p>
            <p className="p2">
              Particularly, an NFT marketplace on Ethereum is a great business
              option due to its popularity in the virtual world. The quality and
              the reputation of the network have enabled it to adopt newer
              applications seamlessly. The native cryptocurrency of Ethereum is
              called Ether, denoted by $ETH, and it has been seen as a great
              crypto investment option.
            </p>
          </LeftSec3>
          <RightSec3>
            <img
              src="https://www.blockchainappfactory.com/images/nft-marketplace-on-ethereum/ethereum_001.webp"
              alt=""
              className="sec3-img"
            />
          </RightSec3>
        </LayoutSec3>
      </Sec3>
      <Sec4 backgroundColor="#fff">
        <h2 className="sec_tit underline text-center sec2-h2">
          Why Should You Begin Your NFT Marketplace on Ethereum?
        </h2>
        <p className="p1-sec4">
          As we all know, running an NFT marketplace on Ethereum has been one of
          the most popular businesses on the network. Although the wide user
          community surrounding the network is a huge reason for its popularity,
          there is a lot more to understand.
        </p>
        <LayoutSec4>
          <LeftSec4>
            <img
              src="https://www.blockchainappfactory.com/images/nft-marketplace-on-ethereum/eth_marketplace_01.webp"
              alt=""
              className="sec4-img"
            />
          </LeftSec4>
          <RightSec4>
            <ul className="primary-list">
              <div>
                <li>
                  Since the network is completely decentralized, all data gets
                  distributed, which makes one trust automated entities.
                </li>
              </div>
              <li>
                Through Ethereum, firms can easily install platforms and look
                after exchange, mine, and storage without any hassle.
              </li>
              <li>
                The huge support behind Ethereum is the result of seamless
                working with multiple nodes and many users.
              </li>
              <li>
                Transactions on Ethereum are private and encrypted. Information
                is never exchanged to external parties until specifically
                requested.
              </li>
              <li>
                The Ethereum network will soon become faster due to the
                development of Layer2 solutions and software protocols.
              </li>
              <li>
                Ethereum also has earned many licenses across regulatory
                organizations worldwide, as it meets security and regulatory
                requirements.
              </li>
              <li>
                Ethereum’s scaling solutions have already shown a better speed
                (100 TPS), which makes the network’s future safe.
              </li>
            </ul>
          </RightSec4>
        </LayoutSec4>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ButtonSec4>
            <a href="" target="_blank" style={{ color: "#fff" }}>
              TALK WITH OUR EXPERT{" "}
            </a>
          </ButtonSec4>
        </div>
      </Sec4>
      <Sec5 backgroundColor="#f2f2f2">
        <h3 className="sec_tit underline text-center sec3-h3">
          Essential Features in an Ethereum-based NFT Marketplace Platform
        </h3>
        <NftCard data={Sec5Card} />
      </Sec5>
    </>
  );
};

export default nftMarketPlaceEthereum;
