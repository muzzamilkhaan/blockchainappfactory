import styled from "styled-components";

export const SecOne = styled.div`
  .banner {
    background-image: url("https://www.blockchainappfactory.com/images/solana/banner-solana.webp");
    background-position: center 0;
    background-size: cover;
    position: relative;
    height: 650px;
    overflow: hidden;
  }
  .large-header {
    background-color: rgb(0 0 0 / 60%);
    height: inherit !important;
    position: relative;
    width: 100%;
    overflow: hidden;
    background-size: cover;
    background-position: center center;
    z-index: 1;
    &::before {
      position: absolute;
      content: "";
      background: rgba(0, 0, 0, 0.3);
      z-index: 10;
      left: 0;
      top: auto;
      width: 100%;
      height: 100%;
    }
  }
  .contentall h1 {
    font-family: "Lato", sans-serif;
    text-align: center;
    font-size: 45px;
    font-weight: 700;
    letter-spacing: 1.5px !important;
    margin-bottom: 5px;
    line-height: 60px;
  }
  .banner_sub {
    line-height: 1.7;
    font-size: 18px;
    padding: 0px 100px;
    color: #fff;
    margin-bottom: 20px;
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
    margin-right: 26px !important;
  }
  .banner_btn {
    padding: 15px;
  }

  @media (max-width: 768px) {
    .contentall {
      max-width: 100%;
    }
    .contentall h1 {
      font-size: 30px;
      line-height: 1.3;
    }
    .banner_sub {
      font-size: 14px;
      padding: 0;
    }
  }
`;
export const SecTwo = styled.div`
  .section-title h2 {
    font-family: "Lato", sans-serif;
    color: #000;
    letter-spacing: 1.5px !important;
  }
`;
export const SecThree = styled.div`
  .pre-ico-sec-1 .why-adit-list {
    width: 100%;
    background: #b4d9bc;
    border: 1px solid #eee;
    position: relative;
    padding: 7%;
    margin-bottom: 49px;
    min-height: 260px !important;
  }
  .pre-ico-sec-1 .why-adit-list .icon {
    width: 100%;
    float: none;
    text-align: center;
    margin-bottom: 20px;
  }
  .pre-ico-sec-1 .why-adit-list .content {
    float: none;
    width: 100%;
    text-align: center;
  }
  .card-big-shadow {
    position: relative;

    &::before {
      background-image: url("https://www.blockchainappfactory.com/images/ibm/shadow.webp");
      background-position: bottom;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      bottom: -12%;
      content: "";
      display: block;
      left: -12%;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 0;
      opacity: 0.5;
    }
  }
  .content h3 {
    font-size: 18px;
    margin-bottom: 5px;
    font-family: "Lato", sans-serif;
    color: #000;
  }
`;
export const SecFour = styled.div`
  .rounded-corner {
    border-radius: 10px;
  }
`;
export const SecFive = styled.div`
  .img-1 {
    background-image: url("https://www.blockchainappfactory.com/images/solana/solana3.webp");
  }
  .img-2 {
    background-image: url("https://www.blockchainappfactory.com/images/solana/solana4.webp");
  }
  .img-3 {
    background-image: url("https://www.blockchainappfactory.com/images/solana/native.webp");
  }
  .indus-box-content {
    text-align: center;
  }
`;
export const SecSix = styled.div`
  .section-title h3 {
    font-family: "lato", sans-serif;
    color: #000;
    letter-spacing: 1.5px !important;
  }
`;
export const SecSeven = styled.div`
  .testimonials-item {
    display: block;
    position: relative;
    margin-bottom: 30px;
  }
  .testimonials-item .testimonials-content {
    background: #fff;
    overflow: hidden;
    box-shadow: 0 2px 48px 0 rgb(0 0 0 / 6%);
    /* -webkit-border-radius: 5px;
    -moz-border-radius: 5px; */
    border-radius: 5px;
    position: relative;
    /* height: 100%; */
    min-height: 220px;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
      background: #47b47557 !important;
      opacity: 0;
      /* -webkit-transition: all 0.3s ease 0s;
      -moz-transition: all 0.3s ease 0s;
      -o-transition: all 0.3s ease 0s; */
      transition: all 0.3s ease 0s;
    }
  }
  .testimonials-item .testimonials-content .user-name {
    display: block;
    font-weight: 600;
    font-size: 19px;
    color: #47b475;
    margin-top: 20px;
    padding-left: 115px;
    letter-spacing: 0.69px;
    margin-bottom: 5px;
    position: relative;
    z-index: 3;
    text-transform: capitalize;
  }
  .testimonials-item .testimonials-content .txt p {
    padding-left: 25px;
    padding-right: 25px;
    margin-bottom: 25px;
    margin-top: 30px !important;
    font-weight: 400;
    font-size: 14px;
    color: black;
    letter-spacing: 0.6px;
    line-height: 26px;
    position: relative;
    z-index: 3;
  }
  .testimonials-item .user {
    width: 70px;
    height: 70px;
    position: relative;
    position: absolute;
    top: -10px;
    left: 25px;
    z-index: 3;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    overflow: hidden;
    background: #f2f2f2;
    box-shadow: 0 2px 48px 0 rgb(0 0 0 / 6%);
    line-height: 80px;
    text-align: center;
  }
  .testimonials-content h3 {
    font-family: "Lato", sans-serif;
    letter-spacing: 0.5px !important;
  }
`;
export const SecEight = styled.div``;
export const SecNine = styled.div``;

// style="background-image: url(images/solana/banner-solana.webp);background-position: center 0;background-size: cover;
