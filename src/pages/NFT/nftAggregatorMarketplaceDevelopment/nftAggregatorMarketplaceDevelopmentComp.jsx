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
  .contentall .para {
    text-align: start;
  }
  .banner {
    background-image: url("https://www.blockchainappfactory.com/images/nft-aggregator-marketplace-development/banner-bg.webp");
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
    opacity: 0.95;
    background-color: rgb(0 0 0 / 70%);
  }
  .cta_mine {
    text-align: start;
  }
  .img-container img {
    margin-top: 150px;
  }
  @media (max-width: 991px) {
    .cta_mine {
      text-align: center;
    }
  }
  .contentall h1 {
    font-family: "Lato", sans-serif;
    font-size: 32px !important;
    @media (max-width: 768px) {
      font-size: 25px !important;
      text-align: center;
    }
  }

  .container .para {
    @media (max-width: 768px) {
      text-align: center !important;
    }
  }

  @media screen and (max-width: 768px) {
    .magic {
      display: none;
    }
  }
`;
export const SecTwo = styled.div`
  @media (max-width: 768px) {
    .container .para {
      text-align: start !important;
    }
  }
`;
export const SecThree = styled.div`
  @media (max-width: 768px) {
    .container .para {
      text-align: start !important;
    }
  }
`;
export const SecFour = styled.div`
  .h2 {
    font-family: "Lato", sans-serif;
    letter-spacing: 0;
    line-height: 1.3;
    font-size: 27px !important;
  }
`;
export const SecFive = styled.div`
  .perfect-script-items1 .icon {
    width: 70px;
    height: 70px;
    line-height: 75px;
    position: relative;
    border-radius: 0px 50% 50% 0px;
    color: #fff;
    font-size: 40px;
    box-shadow: 3px 14px 13px 0px #0000003b;
    z-index: 9;
    float: left;
    background: #47b475;
    margin-left: -15px;
    text-align: center;
  }
  .perfect-script-items1 .icon img {
    width: 45px;
    margin-top: -8px;
  }
  .perfect-script-items1 strong {
    color: #47b475;
    font-size: 18px;
  }
`;
export const SecSix = styled.div`
  @media (max-width: 768px) {
    .container .para {
      text-align: start !important;
    }
  }
`;
export const SecSeven = styled.div`
  .awesome-features-wrapper1 {
    border: 1px solid #cdcdcd;
    padding-top: 40px;
    padding-bottom: 20px;
    min-height: 360px;
    transition: 0.3s;
    position: relative;
    margin-bottom: 30px;
    border-radius: 10px;
    &::before {
      background: #47b475;
      height: 20px;
      width: 3px;
      content: "";
      position: absolute;
      left: -2px;
      top: 65px;
    }
    &::after {
      background: #47b475;
      height: 50px;
      width: 3px;
      content: "";
      position: absolute;
      left: -2px;
      top: 94px;
    }
    @media (max-width: 767px) {
      min-height: max-content;
    }
  }
  .awesome-features-icon-img {
    margin-bottom: 22px;
  }
`;
export const SecEight = styled.div`
  .uniq_features ul li {
    margin-bottom: 15px;
    padding-left: 29px;
  }
  .fa-circle-arrow-right {
    font-size: 16px;
    color: #03b787 !important;
    text-indent: -28px;
  }
`;
export const SecNine = styled.div`
  th .h3 {
    color: #fff;
    font-family: "Lato", sans-serif;
    letter-spacing: 0;
    line-height: 1.3;
    font-size: 23px;
  }
  .data table td {
    text-align: left;
    padding: 15px;
  }
  .data table th {
    padding: 15px;
  }
  .bg_color {
    color: #000;
  }
  @media only screen and (max-width: 767px) {
    table {
      width: 100%;
      max-width: 100%;
    }

    th,
    td {
      display: block;
      width: 100%;
      box-sizing: border-box;
      /* white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis; */
    }

    th,
    td {
      text-align: left;
      padding: 8px;
    }
  }
`;
export const SecTen = styled.div`
  .h2 {
    font-family: "Lato", sans-serif;
    letter-spacing: 0;
    line-height: 1.3;
  }
  .cta_mine {
    margin-top: 45px;
  }
`;
export const SecEleven = styled.div`
  .choose-wrapper {
    background: #fff;
    border-radius: 10px;
    margin-bottom: 20px;
    padding: 20px;
    min-height: 340px !important;
    &:hover {
      background: #47b775;
      .choose-para h3 {
        color: #fff;
      }
      .para {
        color: #fff;
      }
    }
  }
  .wrappwer-icon {
    width: 100px;
    height: 100px;
    background: #fff;
    margin: auto;
    margin-bottom: 25px;
    border-radius: 50px;
    box-shadow: 2px 4px #47b475;
    border: 3px solid #47b475;
  }
  .wrappwer-icon img {
    width: 65px;
    margin-top: 15px;
  }
  .choose-para h3 {
    font-weight: 700 !important;
    margin: 20px 0 5px 0;
    margin-bottom: 15px;
    font-family: "Lato", sans-serif;
  }
`;
export const SecTwelve = styled.div`
  .Package_list {
    display: inline-block;
    background: rgba(0, 0, 0, 0.6);
    padding: 30px 10px;
    /* max-width: 280px; */
    width: 13%;
    margin-bottom: 20px;
    text-align: center;
    border-radius: 5px;
    margin: 2px;
    @media (max-width: 767px) {
      width: 49%;
    }
  }
  .Package_list img {
    height: 55px;
  }
  .Package_list span {
    display: block;
    font-size: 15px;
    margin-top: 12px;
    color: #fff;
  }
`;
export const SecThirteen = styled.div`
  .common_h3.sec-tit {
    color: #2b2c2d;
    font-weight: 600;
    letter-spacing: 1.5px;
    font-size: 27.46px;
    font-family: "Lato", sans-serif;
    margin-top: 60px;
  }
`;
export const SecFourteen = styled.div``;
