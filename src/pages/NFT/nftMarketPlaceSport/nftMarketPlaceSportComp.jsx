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
  .banner {
    background-image: url("https://www.blockchainappfactory.com/images/spo/ground.webp");
    background-size: cover;
    padding-top: 138px;
    padding-bottom: 80px;
    height: 100vh;
  }
  .banner-overlay {
    background-color: rgb(0 0 0 / 63%);
  }
  .contentall {
    padding-top: 220px;
    @media (max-width: 1001px) {
      padding-top: 320px;
      text-align: center;
    }
  }
  .img-container img {
    padding-top: 140px;
    @media (max-width: 768px) {
      padding-top: 0;
    }
  }
  .cta_mine {
    @media (max-width: 1001px) {
      text-align: center !important;
      .kmdJKR .img-container img {
        padding-top: 0 !important;
      }
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
    margin-bottom: 20px;
    @media (max-width: 768px) {
      margin-bottom: 40px;
    }
  }
`;
export const SecFour = styled.div`
  .strategies-items,
  .strategies-items1 {
    background: linear-gradient(90deg, #fff, #f1f1f1);
    padding: 15px;
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 15px;
    border-radius: 15px;
    @media (max-width: 768px) {
      display: block !important;
    }
  }
  .strategies-items .icons,
  .strategies-items1 .icons {
    border: 1px solid #eee;
  }
  .icons img {
    border-radius: 15px;
  }
  .strategies-items .icons,
  .strategies-items1 .icons {
    border: 1px solid #eee;
  }

  .strategies-items p,
  .strategies-items1 p {
    text-align: justify;
    padding: 15px;
  }
  .strategies-items p strong,
  .strategies-items1 p strong {
    margin-top: 5px;
    margin-bottom: 10px;
    padding-bottom: 10px;
    font-weight: 700;
    font-size: 23px;
    font-family: "Open Sans", sans-serif;
    border-bottom: 1px solid #eee;
    background: linear-gradient(#47b475, #47b475);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .strategies-items1 .icons {
    order: 2;
    /* margin-right: 15px; */
  }
  .strategies-items1 {
    background: linear-gradient(90deg, #f1f1f1, #fff);
  }
`;
export const SecFive = styled.div`
  .uniq_features ul li {
    margin-bottom: 15px;
    position: relative;
    margin: 10px;
    /* padding-left: 29px; */
  }
  .fa-circle-arrow-right {
    /* padding-right: 10px; */
    font-size: 18px;
    position: relative;
    top: 5px;
    color: #03b787;
    text-indent: -30px;
  }
`;
export const SecSix = styled.div`
  .container .para {
    @media (max-width: 768px) {
      text-align: start !important;
    }
  }
`;
export const SecSeven = styled.div`
  .nft_sr {
    background: #ffffff;
    padding: 15% 2% 5%;
    border-radius: 10px;
    box-shadow: 10px 8px 20px 2px #0000002e;
    min-height: 200px;
    margin-bottom: 37px;
    &:hover {
      background: #47b475;
      .co h3 {
        color: #fff;
      }
    }
  }
  .nft_sr img {
    max-width: 65px;
  }
  .co h3 {
    margin-top: 17px;
    text-align: center;
    font-size: 20px;
    color: #47b475;
    font-weight: 600;
    text-transform: capitalize;
  }
`;
export const SecEight = styled.div``;
export const SecNine = styled.div`
  .flip-box {
    border-bottom: none;
    min-height: 350px;

    &:hover {
      background: #47b475;
      .flip-tit {
        color: #fff;
      }
      .flip-txt {
        color: #fff;
      }
    }
  }
`;
export const SecTen = styled.div``;
export const SecEleven = styled.div`
  .box h3 {
    color: #47b475;
    margin-bottom: 8px;
    font-weight: 700;
  }
`;
export const SecTwelve = styled.div`
  .partner-sec {
    background: #fff;
    padding: 40px 15px 10px;
    max-width: 450px;
    margin: 0 auto 30px;
    min-height: 420px;
    border-radius: 4px;

    &:hover {
      background: #47b475;
      .partner-sec,
      p,
      .p-2 {
        color: #fff;
      }
    }
    @media (max-width: 768px) {
      min-height: auto;
    }
  }
`;
export const SecThirteen = styled.div``;
