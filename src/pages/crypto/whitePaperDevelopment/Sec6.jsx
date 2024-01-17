import React from 'react'

function Sec6() {
  return (
    <div className="tinder-padding-sec common_spacing">
  <section className="roadmap" id="roadmap">
    <div className="transition-gradient-after adjust-top" />
    <div className="container">
      <div className="dots-vert" />
      <div className="row mb40">
        <div className="section-title text-center">
          <div className="sec_tit mb20">
            <h2 className="section-title underline mb20">
              Roadmap: What is the Project’s Plan to Progress?
            </h2>
          </div>
          <p className="text-center">
            Through this question, we intend to let your readers know how your
            ICO venture plans to progress with a timeline <br />
            based on quarterly goals to give them an idea.{" "}
          </p>
        </div>
      </div>
      <div className="row d-flex">
        <div className="col-md-12">
          <p className="text-center">
            {" "}
            <span>
              Make the below points into an image and add them to this section’s
              top:
            </span>
          </p>
          <ul className="workflow">
            <li>
            <i className="fa-regular fa-lightbulb"></i>
              <p>Concept</p>
            </li>
            <li>
              <i className="fa fa-object-group" aria-hidden="true" />
              <p>Operations</p>
            </li>
            <li>
              <i className="fa fa-book" aria-hidden="true" />
              <p>Validation</p>
            </li>
            <li>
              <i className="fa fa-tasks" aria-hidden="true" />
              <p> Technology</p>
            </li>
            <li>
              <i className="fa fa-btc" aria-hidden="true" />
              <p>Tokenomics</p>
            </li>
            <li>
              <i className="fa fa-users" aria-hidden="true" />
              <p>Team</p>
            </li>
            <li>
              <i className="fa fa-map-signs" aria-hidden="true" />
              <p>Roadmap</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default Sec6