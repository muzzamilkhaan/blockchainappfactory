import React from "react";
import { Link } from "react-router-dom";
import { ButtonComp } from "./StyleComp";
const Button = ({ btnContent, to, target }) => {
  return (
    <div>
      <Link to={to} target={target}>
        <ButtonComp target="_blank"> {btnContent}</ButtonComp>
      </Link>
    </div>
  );
};

export default Button;
