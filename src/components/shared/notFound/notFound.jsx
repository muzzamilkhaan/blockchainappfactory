import React, { useEffect } from "react";
import "./notFound.css";
import { Link } from "react-router-dom";
const NotFound = ({ headerBgColor, toggleHeaderBgColor, linkColor }) => {
  useEffect(() => {
    toggleHeaderBgColor("#fff", "#444");
  });
  return (
    <div id="not-found">
      {/* <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      /> */}
      <div className="error-header"> </div>
      <div className="container ">
        <section className="error-container text-center">
          <h1>404</h1>
          <div className="error-divider">
            <h2>PAGE NOT FOUND.</h2>
            <p className="description">We Couldn't Find This Page</p>
          </div>
          <Link to="/" className="return-btn">
            <i className="fa fa-home"></i>Home
          </Link>
        </section>
      </div>
    </div>
  );
};

export default NotFound;
