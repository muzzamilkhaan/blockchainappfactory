import styled from "styled-components";
import { layout } from "../../helpers/constant";
const { mobile, tablet, laptop, desktop } = layout;

export const Container = styled.div`
  /* display: flex; */
  /* padding-inline: 6vw; */
  display: flex;
  gap: 25px;
  /* width: 33%; */
  flex-wrap: wrap;
  justify-content: center;
  /* @media only screen and (max-width: ${tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  } */
`;
export const CardContainer = styled.div`
  /* display: flex; */
  width: 30%;
  flex-wrap: wrap;
  min-height: 300px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.13);
  border-radius: 5px;
  border-bottom: 2px solid #47b47566;
  padding: 25px 10px;
  background-color: #fff;
  margin-bottom: 40px;
  @media only screen and (max-width: ${tablet}) {
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    width: 80%;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .h5 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #000000;
    font-weight: 700;
    text-align: center;
  }
  .p {
    font-size: 14px;
    line-height: 1.7;
    max-width: 280px;
    text-align: center;
  }
`;
export const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  /* padding: 0; */
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
  margin-bottom: 15px;
  .img {
    height: 60px;
    position: relative;
    top: 18px;
    left: 18px;
  }
`;
export const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
`;
export const ContainerCard2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* align-items: center; */
  .arrowCard2 {
    width: 100px;
    height: 26px;
    position: relative;
    top: 45px;
    right: -30px;
  }
  .p-card2 {
    text-align: center;
    font-weight: 700;
    margin-bottom: 60px;
    color: #000000;
  }
`;
export const ImageCardSec2 = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  box-shadow: 0 0 10px #ccc;
  margin-bottom: 15px;
  .imgCard2 {
    height: 60px;
    position: relative;
    top: 22px;
    left: 18px;
  }
`;
