import React from "react";
import { SecFour } from "./nftForRealeStateComp";
import { Button, H2 } from "../../../components";

const Sec4 = () => {
  return (
    <SecFour>
      <div className="intro_cnt common_spacing gray_bg">
        <div className="container">
          <div className="box-shadow-border col-lg-offset-1 col-lg-10 p-4">
            <div className="row">
              <div className="section-title text-center">
                <div className="sec_tit underline box-space">
                  <H2> NFT and its cutting-edge technology </H2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-offset-1 col-md-10 col-sm-12 col-xs-12">
                <p className="text-center para">
                  This cutting-edge blockchain technology is a major part and
                  one of the reasons for virtualization. People nowadays are
                  converting their property asset into NFT because of its
                  interoperability and transparency along with the consensus.
                  Land NFT is not only becoming a physical world service but
                  also integrating virtually as there are several services
                  running on the blockchain platform which provide you with the
                  virtualized aspect of real-life experiences for example there
                  is a service which is a kind of virtual platform known as
                  “Decentraland” and because of NFTs blending with real estate,
                  Decentraland is a place where one can buy virtual plots in
                  form of NFT and use it as virtual office, shop, school,
                  university, even a mall for promotional events of new products
                  or anything that happen in real-world can be fabricated
                  here.Imagine the possibility of having a world free from a
                  pandemic or having a virtual school for the farthest corners
                  of the world, reliving or having a cup of tea with the
                  greatest set of minds.{" "}
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    btnContent="Talk with our Experts"
                    to="#newsletter-form-sec"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecFour>
  );
};

export default Sec4;
