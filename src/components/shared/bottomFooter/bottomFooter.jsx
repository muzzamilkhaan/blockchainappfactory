import React from "react";
import "./bottomFooterStyle.css";
import { Link } from "react-router-dom";

const bottomFooter = () => {
  return (
    <div id="bottom-footer">
      <div className="bottom-footer-wrap">
        <div className="one">
          <img src="./assets/images/telegram.png" alt="" />
          <p>Telegram</p>
        </div>

        <div className="two">
          <img src="./assets/images/whatsapp.png" alt="" />

          <p>WhatsApp</p>
        </div>
        <div className="three">
          <img src="./assets/images/bitcoin.png" alt="" />
          <p>Telegram</p>
        </div>
        <div className="four">
          <img src="./assets/images/dollar.png" alt="" />
          <p>Telegram</p>
        </div>
      </div>
    </div>
  );
};

export default bottomFooter;
