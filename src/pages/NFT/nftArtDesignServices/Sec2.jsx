import React from "react";
import { SecTwo } from "./nftArtDesignServicesComp";
import { H2, Button } from "../../../components";

const Sec2 = () => {
  return (
    <SecTwo>
      <div className="common_spacing gray_bg">
        <div className="container">
          <div className="section-title text-center">
            <div className="title-th sec_tit underline">
              <H2> Globally Reputed NFT Design Agency </H2>
            </div>{" "}
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 text-center">
              <p className="text-center">
                The design of an NFT is as important as its existence on the
                blockchain. Our NFT design agency understands this fact and
                strives to bring the best for aspiring projects like yours. From
                sketched characters to 3D-rendered avatars, our artistic
                designers put the hard steps to bring your vivid imagination to
                life.
                <br />
                <br />
                Whatever your business idea and approach, our NFT graphic design
                services can offer top-notch creations that exceed your
                expectations. We have the necessary expertise and access to the
                latest design tools and frameworks that make the NFT art
                creation process seamless and appealing.
              </p>
            </div>
            <div className="clearfix"></div>
            <div className="text-center cta_mine txt">
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
          </div>
        </div>
      </div>
    </SecTwo>
  );
};

export default Sec2;
