import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Mousewheel, Pagination } from "swiper/modules";

export default function Sec12() {
  const [slideIndex, setSlideIndex] = useState(0);
  const images = [
    "./assets/images/bg-swiper6.webp",
    "./assets/images/bg-swiper7.webp",
    "./assets/images/bg-swiper8.webp",
    "./assets/images/bg-swiper9.webp",
    "./assets/images/bg-swiper10.webp",
    "./assets/images/bg-swiper11.webp",
    "./assets/images/bg-swiper12.webp",
    "./assets/images/bg-swiper13.webp",
    "./assets/images/bg-swiper14.webp",
    "./assets/images/bg-swiper15.webp",
  ];
  // Access the activeIndex from the Swiper instance
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    console.log("Slide changed to index", currentIndex);
    setSlideIndex(swiper.activeIndex);
  };
  return (
    <section className="common_spacing bgg">
      <div className="container">
        <div className="section-title text-center">
          <div className="sec_tit mb20">
            <div className="section-title underline mb20 font_wei">
              Inspiring NFT Marketplace Projects We Brought to the World
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="blog-slider swiper-container-fade swiper-container-horizontal">
              {/* {images.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`blog-slider__img ${
                      slideIndex == index ? "active" : ""
                    }`}
                    style={{
                      position: "absolute",
                      // opacity: slideIndex === 0 ? 1 : 0,
                    }}
                  >
                    <img
                      className=""
                      data-src="/images/nfte/hero.webp"
                      alt="EIP-2309"
                      title="EIP-2309"
                      src={item}
                    />
                  </div>
                );
              })} */}
              <Swiper
                direction={"vertical"}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className="mySwiper"
                onSlideChange={handleSlideChange}
              >
                <SwiperSlide>
                  <div
                    className="blog-slider__item swiper-slide swiper-slide-duplicate swiper-slide-prev"
                    data-swiper-slide-index="9"
                    style={{
                      width: 750,
                      opacity: 1,
                      transform: "translate3d(0px, 0px, 0px)",
                      transitionDuration: "0ms",
                      display: "flex",
                      justifyContent:"space-evenly",
                      gap:"10px"
                    }}
                  >
                    <div className="blog-slider__img" style={{ opacity: "1" }}>
                      {" "}
                      <img
                        className=""
                        data-src="images/nftm/slider/mintore-1.webp"
                        alt="Minotre"
                        title="Minotre"
                        src="./assets/images/bg-swiper6.webp"
                      />{" "}
                    </div>
                    <div className="blog-slider__content">
                      <div className="blog-slider__title">Enigma Art</div>
                      <div className="blog-slider__text">
                        Enigma Art has been a pioneering example of our prowess
                        in building NFT marketplaces for the creator community.
                        Our emphasis here was to launch an application that
                        showered immense support to creators from everywhere,
                        supplemented by the best technologies implemented by our
                        seasoned team of developers.
                      </div>
                      <div className="txt">
                        <a
                          href="https://www.blockchainappfactory.com/case-study/enigma-art-nft-marketplace"
                          className="nectar-button medium regular accent-color regular-button gra nec-btn necbtn"
                          id="cyz"
                          style={{
                            borderRadius: "30px",
                            padding: "10px 25px",
                            textAlign: "center",
                            background: "#03b787",
                            color: "#fff",
                          }}
                          target="_blank"
                        >
                          View CaseStudy
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="blog-slider__item swiper-slide swiper-slide-duplicate swiper-slide-prev"
                    data-swiper-slide-index="9"
                    style={{
                      width: 750,
                      opacity: 1,
                      transform: "translate3d(0px, 0px, 0px)",
                      transitionDuration: "0ms",
                    }}
                  >
                    <div className="blog-slider__img" style={{ opacity: "1" }}>
                      {" "}
                      <img
                        className=""
                        data-src="images/nftm/slider/mintore-1.webp"
                        alt="Minotre"
                        title="Minotre"
                        src="./assets/images/bg-swiper7.webp"
                      />{" "}
                    </div>
                    <div className="blog-slider__content">
                      <div className="blog-slider__title">Carrot Factory</div>
                      <div className="blog-slider__text">
                        An NFT marketplace representing the culinary industry,
                        Carrot Factory is a unique project that connects
                        culinary lovers, restaurants, businesses, and creators
                        under one roof. We came up with a brilliant solution
                        coupled with sophisticated blockchain technology to
                        offer the client an app worth cherishing.
                      </div>
                      <div className="txt">
                        <a
                          href="https://www.blockchainappfactory.com/case-study/enigma-art-nft-marketplace"
                          className="nectar-button medium regular accent-color regular-button gra nec-btn necbtn"
                          id="cyz"
                          style={{
                            borderRadius: "30px",
                            padding: "10px 25px",
                            textAlign: "center",
                            background: "#03b787",
                            color: "#fff",
                          }}
                          target="_blank"
                        >
                          View CaseStudy
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="blog-slider__item swiper-slide swiper-slide-duplicate swiper-slide-prev"
                    data-swiper-slide-index="9"
                    style={{
                      width: 750,
                      opacity: 1,
                      transform: "translate3d(0px, 0px, 0px)",
                      transitionDuration: "0ms",
                    }}
                  >
                    <div className="blog-slider__img" style={{ opacity: "1" }}>
                      {" "}
                      <img
                        className=""
                        data-src="images/nftm/slider/mintore-1.webp"
                        alt="Minotre"
                        title="Minotre"
                        src="./assets/images/bg-swiper8.webp"
                      />{" "}
                    </div>
                    <div className="blog-slider__content">
                      <div className="blog-slider__title">
                        Champagne Wives Club
                      </div>
                      <div className="blog-slider__text">
                        Champagne Wives Club represents women's empowerment
                        celebrated by virtual wine events through artistic NFTs.
                        We take immense pride in creating the platform by
                        tapping into some of the latest blockchain stacks that
                        enabled it to provide such novel advantages and unique
                        experiences to women worldwide.
                      </div>
                      <div className="txt">
                        <a
                          href="https://www.blockchainappfactory.com/case-study/enigma-art-nft-marketplace"
                          className="nectar-button medium regular accent-color regular-button gra nec-btn necbtn"
                          id="cyz"
                          style={{
                            borderRadius: "30px",
                            padding: "10px 25px",
                            textAlign: "center",
                            background: "#03b787",
                            color: "#fff",
                          }}
                          target="_blank"
                        >
                          View CaseStudy
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="blog-slider__item swiper-slide swiper-slide-duplicate swiper-slide-prev"
                    data-swiper-slide-index="9"
                    style={{
                      width: 750,
                      opacity: 1,
                      transform: "translate3d(0px, 0px, 0px)",
                      transitionDuration: "0ms",
                    }}
                  >
                    <div className="blog-slider__img" style={{ opacity: "1" }}>
                      {" "}
                      <img
                        className=""
                        data-src="images/nftm/slider/mintore-1.webp"
                        alt="Minotre"
                        title="Minotre"
                        src="./assets/images/bg-swiper9.webp"
                      />{" "}
                    </div>
                    <div className="blog-slider__content">
                      <div className="blog-slider__title">HUMXN NFT</div>
                      <div className="blog-slider__text">
                        The HUMXN NFT marketplace is a metaverse-centric NFT
                        marketplace where people can create their own avatars
                        and be part of the in-app Web3 games. From intuitive
                        interfaces to a marketplace supporting diverse asset
                        types, we have implemented an ocean of features to make
                        the platform appealing to users.
                      </div>
                      <div className="txt">
                        <a
                          href="https://www.blockchainappfactory.com/case-study/enigma-art-nft-marketplace"
                          className="nectar-button medium regular accent-color regular-button gra nec-btn necbtn"
                          id="cyz"
                          style={{
                            borderRadius: "30px",
                            padding: "10px 25px",
                            textAlign: "center",
                            background: "#03b787",
                            color: "#fff",
                          }}
                          target="_blank"
                        >
                          View CaseStudy
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="blog-slider__item swiper-slide swiper-slide-duplicate swiper-slide-prev"
                    data-swiper-slide-index="9"
                    style={{
                      width: 750,
                      opacity: 1,
                      transform: "translate3d(0px, 0px, 0px)",
                      transitionDuration: "0ms",
                    }}
                  >
                    <div className="blog-slider__img" style={{ opacity: "1" }}>
                      {" "}
                      <img
                        className=""
                        data-src="images/nftm/slider/mintore-1.webp"
                        alt="Minotre"
                        title="Minotre"
                        src="./assets/images/bg-swiper10.webp"
                      />{" "}
                    </div>
                    <div className="blog-slider__content">
                      <div className="blog-slider__title">Spot Trade</div>
                      <div className="blog-slider__text">
                        An NFT marketplace focusing on virtual items across all
                        creative niches, Spot Trade stands tall with its
                        community-centric nature. It is among the small list of
                        platforms run entirely by the community while appealing
                        to the wider market consisting of creators, collectors,
                        fans, and NFT traders.
                      </div>
                      <div className="txt">
                        <a
                          href="https://www.blockchainappfactory.com/case-study/enigma-art-nft-marketplace"
                          className="nectar-button medium regular accent-color regular-button gra nec-btn necbtn"
                          id="cyz"
                          style={{
                            borderRadius: "30px",
                            padding: "10px 25px",
                            textAlign: "center",
                            background: "#03b787",
                            color: "#fff",
                          }}
                          target="_blank"
                        >
                          View CaseStudy
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="blog-slider__item swiper-slide swiper-slide-duplicate swiper-slide-prev"
                    data-swiper-slide-index="9"
                    style={{
                      width: 750,
                      opacity: 1,
                      transform: "translate3d(0px, 0px, 0px)",
                      transitionDuration: "0ms",
                    }}
                  >
                    <div className="blog-slider__img" style={{ opacity: "1" }}>
                      {" "}
                      <img
                        className=""
                        data-src="images/nftm/slider/mintore-1.webp"
                        alt="Minotre"
                        title="Minotre"
                        src="./assets/images/bg-swiper11.webp"
                      />{" "}
                    </div>
                    <div className="blog-slider__content">
                      <div className="blog-slider__title">MintySwap</div>
                      <div className="blog-slider__text">
                        MintySwap makes two things seamless in the world of NFTs
                        – Minting and Swapping. Built with such specialized
                        functions, the platform has earned a massive reputation
                        for facilitating decentralized NFT exchange trades at
                        speeds the market has never seen before, thanks to our
                        scalability provisions.
                      </div>
                      <div className="txt">
                        <a
                          href="https://www.blockchainappfactory.com/case-study/enigma-art-nft-marketplace"
                          className="nectar-button medium regular accent-color regular-button gra nec-btn necbtn"
                          id="cyz"
                          style={{
                            borderRadius: "30px",
                            padding: "10px 25px",
                            textAlign: "center",
                            background: "#03b787",
                            color: "#fff",
                          }}
                          target="_blank"
                        >
                          View CaseStudy
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="blog-slider__item swiper-slide swiper-slide-duplicate swiper-slide-prev"
                    data-swiper-slide-index="9"
                    style={{
                      width: 750,
                      opacity: 1,
                      transform: "translate3d(0px, 0px, 0px)",
                      transitionDuration: "0ms",
                    }}
                  >
                    <div className="blog-slider__img" style={{ opacity: "1" }}>
                      {" "}
                      <img
                        className=""
                        data-src="images/nftm/slider/mintore-1.webp"
                        alt="Minotre"
                        title="Minotre"
                        src="./assets/images/bg-swiper12.webp"
                      />{" "}
                    </div>
                    <div className="blog-slider__content">
                      <div className="blog-slider__title">Woonkly</div>
                      <div className="blog-slider__text">
                        As an NFT marketplace supplementing a decentralized
                        social media network, Woonkly has garnered recognition
                        for its support of NFTs backing artworks and music
                        clips. The platform’s success is mainly due to its
                        seamless functionality and rich user-end elements
                        powered by our experienced developers.
                      </div>
                      <div className="txt">
                        <a
                          href="https://www.blockchainappfactory.com/case-study/enigma-art-nft-marketplace"
                          className="nectar-button medium regular accent-color regular-button gra nec-btn necbtn"
                          id="cyz"
                          style={{
                            borderRadius: "30px",
                            padding: "10px 25px",
                            textAlign: "center",
                            background: "#03b787",
                            color: "#fff",
                          }}
                          target="_blank"
                        >
                          View CaseStudy
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="blog-slider__item swiper-slide swiper-slide-duplicate swiper-slide-prev"
                    data-swiper-slide-index="9"
                    style={{
                      width: 750,
                      opacity: 1,
                      transform: "translate3d(0px, 0px, 0px)",
                      transitionDuration: "0ms",
                    }}
                  >
                    <div className="blog-slider__img" style={{ opacity: "1" }}>
                      {" "}
                      <img
                        className=""
                        data-src="images/nftm/slider/mintore-1.webp"
                        alt="Minotre"
                        title="Minotre"
                        src="./assets/images/bg-swiper13.webp"
                      />{" "}
                    </div>
                    <div className="blog-slider__content">
                      <div className="blog-slider__title">Plastiks</div>
                      <div className="blog-slider__text">
                        Plastiks serves as a sustainability initiative empowered
                        by NFTs, as the platform lets people contribute to the
                        global fight against plastic pollution. Our seasoned
                        developer team built an application that prioritizes
                        accessibility and user intuitiveness while utilizing
                        high-grade blockchain technology.
                      </div>
                      <div className="txt">
                        <a
                          href="https://www.blockchainappfactory.com/case-study/enigma-art-nft-marketplace"
                          className="nectar-button medium regular accent-color regular-button gra nec-btn necbtn"
                          id="cyz"
                          style={{
                            borderRadius: "30px",
                            padding: "10px 25px",
                            textAlign: "center",
                            background: "#03b787",
                            color: "#fff",
                          }}
                          target="_blank"
                        >
                          View CaseStudy
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="blog-slider__item swiper-slide swiper-slide-duplicate swiper-slide-prev"
                    data-swiper-slide-index="9"
                    style={{
                      width: 750,
                      opacity: 1,
                      transform: "translate3d(0px, 0px, 0px)",
                      transitionDuration: "0ms",
                    }}
                  >
                    <div className="blog-slider__img" style={{ opacity: "1" }}>
                      {" "}
                      <img
                        className=""
                        data-src="images/nftm/slider/mintore-1.webp"
                        alt="Minotre"
                        title="Minotre"
                        src="./assets/images/bg-swiper14.webp"
                      />{" "}
                    </div>
                    <div className="blog-slider__content">
                      <div className="blog-slider__title">Panda Girl</div>
                      <div className="blog-slider__text">
                        A BNB Chain-native NFT collection-cum-marketplace, the
                        Panda Girl ecosystem supports hand-drawn artworks based
                        on the brand’s unique theme. We launched the platform
                        complete with NFT collectibles through a team of
                        designers, artists, and developers who ensured the
                        resultant app had the highest quality.
                      </div>
                      <div className="txt">
                        <a
                          href="https://www.blockchainappfactory.com/case-study/enigma-art-nft-marketplace"
                          className="nectar-button medium regular accent-color regular-button gra nec-btn necbtn"
                          id="cyz"
                          style={{
                            borderRadius: "30px",
                            padding: "10px 25px",
                            textAlign: "center",
                            background: "#03b787",
                            color: "#fff",
                          }}
                          target="_blank"
                        >
                          View CaseStudy
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="blog-slider__item swiper-slide swiper-slide-duplicate swiper-slide-prev"
                    data-swiper-slide-index="9"
                    style={{
                      width: 750,
                      opacity: 1,
                      transform: "translate3d(0px, 0px, 0px)",
                      transitionDuration: "0ms",
                    }}
                  >
                    <div className="blog-slider__img" style={{ opacity: "1" }}>
                      {" "}
                      <img
                        className=""
                        data-src="images/nftm/slider/mintore-1.webp"
                        alt="Minotre"
                        title="Minotre"
                        src="./assets/images/bg-swiper15.webp"
                      />{" "}
                    </div>
                    <div className="blog-slider__content">
                      <div className="blog-slider__title">Minotre</div>
                      <div className="blog-slider__text">
                        A general-purpose NFT marketplace native to Polygon,
                        Minotre aims to bring numerous types of users together
                        by providing portals to create, list, and sell NFTs. We
                        developed the marketplace application with high-end
                        technological features that power it to work seamlessly,
                        even during high user traffic.
                      </div>
                      <div className="txt">
                        <a
                          href="https://www.blockchainappfactory.com/case-study/enigma-art-nft-marketplace"
                          className="nectar-button medium regular accent-color regular-button gra nec-btn necbtn"
                          id="cyz"
                          style={{
                            borderRadius: "30px",
                            padding: "10px 25px",
                            textAlign: "center",
                            background: "#03b787",
                            color: "#fff",
                          }}
                          target="_blank"
                        >
                          View CaseStudy
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
