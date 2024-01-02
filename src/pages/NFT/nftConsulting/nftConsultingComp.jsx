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
    font-weight: 700;
    font-size: 30px;
    font-family: "Lato", sans-serif;
    color: #fff !important;
    text-transform: uppercase;

    @media (max-width: 767px) {
      font-size: 25px !important; 
      text-align: center;
    }
  }
  .contentall p {
    color: #fff !important;
    text-align: start;
  }
  .banner {
    background-image: url("https://www.blockchainappfactory.com/images/nft-consulting/banner-image.webp");
    background-size: cover;
    padding-top: 138px;
    padding-bottom: 50px;
    background-position: center;
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
    background-color: rgb(0 0 0 / 0%);
    background-image: linear-gradient(to right, #00000000, #00000000);
    opacity: 0.95;
  }
  img {
    vertical-align: middle;
  }
`;
export const SecTwo = styled.div``;
export const SecThree = styled.div`
  .fa-hand-point-right {
    color: #47b475;
    font-size: 14px;
    text-indent: -22px;
  }
  .list li {
    padding: 5px 0px;
    /* text-indent: -27px; */
    padding-left: 10px;
  }
`;
export const SecFour = styled.div`
  .single_feature_seven {
    text-align: center;
    padding: 20px;
    border: 1px solid #e4ecf9;
    position: relative;
    z-index: 1;
    background: #fff;
    margin-bottom: 30px;
    min-height: 317px;
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
    padding: 10px 10px;
    border: 2px solid #f5f5f5;
    text-align: center;
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

export const SecSeven = styled.div`
  .bg-dark-half-md {
    position: relative;
    background: #022d62;
    /* &::before {
      content: "";
      background: #022d62;
      width: 100%;
      display: inline-block;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      height: 560px !important;
    } */
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
    margin-bottom: 20px;
  }
  .teck .category-grid-style-02 .category-item {
    padding: 30px;
    text-align: center;
    width: 25%;
    border-right: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;
    position: relative;
    cursor: pointer;
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
      -webkit-transform: scale(1);
      transform: scale(1);
      transition: all 0.3s ease-in-out;
    }
  }
  @media screen and (max-width: 700px) {
    .category-grid-style-02 .category-item {
      width: 49% !important;
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
export const SecEight = styled.div`
  .feature-items {
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 20px;
    box-shadow: 3px 3px 15px -6px rgb(0 0 0 / 31%);
    background: #fff;
    min-height: 290px;
    text-align: center;
    margin-top: 20px;
    &:hover {
      .feature_icon {
        transform: rotateY(360deg);
      }
    }
  }
  .feature_icon {
    padding: 15px;
    transition: all 0.3s ease 0s;
  }
  .feature-items img {
    width: 75px;
    padding: 10px;
    text-align: center;
    border-radius: 10px 20px 10px 20px;
    border: 2px solid #47b4759c;
    margin: 0 auto !important;
  }
  .feature-items h4 {
    font-size: 18px;
    font-weight: 700;
    font-family: "Lato", sans-serif;
  }
`;
export const SecNine = styled.div``;
export const SecTen = styled.div``;
export const SecEleven = styled.div``;
export const SecTwelve = styled.div``;
export const SecThirteen = styled.div``;
