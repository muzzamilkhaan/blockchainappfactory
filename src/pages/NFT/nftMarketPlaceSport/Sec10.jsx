import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Mousewheel, Pagination } from "swiper/modules";

import { H2 } from "../../../components";
const Sec10 = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const images = [
    "./assets/images/bg-swiper1.webp",
    "./assets/images/bg-swiper2.webp",
    "./assets/images/bg-swiper3.webp",
    "./assets/images/bg-swiper4.webp",
    "./assets/images/bg-swiper5.webp",
  ];

  // Access the activeIndex from the Swiper instance
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    // console.log("Slide changed to index", currentIndex);
    setSlideIndex(swiper.activeIndex);
  };

  return (
    <section className="common_spacing bgg" id="swiper">
      <div className="container">
        <div className="section-title text-center">
          <div className="sec_tit mb20">
            <div className="section-title underline mb20 font-wei">
              <H2> Token standards unleashing the potential of NFTs </H2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="blog-slider swiper-container-fade swiper-container-horizontal">
              {images.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`blog-slider__img-container ${
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
              })}

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
                    // data-swiper-slide-index={4}
                    style={{
                      width: 750,
                      opacity: 1,
                      transform: "translate3d(0px, 0px, 0px)",
                      transitionDuration: "0ms",
                      display: "flex",
                    }}
                  >
                    <div className="blog-slider__img" style={{ opacity: "0" }}>
                      <img
                        className=""
                        data-src="/images/nfte/hero.webp"
                        alt="EIP-2309"
                        title="EIP-2309"
                        src="https://www.blockchainappfactory.com/images/nfte/8.webp"
                      />
                    </div>
                    <div className="blog-slider__content">
                      <div className="blog-slider__title">ERC-721</div>
                      <div className="blog-slider__text">
                        Ethereum token standard ERC -721 facilitates the digital
                        representation of your unique assets. These NFTs possess
                        unique features and characteristics which add intrinsic
                        value to your unique assets.
                      </div>
                      <a
                        href="#"
                        className="blog-slider__button home-talk-experts nec-btn"
                      >
                        READ MORE
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div
                    className="blog-slider__item swiper-slide swiper-slide-duplicate swiper-slide-prev"
                    // data-swiper-slide-index={4}
                    style={{
                      width: 750,
                      opacity: 1,
                      transform: "translate3d(0px, 0px, 0px)",
                      transitionDuration: "0ms",
                      display: "flex",
                    }}
                  >
                    <div className="blog-slider__img" style={{ opacity: "0" }}>
                      <img
                        className=""
                        data-src="/images/nfte/hero.webp"
                        alt="EIP-2309"
                        title="EIP-2309"
                        src="https://www.blockchainappfactory.com/images/nfte/8.webp"
                      />
                    </div>
                    <div className="blog-slider__content">
                      <div className="blog-slider__title">ERC-1155</div>
                      <div className="blog-slider__text">
                        Enjin’s 1155 offers semi fungibility for your NFTs that
                        allows the user to trade their NFTs. This token standard
                        offers flexibility and scalability for your unique
                        assets.
                      </div>
                      <a
                        href="#"
                        className="blog-slider__button home-talk-experts nec-btn"
                      >
                        READ MORE
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div
                    className="blog-slider__item swiper-slide swiper-slide-duplicate swiper-slide-prev"
                    // data-swiper-slide-index={4}
                    style={{
                      width: 750,
                      opacity: 1,
                      transform: "translate3d(0px, 0px, 0px)",
                      transitionDuration: "0ms",
                      display: "flex",
                    }}
                  >
                    <div className="blog-slider__img" style={{ opacity: "0" }}>
                      <img
                        className=""
                        data-src="/images/nfte/hero.webp"
                        alt="EIP-2309"
                        title="EIP-2309"
                        src="https://www.blockchainappfactory.com/images/nfte/8.webp"
                      />
                    </div>
                    <div className="blog-slider__content">
                      <div className="blog-slider__title">ERC-998</div>
                      <div className="blog-slider__text">
                        This token comprises multiple ERC-721 or ERC20. The
                        ERC-998 standard allows composing multiple tokens in the
                        same hierarchy that enables the users to own multiple
                        NFTs or other tokens that belongs to a particular NFT in
                        a single purchase
                      </div>
                      <a
                        href="#"
                        className="blog-slider__button home-talk-experts nec-btn"
                      >
                        READ MORE
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div
                    className="blog-slider__item swiper-slide swiper-slide-duplicate swiper-slide-prev"
                    // data-swiper-slide-index={4}
                    style={{
                      width: 750,
                      opacity: 1,
                      transform: "translate3d(0px, 0px, 0px)",
                      transitionDuration: "0ms",
                      display: "flex",
                    }}
                  >
                    <div className="blog-slider__img" style={{ opacity: "0" }}>
                      <img
                        className=""
                        data-src="/images/nfte/hero.webp"
                        alt="EIP-2309"
                        title="EIP-2309"
                        src="https://www.blockchainappfactory.com/images/nfte/8.webp"
                      />
                    </div>
                    <div className="blog-slider__content">
                      <div className="blog-slider__title">TRC-721</div>
                      <div className="blog-slider__text">
                        TRC-721 token standard is released by TRON, a
                        significant blockchain network. This token standard is
                        the inheritance of ERC-721 standards from ethereum that
                        inherits its core features like transparency,
                        scalability and security and offers better throughput.
                      </div>
                      <a
                        href="#"
                        className="blog-slider__button home-talk-experts nec-btn"
                      >
                        READ MORE
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div
                    className="blog-slider__item swiper-slide swiper-slide-duplicate swiper-slide-prev"
                    // data-swiper-slide-index={4}
                    style={{
                      width: 750,
                      opacity: 1,
                      transform: "translate3d(0px, 0px, 0px)",
                      transitionDuration: "0ms",
                      display: "flex",
                    }}
                  >
                    <div className="blog-slider__img" style={{ opacity: "0" }}>
                      <img
                        className=""
                        data-src="/images/nfte/hero.webp"
                        alt="EIP-2309"
                        title="EIP-2309"
                        src="https://www.blockchainappfactory.com/images/nfte/8.webp"
                      />
                    </div>
                    <div className="blog-slider__content">
                      <div className="blog-slider__title">EIP-2309</div>
                      <div className="blog-slider__text">
                        EIP- 2309 is an extension of ERC -721 standards that
                        allows the consecutive execution of transactions
                        automatically. This facilitates the creation and
                        transaction of multiple NFTs in a sequential order. By
                        this extension ,the user can able to create and transfer
                        thousands of NFT in a single execution.
                      </div>
                      <a
                        href="#"
                        className="blog-slider__button home-talk-experts nec-btn"
                      >
                        READ MORE
                      </a>
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
};

export default Sec10;
