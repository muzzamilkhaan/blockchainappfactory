import React from "react";
import { SecNine } from "./socialTokenDevelopmentPlatformComp";
import Faq from "../../../components/shared/Faq";
const Sec9 = () => {
  const FAQ = [
    {
      title: "What is a Social Token?",
      desc: "Social tokens are the special tokens to represent an individual or community. ",
    },
    {
      title: "Who gets benefited from Social Tokens? ",
      desc: "Social token benefits Individual workers, private organizations, event managers and social groups",
    },
    {
      title: "What is the use of Social Token Platform Development? ",
      desc: "Social tokens development platform enables the individual workers and social communities to create their own tokens. This facilitates huge audience traction towards your social token development platform.",
    },
  ];
  return (
    <SecNine>
      <Faq data={FAQ} />
    </SecNine>
  );
};

export default Sec9;
