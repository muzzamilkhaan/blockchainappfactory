import React from 'react'

function ExperiaceInblockchain() {
    return (
        <section
            id="counter-stats"
            style={{ padding: 0 }}
            className="wow fadeInRight"
            data-wow-duration="1.4s"
        >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 stats">
                        <div className="counting" data-count={900000}>
                            10+ Years
                        </div>
                        <p className="mt10">Experience in Blockchain</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 stats">
                        <div className="counting" data-count={280}>
                            500+
                        </div>
                        <p className="mt10">Employees</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 stats">
                        <div className="counting" data-count={75}>
                            400+
                        </div>
                        <p className="mt10">Projects</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 stats">
                        <div className="counting" data-count={999}>
                            150+
                        </div>
                        <p className="mt10">Blockchain Experts</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExperiaceInblockchain