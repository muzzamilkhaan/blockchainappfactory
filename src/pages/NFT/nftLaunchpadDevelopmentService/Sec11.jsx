import React from "react";
import { SecEleven } from "./nftLaunchpadDevelopmentServiceComp";
import Faq from "../../../components/shared/Faq";

const Sec11 = () => {
  const FAQ = [
    {
      title: "What is a NFT Launchpad?",
      desc: "NFT Launchpad is where the users or the artist with the NFT can directly launch their assets for sale. The launchpad will provide all basic infrastructure and support for their curatedNFTs to get launched. NFT launchpad will be a space with the portfolio individually maintained for every user.",
    },
    {
      title: "Where can I get the best NFT Launchpad?",
      desc: "We can deliver you the best NFT launchpad, with all the necessary essential components for the users to kickstart. But In general, the best NFT launchpad should have a well-established technical architecture & a very convenient user interface. Responsive & flawless functionality is also a very important case.",
    },
    {
      title: "What are the benefits of acquiring an NFT Launchpad?",
      desc: "There are various benefits of acquiring an NFT launchpad\n <li> Easily deployed </li> <li>Individual portfolio</li> <li>More optimized Platform</li> <li>Best functionality &amp; responsiveness</li> <li>Well-integrated web 3.0 based wallet</li>",
    },
    {
      title: "How to Build an NFT Launchpad Platform?",
      desc: "To build an NFT launchpad platform, the need for professional developments and designers is mandatory. The development has to go through various processes including UX development, Front end development & Back-end development. Finally interacting with the APIs and integrating them.",
    },
  ];
  return (
    <SecEleven>
      <Faq data={FAQ} />
    </SecEleven>
  );
};

export default Sec11;
