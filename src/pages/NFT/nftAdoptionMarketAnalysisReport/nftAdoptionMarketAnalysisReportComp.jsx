import styled from "styled-components";

export const SecOne = styled.div`
  .cta_mine {
    text-align: start;
  }
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
    margin-right: 30px !important;
  }
  /* .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    
  } */
  .contentall {
    padding-top: 100px;
  }
  .banner_content .contentall {
    /* margin-top: 30px; */
  }

  .contentall h1 {
    margin-bottom: 20px;
    line-height: 1.3;
    font-weight: 400;
    font-size: 32px;
    font-family: "Lato", sans-serif;
    color: #fff !important;
    text-transform: uppercase;
    /* padding-top: 80px; */

    @media (max-width: 767px) {
      font-size: 25px !important;
      text-align: center;
      padding-top: 0;
      /* margin-top: 100px; */
    }
  }
  .contentall p {
    color: #fff !important;
    text-align: start;
    font-size: 16px;
    @media (max-width: 767px) {
      text-align: center;
      font-size: 14px !important;
    }
  }
  .banner {
    background-image: url("https://www.blockchainappfactory.com/images/bitcoin-ordinals/banner-bg.webp");
    background-size: cover;
    /* padding-top: 138px; */
    background-position: center;
    height: 800px;

    @media (max-width: 991px) {
      height: 1100px;
      /* height: auto !important; */
      /* margin-top: 40px; */
    }
    @media (max-width: 767px) {
      height: 100vh;
      /* height: 70vh;
      margin-top: 0px; */
    }
  }
  .banner_content {
    margin-top: 30px;
    @media (max-width: 991px) {
      margin-top: 140px;
    }
    @media (max-width: 776px) {
      margin-top: 0;
    }
    @media (max-width: 500px) {
      margin-top: 20px;
    }
  }
  @media (min-width: 992px) {
    .col-md-6 {
      width: 50%;
    }
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
  .img-container img {
    margin-top: 50px;
    @media (max-width: 991px) {
      margin-top: 0px;
      margin-bottom: 100px;
    }
    @media (max-width: 767px) {
      display: none;
      margin-bottom: 0px;
    }
  }
`;

export const SecTwo = styled.div`
  .common_h3.sec-tit {
    color: #2b2c2d;
    font-weight: 600;
    letter-spacing: 1.5px;
    font-size: 27.46px;
    font-family: "Lato", sans-serif;
  }
  .icon-text-1 {
    display: -webkit-box;
    display: -ms-flexbox;
  }
  .icon-text-1 .icon-text-icon {
    width: 80px;
    height: 80px;
    border-radius: 12px;
    background: #03b787;
    margin-bottom: 20px;
    line-height: 75px;
    /* padding-left: 6px; */
    box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 24%) 0px 1px 2px;
    text-align: center;
  }
  .icon-text-1 > :nth-child(n + 2) {
    /* margin-top: 2.2rem; */
    margin-bottom: 20px;
  }

  .icon_content {
    padding-left: 25px;
    min-height: 100px;
    width: 80%;
  }
  .icon-text-1 p {
    margin: 0.6rem 0 0 0;
  }

  .icon-text-1 img {
    width: 84px;
    height: auto;
    margin-right: 20px;
    /* margin: auto 20px; */
    background: #fff;
    padding: 14px;
    border-radius: 12px;
    box-shadow: 0 0 12px 6px #00000014;
  }

  .fa-circle-arrow-right {
    font-size: 16px;
    color: #03b787;
    text-indent: -18px;
  }
  .uniq_features ul {
    padding-left: 15px;
  }
  .uniq_features ul li {
    margin-bottom: 15px;
    position: relative;
    padding-left: 29px;
  }
  .progress {
    width: 100%;
    margin-bottom: 0;
    height: 13px;
  }
  .content1 {
    margin-left: 5px;
    /* margin-top: -15px;
    margin-bottom: 10px; */
  }
`;
export const SecThree = styled.div`
  .client-box {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 80px;
  }
  .client-box img {
    max-width: 80px;
    border-radius: 10px;
    /* margin-bottom: 10px; */
    /* width: 180px; */
  }
  .client-box h6 {
    color: #2b2c2d;
    font-family: "Lato", sans-serif;
    font-weight: 500;
  }
  .client-box span {
    font-size: 24px;
    font-weight: bold;
  }
  .slick-slide .slick-active {
    width: 120px !important;
  }
`;
export const SecFour = styled.div`
  .product-features {
    background: #022d62;
  }
  .container-center {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 1;
    justify-content: center;
  }
  .Package_list {
    display: inline-block;
    background: rgba(0, 0, 0, 0.6);
    padding: 20px;
    /* max-width: 280px; */
    /* width: 24%; */
    margin-bottom: 20px;
    text-align: center;
    border-radius: 5px;
    color: #fff;
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
export const SecFive = styled.div`
  .progress {
    width: 100%;
    margin-bottom: 0;
    height: 13px;
  }
  .progress {
    /* margin-bottom: 20px; */
    overflow: hidden;
    background-color: #f5f5f5;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  }
  .fa-circle-arrow-right {
    font-size: 16px;
    color: #03b787;
    text-indent: -18px;
  }
  .content1 {
    margin-left: 5px;
    margin-bottom: 10px;
    /* margin-top: -15px;
    margin-bottom: 10px; */
  }
`;
export const SecSix = styled.div`
  .section-title .hr {
    background: #aca3a3;
    width: 50px;
    margin: 10px auto 15px;
    height: 2px;
  }
  .bg-dark-half-md {
    background: #022d62;
    width: 100%;
    display: inline-block;
    padding: 40px 0;
  }
  .category-grid-style-01 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    background: #fff;
    -webkit-box-shadow: 5px 5px 24px 0 rgb(2 45 98 / 10%);
    box-shadow: 5px 5px 24px 0 rgb(2 45 98 / 10%);
    border-radius: 5px;
  }

  .teck1 .category-grid-style-01 .category-item {
    padding: 10px;
    text-align: center;
    width: 25%;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    position: relative;
    /* cursor: pointer; */
  }
  .teck1 .category-grid-style-01 .category-item .category-icon {
    color: #333;
    font-size: 44px;
    line-height: 1;
    /* margin-bottom: 10px; */
    position: relative;
    z-index: 2;
    width: 50px;
    margin: 0 auto 10px;
  }
  .teck1 .category-grid-style-01 .category-item p {
    margin-bottom: 0;
  }
  img {
    max-width: 100%;
  }

  img {
    vertical-align: middle;
  }
`;
export const SecSeven = styled.div`
  .common_h3.sec-tit {
    color: #2b2c2d;
    font-weight: 600;
    letter-spacing: 1.5px;
    font-size: 27.46px;
    font-family: "Lato", sans-serif;
  }
  .progress {
    width: 100%;
    margin-bottom: 0;
    height: 13px;
  }
  .progress {
    /* margin-bottom: 20px; */
    overflow: hidden;
    background-color: #f5f5f5;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  }
  .fa-circle-arrow-right {
    font-size: 16px;
    color: #03b787;
    text-indent: -18px;
  }
  .content1 {
    margin-left: 5px;
    margin-bottom: 10px;
    /* margin-top: -15px;
    margin-bottom: 10px; */
  }
`;
export const SecEight = styled.div``;
export const SecNine = styled.div``;
export const SecTen = styled.div``;
export const SecEleven = styled.div``;
export const SecTwelve = styled.div``;
export const SecThirteen = styled.div``;
