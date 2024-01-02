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
    font-size: 40px;
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
    background-image: url("https://www.blockchainappfactory.com/images/staking/banner.webp");
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
    background-image: linear-gradient(to right, #11091766, #20132a);
    opacity: 0.95;
  }
  .banner-overlay {
    background-color: rgb(0 0 0 / 49%);
  }
  img {
    vertical-align: middle;
  }
`;
export const SecTwo = styled.div``;
export const SecThree = styled.div`
  .intro_cnt img {
    border-radius: 10px;
    margin-top: 0px;
  }
`;
export const SecFour = styled.div`
  .flip-box {
    min-height: 360px;
    border-bottom: none;
  }
  .flip-tit {
    font-size: 20px;
    color: #000000;
    line-height: 1.6;
    margin-bottom: 11px;
    font-weight: 700;
    font-family: "Lato", sans-serif;
  }
  .flip-txt {
    font-size: 15px;
    line-height: 1.7;
    margin-bottom: 0;
    color: #555555;
  }
`;
export const SecFive = styled.div`
  .intro_cnt img {
    border-radius: 10px;
    margin-top: 0px;
  }
`;

export const SecSix = styled.div`
  .testimonials-item {
    display: block;
    position: relative;
    margin-bottom: 30px;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
      background: #393737; /* Remove !important */
      opacity: 0;
      transition: all 0.3s ease 0s;
    }

    &:hover::before {
      /* Use :hover::before to select the ::before pseudo-element */
      opacity: 1;
      border-radius: 5px !important;
    }

    &:hover {
      h3 {
        color: #fff !important;
      }
      p {
        color: #fff !important;
      }
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
    transition: all 0.3s ease 0s;
    border-radius: 5px;
    overflow: hidden;
    background: #86938c6b;
    box-shadow: 0 2px 48px 0 rgb(0 0 0 / 6%);
    line-height: 80px;
    text-align: center;
  }
  .testimonials-item .user i {
    color: #fff;
  }
  .testimonials-item .user i img {
    width: 55px;
    margin-top: -10px;
  }
  .testimonials-item .testimonials-content {
    background: #fff;
    overflow: hidden;
    box-shadow: 0 2px 48px 0 rgb(0 0 0 / 6%);
    border-radius: 5px;
    position: relative;
    height: 100%;
    min-height: 220px;
  }
  .testimonials-item .testimonials-content .user-name {
    display: block;
    font-weight: 600;
    font-size: 19px;
    color: #000;
    margin-top: 20px;
    padding-left: 115px;
    letter-spacing: 0.69px;
    margin-bottom: 5px;
    position: relative;
    z-index: 3;
    text-transform: capitalize;
    font-family: "Lato", sans-serif;
  }
  .testimonials-item .txt {
    margin-top: -20px;
  }
  .testimonials-item .testimonials-content .txt p {
    padding-left: 25px;
    padding-right: 25px;
    margin-bottom: 25px;
    margin-top: 60px !important;
    font-weight: 400;
    color: #000000;
    letter-spacing: 0.6px;
    line-height: 26px;
    position: relative;
    z-index: 3;
  }
`;
export const SecSeven = styled.div`
  .single-service {
    background: #fff;
    border-radius: 10px;
    text-align: left !important;
    margin-top: 14px;
    padding: 22px;
    color: #000000;
    text-align: center;
    transition: all 0.4s ease 0s;
  }
  .single-service .icon {
    width: 90px;
    height: 90px;
    margin: 0 auto;
    box-shadow: 0 0 6px 4px #47b475;
    border-radius: 50%;
    line-height: 90px;
    transition: 0.5s;
    margin-left: 1px !important;
    float: left !important;
    text-align: center;
    margin-right: 15px;
  }
  .single-service .icon img {
    width: 60px;
    transition: 0.5s;
  }
  .single-service h4 {
    font-size: 16px;
    font-weight: 700;
    color: #000000;
    letter-spacing: 1px;
    margin-top: 0px;
    display: inline-block;
    font-family: "Lato", sans-serif;
  }
`;
export const SecEight = styled.div``;
export const SecNine = styled.div``;
export const SecTen = styled.div``;
export const SecEleven = styled.div``;
export const SecTwelve = styled.div``;
export const SecThirteen = styled.div``;
