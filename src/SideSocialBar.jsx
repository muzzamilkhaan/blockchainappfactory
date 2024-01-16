import React from "react";

const SideSocialBar = () => {
  const [isBoxVisible, setBoxVisible] = React.useState(false);

  const toggleBoxVisibility = () => {
    setBoxVisible(!isBoxVisible);
  };

  return (
    <div>
      <button
        id="btn"
        className="close-btn"
        style={{ display: "block" }}
        onClick={toggleBoxVisibility}
      >
        {isBoxVisible ? "x" : ">"}
      </button>
      <div id="box" style={{ display: isBoxVisible ? "block" : "none" }}>
        <div id="fixed-social" className="fixed-social show1">
          <div className="items">
            <a
              href="https://api.whatsapp.com/send?l=en&amp;text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&amp;phone=916382665366"
              target="_blank"
            >
              <div className="icons">
                <img
                  src="https://www.blockchainappfactory.com/images/whatsapp.webp"
                  style={{ borderRadius: "50%" }}
                />
              </div>
            </a>
          </div>

          <div className="items">
            <a href="https://calendly.com/blockchainappfactory" target="_blank">
              <div className="icons">
                <img src="https://www.blockchainappfactory.com/images/appointment.webp" />
              </div>
            </a>
          </div>
          <div className="items">
            <a href="https://t.me/MahiBAF123" target="_blank">
              <div className="icons">
                <i className="fa fa-paper-plane"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideSocialBar;
