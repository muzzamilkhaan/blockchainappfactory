import React from "react";
import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { SecTen } from "./nftMarketPlaceSportComp";
import { H2 } from "../../../components";
import "./swiper.css";
const ScrollComponent = () => {
  return (
    <Swiper
      direction={"vertical"}
      slidesPerView={1}
      spaceBetween={30}
      mousewheel={true}
      pagination={{ clickable: true }}
      modules={[Mousewheel, Pagination]}
      className="mySwiper"
    >
      {" "}
      <SwiperSlide>Slide 1</SwiperSlide> <SwiperSlide>Slide 2</SwiperSlide>{" "}
      <SwiperSlide>Slide 3</SwiperSlide> <SwiperSlide>Slide 4</SwiperSlide>{" "}
      <SwiperSlide>Slide 5</SwiperSlide> <SwiperSlide>Slide 6</SwiperSlide>{" "}
      <SwiperSlide>Slide 7</SwiperSlide> <SwiperSlide>Slide 8</SwiperSlide>{" "}
      <SwiperSlide>Slide 9</SwiperSlide>{" "}
    </Swiper>
    // <SecTen>
    //   <section className="common_spacing bgg">
    //     <div className="container">
    //       <div className="section-title text-center">
    //         <div className="sec_tit mb20">
    //           <div className="section-title underline mb20 font-wei">
    //             <H2 style={{ color: "#161515" }}>
    //               {" "}
    //               Token standards unleashing the potential of NFTs{" "}
    //             </H2>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="row">
    //         <div className="col-md-12">

    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </SecTen>
  );
};

export default ScrollComponent;
