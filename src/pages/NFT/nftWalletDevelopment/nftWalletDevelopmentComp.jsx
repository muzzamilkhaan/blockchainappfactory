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
    background-image: url("https://www.blockchainappfactory.com/images/nft_wallet/banner.webp");
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
    opacity: 0.95;
    background-color: rgb(0 0 0 / 67%);
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
    text-align: center;
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
export const SecTwo = styled.div`
  .intro_cnt img {
    border-radius: 10px;
    margin-top: 0;
  }
`;
export const SecThree = styled.div``;
export const SecFour = styled.div``;
export const SecFive = styled.div`
  .service-box {
    background: #f9f9ff;
    text-align: center;
    padding: 40px 15px;
    margin-top: 30px;
    transition: all 0.3s;
    min-height: 530px;
    @media (max-width: 767px) {
      min-height: max-content;
    }
  }
  .service-box h3 {
    margin-bottom: 20px;
    line-height: 1.3 !important;
    font-family: "Lato", sans-serif;
  }
  .service-box img {
    width: 70px;
    height: auto;
    margin-bottom: 14px;
  }
  .service-box p {
    padding-bottom: 20px;
    color: #161515;
  }
`;
export const SecSix = styled.div``;
export const SecSeven = styled.div`
  .service-three-area .single-service {
    padding: 10px;
    border: 1px solid #dfdfdf;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    min-height: 340px;
    margin-bottom: 20px;
    padding-top: 20px !important;
    &:hover {
      box-shadow: 0 0 20px rgb(193 193 193 / 60%);
      .service-icon {
        transform: scale(1.1);
      }
    }
    @media (max-width: 767px) {
      min-height: max-content;
    }
  }
  .service-three-area .single-service .service-icon span {
    width: 65px;
    height: 65px;
    line-height: 65px;
    display: inline-block;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    -ms-border-radius: 8px;
    -o-border-radius: 8px;
    border-radius: 8px;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    margin-bottom: 28px;
  }
  .service-three-area .single-service .service-title h3 {
    font-size: 20px;
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 20px;
    font-family: "Lato", sans-serif;
  }
`;
export const SecEight = styled.div``;
export const SecNine = styled.div``;
export const SecTen = styled.div``;
export const SecEleven = styled.div``;
export const SecTwelve = styled.div``;
export const SecThirteen = styled.div``;
