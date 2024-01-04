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
    padding-top: 0px;
  }
  .banner_content .contentall {
    /* margin-top: 30px; */
  }
  .banner_content {
    margin-top: 100px;
  }
  .contentall h1 {
    margin-bottom: 20px;
    line-height: 1.3;
    font-weight: 700;
    font-size: 30px;
    font-family: "Lato", sans-serif;
    color: #fff !important;
    text-transform: uppercase;
    padding-top: 60px;

    @media (max-width: 767px) {
      font-size: 25px !important;
      text-align: center;
      padding-top: 0;
    }
  }
  .contentall p {
    color: #fff !important;
    text-align: start;
    @media (max-width: 767px) {
      text-align: center;
    }
  }
  .banner {
    background-image: url("https://www.blockchainappfactory.com/images/p2e/p2e-bg.webp");
    background-size: cover;
    /* padding-top: 138px; */
    /* padding-bottom: 50px; */
    background-position: center;
    @media (max-width: 991px) {
      height: 900px;
      .contentall {
        padding-top: 0;
      }
    }
    @media (max-width: 767px) {
      height: 100vh;
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
  /* img {
    vertical-align: middle;
  } */
`;
export const SecTwo = styled.div`
  .stats {
    text-align: center;
    font-size: 28px;
    font-weight: 700;
    padding: 1rem 0;
  }
  @media (max-width: 767px) {
    .stats {
      min-height: 0px;
      padding: 20px;
    }
  }
`;
export const SecThree = styled.div``;
export const SecFour = styled.div``;
export const SecFive = styled.div`
  .bg-dark-half-md {
    background: #368b5a;
    width: 100%;
    display: inline-block;
    padding: 100px 0;
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
  .teck .category-grid-style-01 .category-item1 {
    padding: 10px !important;
    text-align: center;
    width: 25%;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    position: relative;
    cursor: pointer;

    &::before {
      content: "";
      background: #fff;
      width: 110%;
      height: 110%;
      display: inline-block;
      position: absolute;
      left: -5%;
      top: -5%;
      z-index: 1;
      opacity: 0;
      -webkit-transform: scale(0.96);
      transform: scale(0.96);
      transition: all 0.3s ease-in-out;
    }

    &:hover::before {
      box-shadow: 5px 5px 24px 0 rgb(2 45 98 / 10%);
      opacity: 1;
      transform: scale(1);
      transition: all 0.3s ease-in-out;
    }
    &:hover .text-center {
      position: relative;
      z-index: 99;
      color: #000 !important;
    }
    @media (max-width: 767px) {
      width: 50%;
    }
  }
  .teck .category-grid-style-01 .category-item1 .category-icon {
    color: #333;
    font-size: 44px;
    line-height: 1;
    margin-bottom: 0px;
    position: relative;
    z-index: 2;
  }
  .teck .category-icon img {
    height: 80px !important;
  }
  .category-item1.aos-item .text-center {
    font-size: 12px !important;
    margin-bottom: 0px !important;
  }
`;
export const SecSix = styled.div`
  .services-small-item {
    display: block;
    background: #fff;
    box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.06);
    border-radius: 5px;
    padding: 40px 28px;
    text-align: center;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
    position: relative;
    z-index: 2;
    margin-bottom: 30px;
    min-height: 416px;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;
      border-radius: 5px;
      background-image: linear-gradient(135deg, #47b475 0%, #13547a 100%);
      -webkit-transition: all 0.3s ease 0s;
      -moz-transition: all 0.3s ease 0s;
      -o-transition: all 0.3s ease 0s;
      transition: all 0.3s ease 0s;
      opacity: 0;
    }
    &:hover::before {
      opacity: 1;
    }
    &:hover {
      margin-top: -15px;
      h5 {
        color: #fff;
      }
      p {
        color: #fff;
      }
      .icon i {
        background: -webkit-linear-gradient(#fff, #fff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .button i {
        background-image: linear-gradient(
          135deg,
          #fff 0%,
          #fff 100%
        ) !important;
        color: #2b708b !important;
      }
    }
  }
  #services .icon {
    margin: 0 auto 15px auto;
    padding-top: 12px;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    width: 60px;
    height: 60px;
  }
  .icon i {
    display: block;
    height: 67px;
    /* line-height: 67px; */
    position: absolute;
    /* width: 100%; */
    /* top: 22px;   */
    z-index: 2;
    font-size: 28px;
    background-image: linear-gradient(135deg, #80d0c7 0%, #13547a 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
  }
  .services-small-item .services-title {
    font-weight: 600;
    font-size: 17px;
    color: #3b566e;
    letter-spacing: 0.7px;
    margin-bottom: 15px;
    position: relative;
    z-index: 2;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
    font-family: "Lato", sans-serif;
  }
  .services-small-item p {
    font-weight: 400;
    font-size: 14px;
    color: #000;
    letter-spacing: 0.88px;
    line-height: 26px;
    position: relative;
    z-index: 2;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
    margin-bottom: 30px;
  }
  .services-small-item .button {
    position: relative;
    z-index: 2;
  }
  .services-small-item .button i {
    width: 42px;
    height: 42px;
    background-image: linear-gradient(135deg, #80d0c7 0%, #13547a 100%);
    line-height: 42px;
    text-align: center;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;
    color: #fff;
    padding-left: 3px;
  }
`;
export const SecSeven = styled.div`
  .technologies1 {
    background: #140050;
    padding: 50px 0;
  }
  .technologies1 ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .technologies1 ul li {
    width: 26%;
    text-align: center;
    font-size: 16px;
    padding: 15px;
    margin: -1px;
    border: 1px solid #fff;
    @media only screen and (min-width: 320px) and (max-width: 767px) {
      width: 49%;
    }
  }
  .technologies1 ul li p {
    margin-bottom: 0 !important;
  }
  img {
    max-width: 100%;
  }

  img {
    vertical-align: middle;
  }
  img {
    border: 0;
  }
  .white {
    color: #fff;
  }
`;
export const SecEight = styled.div`
  .single_feature {
    background: #fff none repeat scroll 0 0;
    box-shadow: 0 2px 30px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    padding: 20px;
    border-radius: 10px;
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    &::before {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      border-radius: 10px;
      bottom: 0;
      background: #47b475;
      -webkit-transform: scaleY(0);
      transform: scaleY(0);
      -webkit-transform-origin: 50% 0;
      transform-origin: 50% 0;
      -webkit-transition-property: transform;
      transition-property: transform;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      -webkit-transition-timing-function: ease-out;
      transition-timing-function: ease-out;
    }
    &:hover::before {
      transform: scaleY(1);
    }
    &:hover {
      h3 {
        color: #fff;
      }
      p {
        color: #fff;
      }
    }
  }

  .single_feature h3 {
    text-transform: capitalize;
    font-size: 20px;
    font-weight: 400;
    margin-top: 0px;
    overflow: hidden;
    font-family: "Lato", sans-serif;
  }
  .single_feature p {
    margin-bottom: 0;
    overflow: hidden;
  }
`;
export const SecNine = styled.div`
  .categories-view1-wrap {
    box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.08);
    padding: 30px 50px 30px 95px;
    border-radius: 10px;
    position: relative;
    background-color: #ffffff;
    margin-bottom: 30px;
    &:hover {
      i {
        color: #ffffff;
        background-color: #274160;
      }
    }
  }
  .categories-view1 i {
    position: absolute;
    left: 0px;
    top: 50%;
    font-size: 30px;
    color: #fb236a;
    width: 70px;
    height: 70px;
    border-radius: 0 100% 100% 0;
    text-align: center;
    padding-top: 18px;
    margin-top: -36px;
    background-color: #ffffff;
    border: 1px solid #eee;
    border-left: none;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -ms-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
  .categories-view1 a {
    display: block;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 0px;
  }
`;
export const SecTen = styled.div`
  .serviceBox {
    border: 1px solid #e5e4e4;
    padding: 40px;
    border-radius: 20px;
    background: #f9f9f9;
    position: relative;
    z-index: 1;
    min-height: 427px;
    margin-bottom: 2rem;
    text-align: center;
    &:hover {
      .service-icon::before {
        transform: rotateZ(180deg);
      }
    }
    @media (max-width: 767px) {
      max-height: max-content;
    }
  }
  .serviceBox .service-icon {
    color: #fff;
    background: #fff;
    font-size: 45px;
    line-height: 100px;
    width: 100px;
    height: 100px;
    margin: 0 auto 30px;
    border-radius: 50%;
    box-shadow: 5px 0 5px rgba(0, 0, 0, 0.2);
    position: relative;
    z-index: 1;
    &::before {
      content: "";
      background: linear-gradient(to right, #47b475 50%, transparent 50%);
      border-radius: 50%;
      position: absolute;
      top: -10px;
      left: -10px;
      right: -10px;
      bottom: -10px;
      z-index: -1;
      transition: all ease 0.8s;
    }

    &::after {
      content: "";
      border-radius: 50%;
      position: absolute;
      border-radius: 50%;
      background: #47b475;
      box-shadow: 0 7px 15px rgba(0, 0, 0, 0.3);
      top: 10px;
      left: 10px;
      right: 10px;
      bottom: 10px;
      z-index: -1;
    }
  }

  .fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .serviceBox .title {
    color: #000;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    margin: 0 0 10px;
    font-family: "Lato", sans-serif;
  }
  .serviceBox .description {
    color: #777;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 0;
  }
`;
export const SecEleven = styled.div`
  .bg-dark-half-md {
    background: #368b5a;
    width: 100%;
    display: inline-block;
    padding: 100px 0;
  }
  .category-grid-style-02 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    background: #ffffff;
    -webkit-box-shadow: 5px 5px 24px 0px rgb(2 45 98 / 10%);
    box-shadow: 5px 5px 24px 0px rgb(2 45 98 / 10%);
    border-radius: 5px;
  }
  .teck .category-grid-style-02 .category-item {
    padding: 30px;
    text-align: center;
    width: 25%;
    border-right: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;
    position: relative;
    cursor: pointer;
    @media (max-width: 767px) {
      width: 50% !important;
    }
  }

  .teck .category-grid-style-02 .category-item {
    padding: 10px !important;
    &::before {
      content: "";
      background: #ffffff;
      width: 110%;
      height: 110%;
      display: inline-block;
      position: absolute;
      left: -5%;
      top: -5%;
      z-index: 1;
      opacity: 0;
      -webkit-transform: scale(0.96);
      transform: scale(0.96);
      transition: all 0.3s ease-in-out;
    }
    &:hover::before {
      box-shadow: 5px 5px 24px 0px rgb(2 45 98 / 10%);
      opacity: 1;
      /* -webkit-transform: scale(1); */
      transform: scale(1);
      transition: all 0.3s ease-in-out;
    }
  }
  .teck .category-grid-style-02 .category-item .category-icon {
    color: #333333;
    font-size: 44px;
    line-height: 1;
    margin-bottom: 0 !important;
    position: relative;
    z-index: 2;
  }
  .teck .category-icon img {
    height: 80px !important;
  }
  .teck .category-grid-style-02 .category-item .category-title {
    color: #022d62;
    font-weight: bold;
    margin-bottom: 0;
    position: relative;
    z-index: 2;
    font-size: 16px;
  }
`;
export const SecTwelve = styled.div`
  h5 {
    font-family: "Lato", sans-serif;
  }
  .list_box h3 {
    background: white;
    padding: 4% 3%;
    text-align: center;
    justify-content: center;
    font-size: 15px;
    align-items: center;
    margin-bottom: 28px;
    border-radius: 5px;
    box-shadow: 1px 4px 10px #0000001f;
    color: #000000d1;
    font-family: "Lato", sans-serif;
  }
`;
export const SecThirteen = styled.div``;
