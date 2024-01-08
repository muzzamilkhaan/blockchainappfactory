import React from "react";
import Slider from "react-slick";
import { SecThree } from "./nftAdoptionMarketAnalysisReportComp";
import { H2 } from "../../../components";

const Sec3 = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 3 ,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <SecThree>
      <div className="gray_background ptb60">
        <div className="container">
          <div className="container">
            <div className="section-header underline text-center">
              <div className="font-wei">
                <H2 style={{ color: "#2b2c2d" }}>
                  {" "}
                  How Much the World Has Adopted NFTs?{" "}
                </H2>
              </div>
            </div>
            <p className="text-center">
              The global NFT market’s growth has been catapulted by people from
              everywhere in the world adopting NFTs into their daily lives. Our
              NFT adoption report sheds insights on NFT adoption rates across
              various countries that show us the reason why NFTs have become
              immensely popular.{" "}
            </p>
          </div>
          <div className="row m-0 px-2">
            <Slider {...settings} arrows={false} >
              <div>
                {/* <div
              className="owl-item1"
              style={{
                // width: "188px",
              }}
            > */}
                <div className="client-box text-center">
                  <img
                    src="https://www.blockchainappfactory.com/images/nft-adoption-market-analysis-report/icons/thailand.webp"
                    alt=" "
                    title=" "
                  />
                  <h6>
                    Thailand
                    <br />
                    <span>27%</span>
                  </h6>
                </div>
              </div>
              {/* </div> */}
              <div>
                <div className="client-box text-center">
                  <img
                    src="https://www.blockchainappfactory.com/images/nft-adoption-market-analysis-report/icons/usa.webp"
                    alt=" "
                    title=" "
                  />
                  <h6>
                    Thailand
                    <br />
                    <span>27%</span>
                  </h6>
                </div>
              </div>
              <div>
                <div className="client-box text-center">
                  <img
                    src="https://www.blockchainappfactory.com/images/nft-adoption-market-analysis-report/icons/use.webp"
                    alt=" "
                    title=" "
                  />
                  <h6>
                    Thailand
                    <br />
                    <span>27%</span>
                  </h6>
                </div>
              </div>
              <div>
                <div className="client-box text-center">
                  <img
                    src="https://www.blockchainappfactory.com/images/nft-adoption-market-analysis-report/icons/malaysia.webp"
                    alt=" "
                    title=" "
                  />
                  <h6>
                    Thailand
                    <br />
                    <span>27%</span>
                  </h6>
                </div>
              </div>
              <div>
                <div className="client-box text-center">
                  <img
                    src="https://www.blockchainappfactory.com/images/nft-adoption-market-analysis-report/icons/brazil.webp"
                    alt=" "
                    title=" "
                  />
                  <h6>
                    Thailand
                    <br />
                    <span>27%</span>
                  </h6>
                </div>
              </div>
              <div>
                <div className="client-box text-center">
                  <img
                    src="https://www.blockchainappfactory.com/images/nft-adoption-market-analysis-report/icons/thailand.webp"
                    alt=" "
                    title=" "
                  />
                  <h6>
                    Thailand
                    <br />
                    <span>27%</span>
                  </h6>
                </div>
              </div>
              <div>
                <div className="client-box text-center">
                  <img
                    src="https://www.blockchainappfactory.com/images/nft-adoption-market-analysis-report/icons/thailand.webp"
                    alt=" "
                    title=" "
                  />
                  <h6>
                    Thailand
                    <br />
                    <span>27%</span>
                  </h6>
                </div>
              </div>
              <div>
                <div className="client-box text-center">
                  <img
                    src="https://www.blockchainappfactory.com/images/nft-adoption-market-analysis-report/icons/singapore.webp"
                    alt=" "
                    title=" "
                  />
                  <h6>
                    Thailand
                    <br />
                    <span>27%</span>
                  </h6>
                </div>
              </div>
              <div>
                <div className="client-box text-center">
                  <img
                    src="https://www.blockchainappfactory.com/images/nft-adoption-market-analysis-report/icons/south-africa.webp"
                    alt=" "
                    title=" "
                  />
                  <h6>
                    Thailand
                    <br />
                    <span>27%</span>
                  </h6>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </SecThree>
  );
};

export default Sec3;
