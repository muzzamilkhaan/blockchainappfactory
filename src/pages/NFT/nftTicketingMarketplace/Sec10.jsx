import React from "react";
import { SecTen } from "./nftTicketingMarketplaceComp";
import { H2, Button } from "../../../components";

const Sec10 = () => {
  return (
    <SecTen>
      <section className="intro_cnt common_spacing gray_bg">
        <div className="container">
          <div className="col-lg-12">
            <div className="section-title text-center underline">
              <div className="sec_tit">
                <H2> Why Choose Us?</H2>
              </div>
            </div>
            <p className="mt10 mb10 text-center para">
              Blockchain App Factory has had expertise with Web3 technology for
              a long time. This makes us carry out new endeavors using
              experimental approaches. We have seen a lot of success so far in
              the long journey. NFT ticketing marketplace development is a new
              feather in the cap for our experts. We use sophisticated tools to
              develop your NFT ticketing platform without any flaws. Our
              seasoned blockchain experts also focus on satisfying all your
              business platform requirements. Our smart contract development has
              already won accolades in the global blockchain community. So,
              approaching us for your NFT ticketing system is a no-brainer under
              any circumstances. Contact one of our professionals now to start
              off your new business venture!
            </p>
          </div>
          <div className="text-center">
            <div className="cta_mine">
              <div className="d-flex justify-content-center flex-wrap gap-3 ">
                <Button
                  btnContent="Talk with our Experts"
                  to="#newsletter-form-sec"
                />
              </div>
            </div>{" "}
          </div>
        </div>
      </section>
    </SecTen>
  );
};

export default Sec10;
