import React from "react";
import Faq from "../../../components/shared/Faq";

const Sec10 = () => {
  const FAQ = [
    {
      title: "How does a P2P Exchange work?",
      desc: " A peer-to-peer exchange platform is completely decentralized. Thus, it eliminates the involvement of third parties managing the customer funds and an order book to manage the buy/sell requests. Instead, it allows customers to exchange directly peer-to-peer between themselves and manage their funds. ",
    },
    {
      title: "What are the advantages of P2P exchange? ",
      desc: " A p2p exchange is highly advantageous in the aspect of helping customers with highly-secure, quick, efficient, seamless transactions. And as it does not involve a third party, it is risk-free, hassle-free, time-saving, and cost-effective. ",
    },
    {
      title: "How much does it cost to build a Peer to Peer exchange? ",
      desc: " The cost of building a p2p exchange varies from customer to customer according to their required features and customization preferences. However, acquiring ready-made white label solutions will cost way less than gathering equipment and building the exchange from scratch. ",
    },
    {
      title: " What are the benefits of having a p2p exchange?",
      desc: " There are numerous benefits involved with having a p2p cryptocurrency exchange. Some of the significant ones include direct globalised transactions, improved user privacy, prevention of fraudulent, cost-effective business, enhanced security, etc. ",
    },
    {
      title: "How to develop a P2P crypto exchange platform?",
      desc: " Developing a p2p crypto exchange platform from scratch will consume ample time and money, also involves technical factors. The better choice is to obtain white label p2p exchange solutions from a sort after company, which is reliable, quick to deploy, integrated with quality technical elements, and cost-effective. ",
    },
  ];
  return (
    <div>
      <Faq data={FAQ} />
    </div>
  );
};

export default Sec10;
