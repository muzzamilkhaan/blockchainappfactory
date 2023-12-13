import React from "react";
import { SecTwelve } from "./ZksyncIntegrationServiceComp";
import Faq from "../../../components/shared/Faq";
const Sec12 = () => {
  const FAQ = [
    {
      title: "What is the Difference Between zkSync and zkSync2.0?",
      desc: "zkSync stores data on-chain, while zkSync 2.0 provides an option to use Validium, an off-chain solution for data storage, increasing throughput at minimal fees.",
    },
    {
      title: "Why Should You Opt for zkSync2.0?",
      desc: "zkSync 2.0 is beneficial for Web3 ventures opting for asset storage on-chain or off-chain based on their business requirements through zkRollups and Validium. ",
    },
    {
      title: "What are the Benefits of zksync2.0 Integration in NFT Platform?",
      desc: "zkSync 2.0 integration in the NFT platform offers ventures with increased transaction speeds, batch processing, and lower gas while using Ethereum’s security.",
    },
    {
      title: "Is the Mainnet Ready in zkSync2.0?",
      desc: "Yes, zkSync 2.0 is now on the mainnet, and projects can list themselves to be part of a futuristic Layer-2 solution of the robust Ethereum blockchain.",
    },
    {
      title:
        "Is it possible to integrate zkSync 2.0 into NFT Marketplaces and dApps?",
      desc: "Yes, it is possible to integrate NFT marketplaces and dApps compatible with EVM into the zkSync 2.0 network to gain added advantages for underlying ventures.",
    },
  ];
  return (
    <SecTwelve>
      <Faq data={FAQ} />
    </SecTwelve>
  );
};

export default Sec12;
