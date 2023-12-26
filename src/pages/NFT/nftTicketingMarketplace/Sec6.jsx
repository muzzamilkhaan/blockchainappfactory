import React from "react";
import { SecSix } from "./nftTicketingMarketplaceComp";
import { H2, Button } from "../../../components";

const Sec6 = () => {
  return (
    <SecSix>
      <section className="common_spacing gray_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="box-shade text-center">
                <div className="section-title">
                  <div className="sec_tit underline mb20 text-center">
                    <H2> Where are NFT ticketing systems used? </H2>
                  </div>{" "}
                </div>
                <p className="mt-20 text-center para">
                  NFT ticketing systems are mainly used for exclusive events
                  (physical/virtual). Typical ticketed events include concerts,
                  meetings, games, talk shows, and theater. NFT tickets can even
                  be used for season parking passes for security concerns. These
                  event tickets have the problem of being replicated or
                  over-priced by scammers. Also, event organizers do not reap
                  any benefit from such secondarily sold tickets. NFT ticketing
                  platforms are used to bring organizers and fans closer to
                  combat such issues. The platform necessarily facilitates
                  peer-to-peer (P2E) trading, albeit the assets sold are
                  tickets. Many artists and event management firms have already
                  taken advantage of the novel system. The results have been
                  wholesome so far, and further prospects are being explored.
                </p>
                <div className="text-center">
                  {/* <style type="text/css">
.nec-btn{
     position: relative !important;
    color:#fff !important;
    border-radius:30px !important;
    font-size: 11px;
    text-transform: uppercase !important;
    transform: scale(1.1,1.1) !important;
    transition:all 0.3s ease-out 0s !important;
    background: #47b475 !important;
}
.nec-btn:hover{
    transform: scale(1,1) !important;
    color:#fff !important;
    background:#00a9e2!important;
}
a.nectar-button.medium.regular.accent-color.regular-button.nec-btn {
    margin-bottom: 15px!important;
    display: inline-block;
    margin-right: 26px!important;
}
.contentall a, a.home-talk-experts{
	padding: 10px 20px !important;
}
</style> */}
                  <div className="cta_mine">
                    <div className="d-flex justify-content-center flex-wrap gap-3 ">
                      <Button
                        btnContent="Talk with our Experts"
                        to="#newsletter-form-sec"
                      />
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SecSix>
  );
};

export default Sec6;
