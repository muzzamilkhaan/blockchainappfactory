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
  .contentall {
    /* padding-top: 220px; */
    @media (max-width: 767px) {
      padding-top: 180px;
    }
  }
  .contentall a,
  a.home-talk-experts {
    padding: 10px 20px !important;
  }
  .contentall .para {
    text-align: start;
  }
  .banner {
    background: #011635;
    background-size: cover;
    padding-top: 130px;
    /* padding-bottom: 50px; */
    height: 100vh;
  }
  .banner-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to right, #060606d4, #00000000);
    opacity: 0.95;
  }
  .txt {
    text-align: start;
    margin-top: 20px !important;
    @media (max-width: 991px) {
      text-align: center;
      margin-top: 30px;
    }
  }
  .img-container img {
    padding-top: 140px;
    @media (max-width: 767px) {
      padding-top: 0;
      /* margin-top: 20px; */
    }
  }

  .contentall h1 {
    font-family: "Lato", sans-serif;
    font-size: 30px !important;
    color: #fff !important;
    line-height: 1.3;
    font-weight: 700;
    text-align: start;
    @media (max-width: 768px) {
      font-size: 25px !important;
      text-align: center;
      /* margin-bottom: -10px; */
    }
  }

  .container p {
    color: #fff !important;
    font-weight: 800;
    line-height: 1.6;
    font-size: 18px;
    display: block;
    max-width: 800px;
    margin: 0 auto;
    /* padding-top: 20px; */
    @media (max-width: 768px) {
      text-align: center !important;
      margin-bottom: 20px;
      font-size: 16px;
    }
  }

  @media screen and (max-width: 768px) {
    .magic {
      display: none;
    }
  }
  @media (max-width: 768px) {
    .banner_content .contentall {
      /* margin-top: 50px; */
      text-align: center;
    }
  }
`;
export const SecTwo = styled.div``;
export const SecThree = styled.div`
  .intro_cnt img {
    border-radius: 10px;
  }

  .ig-size {
    height: 400px;
  }
`;
export const SecFour = styled.div`
  .pro-map {
    &::before {
      content: "";
      width: 2px;
      height: 100%;
      background: #e5e9ed;
      margin: 0 auto;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;

      display: block;
      clear: both;
    }
    @media only screen and (max-width: 767px) {
      &::before {
        left: 0;
        margin: 14px;
      }
    }
  }
  .pro-map .pro-map-line {
    width: 50%;
    padding-right: 30px;
    float: left;
    position: relative;
    &::after {
      content: "";
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #e5e9ed;
      position: absolute;
      top: 0;
      right: -6px;
      transition: all 0.3s ease 0s;
    }
    &:hover::after {
      background: #00b7c2;
      transform: scale(1.3);
    }
    @media only screen and (max-width: 767px) {
      width: 100%;
      float: none;
      padding: 0 0 0 30px;
      margin-bottom: 20px;
      &::after {
        right: auto;
        left: -6px;
      }
    }
  }
  .pro-map .pro-map-line-content {
    padding: 50px 40px;
    background: #e5e9ed;
    position: relative;
    transition: all 0.3s ease 0s;
    &::after {
      content: "";
      border-top: 30px solid #e5e9ed;
      border-right: 15px solid transparent;
      position: absolute;
      top: 0;
      right: -15px;
      transition: all 0.3s ease 0s;
    }
    &:hover::after {
      border-top-color: #00b7c2;
    }
    &:hover {
      background: #00b7c2;
      .post {
        color: #fff;
      }
      .description {
        color: #fff;
      }
      .post::after {
        border-top-color: #fff;
      }
    }
    @media only screen and (max-width: 767px) {
      padding: 20px;
      &::after {
        border-left: 15px solid transparent;
        border-right: none;
        left: -15px;
        right: auto;
      }
    }
  }
  .pro-map .post {
    display: block;
    font-size: 20px;
    color: #22272c;
    padding-bottom: 8px;
    margin: 8px 0 15px 0;
    position: relative;
    font-weight: 700;
    &::after {
      content: "";
      display: block;
      width: 30px;
      border-top: 2px solid #22272c;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: all 0.3s ease 0s;
    }
  }
  .pro-map .description {
    font-size: 14px;
    color: #000;
    line-height: 25px;
  }
  .pro-map .description {
    font-size: 14px;
    color: #000;
    line-height: 25px;
  }
  /*  */
  .pro-map .pro-map-line:nth-child(2n) {
    padding: 0 0 0 30px;
    margin-top: 75px;
    &::after {
      right: auto;
      left: -6px;
    }
    @media only screen and (max-width: 767px) {
      margin-top: 0;
    }
  }
`;
export const SecFive = styled.div`
  .serviceBox {
    color: #000;
    text-align: right;
    padding: 10px 10px 10px 20px;
    position: relative;
    z-index: 1;
    min-height: 281px;
    margin-bottom: 15px;
    &::before {
      content: "";
      width: calc(100% - 121px);
      height: calc(100% - 60px);
      border-left: 1px dashed #333;
      border-top: 1px dashed #333;
      position: absolute;
      bottom: 0;
      left: 4px;
    }
    &::after {
      content: "";
      background-color: #58ccde;
      border: none;
      height: 10px;
      width: 10px;
      border-radius: 50%;
      left: 0;
      position: absolute;
      bottom: 0;
    }
  }
  .serviceBox .service-icon {
    color: #fff;
    background-color: #58ccde;
    border: 1px dashed #485c60;
    font-size: 50px;
    text-align: center;
    line-height: 100px;
    height: 100px;
    width: 100px;
    margin: 0 0 30px;
    border-radius: 50%;
    box-shadow: 0 0 10px rgb(0 0 0 / 35%);
    display: inline-block;
    position: relative;
    &::before {
      content: "";
      border-left-color: transparent;
      border-top-color: transparent;
      border-radius: inherit;
      transform: rotate(45deg);
      position: absolute;
      right: -8px;
      top: -8px;
      bottom: -8px;
      left: -8px;
    }
  }
  .intro_cnt img {
    border-radius: 10px;
  }
  .serviceBox .title {
    color: #000;
    font-size: 20px;
    font-weight: 700;
    line-height: 25px;
    text-align: left;
    margin: 0 0 5px;
    font-family: "Lato", sans-serif;
  }
  .serviceBox .description {
    font-size: 13px;
    line-height: 20px;
    text-align: left;
    letter-spacing: 0.5px;
    margin: 0;
    color: #000;
  }
`;
export const SecSix = styled.div``;
export const SecSeven = styled.div`
  .flip-box {
    border-bottom: none;
    &:hover {
      background: #47b475;
      transition: all 0.5s ease-in;
      h5 {
        color: #fff;
      }
      p {
        color: #fff;
      }
    }
  }
  .flip-tit {
    font-size: 20px;
    color: #000;
    line-height: 1.6;
    margin-bottom: 11px;
    font-weight: 700;
    font-family: "Lato", sans-serif;
  }
`;
export const SecEight = styled.div`
  .uniq_features ul li {
    margin-bottom: 15px;
    position: relative;
    margin: 10px;
    /* padding-left: 29px; */
  }
  .fa-circle-arrow-right {
    /* padding-right: 10px; */
    font-size: 18px;
    position: relative;
    top: 5px;
    color: #03b787;
    text-indent: -30px;
  }
  ul {
    @media (max-width: 767px) {
      margin: 14px;
    }
  }
`;
export const SecNine = styled.div``;
export const SecTen = styled.div`
  .uniq_features ul li {
    margin-bottom: 15px;
    position: relative;
    margin: 10px;
    /* padding-left: 29px; */
  }
  .fa-circle-arrow-right {
    /* padding-right: 10px; */
    font-size: 18px;
    position: relative;
    top: 5px;
    color: #03b787;
    text-indent: -30px;
  }
  ul {
    @media (max-width: 767px) {
      margin: 14px;
    }
  }
`;
export const SecEleven = styled.div``;
export const SecTwelve = styled.div``;
export const SecThirteen = styled.div``;
