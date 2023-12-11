import styled from "styled-components";

export const SecOne = styled.div`
  /* height: 100vh; */
  .banner {
    background-image: url("https://www.blockchainappfactory.com/images/nft-marketplace-development-on-astar/astar-ban5.webp");
    background-size: cover;
    padding-top: 110px;
    padding-bottom: 100px;
    background-repeat: no-repeat;
    /* height: auto; */
    height: 100vh;
    /* background-position: center; */
  }
  .banner-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(79deg, #000, rgb(255 255 255 / 10%));
    opacity: 0.82;
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
  .contentall a,
  a.home-talk-experts {
    padding: 10px 20px !important;
  }

  @media (max-width: 768px) {
    .banner {
      background-image: none;
      height: 70vh;
    }
    .banner-overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-image: linear-gradient(79deg, #000, rgb(255 255 255 / 0%));
      opacity: 0.95;
    }
    .ban_tirt,
    .contentall h1 {
      font-size: 25px;
      text-align: center;
    }
    .p-secOne {
      text-align: center;
    }
    .contentall {
      margin-top: 120px;
    }
  }
`;
export const SecTwo = styled.div`
  .how-tit h2 {
    font-family: "Lato", "san-serif" !important;
    letter-spacing: 1.5px !important;
    color: black;
  }
`;

export const SecThree = styled.div`
  .section-title {
    font-family: "Lato", "san-serif" !important;
    letter-spacing: 1.5px !important;
    color: black;
  }
`;
export const SecFour = styled.div`
  .primary-list li i {
    color: #47b475;
    padding-right: 10px;
  }
  .section-title {
    font-family: "Lato", "san-serif" !important;
    letter-spacing: 1.5px !important;
    color: black;
    font-weight: 700;
  }
`;
export const SecFive = styled.div`
  .cta1 {
    position: relative;
    background-image: linear-gradient(45deg, #14141485, #020202),
      url(https://www.blockchainappfactory.com/images/nft-marketplace-development-on-astar/astar-cta1.webp);
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 100px 0px;
    color: #fff;
  }
  .section-title {
    font-family: "Lato", "san-serif" !important;
    letter-spacing: 1.5px !important;
    color: #fff;
    font-weight: 700;
    padding: 0;
  }
`;
export const SecSix = styled.div`
  .number-box {
    animation-delay: 1.2s;
    color: #fff;
    position: relative;
    z-index: 1;
    text-align: center;
    padding: 20px;
    margin: 15px 0;
    background: #fff;
    border-radius: 0;
    box-shadow: 0 0 10px #d1cbcb;
    border: 4px solid #fff;
    padding-bottom: 0;
    min-height: 241px;
    height: 241px;
    transition: all 1s ease-out;

    &::before {
      position: absolute;
      content: "";
      background: #f6f7f9;
      width: 100%;
      height: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 0;
    }
    &:hover::before {
      height: 100%;
      top: 0;
      transition: 1s ease;
    }
  }
  .num-box-img {
    position: relative;
    z-index: 1;
  }
  .number-box-line {
    border-bottom: 1px dashed #dedede;
    width: 100%;
    margin: 20px auto;
    position: relative;
  }
  .number-box p {
    color: #666;
    font-size: 14px;
    font-weight: 400;
    margin-top: 15px;
    line-height: 1.5;
    position: relative;
  }

  @media screen and (min-width: 992px) {
    .wallet .col-md-4 {
      padding: 0;
    }
  }
`;
export const SecSeven = styled.div`
  #Workflow .work-process {
    background-color: #fff;
    padding: 15px;
    position: relative;
    z-index: 1;
    transition: 0.5s;
    margin-bottom: 30px;
    border: 1px solid #1fb6c43b;
    text-align: center;
    border-left: 2px dotted #47b475;
    border-bottom: 2px dotted #47b475;
    border-start-start-radius: 20px;
    border-end-end-radius: 20px;
    box-shadow: -3px 3px 0px 2px rgb(71 180 117 / 42%);

    &:hover::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      background-image: url("https://www.blockchainappfactory.com/images/crypto-exchange-like-coinbase/green-shape.webp");
      background-position: top;
      background-size: contain;
      background-repeat: no-repeat;
      height: 200px;
      width: 200px;
      z-index: -1;
      opacity: 0.2;
      transition: all 0.5s;
    }
  }
  .work-process {
    background: #f2f2f2;
    min-height: 365px;
  }
  .work-icon {
    width: 75px;
    height: 75px;
    margin: 0 auto !important;
    border-left: 2px dotted #47b475;
    border-bottom: 2px dotted #47b475;
    border-start-start-radius: 20px;
    border-end-end-radius: 20px;
    box-shadow: 3px -2px 0px 2px rgb(71 180 117 / 42%);
  }
  .work-process h3 {
    font-family: "Lato", "sans-serif";
    color: #000;
    letter-spacing: 1.5px !important;
  }
  /* #Workflow .work-process:hover::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    background-image: url("https://www.blockchainappfactory.com/images/crypto-exchange-like-coinbase/green-shape.webp");
    background-position: top;
    background-size: contain;
    background-repeat: no-repeat;
    height: 200px;
    width: 200px;
    z-index: -1;
    opacity: 0.2;
    transition: all 0.5s;
  } */
`;
export const SecEight = styled.div`
  .cta2 {
    position: relative;
    background-image: linear-gradient(45deg, #14141485, #020202),
      url("https://www.blockchainappfactory.com/images/nft-marketplace-development-on-astar/astar-cta2.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 100px 0px;
    color: #fff;
    background-attachment: fixed;
  }
  .section-title {
    font-family: "Lato", "sans-serif";
    color: #fff;
    font-weight: 700;
    letter-spacing: 1.5px !important;
  }
`;
export const SecNine = styled.div`
  .section-title1 {
    font-family: "Lato", "sans-serif";
    font-weight: 700;
    letter-spacing: 1.5px !important;
    color: #000;
  }
  .big-box {
    border: 2px dashed #d7d7d7;
    padding: 30px 40px 10px;
  }

  .features1 {
    background: #e9e9e9;
    margin-bottom: 20px;
    position: relative;
    border-radius: 10px;
  }
  .features1 .icon1 {
    position: absolute;
    display: inline-block;
    top: 10px;
    z-index: 1;
    left: 10px;
  }
  .features1 .content {
    padding-left: 95px;
    position: relative;
    border-radius: 6px;
  }
  .content {
    padding: 30px 20px;
  }
  .content h5 {
    letter-spacing: 1.5px !important;
    font-family: "open sans", sans-serif;
    color: #000;
    font-weight: 700;
  }
`;
export const SecTen = styled.div`
  .sec_tit h2 {
    font-family: "Lato", "sans-serif";
    color: #000;
    letter-spacing: 1.5px !important;
  }
`;
