import React from "react";
import { SecFive } from "./nftInEcommerceComp";
import { H2, Button } from "../../../components";

const Sec5 = () => {
  return (
    <SecFive>
      <section className="common_spacing gray_bg">
        <div className="container">
          <div className="row">
            <div className="section-title text-center">
              <div className="sec_tit mb20">
                <div className="section-title underline mb20">
                  <H2> NFT in E-commerce: Recreation of chained trade </H2>
                </div>
              </div>
              <p className="ptb para">
                The NFT in E-commerce will have a serious impact, and the users
                here with the NFT can list their NFT, and people can buy them.
                It's pretty the same thing that every E-commerce site does. But
                the change here begins when the efficiency of the platform is
                quadrupled. The development of the NFT in E-commerce sight is
                pretty much a traditional thing that is done on every other
                development. But here, the concern given on developing the User
                interface that is suitable for other products should also be
                taken into consideration. At the same time, E-commerce sights
                have huge dependencies on people, so the platform should be able
                to meet standards too.{" "}
              </p>
              <p>
                <a href="https://www.blockchainappfactory.com/nft-development-services">
                  Development of the NFT
                </a>{" "}
                in the E-commerce platform includes some requirements, which
                includes,{" "}
              </p>
            </div>
            <div className="testimonials-wrapper container-center mt50">
              <div
                className="col-lg-4 col-md-4 col-sm-4 col-xs-12 equalize aos-init aos-animate"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="testimonials-item">
                  <div className="user">
                    {" "}
                    <i className=" ">
                      <img
                        className=""
                        data-src="/images/eco/icon/blockchain.webp"
                        alt="blockchain"
                        title="blockchain"
                        src="https://www.blockchainappfactory.com/images/eco/icon/blockchain.webp"
                      />
                    </i>{" "}
                  </div>
                  <div className="testimonials-content">
                    <h3 className="user-name">Blockchain </h3>
                    <div className="txt">
                      <p>
                        Picking the right blockchain technology is very
                        important in NFT trading, and when it comes to a
                        platform where commercial trades are made, the
                        blockchain should be efficient enough to integrate with
                        them to show excellence. Our expert team will also help
                        you in suggesting suitable technology for your
                        requirement.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-4 col-sm-4 col-xs-12 equalize aos-init aos-animate"
                data-aos="fade-right"
                data-aos-delay="600"
              >
                <div className="testimonials-item">
                  <div className="user">
                    <i className=" ">
                      <img
                        className=""
                        data-src="/images/eco/icon/shield.webp"
                        src="https://www.blockchainappfactory.com/images/eco/icon/shield.webp"
                      />
                    </i>{" "}
                  </div>
                  <div className="testimonials-content">
                    <h3 className="user-name">Security </h3>
                    <div className="txt">
                      <p>
                        Our E-commerce NFT platform will be integrated with
                        higher grade security which is merely impossible to
                        breach or intrude. Every piece of the information is
                        secured with security protocols and firewalls to avoid
                        threats and intrusions in the platform. Adversary
                        detection and mitigation is done automatically without
                        manual intervention,
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-4 col-sm-4 col-xs-12 equalize aos-init aos-animate"
                data-aos="fade-right"
                data-aos-delay="600"
              >
                <div className="testimonials-item">
                  <div className="user">
                    <i className=" ">
                      <img
                        className=""
                        data-src="/images/eco/icon/ux-design.webp"
                        src="https://www.blockchainappfactory.com/images/eco/icon/ux-design.webp"
                      />
                    </i>{" "}
                  </div>
                  <div className="testimonials-content">
                    <h3 className="user-name">Front end structuring </h3>
                    <div className="txt">
                      <p>
                        The Front end of the NFT in the E-commerce platform
                        should be more structured and simpler. The simpler and
                        more adaptable it is will get more insights and more
                        recursive followers to the platform. Other add-ons to
                        support the front-end platform will be built
                        efficiently.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            {/* <style type="text/css">
.nec-btn{
    position: relative !important;
    color:#fff !important;
    border-radius:30px !important;
    font-size: 11px;
    text-transform: uppercase !important;
    transform: scale(1.1,1.1) !important;
    transition:all 0.3s ease-out 0s !important;
    background: #47b475 !important;
}
.nec-btn:hover{
    transform: scale(1,1) !important;
    color:#fff !important;
    background:#00a9e2!important;
}
a.nectar-button.medium.regular.accent-color.regular-button.nec-btn {
    margin-bottom: 15px!important;
    display: inline-block;
    margin-right: 26px!important;
}
.contentall a, a.home-talk-experts{
	padding: 10px 20px !important;
}
</style> */}
            <div className="cta_mine">
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
            </div>{" "}
          </div>
        </div>
      </section>
    </SecFive>
  );
};

export default Sec5;
