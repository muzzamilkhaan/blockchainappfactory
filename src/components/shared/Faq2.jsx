import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { H2 } from "../Typography";
import UnderLine from "../UnderLine";

const animationStyle = keyframes`
  from {
    height: 0px;
  }
  to {
    height: 79px;
  }
`;

const Title = styled.h2`
  font-family: "Lato", sans-serif;
  padding: 10px 15px;
  font-size: 16px;
  color: #fff;
  font-weight: 700;
  letter-spacing: 0px !important;
  cursor: pointer;
  &:hover {
    color: #000;
  }
`;
const Button = styled.div`
  background-color: #f90cff;
  margin-left: 10px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    ${Title}
    color: #000;
  }
`;
const Box = styled.div`
  /* background-color: #0c0c28;
  padding-top: 10px; */
  /* color: "#fff", */
  /* border-bottom: 1px solid #fff;
  
  animation : ${animationStyle}  2s ease-in ; */
`;

const Description = styled.p`
  color: #fff;
  padding: 15px;
`;

const Faq2 = ({ data }) => {
  const [activeTab, setActiveTab] = useState(null);

  const changeTabs = (index) => {
    setActiveTab((prevTab) => (prevTab === index ? null : index));
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="">
          <H2 style={{ color: "#fff" }}>FAQ</H2>
          <UnderLine background="#fff" height="1px" />
        </div>
      </div>

      {data.map((faq, index) => (
        <div style={{ marginBottom: "15px", width: "" }} key={index}>
          <div
            style={{
              backgroundColor: "#9841ff",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button onClick={() => changeTabs(index)}>
              {activeTab === index ? "-" : "+"}
            </Button>
            <Title onClick={() => changeTabs(index)}>{faq.title}</Title>
          </div>

          <div className={`faq-2 ${activeTab === index ? "active" : ""}`}>
            <Description>{faq.desc}</Description>
          </div>
        </div>
      ))}
    </>
  );
};

export default Faq2;
