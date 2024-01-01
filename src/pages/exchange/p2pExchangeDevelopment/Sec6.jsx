import React from "react";
import { SecSix } from "./p2pExchangeDevComp";
import { H2, Button } from "../../../components";

const Sec6 = () => {
  return (
    <SecSix>
      <section id="demo" className="">
        <div className="container gray-bg">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="section-title text-center">
                <div className="title-th sec_tit underline">
                  <H2> Discover Our White Label Crypto Exchange Demo </H2>
                </div>
                <p></p>
              </div>
            </div>
            <div
              className="col-md-12 col-sm-12 col-xs-12 text-center"
              //  style=""
            >
              <img
                className=""
                data-src="images/demo-img/crypto-demo-img.webp"
                //  style="max-width: 100%;"
                src="https://www.blockchainappfactory.com/images/demo-img/crypto-demo-img.webp"
              />
              <div className="clearfix"></div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12 text-center">
              <p>
                <b>Controlled Exchange </b>
              </p>
              <div className="design">
                <br />

                <div className="d-flex justify-content-center flex-wrap gap-3 ">
                  <Button
                    btnContent="View Demo"
                    to="https://blink.deliveryventure.com"
                    target="_blank"
                  />
                </div>
                <h5>User Demo</h5>
                <p>
                  <b>User : </b>
                  <span>demo@demo.com</span>
                  <br />
                  <b>Password: </b>
                  <span>Demo@123</span>
                </p>
                <hr />
                <h5>Admin Demo</h5>
                <p>
                  <b>User: </b>
                  <span>admin@demo.com</span>
                  <br />
                  <b>Password: </b>
                  <span>123456</span>
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12 text-center">
              <p>
                <b>Centrilized Exchange </b>
              </p>
              <div className="design">
                <br />

                <div className="d-flex justify-content-center flex-wrap gap-3 ">
                  <Button
                    btnContent="View Demo"
                    to="https://exchange.bafdemo.com/"
                    target="_blank"
                  />
                </div>
                <h5>User Demo</h5>
                <p>
                  <b>Login ID : </b>
                  <span>admin@coinage.cloud</span>
                  <br />
                  <b>Password: </b>
                  <span>9f274281</span>
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12 text-center">
              <p>
                <b>P2P </b>
              </p>
              <div className="design">
                <br />

                <div className="d-flex justify-content-center flex-wrap gap-3 ">
                  <Button
                    btnContent="View Demo"
                    to="http://localbitcoin.deliveryventure.com/"
                    target="_blank"
                  />
                </div>
                <h5>User Demo</h5>
                <p>
                  <b>Email : </b>
                  <span>demo@mailinator.com</span>
                  <br />
                  <b>Password: </b>
                  <span>12345678</span>
                </p>
                <hr />

                <div className="d-flex justify-content-center flex-wrap gap-3 ">
                  <Button
                    btnContent="View Demo"
                    to="https://localbitcoin.deliveryventure.com/admin/login"
                    target="_blank"
                  />
                </div>
                <h5>Admin Demo</h5>
                <p>
                  <b>Email: </b>
                  <span>admin@demo.com</span>
                  <br />
                  <b>Password: </b>
                  <span>123456</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SecSix>
  );
};

export default Sec6;
