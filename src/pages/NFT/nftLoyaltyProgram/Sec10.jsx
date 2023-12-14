import React from "react";
import { SecTen } from "./nftLoyaltyProgramComp";
import { Button, H2 } from "../../../components";

const Sec10 = () => {
  return (
    <SecTen>
      <div className="common_spacing" style={{ background: " #140050" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 text-center">
              <div className="section-title text-center">
                <div className="title-th sec_tit underline text-white">
                  <H2 style={{ color: "#fff" }}>
                    Why Choose Blockchain App Factory to Build Your NFT Loyalty
                    Platform?
                  </H2>
                </div>{" "}
              </div>
              <p className="text-center mt20 text-white para">
                At Blockchain App Factory, we believe in creating a supreme user
                experience powered by advanced technology. Our expertise in
                creating NFT loyalty platforms enables your business to gain a
                closer understanding of your customers and stitch close-knit
                relationships with them. We ensure to create NFT loyalty
                programs that primarily focus on users at all ends. Either
                building one from scratch or using our Whitelabel NFT loyalty
                platform, you certainly gain more than what you had invested.
                Interested in building a Web3 loyalty program for your venture?
                Get in touch with us today to initiate your biggest step towards
                adopting new-age user-focused technology!
              </p>
              <div className="clearfix"></div>
              {/* <div className="text-center cta_mine txt">
                {" "}
                <a
                  className="nectar-button medium regular accent-color regular-button nec-btn med-btn"
                  target="_blank"
                  href="https://api.whatsapp.com/send?l=en&amp;text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&amp;phone=916382665366"
                  data-color-override="false"
                  data-hover-color-override="false"
                  data-hover-text-color-override="#fff"
                >
                  <span>Connect with Whatsapp</span>
                </a>{" "}
                <a
                  href="#newsletter-form-sec"
                  className="nectar-button medium regular accent-color regular-button nec-btn med-btn"
                >
                  <span>Talk with our Experts</span>
                </a>{" "}
              </div> */}
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Button
                  btnContent="Connect with Whatsapp"
                  target="_blank"
                  to="https://api.whatsapp.com/send?l=en&amp;text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&amp;phone=916382665366"
                />
                <Button btnContent="Talk with our Experts" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecTen>
  );
};

export default Sec10;
