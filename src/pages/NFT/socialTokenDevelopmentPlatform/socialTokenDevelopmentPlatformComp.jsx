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
    margin-right: 23px !important;
  }
  /* .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    
  } */
  .contentall {
    padding-top: 40px;
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
    color: #000 !important;
    text-transform: uppercase;
    @media (max-width: 767px) {
      font-size: 25px;
      text-align: center;

    }
  }
  .contentall p {
    color: #000 !important;
  }
  .banner {
    background: #87ceeb;
    background-size: cover;
    padding-top: 138px;
    padding-bottom: 50px;
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
    background-color: rgb(0 183 194 / 40%);
  }
  img {
    vertical-align: middle;
  }
`;
export const SecTwo = styled.div``;
export const SecThree = styled.div`
  .ct_warp {
    background-image: linear-gradient(45deg, black, #000000b5),
      url("https://www.blockchainappfactory.com/images/sub/2.webp");
    background-size: cover;
    padding-top: 70px;
    padding-bottom: 0;
    background-position: center center;
    padding-bottom: 70px;
    text-align: center;
    background-attachment: fixed;
  }

  .ct_warp .text-white {
    font-weight: 600;
    color: "#fff";
  }
  .ct_warp p {
    font-size: 16px;
    color: #fff;
    /* font-weight: bold; */
    line-height: 1.6;
    margin-bottom: 25px;
  }
`;
export const SecFour = styled.div`
  .product-features {
    background: linear-gradient(rgb(71 180 117), rgba(0, 183, 194, 0.57)),
      transparent url("https://www.blockchainappfactory.com/images/sub/4.webp")
        top left/cover no-repeat scroll;
  }
  .common_spacing {
    padding: 60px 0;
  }
  .Package_list {
    display: inline-block;
    background: rgba(0, 0, 0, 0.6);
    padding: 30px 10px;
    max-width: 280px;
    width: 100%;
    margin-bottom: 20px;
    text-align: center;
    border-radius: 5px;
    min-height: 200px;
  }
  .Package_list img {
    height: 55px;
  }
  .Package_list span {
    display: block;
    font-size: 16px;
    margin-top: 12px;
    color: #fff;
  }
`;
export const SecFive = styled.div`
  .technicalbox {
    min-height: 520px;
    position: relative;
    &:hover {
      background: #47b475 !important;
      h3 {
        color: #fff;
      }
      p {
        color: #fff;
      }
      hr {
        background-color: #fff !important;
      }
    }
    &:hover .technical-icon {
      border: 4px solid #f2f2f2;
      opacity: 1;
      transform: scale(1, 1);
    }
    @media (max-width: 767px) {
      min-height: max-content;
    }
  }
  .technicalbox h3 {
    text-transform: capitalize;
    font-size: 16px;
    font-family: "Lato", sans-serif;
  }
`;
export const SecSix = styled.div`
  .fa-circle-arrow-right {
    /* padding-right: 10px; */
    font-size: 18px;
    position: relative;
    top: 5px;
    color: #03b787;
    text-indent: -30px;
  }
  .uniq_features ul li {
    margin-bottom: 15px;
    position: relative;
    padding-left: 29px;
  }
`;
export const SecSeven = styled.div`
  .perfect-script-items1 {
    -webkit-box-shadow: 0px 5px 15px 0px rgb(21 10 82 / 20%);
    box-shadow: 0px 5px 15px 0px rgb(21 10 82 / 20%);
    padding: 30px 15px 10px;
    border-radius: 16px;
    background-color: #fff;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    min-height: 226px;
    margin-bottom: 20px;
  }
  .perfect-script-items1 .icon {
    width: 70px;
    height: 70px;
    /* margin: 20px auto 50px; */
    line-height: 75px;
    position: relative;
    border-radius: 0px 50% 50% 0px;
    /* background-image: linear-gradient( 293deg , #fba214 0%, #f7cb22 100%); */
    /* background-color: #f03858; */
    color: #fff;
    font-size: 40px;
    box-shadow: 3px 14px 13px 0px #0000003b;
    z-index: 9;
    float: left;
    background: #47b475;
    /* border: 3px solid #292c97; */
    margin-left: -15px;
  }
  .perfect-script-items1 .icon img {
    width: 45px;
    margin-top: -8px;
  }
  .perfect-script-items1 .content {
    display: block;
    float: left;
    width: 80%;
    padding-left: 30px;
  }
  .content .desc {
    margin-top: 20px;
  }
  .perfect-script-items1 strong {
    color: #47b475;
    font-size: 20px;
  }
`;
export const SecEight = styled.div`
  .section-title .mb40 {
    background: #aca3a3;
    width: 50px;
    margin: 10px auto 15px;
    height: 2px;
  }
  .bg-2 {
    background-image: linear-gradient(45deg, black, #000000c2),
      url("https://www.blockchainappfactory.com/images/sub/6.webp");
    background-size: cover;
    padding-top: 65px;
    padding-bottom: 50px;
    height: auto;
  }
  .partner-sec {
    background: #fff;
    padding: 40px 15px 10px;
    max-width: 450px;
    margin: 0 auto 30px;
    min-height: 184px;
    border-radius: 4px;
    &:hover {
      background: #47b475;
      h4 {
        color: #fff;
      }
    }
  }
  .partner-sec img {
    margin-bottom: 10px;
  }
  .partner-sec h4 {
    line-height: 1.3;
    font-size: 18px;
    margin-bottom: 10px;
    color: #328455;
    letter-spacing: 0px;
    font-weight: 600;
    text-transform: capitalize;
    margin-top: 6px;
    font-family: "Lato", sans-serif;
  }
`;
export const SecNine = styled.div``;
export const SecTen = styled.div``;
export const SecEleven = styled.div``;
export const SecTwelve = styled.div``;
export const SecThirteen = styled.div``;
