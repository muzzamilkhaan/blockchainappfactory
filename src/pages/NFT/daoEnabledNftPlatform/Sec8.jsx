import React from "react";
import { SecEight } from "./daoEnabledNftPlatformComp";
import { H2, Button } from "../../../components";

const Sec8 = () => {
  return (
    <SecEight>
      <div className="intro_cnt common_spacing">
        <div className="container">
          <div className="col-lg-12">
            <div className="section-title text-center underline">
              <div className="sec_tit">
                <H2>
                  Blockchain App Factory – A Pioneer in Developing DAO-enabled
                  NFT Marketplaces
                </H2>
              </div>
            </div>
            <p className="mt10 mb10 text-center">
              At Blockchain App Factory, our professionals are always on the
              hunt for learning something new every moment. Such a positive
              attitude has resulted in us mastering the development of
              DAO-enabled NFT marketplace platforms within a short time. While
              the concept is emerging and more findings come out each day, our
              experts update themselves so that your platform will contain all
              the advanced features available in the field. We have always been
              a client’s delight due to our commitment to implement all their
              requirements for economical prices. So, with this being the right
              time to get on board with a DAO-enabled NFT marketplace business,
              start with us today to stay ahead!
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
      </div>
    </SecEight>
  );
};

export default Sec8;
