import styled from "styled-components";

export const SecOne = styled.div`
  .nec-btn {
    position: relative !important;
    color: #fff !important;
    border-radius: 30px !important;
    font-size: 11px;
    text-transform: uppercase !important;
    transform: scale(1.1, 1.1) !important;
    transition: all 0.3s ease-out 0s !important;
    background: #47b475 !important;
  }
  .nec-btn:hover {
    transform: scale(1, 1) !important;
    color: #fff !important;
    background: #00a9e2 !important;
  }
  a.nectar-button.medium.regular.accent-color.regular-button.nec-btn {
    margin-bottom: 15px !important;
    display: inline-block;
    margin-right: 26px !important;
  }
  .contentall a,
  a.home-talk-experts {
    padding: 10px 20px !important;
  }
  .banner {
    background-image: url("https://www.blockchainappfactory.com/images/nft_real/banner-real-estate.webp");
    background-size: cover;
    padding-top: 138px;
    padding-bottom: 66px;
    height: auto;
    background-position: center;
    height: 100vh;
  }
  .banner-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to right, #110917c4, #20132a70) !important;
    opacity: 0.95;
  }
  @media (max-width: 991px) {
    .cta_mine {
      text-align: center;
    }
  }
  .contentall h1 {
    font-family: "Lato", sans-serif;
    font-size: 32px;
    @media (max-width: 768px) {
      font-size: 25px;
      text-align: center;
    }
  }

  .container .para {
    @media (max-width: 768px) {
      text-align: center !important;
    }
  }
`;
export const SecTwo = styled.div``;
export const SecThree = styled.div`
  .container .para {
    @media (max-width: 768px) {
      text-align: start !important;
    }
  }
`;
export const SecFour = styled.div`
  .box-shadow-border {
    box-shadow: rgb(50 50 93 / 25%) 0px 2px 5px -1px,
      rgb(0 0 0 / 30%) 0px 1px 3px -1px;
    background: #ffffff;
  }
  .container .para {
    @media (max-width: 768px) {
      text-align: start !important;
    }
  }
`;
export const SecFive = styled.div``;
export const SecSix = styled.div``;
export const SecSeven = styled.div`
  .main-timeline1 {
    padding: 25px 0 0;
    position: relative;
  }
  .main-timeline1 .timeline1 {
    width: 65%;
    margin: 10px auto 0;
    padding: 30px 0 0 50px;
    float: left;
    position: relative;
    margin-bottom: 20px;
    @media screen and (max-width: 767px) {
      width: 100%;
      min-height: 150px;
      padding: 20px 0 0 20px;
      margin: 0;
      margin-bottom: 20px;
    }
  }
  .timeline1 {
    &::before {
      position: absolute;
      content: "";
      top: 0;
      left: 30px;
      height: 100%;
      width: 2px;
      background: #f2f2f200;
    }
  }
  .main-timeline1 .timeline-content1 {
    color: #000000;
    background-color: #f2f2f2;
    padding: 20px 50px 20px 100px;
    border-radius: 20px;
    display: block;
    position: relative;
    margin-bottom: 10px;
    &::before {
      content: "";
      background: linear-gradient(to right bottom, #00cd95, #00aae0);
      height: 150px;
      width: 150px;
      border-radius: 10px 0;
      position: absolute;
      left: -50px;
      top: -30px;
      clip-path: polygon(0 0, 0% 100%, 100% 0);
    }
    @media screen and (max-width: 767px) {
      padding: 60px 20px 15px 20px;

      &::before {
        height: 80px;
        width: 100px;
        left: -20px;
        top: -20px;
      }
    }
  }

  .main-timeline1 .timeline-count1 {
    color: #fff;
    background: linear-gradient(to right bottom, #00ca9b, #0983d9);
    font-size: 60px;
    font-weight: 600;
    text-align: center;
    line-height: 90px;
    height: 110px;
    width: 110px;
    border: 10px solid #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    position: absolute;
    left: -30px;
    top: -10px;

    @media screen and (max-width: 767px) {
      font-size: 40px;
      line-height: 50px;
      height: 60px;
      width: 60px;
      border-width: 5px;
      left: 0;
    }
  }
  .main-timeline1 .description {
    font-size: 14px;
    letter-spacing: 1px;
    text-align: justify;
    margin: 0;
  }
  .main-timeline1 .timeline1:nth-child(even) {
    float: right;
    margin: 0 auto;

    @media screen and (max-width: 767px) {
      margin-bottom: 20px;
    }
  }
`;
export const SecEight = styled.div`
  .whychoose_sec ul li {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;
  }

  .whychoose_sec .icon_img {
    border: 2px solid #00acdc;
    border-radius: 28px 0px 0px 0px;
    padding: 5px;
  }
  .whychoose_sec .icon_img img {
    border-radius: 64%;
    display: inline-block;
    padding: 5px;
    background: #fff;
    box-shadow: 0 20px 50px rgb(0 0 0 / 10%);
  }
  .whychoose_sec .content {
    width: 85%;
    padding-left: 20px;
  }
`;
export const SecNine = styled.div`
  .list_real_estate li {
    position: relative;
    padding: 4px 12px;
    margin-top: 5px;
    margin-bottom: 10px;
    padding-left: 30px;
    /* border-bottom: 2px solid #9e9e9e6e; */
    color: #000000;
    font-size: 16px;
    text-align: justify;
  }
  .fa-circle {
    position: absolute;
    left: 4px;
    top: 4px;
    font-size: 15px;
    line-height: 1;
    color: #47b475 !important;
    border-radius: 5px;
    padding: 4px;
  }
`;
export const SecTen = styled.div`
  .cta-rewamped.ctaRewamped .container {
    background-image: linear-gradient(311deg, #00acdc 0%, #47b475);
    /* padding: 0px 0px; */
    padding-top: 20px;
    border-radius: 14px;
  }

  .row-flexible-center {
    padding: 3%;
  }

  .cta-sec {
    border-radius: 30px;
    border: 2px solid #ffffff;
    color: #ffffff;
    background: #2ab19e !important;
  }
  .nectar-button {
    padding: 10px 25px;
    margin-right: 10px !important;
    text-align: center;
    clear: both;
    font-weight: 700;
    transition: 0.2;
  }
  .cta-sec1:hover {
    background: #ffffff !important;
    color: #47b475 !important;
  }
`;
export const SecEleven = styled.div`
  .whychoose_sec ul li {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;
  }
  .whychoose_sec .icon_img {
    border: 2px solid #00acdc;
    border-radius: 28px 0px 0px 0px;
    padding: 5px;
  }
  .whychoose_sec .icon_img img {
    border-radius: 64%;
    display: inline-block;
    padding: 5px;
    background: #fff;
    box-shadow: 0 20px 50px rgb(0 0 0 / 10%);
  }
  .whychoose_sec .content {
    width: 85%;
    padding-left: 20px;
  }
  .whychoose_sec .content p {
    margin-bottom: 5px;
  }
`;
export const SecTwelve = styled.div`
  .app-overview .media .media-left {
    padding-right: 0px;
    overflow: hidden;
  }
  .app-overview .media .media-left .app-icon {
    width: 94px;
    height: 94px;
    border-radius: 50%;
    left: 12px;
    background: #ffffff;
    position: relative;
    text-align: center;
    transition: all 0.3s linear;
  }
  .app-icon img {
    width: 70px;
    margin-top: 12px;
    /* filter: brightness(0) invert(1); */
  }
  .app-overview .media .media-body {
    padding-left: 33px;
    display: table-cell;
    vertical-align: top;
  }
`;
export const SecThirteen = styled.div``;
