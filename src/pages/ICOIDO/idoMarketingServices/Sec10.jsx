import React from "react";
import Faq from "../../../components/shared/Faq";
const Sec10 = () => {
  const FAQ = [
    {
      title: "Why IDO marketing?",
      desc: " IDO marketing service promotes your IDO platform to reach the entrepreneurs and investors for gaining attraction towards your IDO platform for fundraising. ",
    },
    {
      title: "What are the methods of IDO marketing? ",
      desc: " The prominent methods of IDO marketing involve,\n Social media marketing \n Listing \n Strategic marketing.",
    },
    {
      title: "How to find the best marketing agency for IDO marketing?",
      desc: " A company's brand value and their success stories are their proven records. Blockchain App Factory’s magnificent success and result-driven marketing strategies make it pop out as the best IDO marketing agency. ",
    },
  ];
  return (
    <div>
      <Faq data={FAQ} />
    </div>
  );
};

export default Sec10;
