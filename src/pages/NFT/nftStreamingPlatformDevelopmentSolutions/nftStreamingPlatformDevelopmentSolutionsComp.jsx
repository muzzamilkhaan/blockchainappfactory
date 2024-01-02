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
      font-size: 25px;
      text-align: center;
    }
  }
  .contentall p {
    color: #fff !important;
  }
  .banner {
    background-image: url("https://www.blockchainappfactory.com/images/nfts/nfts-ban-small.webp");
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
    opacity: 0.95;
    background: #040404b3 !important;
  }
  img {
    vertical-align: middle;
  }
`;
export const SecTwo = styled.div``;
export const SecThree = styled.div``;
export const SecFour = styled.div`
  .pre-ico-sec-1 .card-big-shadow {
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
  .pre-ico-sec-1 .why-adit-list {
    width: 100%;
    background: #ddf3e6;
    border: 1px solid #eee;
    position: relative;
    padding: 7%;
    margin-bottom: 49px;
    min-height: 397px !important;
  }
  .pre-ico-sec-1 .why-adit-list .icon {
    width: 100%;
    float: none;
    text-align: center;
    margin-bottom: 20px;
  }
  .pre-ico-sec-1 .why-adit-list .icon img {
    width: 55px;
  }
  .pre-ico-sec-1 .why-adit-list .content h3 {
    color: #000000;
    font-weight: 700;
    font-family: "Lato", sans-serif;
    text-align: center;
  }
  .pre-ico-sec-1 .why-adit-list .content p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 0px !important;
    margin-top: 10px;
    text-align: center;
  }
`;
export const SecFive = styled.div`
  .bg-2 {
    background-image: linear-gradient(45deg, black, #00000052),
      url("https://www.blockchainappfactory.com/images/nfts/1.webp");
    background-size: cover;
    padding-top: 65px;
    padding-bottom: 50px;
    /* height: auto; */
  }

  /* .gray_bg {
    background: #f2f2f2;
  } */
  .common_spacing {
    padding: 60px 0;
  }
  .partner-sec {
    background: #fff;
    padding: 40px 15px 10px;
    max-width: 100%;
    margin: 0 auto 30px;
    min-height: 376px;
    border-radius: 4px;
  }
  .partner-sec h4 {
    line-height: 1.3;
    font-size: 18px;
    margin-bottom: 10px;
    color: #000000;
    letter-spacing: 0px;
    font-weight: 700;
    text-transform: capitalize;
    margin-top: 6px;
    font-family: "Lato", sans-serif;
  }
`;
export const SecSix = styled.div`
  .flip-box {
    border-bottom: none;
  }
  .flip-tit {
    font-size: 20px;
    color: #000000;
    font-weight: 700;
    line-height: 1.6;
    margin-bottom: 11px;
    font-family: "Lato", sans-serif;
  }
`;
export const SecSeven = styled.div``;
export const SecEight = styled.div``;
export const SecNine = styled.div``;
export const SecTen = styled.div``;
export const SecEleven = styled.div``;
export const SecTwelve = styled.div``;
export const SecThirteen = styled.div``;
