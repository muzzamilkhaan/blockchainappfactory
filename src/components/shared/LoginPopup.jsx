import React from 'react'

function LoginPopup() {
    return (

        <div className="login-popup">
        {/* <div className="login-popup show"> */}
            <div className="box-1">
                <div className="img" />
                <div className="img-area">
                    <h3 className="text-white text-center">
                        Become a Market-Leading Crypto Token Business!
                    </h3>
                    <br />
                    <p className="text-white text-center">
                        It takes a lot for a crypto project to succeed in the competitive space.
                        We have been part of the successful journey of these top market-topping
                        token projects:
                    </p>
                    <ul className="popup-ul">
                        <li>
                            <img src="./assets/images/Amepay.webp" /> <p>AME Chain</p>
                        </li>
                        <li>
                            <img src="./assets/images/evai.webp" /> <p>Evai</p>
                        </li>
                        <li>
                            <img src="./assets/images/dash.webp" /> <p>Dash</p>
                        </li>
                        <li>
                            <img src="./assets/images/gsx.webp" /> <p>GSX Coin</p>
                        </li>
                        <li>
                            <img src="./assets/images/waifu.webp" /> <p>Waifu</p>
                        </li>
                        <li>
                            <img src="./assets/images/anyswap.webp" /> <p>Anyswap</p>
                        </li>
                        <li>
                            <img src="./assets/images/quickswap.webp" /> <p>Quickswap</p>
                        </li>
                        <li>
                            <img src="./assets/images/dascoin.webp" /> <p>Das Coin</p>
                        </li>
                    </ul>
                </div>
                <div className="form">
                    <div className="close">×</div>
                    <h3 className="text-white text-center">
                        Do you want your token project to go to the next level?
                    </h3>
                    <br />
                    <form id="mailForm" method="POST">
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Name"
                                id="name"
                                name="name"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Email"
                                id="email"
                                name="email"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Mobile"
                                id="mobile"
                                name="mobile"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                placeholder="Message"
                                id="message"
                                name="message"
                                className="form-control"
                                style={{ height: 75 }}
                                defaultValue={""}
                            />
                        </div>
                        <button
                            type="button"
                            className="btn"
                        >
                            Submit
                        </button>
                    </form>
                    <div className="social">
                        <a
                            rel="nofollow"
                            aria-label="Whatsapp"
                            target="_blank"
                            href="https://api.whatsapp.com/send?l=en&text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&phone=916382665366"
                            data-color-override="false"
                            data-hover-color-override="false"
                            data-hover-text-color-override="#fff"
                        >
                            <i className="fa-brands fa-whatsapp" aria-hidden="true" title="Whatsapp" />{" "}
                            Whatsapp Us &nbsp;
                            
                        </a>
                        <a
                            rel="nofollow"
                            href="mailto:info@blockchainappfactory.com"
                            aria-label="Mail"
                        >
                            <i className="fa fa-envelope" aria-hidden="true" title="Mail" /> Mail
                            Us{" "}
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LoginPopup