import React, { useState } from "react";
import Header from "../../headerFooter/Header";
import Footer from "../../headerFooter/Footer";
import "./landingPage.css";
import LandingSec1 from "./LandingSec1";
import LandingSec2 from "./LandingSec2";
import LandingSec3 from "./LandingSec3";
import LandingSec4 from "./LandingSec4";
import LandingSec5 from "./LandingSec5";
import LandingSec6 from "./LandingSec6";
import LandingSec7 from "./LandingSec7";
import LandingSec8 from "./LandingSec8";
import LandingSec9 from "./LandingSec9";
import LandingSec10 from "./LandingSec10";
import LandingSec11 from "./LandingSec11";
import LandingSec12 from "./LandingSec12";
import LandingSec13 from "./LandingSec13";
import LandingSec14 from "./LandingSec14";
import LandingSec15 from "./LandingSec15";

const LandingPage = () => {
  const data = [
    {
      title: "What Does Blockchain App Factory Do?",
      desc: "At Blockchain App Factory, we assist businesses to elevate in the Web3 market. Our consulting, development and marketing services are some of the best worldwide. We serve clients based on various blockchain business domains, including some big names.",
    },
    {
      title: "How Do Our Experts Innovate?",
      desc: "Our experts across various business domains constantly upskill themselves with the latest developments in their fields. We equip ourselves with the newest tech stacks, development practices, and marketing strategies to stay ahead of the competition.",
    },
    {
      title: "Who Do We Cater?",
      desc: "Our clientele includes many big names across industries across the globe, ranging from logistics, supply chain, food, finance, and digital assets. We have also assisted many blockchain-native ventures to rise from the ground up to become successful.",
    },
    {
      title: "What are the Principles We Believe In?",
      desc: `At Blockchain App Factory, our experts believe in staying true to the client's demands and fulfilling them through our experience and expertise. All our enterprise services revolve around customers’ needs to ensure that the desired results are achieved.`,
    },
    {
      title: "What are Some Applications We Excel In?",
      desc: "Our professionals master creating multiple blockchain applications, including cryptocurrencies, crypto exchanges, NFTs, NFT marketplaces, NFT games, metaverses, crypto offering platforms (ICO/IDO), and launchpads from scratch and White label solutions.",
    },
  ];
  return (
    <>
      <Header />
      <div className="header-shadow" id="home">
        <LandingSec1 />
        <LandingSec2 />
        <LandingSec3 />
        {/* <LandingSec4 /> */}
        <LandingSec5 />
        <LandingSec6 />
        <LandingSec7 />
        <LandingSec8 />
        <LandingSec9 />
        <LandingSec10 />
        <LandingSec11 />
        <LandingSec12 />
        {/* <LandingSec13 /> */}
        <LandingSec14 data={data} />
        <LandingSec15 />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default LandingPage;
