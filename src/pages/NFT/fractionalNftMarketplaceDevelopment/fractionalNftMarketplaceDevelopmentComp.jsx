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
    padding-top: 220px;
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
    background-image: url("https://www.blockchainappfactory.com/images/multi_chain/bg-bnr-nft.webp");
    background-size: cover;
    padding-top: 138px;
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
    opacity: 0.95;
    background-color: rgb(0 0 0 / 0%);
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
    margin-top: 120px;
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
    @media (max-width: 768px) {
      font-size: 25px !important;
      text-align: center;
      margin-bottom: -10px;
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
      margin-top: 50px;
      text-align: center;
    }
  }
`;
export const SecTwo = styled.div``;
export const SecThree = styled.div`
  .intro_cnt img {
    border-radius: 10px;
    margin-top: 0px;
  }
`;
export const SecFour = styled.div``;
export const SecFive = styled.div`
  .intro_cnt img {
    border-radius: 10px;
    margin-top: 0px;
  }
`;
export const SecSix = styled.div`

  .single_feature_seven {
    text-align: center;
    padding: 20px 24px;
    border: 1px solid #e4ecf9;
    position: relative;
    z-index: 1;
    background: #fff;
    min-height: 392px;
    margin-bottom: 30px;
    border-radius: 10px;

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
      p {
        color: #fff !important;
      }
      .single_feature_seven_content h4 {
        color: #fff !important;
      }
    }
    @media (max-width: 767px) {
      min-height: max-content;
    }
  }
  .single_feature_six_seven_icon .icon img {
    width: 70px;
    height: auto;
    transition: 0.5s;
  }
  .single_feature_seven_content h4 {
    transition: 0.5s;
    padding-top: 15px;
    padding-bottom: 15px;
    font-weight: 700 !important;
    color: #161515 !important;
    letter-spacing: 0;
    line-height: 1.3;
    font-family: "Lato", sans-serif;
  }
  p {
    color: #161515;
    text-align: justify !important;
  }
`;
export const SecSeven = styled.div``;
export const SecEight = styled.div`

  .strategies-items {
    background: linear-gradient(90deg, #fff, #f1f1f1);
    padding: 15px;
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 15px;
    border-radius: 15px;
    @media (max-width: 767px) {
      display: block;
      text-align: justify;
    }
  }
  .strategies-items1 {
    background: linear-gradient(90deg, #fff, #f1f1f1);
    padding: 15px;
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 15px;
    border-radius: 15px;
    @media (max-width: 767px) {
      display: block;
      text-align: justify;
    }
  }
  .icons img {
    border-radius: 15px;
  }

  .popular-text {
    padding: 15px;
  }
  .sec_tit,
  .sec_tit h2 {
    font-size: 25px !important;
    font-weight: bold;
    color: #333;
    line-height: 1.4;
    text-transform: capitalize;
    font-family: "Lato", sans-serif;
  }
  .popular-text h3 {
    padding-bottom: 10px;
  }

  /*  */
`;
export const SecNine = styled.div`
.mx-5 {
    margin-right: 3rem!important;
    margin-left: 1rem!important;
}
  h4 strong {
    font-family: "Lato", sans-serif;
  }
  .technicalbox {
    background: #fff;
    border-radius: 3px;
    /* box-shadow: 0 5px 50px 0 rgb(0 0 0 / 4%); */
    margin-bottom: 30px;
    padding: 30px 30px;
    position: relative;
    border: 2px solid #4caf5073;
    margin-bottom: 10px !important;
    /* min-height: 380px; */

    &:hover {
      background: #47b475;
      h4 strong {
        color: #fff;
      }
      .font-wei {
        color: #fff !important;
      }
      p {
        color: #fff;
      }
    }
  }

  .technicalbox .technical-icon {
    background: #f2f2f2;
    width: 90px;
    height: 90px;
    line-height: 90px;
    border-radius: 50%;
    /* background: #47b475; */
    font-size: 36px;
    color: #fff;
    margin: 0 auto 30px;
    position: relative;
    transition: all 500ms ease 0;
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
      content: "";
      width: 111px;
      height: 111px;
      border-radius: 50%;
      border: 4px solid #47b475;
      position: absolute;
      top: -10px;
      left: -10px;
      opacity: 0;
      transform: scale(0.8, 0.8);
    }
  }
  .font-wei {
    font-weight: 700 !important;
    color: #161515 !important;
    font-family: "Lato", sans-serif;
  }
  .technicalbox p {
    text-align: justify;
  }
`;
export const SecTen = styled.div``;
export const SecEleven = styled.div``;
export const SecTwelve = styled.div``;
export const SecThirteen = styled.div``;
