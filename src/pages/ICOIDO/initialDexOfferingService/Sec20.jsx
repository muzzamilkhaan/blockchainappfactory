import React from "react";
import Faq from "../../../components/shared/Faq";

const Sec20 = () => {
  const FAQ = [
    {
      title: "What is Initial Dex Offering(IDO)?",
      desc: " Initial Dex offering(IDO) is a fundraising model that offers the fundraising opportunity for decentralized exchange platform development. ",
    },
    {
      title: "Who will benefit from IDO? ",
      desc: " This IDO fundraising model facilitates the immediate fundraising opportunities for decentralized exchange platform developers and also supports the development of DeFi. ",
    },
    {
      title: "What is the use of IDO?",
      desc: " IDO supports the startups and raising enterprises that strive to build their business in blockchain technology with an immediate fundraising opportunity in blockchain for the development of the blockchain community and its business development. ",
    },
  ];
  return (
    <div>
      <Faq data={FAQ} />
    </div>
  );
};

export default Sec20;
