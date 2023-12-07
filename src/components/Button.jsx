import React from "react";
import { Link } from "react-router-dom";
import { ButtonComp } from "./StyleComp";
const Button = ({ btnContent, to }) => {
  return (
    <div>
      <Link to={to}>
        <ButtonComp> {btnContent}</ButtonComp>
      </Link>
    </div>
  );
};

export default Button;
