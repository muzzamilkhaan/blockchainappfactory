import React from "react";
import { SecEight } from "./nftStudioComp";

const Sec8 = () => {
  return (
    <SecEight>
      <section className="bg_6">
        <div className="container-fluid">
          <div className="row bg_color_1 pad">
            <div className="section-title text-center ">
              <h2 className="common_h3 text_w">Marketing Services</h2>
              <div className="hr" />{" "}
            </div>
          </div>
          <div className="row bg_color_1 d-flex pad">
            <div className="col-lg-6 text-center">
              {" "}
              <img
                src="https://www.blockchainappfactory.com/images/nft_studio/mar_7.webp"
                alt="NFT Studio Development"
                title="Influencing"
              />{" "}
            </div>
            <br />
            <div className="col-lg-6 vcenter-item mt-20">
              <div className="content">
                <h2 className="text_w">Influencing</h2>
                <p className="text_w mt10">
                  The world always has its ears broader when a famous figure or
                  influencer speaks about something. We also offer you our
                  excellent marketing services to bring your generative NFT to
                  the people. We hire the best crypto influencers to make a huge
                  noise for your NFTs.
                </p>
              </div>
            </div>
          </div>
          <div className="row bg_color_2 d-flex pad">
            <div className="col-lg-6 vcenter-item">
              <div className="content">
                <h2 className="text_w">Media Marketing </h2>
                <p className="text_w mt10">
                  Media has a strong influence on generals, where instant news
                  and effective business are routing out exclusives from media.
                  And we tend to blend the media for your NFT to promote and
                  make the people realize the potential of the Generative NFTs
                  you possess.
                </p>
              </div>
            </div>
            <div className="col-lg-6 text-center mb-20">
              {" "}
              <img
                src="https://www.blockchainappfactory.com/images/nft_studio/mar_8.webp"
                alt="NFT Platform for Artists"
                title="Media marketing"
              />{" "}
            </div>
          </div>
          <div className="row bg_color_3 d-flex pad">
            <div className="col-lg-6 text-center">
              {" "}
              <img
                src="https://www.blockchainappfactory.com/images/nft_studio/mar_9.webp"
                alt="Generative NFT Developer"
                title="Content marketing"
              />{" "}
            </div>
            <br />
            <div className="col-lg-6 vcenter-item">
              <div className="content">
                <h2 className="text_w">Content Marketing </h2>
                <p className="text_w mt10">
                  Texts and phrases have a major role in impressing the people
                  via any marketing strategy. PR, Whitepaper where content is
                  the strategy to Influencers, and media marketing content where
                  content aids the strategy. we provide the best content
                  marketing with creative writers{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SecEight>
  );
};

export default Sec8;
