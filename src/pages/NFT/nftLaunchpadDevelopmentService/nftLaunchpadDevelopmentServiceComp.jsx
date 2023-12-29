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
    background-image: url("https://www.blockchainappfactory.com/images/nft_launch/nft-launchpad-development-service.webp");
    background-size: cover;
    padding-top: 100px;
    padding-bottom: 66px;
    height: auto;
    background-position: center;
    height: 100vh;
    background-repeat: no-repeat;
  }
  .banner-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to right, #060606d4, #00000000);
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
    font-size: 39px !important;
    color: #fff !important;
    line-height: 1.3;
    font-weight: 700;
    text-align: start;
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
    padding-top: 20px;
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
  .box_list {
    &:hover {
      h3 {
        transform: scale(0.9);
        background: none;
        color: #000000;
      }
    }
  }
  .list_box h3 {
    background: white;
    font-family: "Lato", sans-serif;
    padding: 10px 5px;
    text-align: center;
    justify-content: center;
    font-size: 20px;
    align-items: center;
    margin-bottom: 28px;
    border-radius: 29px;
    box-shadow: 1px 4px 10px #00000047;
    color: #000000;
  }
`;
export const SecFour = styled.div`
  .technologies1 {
    background: #140050;
    padding: 50px 0;
  }
  .technologies1 ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .technologies1 ul li {
    width: 26%;
    text-align: center;
    font-size: 16px;
    padding: 15px;
    margin: -1px;
    border: 1px solid #fff;
  }
`;
export const SecFive = styled.div`
  .intro_cnt img {
    border-radius: 10px;
    margin-top: 0px;
  }
`;
export const SecSix = styled.div`
  .features-area.style-two .image-box {
    position: relative;
    -webkit-box-shadow: 0 3px 20px 0px #0000001f;
    box-shadow: 0 3px 20px 0px #0000001f;
    border-radius: 1.5rem;
    -webkit-transition: -webkit-transform 0.3s ease 0s;
    transition: -webkit-transform 0.3s ease 0s;
    transition: transform 0.3s ease 0s;
    transition: transform 0.3s ease 0s, -webkit-transform 0.3s ease 0s;
    margin-bottom: 30px;
    min-height: 410px;
    background: #ffffff;

    &:hover {
      -webkit-transform: translateY(-10px);
      transform: translateY(-10px);
      -webkit-box-shadow: 0 1rem 3rem rgb(31 45 61 / 13%) !important;
      box-shadow: 0 1rem 3rem rgb(31 45 61 / 13%) !important;
    }
    @media (max-width: 767px) {
      min-height: max-content;
    }
  }
  .avatar-sm {
    height: 3rem;
    width: 3rem;
  }
  .icon-text h3 {
    /* padding: 10px; */
    font-family: "Lato", sans-serif;
    color: #000000;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 1.3;
  }
`;
export const SecSeven = styled.div`
  .pad.red {
    background: #47b475;
  }
  .pad {
    padding: 5%;
    min-height: 400px;
    background: #3d3d3d;
    color: #fff !important;
    @media (max-width: 767px) {
      min-height: 0;
    }
  }

  .pad .feature-tit {
    padding: 20px;
  }
  .section-title h3 {
    color: #fff !important;
    font-weight: 700;
    font-family: "Lato", sans-serif;
    font-size: 25px !;
    @media (max-width: 767px) {
      font-size: 18px !important;
    }
  }
  .pad p {
    padding-left: 15px;
    margin-bottom: 4px;
    padding-bottom: 20px;
    color: #fff;
  }
  .text-left {
    text-align: left;
  }
`;
export const SecEight = styled.div`
  .testimonials-item {
    display: block;
    position: relative;
    margin-bottom: 30px;
    &:hover {
      .user {
        top: -20px;
      }
      h3 {
        color: #000 !important;
      }
    }
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
    background: #60c9a6;
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
    background: #ffffff;
    overflow: hidden;
    box-shadow: 0 2px 48px 0 rgb(0 0 0 / 6%);
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    position: relative;
    height: 100%;
    min-height: auto;
    &:hover::before {
      opacity: 1;
    }

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;

      background: #f2f2f2 !important;
      opacity: 0;
      -webkit-transition: all 0.3s ease 0s;
      -moz-transition: all 0.3s ease 0s;
      -o-transition: all 0.3s ease 0s;
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
    letter-spacing: 0.69px !important;
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
    min-height: auto;
    font-size: 15px;
    color: #000000;
    letter-spacing: 0.6px;
    line-height: 26px;
    position: relative;
    z-index: 3;
  }
`;
export const SecNine = styled.div``;
export const SecTen = styled.div`
  .list_box {
    &:hover {
      h3 {
        background: #47b475;
        color: #fff;
      }
    }
  }
  .list_box h3 {
    background: white;
    padding: 4% 4%;
    text-align: center;
    justify-content: center;
    font-size: 20px;
    align-items: center;
    margin-bottom: 28px;
    border-radius: 29px;
    box-shadow: 1px 4px 10px #00000047;
    color: #000000;
    letter-spacing: 0;
    line-height: 1.3;
    font-family: "Lato", sans-serif;
  }
`;
export const SecEleven = styled.div``;
export const SecTwelve = styled.div``;
export const SecThirteen = styled.div``;
