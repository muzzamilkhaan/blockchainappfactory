import React from "react";
import { SecNine } from "./nftConsultingComp";
import { H2, Button } from "../../../components";

const Sec9 = () => {
  return (
    <SecNine>
      <section className="common_spacing gray_bg">
        <div className="container">
          <div className="row">
            <div className="sec_tit underline text-center">
              <H2>
                How can Blockchain App Factory Help Web3 Ventures to Take Off?
              </H2>
            </div>
          </div>
          <div className="row">
            <p className="mt10 text-center">
              Our NFT consulting agency understands the pulse of the Web3
              community from time to time. This makes us continuously improve
              our consulting and marketing services to be on par with current
              trends. Such adaptation has resulted in Blockchain App Factory
              becoming one of the best NFT consulting firms in the world. Even
              with improvements over time, we keep our customers over anything
              else and ensure that all their needs are satisfied before ending
              the partnership. We have been in the blockchain industry for more
              than 5 years, and have developed more than 200 unique projects.
              Currently, we have more than 50 ongoing projects which are being
              crafted by our 300+ team consisting of blockchain experts,
              consultants, and marketers. If you want to frame the overall plan
              for your new Web3 venture, hire NFT consultants from one of the
              best NFT consulting companies globally.{" "}
            </p>
          </div>
          <div className="text-center">
            <div className="cta_mine">
              <div className="d-flex justify-content-center flex-wrap gap-3 ">
                <Button
                  btnContent="Connect with Whatsapp"
                  target="_blank"
                  to="https://api.whatsapp.com/send?l=en&amp;text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&amp;phone=916382665366"
                />
                <Button
                  btnContent="Talk with our Experts"
                  to="#newsletter-form-sec"
                />
              </div>
            </div>{" "}
          </div>
        </div>
      </section>
    </SecNine>
  );
};

export default Sec9;
