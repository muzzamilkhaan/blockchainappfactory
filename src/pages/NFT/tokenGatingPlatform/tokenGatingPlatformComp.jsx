import styled from "styled-components";

export const SecOne = styled.div`
  .contentall {
    padding-top: 220px;
  }
  .contentall a {
    border-radius: 30px;
    transition: all 0.3s ease-out 0s !important;
    &:hover {
      transform: scale(1.1, 1.1);
    }
  }
  .banner {
    background: linear-gradient(180deg, #32028d, #180134);
    background-size: cover;
    padding-top: 120px;
    /* padding-top: 165px;
    padding-bottom: 66px; */
    /* height: auto; */
    background-position: center;
    height: 100vh;
  }
  .text-center img {
    padding-top: 130px;
    @media (max-width: 768px) {
      padding-top: 0;
    }
  }
  .ban_tirt h1 {
    font-family: "Lato", sans-serif;
    color: #fff;
    font-size: 32px;
    @media (max-width: 1001px) {
      padding-top: 250px;
      text-align: center !important;
      font-size: 30px;
    }
    @media (max-width: 768px) {
      padding-top: 0;
      font-size: 25px;
    }
  }
  @media (max-width: 768px) {
    a.nectar-button.medium.regular.accent-color.regular-button.nec-btn {
      width: max-content !important;
    }
  }
  /* .container .para {
    @media (max-width: 768px) {
      text-align:center
    }
  } */
`;
export const SecTwo = styled.div`
  .container .para {
    @media (max-width: 768px) {
      text-align: start !important;
    }
  }
`;
export const SecThree = styled.div`
  .container .para {
    @media (max-width: 768px) {
      text-align: start !important;
    }
  }
`;
export const SecFour = styled.div`
  .perfect-script-items1 .icon img {
    width: 45px;
    margin-top: -8px;
  }
`;
export const SecFive = styled.div`
  .icon-text-1 {
    display: -webkit-box;
    display: -ms-flexbox;
  }
  .icon-text-1 .icon-text-icon {
    width: 80px;
    height: 80px;
    border-radius: 12px;
    background: #ffffff;
    margin-bottom: 20px;
    line-height: 75px;
    /* padding-left: 6px; */
    box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 24%) 0px 1px 2px;
    text-align: center;
    font-size: 30px;
    color: #47b475;
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
  .icon-text-1 > :nth-child(n + 2) {
    /* margin-top: 2.2rem; */
    margin-bottom: 20px;
  }
  .icon_content {
    padding-left: 20px;
    min-height: 100px;
    width: 80%;
  }
`;
export const SecSix = styled.div`
  .container .h2 {
    @media (max-width: 768px) {
      text-align: center !important;
    }
  }
`;
export const SecSeven = styled.div`
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
    min-height: 340px !important;
    text-align: justify;

    &:hover {
      background-color: #fff;
    }
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
  .pre-ico-sec-1 .why-adit-list .content {
    float: none;
    width: 100%;
    text-align: center;
  }
`;
export const SecEight = styled.div`
  .workflow {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    padding: 0;
    margin: 0;
  }
  .workflow li {
    text-align: center;
    background: #f2f2f2;
    border-radius: 7px;
    margin: 1.5%;
    padding: 20px 10px;
    width: 27%;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 40%;
      right: -15px;
      width: 15px;
      height: 15px;
      border-top: 25px solid transparent;
      border-bottom: 25px solid transparent;
      border-left: 15px solid #47b475;
    }
    @media (max-width: 767px) {
      margin: 3%;
      width: 44%;
    }
  }
  .workflow li img {
    width: 55px;
    margin-bottom: 10px;
  }
`;
export const SecNine = styled.div``;
export const SecTen = styled.div`
  .awesome-features-wrapper {
    border: 1px solid #cdcdcd;
    background: none;
    padding-top: 40px;
    padding-bottom: 20px;
    min-height: 250px;
    transition: 0.3s;
    position: relative;
    margin-bottom: 30px;
    border-radius: 10px;

    &::before {
      background: #47b475;
      height: 20px;
      width: 3px;
      content: "";
      position: absolute;
      left: -2px;
      top: 65px;
    }
    &::after {
      background: #47b475;
      height: 50px;
      width: 3px;
      content: "";
      position: absolute;
      left: -2px;
      top: 94px;
      z-index: 1;
    }
  }
`;
export const SecEleven = styled.div`
  .container .para {
    @media (max-width: 768px) {
      text-align: start !important;
    }
  }
`;
export const SecTwelve = styled.div``;
