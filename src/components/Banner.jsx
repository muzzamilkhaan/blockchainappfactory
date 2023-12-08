import React from "react";
import {
  BannerLayout,
  LeftLayout,
  RightLayout,
  BannerContainer,
  ButtonContainer,
} from "./StyleComp";
import Button from "./Button";

const Banner = ({ bannerImg, heading, para, btnContent1, btnContent2 }) => {
  return (
    <>
      <BannerContainer bgimg={bannerImg}>
        <BannerLayout>
          <LeftLayout>
            <h1 className="h1-banner">{heading}</h1>
            <p className="p-banner">{para}</p>
            <ButtonContainer>
              <Button btnContent={btnContent1} to="/" />
              <Button btnContent={btnContent2} to="/" />
            </ButtonContainer>
          </LeftLayout>
          <RightLayout>
            <img
              src="https://www.blockchainappfactory.com/images/matic/banner1.webp"
              alt=""
            />
          </RightLayout>
        </BannerLayout>
      </BannerContainer>
    </>
  );
};

export default Banner;
