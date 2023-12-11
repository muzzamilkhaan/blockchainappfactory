import React from "react";
import { SecTwelve } from "./nftMarketPlaceBSCComp";
import Faq from "../../../components/shared/Faq";

const Sec12 = () => {
  const FAQ = [
    {
      title: "What is the Binance NFT market?",
      desc: " NFT marketplace built on Binance smart chain is considered as Binance NFT market. Binance smart chain is one of the most reliable and feasible blockchains in the existing blockchain industry.",
    },
    {
      title: "How do I sell NFT on Binance smart chain?",
      desc: " NFT marketplace built of Binance smart chain will have very low transaction cost, The process is more similar to the existing NFT marketplaces. All you need to do is to upload in the NFT marketplace and set the token standard, payment mode.",
    },
    {
      title: "Can you buy NFT on Binance?",
      desc: " NFT marketplace on BSC accepts all popular cryptocurrencies and fiat currencies, NFT can be easily bought with binance by integrating the wallet into the NFT marketplace on BSC.",
    },
    {
      title: "How to create an NFT on BSC?",
      desc: " Building NFT on binance individually needs high technical knowledge and build with industry best developers like Blockchain app factory is one best choice.",
    },
  ];
  return (
    <>
      <SecTwelve>
        {/* <div className="section-header text-center ">
          <h3 className="section-title mt20 underline">FAQ</h3>
        </div> */}
        <Faq data={FAQ} />
      </SecTwelve>
    </>
  );
};

export default Sec12;
