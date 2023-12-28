import React from "react";
import { SecTwo } from "./carbonCreditsDevelopmentComp";
import { H2 } from "../../../components";

const Sec2 = () => {
  return (
    <SecTwo>
      <div className="common_spacing">
        <div className="container">
          <div className="section-title text-center">
            <div className="title-th sec_tit underline">
              {" "}
              <H2> Carbon Credits – A Measure toward a Sustainable World </H2>
            </div>{" "}
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 text-center">
              <p className="text-center mt20">
                Carbon credits are tradable permit certificates that enable
                individuals and organizations to emit carbon dioxide per annum.
                One carbon credit allows its holder to emit one ton of carbon
                dioxide or any greenhouse gas. Typically, limitations on the
                maximum permissible carbon credit holding and usage are put
                forth by governments or global environment agencies. If a firm
                emits below the prescribed amount, they are incentivized for its
                efforts. <br />
                <br />
                The main aim of such a “cap-and-trade”-based system is to reduce
                the amount of pollutant emissions by reducing allowances with
                time. The tradable feature plays its role when companies have
                excess carbon credits, which can be sold secondarily to other
                companies. The cost of a carbon credit varies with time and
                location, which makes it possible for the secondary market to
                thrive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SecTwo>
  );
};

export default Sec2;
