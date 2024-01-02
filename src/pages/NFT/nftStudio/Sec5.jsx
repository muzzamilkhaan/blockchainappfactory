import React from "react";
import { SecFive } from "./nftStudioComp";
import { H2 } from "../../../components";

const Sec5 = () => {
  return (
    <SecFive>
      <section
        className="bg_3 common_spc"
        style={{ background: "#b94a23", paddingTop: "60px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h5 className="text_w bg_02">
                "Things we can &amp; No-More Can’t."
              </h5>{" "}
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-md-4 vstart-item">
              <div className="content">
                <H2 className="text_w" style={{ color: "#fff" }}>
                  Hand Made Art Library
                </H2>
                <p className="text_w">
                  Generative NFT is designed with the base of the art library,
                  where the theme of the generative NFT should be fed in as an
                  art library. The Art library needs a theme and series of arts,
                  which are designed and drawn by professional artists. To make
                  you more, we took the responsibility of picking the best
                  artist in the industry to bring in a flawless library.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="center_img">
                {" "}
                <img
                  src="https://www.blockchainappfactory.com/images/nft_studio/paint.webp"
                  alt="NFT Studio"
                  title="Hand made Art library"
                />{" "}
              </div>
            </div>
            <div
              className="col-md-4 vend-item mt40"
              // style="padding-top: 60px;"
            >
              <div className="content">
                <H2 className="text_w" style={{ color: "#fff" }}>
                  Carving Environs For You
                </H2>
                <p className="text_w">
                  It can be a story or let it be a character from a story, we
                  have your back. Pick the theme and decide the art. We handle
                  the Carving part. Feeling bliss to add a cool theme? no
                  worries we got you covered. Wanna add a new storyline, let us
                  know about it, we make them for you. Constructing environments
                  to add super cool features, there won’t be no from us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SecFive>
  );
};

export default Sec5;
