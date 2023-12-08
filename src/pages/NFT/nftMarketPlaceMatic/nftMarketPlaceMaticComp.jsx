import styled from "styled-components";
import { Section } from "../../../components/sections/section";
import { layout } from "../../../helpers/constant";
const { mobile, tablet, laptop, desktop } = layout;

export const Sec1 = styled(Section)`
  background: url("https://www.blockchainappfactory.com/images/matic/banner.webp");
`;
export const Sec2 = styled(Section)`
  background-color: "#fff";
  margin-top: 50px;
  padding-inline: 10vw;
`;

export const Sec3 = styled(Section)`
  padding-inline: 6vw;
  @media (max-width: 768px) {
    padding-inline: 3vw;
  }
`;
export const ContainerSec3 = styled.div`
  display: flex;
  @media only screen and (min-width: ${mobile}) {
    flex-direction: column;
    gap: 15px;
    /* padding-inline: 3vw; */
  }
  @media only screen and (min-width: ${laptop}) {
    flex-direction: row;
    gap: 20px;
  }
`;
export const LeftLayoutSec3 = styled.div`
  @media only screen and (min-width: ${mobile}) {
    .img-sec3 {
      width: 100%;
      border-radius: 7px;
    }
  }
`;
export const RightLayoutSec3 = styled.div`
  @media only screen and (min-width: ${mobile}) {
    width: 100%;
  }
  @media only screen and (min-width: ${laptop}) {
    width: 60%;
  }
`;

export const Sec4 = styled(Section)`
  padding-inline: 6vw;
  @media (max-width: 768px) {
    padding-inline: 3vw;
  }
`;
export const ContainerSec4 = styled.div`
  display: flex;
  @media only screen and (min-width: ${mobile}) {
    flex-direction: column;
    gap: 15px;
    /* padding-inline: 3vw; */
  }
  @media only screen and (min-width: ${laptop}) {
    flex-direction: row;
    gap: 20px;
  }
`;
export const LeftLayoutSec4 = styled.div`
  @media only screen and (min-width: ${mobile}) {
    width: 100%;
  }
  @media only screen and (min-width: ${laptop}) {
    width: 60%;
  }
`;
export const RightLayoutSec4 = styled.div`
  @media only screen and (min-width: ${mobile}) {
    .img-sec4 {
      width: 100%;
    }
  }
  @media only screen and (min-width: ${laptop}) {
    .img-sec4 {
      height: 80%;
      width: 80%;
    }
  }
`;
export const BoxSec4 = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 12px;
  @media (max-width: 480px) {
    gap: 40px;
  }
`;
export const ImgContainerSec4 = styled.div`
  width: 10%;
  .img-box-sec4 {
    max-width: 50px;
  }
`;
export const ContentSec4 = styled.div``;
export const ButtonContainerSec4 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* padding-block: 1vw; */
  gap: 12px;
  padding-top: 1vw;

  @media (max-width: 480px) {
    padding-top: 2vw;
    /* justify-content: center; */
  }
`;

export const Sec5 = styled(Section)`
  padding-inline: 6vw;
  padding-top: 60px;
  @media (max-width: 768px) {
    padding-inline: 3vw;
  }
  .d_card {
    position: relative;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: end;
    align-items: flex-end;
    overflow: hidden;
    padding: 1rem;
    margin-bottom: 20px;
    width: 100%;
    text-align: center;
    color: whitesmoke;
    background-color: whitesmoke;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
      0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1),
      0 16px 16px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
  }
  .d_card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 110%;
    background-size: cover;
    background-position: 0 0;
    pointer-events: none;
  }
  .d_card:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    pointer-events: none;
    background-image: linear-gradient(45deg, black, #00000052);
  }
  .bg1::before {
    background-image: url("https://www.blockchainappfactory.com/images/matic/1.webp");
  }
  .bg2::before {
    background-image: url("https://www.blockchainappfactory.com/images/matic/2.webp");
  }
  .bg3::before {
    background-image: url("https://www.blockchainappfactory.com/images/matic/3.webp");
  }
  .bg4::before {
    background-image: url("https://www.blockchainappfactory.com/images/matic/4.webp");
  }
  .bg5::before {
    background-image: url("https://www.blockchainappfactory.com/images/matic/5.webp");
  }
  .content {
    position: relative;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    padding: 1rem;
    z-index: 1;
  }

  .data-content {
    display: none;
  }
  .d_card:hover {
    .data-content {
      display: block;
    }
    .heading {
      margin-bottom: 20px;
    }
  }
  @media (min-width: 600px) {
    .d_card {
      height: 350px;
    }
  }
  @media (max-width: 600px) {
    .d_card {
      height: 350px;
    }
    .data-content {
      display: block;
    }
  }
`;
export const Sec6 = styled(Section)`
  padding-inline: 6vw;
  @media (max-width: 768px) {
    padding-inline: 3vw;
  }
  .btn-class {
    display: flex;
    justify-content: center;
  }
`;
export const Sec7 = styled(Section)`
  .row::before {
    content: "";
    display: table;
  }
  .image-box {
    position: relative;
    -webkit-box-shadow: 0 3px 20px 0px #0000001f;
    box-shadow: 0 3px 20px 0px #0000001f;
    border-radius: 1.5rem;
    -webkit-transition: -webkit-transform 0.3s ease 0s;
    transition: -webkit-transform 0.3s ease 0s;
    transition: transform 0.3s ease 0s;
    transition: transform 0.3s ease 0s, -webkit-transform 0.3s ease 0s;
    margin-bottom: 30px;
    height: 325px;
  }
  .avatar-sm {
    height: 3rem;
    width: 3rem;
  }
  .image-box {
    transition: transform 0.3s ease-in-out; /* Add a smooth transition effect */
  }

  .image-box:hover {
    transform: translateY(-10px);
    box-shadow: 0 1rem 3rem rgb(31 45 61 / 13%) !;
  }
  .btn-sec7 {
    display: flex;
    gap: 12px;
    justify-content: center;
    flex-wrap: wrap;
  }
  @media (max-width: 425px) {
    .image-box {
      min-height: auto;
    }
  }
  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }
`;
