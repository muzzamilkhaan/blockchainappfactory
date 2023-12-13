import styled from "styled-components";

export const SecOne = styled.div`
  .contentall {
    padding-top: 40px;
  }
  .contentall h1 {
    font-family: "Lato", sans-serif;

    @media (max-width: 768px) {
      font-size: 25px;
      text-align: center;
    }
  }
  .contentall a {
    border-radius: 30px;
    transition: all 0.3s ease-out 0s !important;
    &:hover {
      transform: scale(1.1, 1.1);
    }
  }
  .banner {
    background-image: url("https://www.blockchainappfactory.com/images/bitcoin-ordinals/banner-bg.webp");
    background-size: cover;
    /* padding-top: 165px; */
    padding-bottom: 50px;
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
    opacity: 0.95;
    background-color: rgb(0 0 0 / 70%);
  }

  @media (min-width: 992px) {
    .banner {
      /* height: auto !important; */
    }
  }
`;
export const SecTwo = styled.div`
  .text-center p {
    @media (max-width: 768px) {
      text-align: start !important;
    }
  }
`;
export const SecThree = styled.div`
  .main-sec3 {
    @media (max-width: 768px) {
      margin: 10px;
    }
  }
  .container {
    background: linear-gradient(140deg, #00d28a, #78b0fa);
    border-radius: 15px;
    padding: 25px 10px 15px 0;
  }
`;
export const SecFour = styled.div`
  .row .para-sec4 {
    @media (max-width: 768px) {
      text-align: start !important;
    }
  }
`;
export const SecFive = styled.div`
  .text-white h2 {
    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;
export const SecSix = styled.div`
  .row p {
    @media (max-width: 768px) {
      text-align: start !important;
    }
  }
`;
export const SecSeven = styled.div`
  .awesome-features-wrapper {
    border: 1px solid #cdcdcd;
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
  /* .awesome-features-wrapper::after {
    background: #47b475;
    height: 50px;
    width: 3px;
    content: "";
    position: absolute;
    left: -2px;
    top: 94px;
  } */
`;
export const SecEight = styled.div``;
export const SecNine = styled.div``;
export const SecTen = styled.div`
  .service-section {
    background: #fff;
    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      background: url(https://www.blockchainappfactory.com/images/lab/dot-shape.webp)
        #47b47599;
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
    background: url("https://www.blockchainappfactory.com/images/lab/shape-7.svg")
      #fff;
    background-size: 180px;
    background-position: top right;
    background-repeat: no-repeat;
  }
  .box4 {
    background: #fff;
    text-align: center;
    background-size: 200%;
    background-position: top right;
    background-repeat: no-repeat;
    text-align: center;
    padding: 40px 10px 10px;
    margin: 0;
    min-height: 270px;
    margin-bottom: 10px;
    position: relative;
    border: 1px solid #91d2ac;
    border-radius: 8px;
    box-shadow: 0 3.4px 2.7px -30px rgb(0 0 0 / 6%),
      0 8.2px 8.9px -30px rgb(0 0 0 / 7%), 0 25px 40px -30px rgb(0 0 0 / 20%);
  }
`;
export const SecEleven = styled.div`
  .list_box h6 {
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
  .row p {
    @media (max-width: 768px) {
      text-align: start !important;
    }
  }
`;
export const SecTwelve = styled.div``;
