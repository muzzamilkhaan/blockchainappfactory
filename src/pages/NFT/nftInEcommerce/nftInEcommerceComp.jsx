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
  .contentall a,
  a.home-talk-experts {
    padding: 10px 20px !important;
  }
  .banner {
    background-image: url("https://www.blockchainappfactory.com/images/eco/banner.webp");
    background-size: cover;
    padding-top: 138px;
    padding-bottom: 66px;
    height: auto;
    background-position: center;
    height: 100vh;
  }
  .banner-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(to right, #11091766, #20132a);
    opacity: 0.95;
    background-color: rgb(0 0 0 / 67%);
  }
  @media (max-width: 991px) {
    .cta_mine {
      text-align: center;
    }
  }
  .contentall h1 {
    font-family: "Lato", sans-serif;
    font-size: 40px !important;
    @media (max-width: 768px) {
      font-size: 25px !important;
      text-align: center;
    }
  }

  .container .para {
    @media (max-width: 768px) {
      text-align: center !important;
    }
  }
`;
export const SecTwo = styled.div`
  .container .para {
    @media (max-width: 768px) {
      text-align: start !important;
    }
  }
`;
export const SecThree = styled.div`
  .intro_cnt img {
    border-radius: 10px;
  }
  @media (max-width: 767px) {
    .mobile {
      margin: 0 auto;
    }
  }
`;
export const SecFour = styled.div`
  .awesome-features-wrapper1 {
    border: 1px solid #e9e9e9;
    padding-top: 60px;
    padding-bottom: 20px;
    min-height: 370px;
    transition: 0.3s;
    position: relative;
    margin-bottom: 30px;
    border-radius: 10px;
    &:hover {
      border: 1px solid transparent;
      box-shadow: 0 10px 60px 0 rgb(233 233 233 / 78%);
    }
    ::before {
      background: #f89f22;
      height: 20px;
      width: 3px;
      content: "";
      position: absolute;
      left: -2px;
      top: 65px;
    }
    ::after {
      background: #f89f22;
      height: 50px;
      width: 3px;
      content: "";
      position: absolute;
      left: -2px;
      top: 94px;
    }
    @media (max-width: 767px) {
      min-height: max-content;
    }
  }
  .awesome-features-icon-img {
    margin-bottom: 22px;
  }

  .awesome-features-text h3 {
    font-size: 22px;
    font-weight: 500;
    line-height: 1.3;
    margin-bottom: 18px;
    font-family: "Lato", sans-serif;
  }
`;
export const SecFive = styled.div`
  .testimonials-item .testimonials-content {
    background: #fff;
    overflow: hidden;
    box-shadow: 0 2px 48px 0 rgb(0 0 0 / 6%);
    /* -webkit-border-radius: 5px; */
    /* -moz-border-radius: 5px; */
    border-radius: 5px;
    position: relative;
    height: 100%;
    min-height: 264px;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
      background: #47b47557 !important;
      opacity: 0;
      /* -webkit-transition: all .3s ease 0s;
    -moz-transition: all .3s ease 0s;
    -o-transition: all .3s ease 0s; */
      transition: all 0.3s ease 0s;
    }
    &:hover::before {
      opacity: 1;
      .testimonials-item .user {
        position: relative;
        top: -20px !important;
      }
    }
  }
  .testimonials-item {
    display: block;
    position: relative;
    margin-bottom: 30px;
    &:hover {
      .user {
        top: -20px;
      }
    }
  }
  .testimonials-item .user {
    width: 70px;
    height: 70px;
    /* position: relative; */
    position: absolute;
    top: -10px;
    left: 25px;
    z-index: 3;
    /* -webkit-transition: all 0.3s ease 0s; */
    /* -moz-transition: all 0.3s ease 0s; */
    /* -o-transition: all 0.3s ease 0s; */
    transition: all 0.3s ease 0s;
    /* -webkit-border-radius: 5px; */
    /* -moz-border-radius: 5px; */
    border-radius: 5px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 2px 48px 0 rgb(0 0 0 / 12%);
    line-height: 80px;
    text-align: center;
  }
  .testimonials-item .user i img {
    width: 55px;
    margin-top: -10px;
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
    font-family: "Lato", sans-serif;
  }
  .testimonials-item .testimonials-content .txt p {
    padding-left: 25px;
    padding-right: 25px;
    margin-bottom: 25px;
    margin-top: 35px !important;
    font-weight: 400;
    min-height: 250px;
    font-size: 15px;
    color: #000;
    letter-spacing: 0.6px;
    line-height: 26px;
    position: relative;
    z-index: 3;
  }

`;
export const SecSix = styled.div`
  .pad.red {
    background: #47b475;
  }
  .pad {
    min-height: 370px;
    color: #fff !important;
  }
  .pad {
    min-height: 370px;
    background: #3d3d3d;
    color: #fff !important;
  }
  .common_h3 {
    font-family: "Lato", sans-serif;
    font-size: 25px !important;
    @media (max-width: 767px) {
      font-size: 18px !important;
      /* padding: ; */
      text-align: start !important;
    }
  }
  @media (max-width: 767px) {
    .mobile {
      margin-top: 20px;
    }
  }
`;
export const SecSeven = styled.div``;
export const SecEight = styled.div``;
export const SecNine = styled.div``;
export const SecTen = styled.div``;
export const SecEleven = styled.div``;
export const SecTwelve = styled.div``;
export const SecThirteen = styled.div``;
