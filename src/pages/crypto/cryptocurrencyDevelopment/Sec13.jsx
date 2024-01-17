import React from "react";
import Slider from "react-slick";

function Sec13() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="container common_spacing">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
          <div className="section-header underline">
            <h4 className="common_h3">We have worked with</h4>
          </div>
          <div className="row">
            <Slider {...settings}>
              <div className="client-box text-center">
                <img
                  src="./assets/images/Shell-Corporation.webp"
                  alt="Client 1"
                  title=""
                />
              </div>
              <div className="client-box text-center">
                <img
                  src="./assets/images/Mcdonalds.webp"
                  alt="Client 1"
                  title=""
                />
              </div>
              <div className="client-box text-center">
                <img
                  src="./assets/images/ethirium-gold.webp"
                  alt="Client 1"
                  title=""
                />
              </div>
              <div className="client-box text-center">
                <img
                  src="./assets/images/campuscoin.webp"
                  alt="Client 1"
                  title=""
                />
              </div>
              <div className="client-box text-center">
                <img
                  src="./assets/images/dashcoin.webp"
                  alt="Client 1"
                  title=""
                />
              </div>
              <div className="client-box text-center">
                <img
                  src="./assets/images/dascoin-1.webp"
                  alt="Client 1"
                  title=""
                />
              </div>
              <div className="client-box text-center">
                <img
                  src="./assets/images/Shell-Corporation.webp"
                  alt="Client 1"
                  title=""
                />
              </div>
              <div className="client-box text-center">
                <img
                  src="./assets/images/Mcdonalds.webp"
                  alt="Client 1"
                  title=""
                />
              </div>
              <div className="client-box text-center">
                <img
                  src="./assets/images/ethirium-gold.webp"
                  alt="Client 1"
                  title=""
                />
              </div>
              <div className="client-box text-center">
                <img
                  src="./assets/images/campuscoin.webp"
                  alt="Client 1"
                  title=""
                />
              </div>
              <div className="client-box text-center">
                <img
                  src="./assets/images/dashcoin.webp"
                  alt="Client 1"
                  title=""
                />
              </div>
              <div className="client-box text-center">
                <img
                  src="./assets/images/dascoin-1.webp"
                  alt="Client 1"
                  title=""
                />
              </div>
              <div className="client-box text-center">
                <img
                  src="./assets/images/Shell-Corporation.webp"
                  alt="Client 1"
                  title=""
                />
              </div>
              <div className="client-box text-center">
                <img
                  src="./assets/images/Mcdonalds.webp"
                  alt="Client 1"
                  title=""
                />
              </div>
              <div className="client-box text-center">
                <img
                  src="./assets/images/ethirium-gold.webp"
                  alt="Client 1"
                  title=""
                />
              </div>
              <div className="client-box text-center">
                <img
                  src="./assets/images/campuscoin.webp"
                  alt="Client 1"
                  title=""
                />
              </div>
              <div className="client-box text-center">
                <img
                  src="./assets/images/dashcoin.webp"
                  alt="Client 1"
                  title=""
                />
              </div>
              <div className="client-box text-center">
                <img
                  src="./assets/images/dascoin-1.webp"
                  alt="Client 1"
                  title=""
                />
              </div>
            </Slider>
            {/* <div className="owl-carousel client-carousel owl-theme owl-loaded">
                            <div className="owl-stage-outer">
                                <div
                                    className="owl-stage"
                                    style={{
                                        transform: "translate3d(-1966.67px, 0px, 0px)",
                                        transition: "all 0.25s ease 0s",
                                        width: "3540.01px"
                                    }}
                                >
                                    <div
                                        className="owl-item cloned"
                                        style={{ width: "186.667px", marginRight: 10 }}
                                    >

                                    </div>
                                    <div
                                        className="owl-item cloned"
                                        style={{ width: "186.667px", marginRight: 10 }}
                                    >
                                        <div className="client-box text-center">
                                            <img
                                                src="./assets/images/Mcdonalds.webp"
                                                alt="Client 1"
                                                title=""
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="owl-item cloned"
                                        style={{ width: "186.667px", marginRight: 10 }}
                                    >
                                        <div className="client-box text-center">
                                            <img
                                                src="./assets/images/ethirium-gold.webp"
                                                alt="Client 1"
                                                title=""
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="owl-item cloned"
                                        style={{ width: "186.667px", marginRight: 10 }}
                                    >
                                        <div className="client-box text-center">
                                            <img
                                                src="./assets/images/campuscoin.webp"
                                                alt="Client 1"
                                                title=""
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="owl-item cloned"
                                        style={{ width: "186.667px", marginRight: 10 }}
                                    >
                                        <div className="client-box text-center">
                                            <img
                                                src="./assets/images/dashcoin.webp"
                                                alt="Client 1"
                                                title=""
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="owl-item cloned"
                                        style={{ width: "186.667px", marginRight: 10 }}
                                    >
                                        <div className="client-box text-center">
                                            <img
                                                src="./assets/images/dascoin.webp"
                                                alt="Client 1"
                                                title=""
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="owl-item"
                                        style={{ width: "186.667px", marginRight: 10 }}
                                    >
                                        <div className="client-box text-center">
                                            <img
                                                src="./assets/images/Shell-Corporation.webp"
                                                alt="Client 1"
                                                title=""
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="owl-item"
                                        style={{ width: "186.667px", marginRight: 10 }}
                                    >
                                        <div className="client-box text-center">
                                            <img
                                                src="./assets/images/Mcdonalds.webp"
                                                alt="Client 1"
                                                title=""
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="owl-item"
                                        style={{ width: "186.667px", marginRight: 10 }}
                                    >
                                        <div className="client-box text-center">
                                            <img
                                                src="./assets/images/ethirium-gold.webp"
                                                alt="Client 1"
                                                title=""
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="owl-item"
                                        style={{ width: "186.667px", marginRight: 10 }}
                                    >
                                        <div className="client-box text-center">
                                            <img
                                                src="./assets/images/campuscoin.webp"
                                                alt="Client 1"
                                                title=""
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="owl-item active"
                                        style={{ width: "186.667px", marginRight: 10 }}
                                    >
                                        <div className="client-box text-center">
                                            <img
                                                src="./assets/images/dashcoin.webp"
                                                alt="Client 1"
                                                title=""
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="owl-item active"
                                        style={{ width: "186.667px", marginRight: 10 }}
                                    >
                                        <div className="client-box text-center">
                                            <img
                                                src="./assets/images/dascoin.webp"
                                                alt="Client 1"
                                                title=""
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="owl-item cloned active"
                                        style={{ width: "186.667px", marginRight: 10 }}
                                    >
                                        <div className="client-box text-center">
                                            <img
                                                src="./assets/images/Shell-Corporation.webp"
                                                alt="Client 1"
                                                title=""
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="owl-item cloned active"
                                        style={{ width: "186.667px", marginRight: 10 }}
                                    >
                                        <div className="client-box text-center">
                                            <img
                                                src="./assets/images/Mcdonalds.webp"
                                                alt="Client 1"
                                                title=""
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="owl-item cloned active"
                                        style={{ width: "186.667px", marginRight: 10 }}
                                    >
                                        <div className="client-box text-center">
                                            <img
                                                src="./assets/images/ethirium-gold.webp"
                                                alt="Client 1"
                                                title=""
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="owl-item cloned active"
                                        style={{ width: "186.667px", marginRight: 10 }}
                                    >
                                        <div className="client-box text-center">
                                            <img
                                                src="./assets/images/campuscoin.webp"
                                                alt="Client 1"
                                                title=""
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="owl-item cloned"
                                        style={{ width: "186.667px", marginRight: 10 }}
                                    >
                                        <div className="client-box text-center">
                                            <img
                                                src="./assets/images/dashcoin.webp"
                                                alt="Client 1"
                                                title=""
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="owl-item cloned"
                                        style={{ width: "186.667px", marginRight: 10 }}
                                    >
                                        <div className="client-box text-center">
                                            <img
                                                src="./assets/images/dascoin.webp"
                                                alt="Client 1"
                                                title=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-controls">
                                <div className="owl-nav">
                                    <div className="owl-prev" style={{ display: "none" }}>
                                        prev
                                    </div>
                                    <div className="owl-next" style={{ display: "none" }}>
                                        next
                                    </div>
                                </div>
                                <div className="owl-dots" style={{}}>
                                    <div className="owl-dot active">
                                        <span />
                                    </div>
                                </div>
                            </div>
                        </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sec13;
