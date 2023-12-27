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
  .contentall .para {
    text-align: start;
  }
  .banner {
    background-image: url("https://www.blockchainappfactory.com/images/cele/bnr_img.webp");
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
    background-image: linear-gradient(to right, #12121230, #0808080a);
    opacity: 0.95;
    background-color: rgb(0 0 0 / 75%);
  }
  .cta_mine {
    text-align: center;
    margin-top: 40px !important;
    @media (max-width: 991px) {
      text-align: center;
      margin-top: 30px;
    }
  }
  .img-container img {
    margin-top: 150px;
  }

  .contentall h1 {
    font-family: "Lato", sans-serif;
    font-size: 40px !important;
    color: #fff !important;
    line-height: 1.3;
    font-weight: 700;
    text-align: center;
    @media (max-width: 768px) {
      font-size: 25px !important;
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
export const SecThree = styled.div``;
export const SecFour = styled.div``;

export const SecFive = styled.div`
  .bg-dark-half-md {
    background: #368b5a;
    width: 100%;
    display: inline-block;
    padding: 100px 0;
  }
  .section-title .hr {
    background: #fff;
    width: 50px;
    margin: 10px auto 15px;
    height: 1.8px;
  }
  .teck .category-grid-style-01 .category-item {
    border: none;
    padding: 10px !important
    ;
    text-align: center;
    width: 25%;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    position: relative;
    cursor: pointer;
    width: 20%;

    &:hover::before {
      box-shadow: 5px 5px 24px 0 rgb(2 45 98 / 10%);
      opacity: 1;
      /* -webkit-transform: scale(1); */
      transform: scale(1);
      transition: all 0.3s ease-in-out;
    }
    &::before {
      content: "";
      background: #fff;
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
  }
  .teck .category-grid-style-01 .category-item .category-icon {
    color: #333;
    font-size: 44px;
    line-height: 1;
    /* margin-bottom: 10px; */
    position: relative;
    z-index: 2;
  }
  


`;
export const SecSix = styled.div``;
export const SecSeven = styled.div``;
export const SecEight = styled.div``;
export const SecNine = styled.div``;
export const SecTen = styled.div``;
export const SecEleven = styled.div``;
export const SecTwelve = styled.div``;
export const SecThirteen = styled.div``;
