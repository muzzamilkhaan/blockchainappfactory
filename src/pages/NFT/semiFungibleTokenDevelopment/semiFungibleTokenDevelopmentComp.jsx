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
    padding-top: 50px;
    @media (max-width: 767px) {
      /* padding-top: 0; */
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
    background-image: url("https://www.blockchainappfactory.com/images/semi-fungible-token-development/banner.webp");
    background-size: cover;
    padding-top: 110px;
    padding-bottom: 100px;
    background-repeat: no-repeat;
    /* height: auto; */
    background-position: center;
    height: 100vh;
  }
  .banner-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(0 0 0 / 0%);
    background-image: linear-gradient(to right, #00000000, #00000000);
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
    margin-top: 140px;
    @media (max-width: 767px) {
      margin-top: 20px;
      margin-bottom: 100px;
    }
  }

  .contentall h1 {
    font-family: "Lato", sans-serif;
    font-size: 40px !important;
    color: #fff !important;
    line-height: 1.3;
    font-weight: 700;
    text-align: start;
    margin-bottom: 0 !important;
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
    font-size: 21px;
    display: block;
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 20px;
    text-align: start;
    /* padding-top: 20px; */
    @media (max-width: 768px) {
      text-align: center !important;
      margin-bottom: 20px;
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
  .rounded-border {
    border-radius: 10px;
  }
`;
export const SecFour = styled.div`
  .single_feature_seven {
    text-align: center;
    padding: 40px 24px;
    border: 1px solid #e4ecf9;
    position: relative;
    z-index: 1;
    background: #fff;
    margin-bottom: 30px;
    min-height: 347px;
    border-radius: 10px;
    box-shadow: rgb(76 175 80 / 20%) 0px 4px 12px;
    &::before {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 45px;
      height: 45px;
      content: "";
      background: #fff;
      transition: 0.3s;
      z-index: -1;
    }
    &:hover::before {
      width: 100%;
      height: 100%;
      background: #47b475;
      border-radius: 10px;
    }
    &:hover {
      h4 {
        color: #fff;
      }
      p {
        color: #fff;
      }
      img {
        filter: brightness(0) invert(1);
      }
    }
  }
  .single_feature_six_seven_icon .icon {
    width: auto;
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-size: 44px;
    display: block;
    margin: auto;
  }
  .single_feature_six_seven_icon .icon img {
    width: 70px;
    height: auto;
    transition: 0.5s;
  }
  .single_feature_seven_content h4 {
    transition: 0.5s;
    /* padding-top: 15px; */
    color: #000000;
    font-weight: 700;
    padding-top: 40px;
    padding-bottom: 10px;
    font-family: "Lato", sans-serif;
  }
  .single_feature_seven_content p {
    padding-top: 1px;
    transition: 0.5s;
  }
`;
export const SecFive = styled.div`
  .tw_feat {
    position: relative;
    text-align: justify;
    margin-bottom: 0;
    z-index: 1;
    min-height: 180px;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    &:hover {
      img {
        transform: rotateY(360deg);
        transition: all 500ms ease;
      }
    }
  }
  .tw_feat_ico {
    position: absolute;
    background: #eee;
    text-align: center;
    z-index: 1;
    border-radius: 10px 30px 10px 30px;
    width: 75px;
    height: 75px;
    margin: 0 auto;
    left: 0;
    top: -2px;
    line-height: 73px;
    border: 1px solid #47b475;
  }
  .dam {
    width: 68%;
    margin-top: 6px;
  }
  .tw_feat_cnt {
    text-align: justify;
    padding: 20px;
    min-height: 220px;
    margin-top: 30px;
    box-shadow: 0 0 10px #999;
    border-radius: 6px;
    background: #fff;
  }
  .tw_feat_cnt h5 {
    font-size: 18px;
    padding-left: 70px;
    padding-top: 10px;
    padding-bottom: 10px;
    border: 2px solid #f5f5f5;
    background: #f5f5f5;
    color: #000000;
    font-weight: 700;
    font-family: "Lato", sans-serif;
  }
  .tw_feat_cnt p {
    color: #000;
    line-height: 1.4;
    margin-bottom: 0;
    margin-top: 15px;
  }
`;
export const SecSix = styled.div``;
export const SecSeven = styled.div``;
export const SecEight = styled.div``;
export const SecNine = styled.div``;
export const SecTen = styled.div``;
export const SecEleven = styled.div``;
export const SecTwelve = styled.div``;
export const SecThirteen = styled.div``;
