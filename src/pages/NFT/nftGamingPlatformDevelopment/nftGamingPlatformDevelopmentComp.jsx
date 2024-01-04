import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #1b0e22;
  background-image: url("https://www.blockchainappfactory.com/images/nftg/bg-1.webp");
  background-repeat: repeat;
  background-position: 0 0;
  color: #ddd;
`;
export const SecOne = styled.div`
  .container {
    padding-top: 120px;
    /* height: 780px; */
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 20px;
    margin-top: -180px;
    padding: 30px 0px;
  }
  .content h1 {
    color: #fff;
    font-family: "Lato", sans-serif;
    line-height: 1.3;
    font-weight: 700;
    font-size: 40px;
    text-transform: capitalize;
    font-size: 40px;
  }
  .content p {
    color: #fff;
    font-size: 19px;
    /* font-family: "openas"; */
  }
  .btn-button {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 70%;
    margin-top: 20px;
    /* gap: 10px; */
  }
  .neonShadow {
    border: none;
    border-radius: 50px;
    transition: 0.3s;
    background: #f90cff;
    background-image: linear-gradient(
      to right bottom,
      #f90cff,
      #e027ff,
      #c534ff,
      #a93eff,
      #8a44ff,
      #6560ff,
      #3c73ff,
      #0081ff,
      #009cff,
      #00b3ff,
      #00c6f5,
      #0cd7e8
    );
    /* clip-path: polygon(0% 0%,90% 0,100% 30%,100% 100%,0 100%); */
    animation: glow 1s infinite;
    transition: 0.5s;
    padding: 12px 57px;
    color: #fff;
    font-weight: 700;
    margin: 0 auto;
    font-size: 20px;
  }
`;
export const SecTwo = styled.div`
  .uniq_features ul {
    padding-left: 0px;
  }
  .uniq_features ul li {
    margin-bottom: 15px;
    position: relative;
    padding-left: 29px;
    text-indent: -29px;
    color: #fff;
  }
`;
export const SecThree = styled.div`
  .ces-point ul li {
    margin-right: 5px;
    color: #ffffff;
    letter-spacing: 0.3px;
    font-weight: 500;
    /* font-size: 18px; */
    text-transform: none;
    cursor: pointer;
    background: #673ab7bd;
    box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 8%);
    border-radius: 7px;
    padding: 12px 10px;
    border: 1px solid transparent;
    transition: 0.5s all ease-in-out;
    text-align: center;
    width: auto;
    margin-bottom: 10px;
    width: 32%;
    min-height: 150px;
    float: left;
    &:hover {
      background: #700707ad;
      transition: 0.5s all ease-in-out;
    }
  }
  .ces-point ul li img {
    height: 50px;
  }
`;
export const SecFour = styled.div`
  .shard_master-node .container {
    background: linear-gradient(131deg, #410245, #385bc3);
    border-radius: 10px;
    /* padding: 60px 0; */
  }
  .shard_master-node .container img {
    margin: -80px 0;
  }
  .neonShadow {
    border: none;
    border-radius: 50px;
    transition: 0.3s;
    background: #f90cff;
    background-image: linear-gradient(
      to right bottom,
      #f90cff,
      #e027ff,
      #c534ff,
      #a93eff,
      #8a44ff,
      #6560ff,
      #3c73ff,
      #0081ff,
      #009cff,
      #00b3ff,
      #00c6f5,
      #0cd7e8
    );
    /* clip-path: polygon(0% 0%,90% 0,100% 30%,100% 100%,0 100%); */
    animation: glow 1s infinite;
    transition: 0.5s;
    padding: 12px 57px;
    color: #fff;
    font-weight: 700;
    margin: 0 auto;
    font-size: 20px;
  }
`;
export const SecFive = styled.div`
  .section-title .hr {
    background: #aca3a3;
    width: 50px;
    margin: 10px auto 15px;
    height: 2px;
  }
  .advantages-img img {
    /* height: 450px; */
    /* margin-top: 68px; */
    border-radius: 50%;
    border: 1px solid #ffffff05;
  }
  .advantages-img img {
    /* height: 450px; */
    /* margin-top: 68px; */
    border-radius: 50%;
    border: 1px solid #ffffff05;
  }
  .advantages ul {
    display: flex;
    flex-wrap: wrap;
    margin: 50px 0px 0px 0px;
    padding: 0px;
  }
  .advantages ul li {
    width: 100%;
    color: #000;
    margin: 0 5px;
    position: relative;
  }
  .advantages ul .right .icons {
    float: right;
    margin-right: 0px;
    margin-left: 30px;
    background: #f90cff;
    background-image: linear-gradient(
      to right bottom,
      #f90cff,
      #e027ff,
      #c534ff,
      #a93eff,
      #8a44ff,
      #6560ff,
      #3c73ff,
      #0081ff,
      #009cff,
      #00b3ff,
      #00c6f5,
      #0cd7e8
    );
    width: 60px;
    height: 60px;
    padding: 10px;
    border-radius: 10px;
    position: relative;
    z-index: 2;
    &::before {
      content: "";
      position: absolute;
      border-bottom: 1px solid #d02bfb;
      width: 200px;
      margin-top: 20px;
      z-index: -3;
      margin-left: 0px;
    }
    &::after {
      content: "";
      position: absolute;
      width: 85px;
      height: 85px;
      /* background: #f90cff; */
      background-image: linear-gradient(
        to right bottom,
        #f90cff82,
        #e027ff82,
        #c534ff82,
        #a93eff82,
        #8a44ff82,
        #6560ff82,
        #3c73ff82,
        #0081ff82,
        #009cff82,
        #00b3ff82,
        #00c6f582,
        #0cd7e882
      );
      z-index: -1;
      border-radius: 10px;
      top: -12px;
      left: -12px;
    }
  }

  img {
    max-width: 100%;
  }
  .advantages ul .right p {
    text-align: right;
  }

  .advantages ul li p {
    margin: 30px 0;
    min-height: 70px;
    color: #fff;
  }

  /*  */
  .advantages ul li .icons {
    background: #f90cff;
    background-image: linear-gradient(
      to right bottom,
      #f90cff,
      #e027ff,
      #c534ff,
      #a93eff,
      #8a44ff,
      #6560ff,
      #3c73ff,
      #0081ff,
      #009cff,
      #00b3ff,
      #00c6f5,
      #0cd7e8
    );
    width: 60px;
    height: 60px;
    padding: 10px;
    border-radius: 10px;
    position: relative;
    z-index: 2;
    float: left;
    margin-right: 30px;

    &::before {
      content: "";
      position: absolute;
      border-bottom: 1px solid #d02bfb;
      width: 200px;
      margin-top: 20px;
      z-index: -3;
      margin-left: -200px;
    }
    &::after {
      content: "";
      position: absolute;
      width: 85px;
      height: 85px;
      /* background: #f90cff; */
      background-image: linear-gradient(
        to right bottom,
        #f90cff82,
        #e027ff82,
        #c534ff82,
        #a93eff82,
        #8a44ff82,
        #6560ff82,
        #3c73ff82,
        #0081ff82,
        #009cff82,
        #00b3ff82,
        #00c6f582,
        #0cd7e882
      );
      z-index: -1;
      border-radius: 10px;
      top: -12px;
      left: -12px;
    }
  }
`;
export const SecSix = styled.div`
  .category-grid-style-02 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    /* background: #fff; */
    background: linear-gradient(
      90deg,
      rgba(105, 85, 180, 0.1) 0%,
      rgba(105, 85, 180, 0.3) 50%,
      rgba(105, 85, 180, 0.1) 100%
    );
    -webkit-box-shadow: 5px 5px 24px 0 rgb(2 45 98 / 10%);
    box-shadow: 5px 5px 24px 0 rgb(2 45 98 / 10%);
    border-radius: 5px;
  }
  .teck .category-grid-style-02 .category-item {
    padding: 30px;
    text-align: center;
    width: 25%;
    position: relative;
    cursor: pointer;
    &::before {
      content: "";
      /* background: #fff; */
      background: linear-gradient(
        90deg,
        rgba(105, 85, 180, 0.1) 0%,
        rgba(105, 85, 180, 0.3) 50%,
        rgba(105, 85, 180, 0.1) 100%
      );
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
    &:hover::before {
      -webkit-box-shadow: 5px 5px 24px 0 rgb(2 45 98 / 10%);
      box-shadow: 5px 5px 24px 0 rgb(2 45 98 / 10%);
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
      transition: all 0.3s ease-in-out;
    }
    &:hover {
      p {
        color: #fff !important;
      }
    }
  }
  h4 {
    margin: 0;
    padding: 0;
    color: #2b2c2d;
    font-weight: 500;
    letter-spacing: 1.5px !important;
    font-family: "Lato", sans-serif;
  }
  .category-item.aos-item .text-center {
    color: #fff;
  }
`;
export const SecSeven = styled.div`
  .shard_master-node .container {
    background: linear-gradient(131deg, #410245, #385bc3);
    border-radius: 10px;
  }
  .shard_master-node .container img {
    margin: -80px 0;
  }
  .neonShadow {
    border: none;
    border-radius: 50px;
    transition: 0.3s;
    background: #f90cff;
    background-image: linear-gradient(
      to right bottom,
      #f90cff,
      #e027ff,
      #c534ff,
      #a93eff,
      #8a44ff,
      #6560ff,
      #3c73ff,
      #0081ff,
      #009cff,
      #00b3ff,
      #00c6f5,
      #0cd7e8
    );
    /* clip-path: polygon(0% 0%,90% 0,100% 30%,100% 100%,0 100%); */
    animation: glow 1s infinite;
    transition: 0.5s;
    padding: 12px 57px;
    color: #fff;
    font-weight: 700;
    margin: 0 auto;
    font-size: 20px;
  }
`;
export const SecEight = styled.div`
  .expoBox {
    padding-left: 30px;
    position: relative;
    margin-bottom: 20px;
    transition: all 0.4s ease-in-out 0s;
    &::before {
      content: "";
      width: 60px;
      height: 60px;
      background: #040045;
      position: absolute;
      top: 20px;
      left: 5px;
      z-index: 1;
    }
  }
  .expoBox .service-icon {
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: #f90cff;
    background-image: linear-gradient(
      to right bottom,
      #f90cff,
      #e027ff,
      #c534ff,
      #a93eff,
      #8a44ff,
      #6560ff,
      #3c73ff,
      #0081ff,
      #009cff,
      #00b3ff,
      #00c6f5,
      #0cd7e8
    );
    font-size: 30px;
    color: #fff;
    position: absolute;
    top: 15px;
    left: 0;
    z-index: 1;
  }
  .expoBox .service-icon img {
    width: 32px;
    height: 32px;
    filter: brightness(0) invert(1);
  }
  .expoBox .service-content {
    padding: 30px;
    border-width: 1px;
    border-style: solid;
    /* border-color: #d5d5d5 #d5d5d5 #3f4147; */
    position: relative;
    transition: all 0.4s ease-in-out 0s;
    height: 100%;
  }
  .expoBox .title {
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    padding-left: 30px;
    margin-bottom: 35px;
    text-transform: capitalize;
    transition: all 0.4s ease-in-out 0s;
    font-family: "Lato", sans-serif;
  }
  .expoBox .description {
    font-size: 14px;
    color: #fff;
    margin: 0;
  }
`;
export const SecNine = styled.div`
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
  img {
    max-width: 100%;
  }
  .neonShadow {
    border: none;
    border-radius: 50px;
    transition: 0.3s;
    background: #f90cff;
    background-image: linear-gradient(
      to right bottom,
      #f90cff,
      #e027ff,
      #c534ff,
      #a93eff,
      #8a44ff,
      #6560ff,
      #3c73ff,
      #0081ff,
      #009cff,
      #00b3ff,
      #00c6f5,
      #0cd7e8
    );
    /* clip-path: polygon(0% 0%,90% 0,100% 30%,100% 100%,0 100%); */
    animation: glow 1s infinite;
    transition: 0.5s;
    padding: 12px 57px;
    color: #fff;
    font-weight: 700;
    margin: 0 auto;
    font-size: 20px;
  }
`;
export const SecTen = styled.div`
  .partner-sec {
    background: #f90cff;
    background: linear-gradient(
      to right bottom,
      #f90cff,
      #e027ff50,
      #c534ff50,
      #a93eff50,
      #8a44ff50,
      #6560ff50,
      #3c73ff50,
      #0081ff50,
      #009cff50,
      #00b3ff50,
      #00c6f550,
      #0cd7e850
    );
    padding: 40px 15px 10px;
    max-width: 450px;
    margin: 0 auto 30px;
    min-height: 359px;
    border-radius: 4px;
    color: #fff;
  }
  .partner-sec img {
    margin-bottom: 10px;
  }
  .partner-sec h4 {
    line-height: 1.3;
    font-size: 20px;
    margin-bottom: 10px;
    color: #fff;
    letter-spacing: 0px;
    font-weight: 600;
    text-transform: capitalize;
    margin-top: 6px;
    font-family: "Lato", sans-serif;
  }
  .partner-sec p {
    color: #fff;
  }
`;
export const SecEleven = styled.div`
  .neonShadow {
    border: none;
    border-radius: 50px;
    transition: 0.3s;
    background: #f90cff;
    background-image: linear-gradient(
      to right bottom,
      #f90cff,
      #e027ff,
      #c534ff,
      #a93eff,
      #8a44ff,
      #6560ff,
      #3c73ff,
      #0081ff,
      #009cff,
      #00b3ff,
      #00c6f5,
      #0cd7e8
    );
    /* clip-path: polygon(0% 0%,90% 0,100% 30%,100% 100%,0 100%); */
    animation: glow 1s infinite;
    transition: 0.5s;
    padding: 12px 57px;
    color: #fff;
    font-weight: 700;
    margin: 0 auto;
    font-size: 20px;
  }
  .main-gameflow .gameflow-icon {
    width: 75px;
    height: 75px;
    line-height: 65px;
    border-radius: 50%;
    background: #f90cff;
    background-image: linear-gradient(
      to right bottom,
      #f90cff,
      #e027ff,
      #c534ff,
      #a93eff,
      #8a44ff,
      #6560ff,
      #3c73ff,
      #0081ff,
      #009cff,
      #00b3ff,
      #00c6f5,
      #0cd7e8
    );
    box-sizing: border-box;
    /* border: 2px solid transparent; */
    box-shadow: 0 0 0 2px transparent;
    text-align: center;
    margin: auto 0;
    font-size: 25px;
    color: #fff;
    position: absolute;
    top: 0;
    left: -34px;
    bottom: 0;
    z-index: 2;
  }
  .main-gameflow {
    max-width: 600px;
    margin: 0 auto;
  }
  .main-gameflow .gameflow:first-child {
    padding-top: 0;
  }
  .main-gameflow .gameflow {
    padding: 30px 60px;
    position: relative;
    &::before {
      content: "";
      display: block;
      width: 100%;
      clear: both;
    }
  }
  .main-gameflow .gameflow:first-child .gameflow-icon {
    box-sizing: content-box;
    margin: 0;
    top: 0;
    left: -36px;
    border: 2px solid #fff;
    box-shadow: 0 0 0 2px #837cb6;
  }
  .main-gameflow .gameflow-icon {
    width: 75px;
    height: 75px;
    line-height: 65px;
    border-radius: 50%;
    background: #f90cff;
    background-image: linear-gradient(
      to right bottom,
      #f90cff,
      #e027ff,
      #c534ff,
      #a93eff,
      #8a44ff,
      #6560ff,
      #3c73ff,
      #0081ff,
      #009cff,
      #00b3ff,
      #00c6f5,
      #0cd7e8
    );
    box-sizing: border-box;
    /* border: 2px solid transparent; */
    box-shadow: 0 0 0 2px transparent;
    text-align: center;
    margin: auto 0;
    font-size: 25px;
    color: #fff;
    position: absolute;
    top: 0;
    left: -34px;
    bottom: 0;
    z-index: 2;
  }
  .intro_cnt img {
    border-radius: 10px;
  }
  .main-gameflow .gameflow-content {
    width: 50%;
  }
  .main-gameflow .title {
    font-size: 18px;
    color: #fff;
    margin-top: 0;
    text-transform: capitalize;
    font-weight: 600;
    font-family: "Lato", sans-serif;
  }
  .main-gameflow .description {
    font-size: 15px;
    color: #fff;
    line-height: 25px;
    margin: 0;
  }
  .main-gameflow .gameflow:first-child .border1 {
    border-top: none;
  }
  .main-gameflow .border1 {
    width: 50%;
    /* border-top: 2px solid #837cb6; */
    border-bottom: 2px solid #837cb6;
    border-left: 2px solid #837cb6;
    border-radius: 6px 0 0 6px;
    position: absolute;
    top: 0;
    bottom: -2px;
    left: 0;
    z-index: 1;
  }

  /*  */

  .main-gameflow .gameflow:nth-child(2n) .gameflow-icon {
    left: auto;
    right: -34px;
    /* margin-top: 40px; */
  }
  .main-gameflow .gameflow:nth-child(2n) .gameflow-content {
    float: right;
    text-align: right;
  }

  .main-gameflow .gameflow-content {
    width: 50%;
  }
  .main-gameflow .gameflow:nth-child(2n) .border1 {
    border-left: none;
    border-right: 2px solid #837cb6;
    border-radius: 0 6px 6px 0;
    left: 50%;
  }
  .main-gameflow .border1 {
    width: 50%;
    border-top: 2px solid #837cb6;
    border-bottom: 2px solid #837cb6;
    /* border-left: 2px solid #837cb6;
    border-radius: 6px 0 0 6px; */
    position: absolute;
    top: 0;
    bottom: -2px;
    /* left: 0; */
    z-index: 1;
  }
`;
export const SecTwelve = styled.div`
  .uniq_features ul {
    padding-left: 0px;
  }
  .uniq_features ul li {
    margin-bottom: 15px;
    position: relative;
    padding-left: 29px;
    text-indent: -29px;
    color: #fff;
  }
  
`;
export const SecThirteen = styled.div``;
