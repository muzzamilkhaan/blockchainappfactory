import React from "react";
import "./bottomFooterStyle.css";
import { Link } from "react-router-dom";

const bottomFooter = () => {
  return (
      <div id="bottom-footer">
        <div className="bottom-footer-wrap">
          <div className="one">
            <img src="./assets/images/telegram.png" alt="" />
            <a href="https://telegram.org/" target="_blank">Telegram</a>
          </div>

          <div className="two">
            <img src="./assets/images/whatsapp.png" alt="" />

            <a href="https://www.whatsapp.com/" target="_blank">WhatsApp</a>
          </div>
          <div className="three">
            <img src="./assets/images/bitcoin.png" alt="" />
            <a href="#" target="_blank">Create Token</a>
          </div>
          <div className="four">
            <img src="./assets/images/dollar.png" alt="" />
            <a href="#" target="_blank">GET QUOTE</a>
          </div>
        </div>
      </div>
  );
};

export default bottomFooter;
