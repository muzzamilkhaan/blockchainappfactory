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
    background-image: url("https://www.blockchainappfactory.com/images/gov/banner.webp");
    background-size: cover;
    padding-top: 138px;
    padding-bottom: 66px;
    height: auto;
    background-position: center;
    height: 100vh;
    background-repeat: no-repeat;
  }
  .banner-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(0 0 0 / 32%);
    opacity: 0.95;
  }
  .cta_mine {
    text-align: start;
    margin-top: 40px !important;
    @media (max-width: 991px) {
      text-align: center;
      margin-top: 30px;
    }
  }
  .img-container img {
    margin-top: 150px;
  }

  .contentall h1 {
    font-family: "Lato", sans-serif;
    font-size: 40px !important;
    color: #fff !important;
    line-height: 1.3;
    font-weight: 700;
    text-align: start;
    @media (max-width: 768px) {
      font-size: 25px !important;
    }
  }

  .container p {
    color: #fff !important;
    font-weight: 400;
    line-height: 1.6;
    font-size: 18px;
    display: block;
    max-width: 800px;
    margin: 0 auto;
    padding-top: 20px;
    @media (max-width: 768px) {
      text-align: center !important;
    }
  }

  @media screen and (max-width: 768px) {
    .magic {
      display: none;
    }
  }
  @media (max-width: 768px) {
    .banner_content .contentall {
      margin-top: 50px;
      text-align: center;
    }
  }
`;
export const SecTwo = styled.div`
  /* @media (max-width: 768px) {
    .container .para {
      text-align: start !important;
    }
  } */
`;
export const SecThree = styled.div``;
export const SecFour = styled.div`
  .pad-tb {
    padding-top: 100px;
    padding-bottom: 50px;
  }
  .service-section {
    background: #fff;
    position: relative;
    overflow: hidden;
    &::before {
      content: "";
      background: #00b7c294;
      position: absolute;
      height: 400px;
      right: 0;
      left: 0;
      top: 0;
      width: 100%;
      background-position: center top;
      background-size: contain;
      background-repeat: repeat;
    }
  }
  .service-section .box4 {
    background: #fff;
    background-size: 180px;
    background-position: top right;
    background-repeat: no-repeat;
  }

  .box4 {
    /* background: #fff;
    text-align: center;
    background-size: 200%;
    background-position: top right;
    background-repeat: no-repeat; */
    text-align: center;
    padding: 50px 20px 10px;
    margin: 0;
    min-height: 520px;
    /* margin-bottom: 10px; */
    position: relative;
    border: 1px solid #91d2ac;
    /* -webkit-border-radius: 8px; */
    border-radius: 8px;
    /* -webkit-box-shadow: 0 3.4px 2.7px -30px rgb(0 0 0 / 6%),
      0 8.2px 8.9px -30px rgb(0 0 0 / 7%), 0 25px 40px -30px rgb(0 0 0 / 20%); */
    box-shadow: 0 3.4px 2.7px -30px rgb(0 0 0 / 6%),
      0 8.2px 8.9px -30px rgb(0 0 0 / 7%), 0 25px 40px -30px rgb(0 0 0 / 20%);

    &:hover {
      background-color: #f5f5f5;
      .s-card-icon {
        animation: bounceIn 0.5s ease;
        background-color: #008f97b8;
      }
    }
    @media (max-width: 767px) {
      min-height: max-content;
    }
  }
  .s-card-icon {
    width: 100px;
    margin: 0 auto 30px;
    background: #f5f5f5;
    border-radius: 50%;
    height: 100px;
    line-height: 100px;
  }
  .s-card-icon img {
    width: 64px;
  }
  .box4 h3 {
    font-size: 20px;
    font-weight: 600;
    color: #47b475;
    font-family: "Lato", sans-serif;
  }
  .box4 p {
    margin-top: 20px;
    color: #555555;
    text-align: justify;
  }
  @media only screen and (min-width: 1000px) {
    .service-section .box4:nth-child(2n + 1) {
      margin-bottom: 50px !important;
    }
  }
  @media only screen and (min-width: 1000px) {
    .shape-loc:nth-child(2n + 1) {
      margin-top: 70px !important;
    }
  }
`;
export const SecFive = styled.div`
  ul.m_s {
    text-align: center;
    padding: 0;
  }
  .m_s li {
    width: 48%;
    text-align: center;
    padding: 35px 15px 20px;
    background: #fff;
    min-height: 352px;
    border-right: 1px solid #47b475;
    border-bottom: 1px solid #47b475;
    float: left;
    @media (max-width: 767px) {
      width: 100%;
      border-top: 1px solid #47b475;
      min-height: max-content;

      &:last-child {
        margin-bottom: 2rem;
      }
    }
  }

  .m_s li .icon {
    width: 80px;
    height: 80px;
    margin: 0 auto;
    background: #eee;
    border-radius: 50%;
    line-height: 80px;
  }

  img {
    max-width: 100%;
    vertical-align: middle;
  }
  h3.feature-title {
    font-weight: 600;
    margin: 15px 0px;
    font-family: "Lato", sans-serif;
    letter-spacing: 0;
    line-height: 1.3;
  }
  .feature-desc {
    color: #555555;
  }
`;
export const SecSix = styled.div`
  .features1 {
    background: #e7e7ef;
    margin-bottom: 20px;
    min-height: 180px;
    padding: 10px 20px;
    position: relative;
    border-radius: 10px;
    background-repeat: no-repeat;
    background-position: top right;
    background-image: url(assets/images/hero-box-bg.webp);
    box-shadow: 0px 20px 50px 0px rgb(153 153 153 / 10%);
    transition: 0.5s all ease-in-out;
  }

  .features1 .icon1 {
    position: absolute;
    display: inline-block;
    top: 40px;
  }
  .features1 .icon1 img {
    width: 70px;
    height: auto;
  }
  .features1 .content {
    padding-left: 100px;
  }
  .content h3 {
    letter-spacing: 0;
    line-height: 1.3;
    margin: 0;
    padding: 0;
    color: #2b2c2d;
    font-weight: 500;
    font-family: "Lato", sans-serif;
  }
  .content p {
    color: #555555;
  }
`;
export const SecSeven = styled.div`
 @media(max-width:767px){
  .common_h3{
    margin-top: 20px;
  }
 }
`;
export const SecEight = styled.div``;
export const SecNine = styled.div`
  background-color: #f2f2f2;
`;
export const SecTen = styled.div``;
export const SecEleven = styled.div``;
export const SecTwelve = styled.div``;
export const SecThirteen = styled.div``;
