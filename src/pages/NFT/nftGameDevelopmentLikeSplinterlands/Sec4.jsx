import React from 'react'

const Sec4 = () => {
  return (
    <section className="common_spacing gray_bg">
    <div className="container">
      <div className="row">
        <div className="col-md-12 section-header text-center">
          <h3 className="common_h2 section-title underline title-th">
            Breaking Down Our NFT Traits
          </h3>
        </div>
        <div className="col-md-12">
          <div className="pro-timeline">
            <div className="timeline">
              <div className="timeline-content">
                <span className="timeline-year" />
                <p className="title">Cost</p>
                <p className="description">
                  {" "}
                  This denotes the cost of the particular card. Each
                  Master/Fighter will have a unique cost and will be used while
                  adding the team members for the battle.{" "}
                </p>
              </div>
            </div>
            <div className="timeline">
              <div className="timeline-content">
                <span className="timeline-year" />
                <h3 className="title">Stats</h3>
                <p className="description">
                  {" "}
                  This number denotes the physical power, speed, toughness, and
                  health of a character.{" "}
                </p>
              </div>
            </div>
            <div className="timeline">
              <div className="timeline-content">
                <span className="timeline-year" />
                <h3 className="title">Element/Rarity</h3>
                <p className="description">
                  {" "}
                  This denotes the element that Master/Fighter belongs to and the
                  rarity (Common, Rare, Epic, or Legendary).{" "}
                </p>
              </div>
            </div>
            <div className="timeline">
              <div className="timeline-content">
                <span className="timeline-year" />
                <h3 className="title">Name</h3>
                <p className="description">
                  {" "}
                  It shows the name of the character.{" "}
                </p>
              </div>
            </div>
            <div className="timeline">
              <div className="timeline-content">
                <span className="timeline-year" />
                <h3 className="title">Level</h3>
                <p className="description">
                  {" "}
                  This represents the level of the card, and higher levels signify
                  that it is a powerful card. Leveling up the cards will increase
                  stats and unveils abilities.{" "}
                </p>
              </div>
            </div>
            <div className="timeline">
              <div className="timeline-content">
                <span className="timeline-year" />
                <h3 className="title">Experience</h3>
                <p className="description">
                  {" "}
                  It shows the experience gained by combating each other. The bar
                  shows the progress to reach the next level.{" "}
                </p>
              </div>
            </div>
            <div className="timeline">
              <div className="timeline-content">
                <span className="timeline-year" />
                <h3 className="title">Abilities</h3>
                <p className="description">
                  {" "}
                  These are exclusive skills or power that will help
                  Master/Fighters battle.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Sec4
