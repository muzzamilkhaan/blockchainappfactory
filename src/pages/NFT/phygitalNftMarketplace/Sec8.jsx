import React from "react";
import { SecEight } from "./phygitalNftMarketplaceComp";
import { H2, Button } from "../../../components";

const Sec8 = () => {
  return (
    <SecEight>
      <div className="common_spacing">
        <div className="container">
          <div className="section-title text-center">
            <div className="title-th sec_tit underline">
              <H2> Why choose us? </H2>
            </div>{" "}
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 text-center">
              <p className="text-center mt20">
                Blockchain App Factory is one of the legendary names in the Web3
                domain, with a team consisting of qualified experts in each
                facet of development. Our expertise in phygital NFTs has grown
                within a short time in spite of new upgrades evolving in the
                Web3 world every day. Create a phygital NFT marketplace today
                with our professionals as you are assured of getting a
                best-in-className platform. We concentrate on fulfilling every
                business need of our clients, which makes our phygital NFT
                marketplace development services one of the best in the world.
                If you want to create a phygital NFT marketplace, chat with one
                of us today to get started!
              </p>
              <div className="text-center">
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
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecEight>
  );
};

export default Sec8;
