import React, { useState } from "react";
import { H2 } from "../Typography";

function Faq({ data, className }) {
  // console.log("data:", data);
  const [activeTab, setActiveTab] = useState(0);

  const changeTabs = (index) => {
    if (activeTab === index) {
      setActiveTab(null);
    } else {
      setActiveTab(index);
    }
  };
  return (
    <div className={className} id="custom-accordian">
      <div className="container">
        <div className="row">
          <div className="section-header text-center col-sm-12">
            <div className="section-title mt20 underline">
              <H2>FAQ</H2>
            </div>
          </div>
          <div className="col-sm-12 col-md-12">
            <div className="faq-content">
              <div className="panel-group" id="accordion">
                {data.map((item, index) => {
                  return (
                    <div className="panel panel-default" key={index}>
                      <div
                        className="panel-heading"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          changeTabs(index);
                        }}
                      >
                        <h4 className="panel-title">
                          <a
                            alt=""
                            data-toggle="collapse"
                            className={`${
                              activeTab !== index ? "collapsed" : ""
                            }`}
                            style={{
                              fontFamily: "Lato,sans-serif",
                            }}
                          >
                            {/* {activeTab === index ? "−" : "+"} */}

                            {item.title}
                          </a>
                        </h4>
                      </div>
                      <div
                        id="faq1"
                        className={`panel-collapse collapse ${
                          activeTab === index ? "in" : ""
                        }`}
                        style={{ height: activeTab === index ? "auto" : "0px" }}
                      >
                        <div
                          className="panel-body"
                          style={{ whiteSpace: "pre-line" }}
                          dangerouslySetInnerHTML={{ __html: item.desc }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
                {/* <div className="panel panel-default">
                  <div className="panel-heading" style={{ cursor: 'pointer' }} onClick={() => { changeTabs(1) }}>
                    <h4 className="panel-title">
                      <a
                        className={`${activeTab !== 1 ? 'collapsed' : ''}`}
                        alt=""
                        data-toggle="collapse"
                      >
                        How Do Our Experts Innovate?
                      </a>
                    </h4>
                  </div>
                  <div id="faq2" className={`panel-collapse collapse ${activeTab === 1 ? 'in' : ''}`} style={{ height: activeTab === 1 ? 'auto' : '0px' }}>
                    <div className="panel-body">
                      Our experts across various business domains constantly upskill
                      themselves with the latest developments in their fields. We
                      equip ourselves with the newest tech stacks, development
                      practices, and marketing strategies to stay ahead of the
                      competition.
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" style={{ cursor: 'pointer' }} onClick={() => { changeTabs(2) }}>
                    <h4 className="panel-title">
                      <a
                        className={`${activeTab !== 2 ? 'collapsed' : ''}`}
                        alt=""
                        data-toggle="collapse"
                      >
                        Who Do We Cater?
                      </a>
                    </h4>
                  </div>
                  <div id="faq3" className={`panel-collapse collapse ${activeTab === 2 ? 'in' : ''}`} style={{ height: activeTab === 2 ? 'auto' : '0px' }}>
                    <div className="panel-body">
                      Our clientele includes many big names across industries across
                      the globe, ranging from logistics, supply chain, food,
                      finance, and digital assets. We have also assisted many
                      blockchain-native ventures to rise from the ground up to
                      become successful.
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" style={{ cursor: 'pointer' }} onClick={() => { changeTabs(3) }}>
                    <h4 className="panel-title">
                      <a
                        className={`${activeTab !== 3 ? 'collapsed' : ''}`}
                        alt=""
                        data-toggle="collapse"
                      >
                        What are the Principles We Believe In?
                      </a>
                    </h4>
                  </div>
                  <div id="faq4" className={`panel-collapse collapse ${activeTab === 3 ? 'in' : ''}`} style={{ height: activeTab === 3 ? 'auto' : '0px' }}>
                    <div className="panel-body">
                      At Blockchain App Factory, our experts believe in staying true
                      to the client's demands and fulfilling them through our
                      experience and expertise. All our enterprise services revolve
                      around customers’ needs to ensure that the desired results are
                      achieved.
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" style={{ cursor: 'pointer' }} onClick={() => { changeTabs(4) }}>
                    <h4 className="panel-title">
                      <a
                        className={`${activeTab !== 4 ? 'collapsed' : ''}`}
                        alt=""
                        data-toggle="collapse"
                      >
                        What are Some Applications We Excel In?
                      </a>
                    </h4>
                  </div>
                  <div id="faq5" className={`panel-collapse collapse ${activeTab === 4 ? 'in' : ''}`} style={{ height: activeTab === 4 ? 'auto' : '0px' }}>
                    <div className="panel-body">
                      Our professionals master creating multiple blockchain
                      applications, including cryptocurrencies, crypto exchanges,
                      NFTs, NFT marketplaces, NFT games, metaverses, crypto offering
                      platforms (ICO/IDO), and launchpads from scratch and White
                      label solutions.{" "}
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
