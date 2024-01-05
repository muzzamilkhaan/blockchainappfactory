import React from "react";
import Faq from "../../../components/shared/Faq";

const Sec10 = () => {
  const FAQ = [
    {
      title: "What is a Racing NFT marketplace like Zed Run development?",
      desc: " Building an NFT marketplace just similar to Zed Run including all of their functionality which can be modified or customized if needed or required. ",
    },
    {
      title: "What is breeding? ",
      desc: " Breeding is the process of making the virtual horse mating with another horse in the NFT marketplace or in the stable to create a new horse. This process is chargeable. ",
    },
    {
      title: "How to take part in the race?",
      desc: " After the horse is bred and grown the horse can participate in the griffin race. There the horse will be awarded with points based on the position the horse attained. ",
    },
  ];
  return (
    <div>
      <Faq data={FAQ} />
    </div>
  );
};

export default Sec10;
