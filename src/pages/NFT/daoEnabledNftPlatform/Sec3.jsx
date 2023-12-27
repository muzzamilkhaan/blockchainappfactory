import React from "react";
import { SecThree } from "./daoEnabledNftPlatformComp";
import { H2 } from "../../../components";

const Sec3 = () => {
  return (
    <SecThree>
      <div className="intro_cnt common_spacing gray_bg">
        <div className="container">
          <div className="row">
            <div className="sec_tit underline text-center">
              <H2>DAO-enabled NFT Marketplace Platform Development</H2>
            </div>
          </div>
          <div className="row">
            <p className="mt10 mb10 text-center para">
              A DAO-enabled NFT marketplace is a platform where the
              marketplace’s customers can be part of making decisions about the
              platform’s future changes. The DAO will be a facet of the NFT
              marketplace platform similar to the user-end portals. Currently,
              although NFT marketplaces promise to be peer-to-peer platforms,
              they are not fully decentralized, as we have seen in a few cases
              of marketplace owners going beyond their available powers to
              rescue their reputation. With a DAO-enabled NFT marketplace, any
              change – major or minor, can only be made only by community
              voting. A DAO-enabled NFT marketplace can give you an edge over
              the competitors due to the nature of community participation while
              giving you much-needed monetary benefits before and after the
              launch.{" "}
            </p>
          </div>
        </div>
      </div>
    </SecThree>
  );
};

export default Sec3;
