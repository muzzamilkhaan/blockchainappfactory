import React from "react";
import { SecNine } from "./nftDevelopmentServicesComp";
import { H2, Button } from "../../../components";

const Sec9 = () => {
  return (
    <SecNine>
      <div className="shard_master-node">
        <div className="container">
          <div className="row real-estate-list">
            <div className="section-title text-center">
              <div
                className="font_wei"
                //   style="color: #fff; font-weight: 600;"
              >
                <H2 style={{ color: "#fff", fontWeight: "600" }}>
                  {" "}
                  Do You have a Prospective NFT Business Idea? Feel Free to
                  Share It with Us,
                  <br /> and We can Take Things Further!
                </H2>
              </div>{" "}
            </div>
            <div className="col-md-12 text-center mt20">
              <div className="d-flex justify-content-center flex-wrap gap-3 ">
                <Button
                  btnContent="For Free Consultation"
                  target="_blank"
                  to="https://www.blockchainappfactory.com/free-nft-consulting"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecNine>
  );
};

export default Sec9;
