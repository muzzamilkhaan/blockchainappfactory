import React from 'react'

const Sec5 = () => {
  return (
<section className="service-section web-servic pad-tb">
  <div className="container">
    <div className="section-header underline text-center">
      <h2 className="text-white title-th">
        Native Currencies in Our Splinterlands like P2E NFT Game - An Overview
      </h2>
      <p className="text-center text-white">
        <br /> The game will utilize two different native tokens, each having
        its own use case. Consider these 2 tokens as A &amp; B.{" "}
      </p>
    </div>
    <div className="row upset link-hover shape-num justify-content-center">
      <div
        className="col-lg-6 col-sm-6 mt30 shape-loc wow fadeInUp"
        data-wow-delay="0.2s"
        style={{
          visibility: "visible",
          animationDelay: "0.2s",
          animationName: "fadeInUp"
        }}
      >
        <div
          className="box4"
          style={{
            willChange: "transform",
            transform:
              "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
          }}
        >
          <div className="s-card-icon">
            <img
              className=""
              data-src="/images/p2e-game-development/icons/a.webp"
              alt=" "
              src="./assets/images/tokena.webp"
            />
          </div>
          <h3>Token A</h3>
          <p>
            This will act as an in-game currency of the game and will be used to
            purchase the in-game assets. Winning battles, daily quests, or
            tournaments will enable players to earn A tokens. Also, it is
            essential for players to own these tokens to participate in the
            airdrops.{" "}
          </p>
        </div>
      </div>
      <div
        className="col-lg-6 col-sm-6 mt30 shape-loc wow fadeInUp"
        data-wow-delay="0.4s"
        style={{
          visibility: "visible",
          animationDelay: "0.4s",
          animationName: "fadeInUp"
        }}
      >
        <div
          className="box4"
          style={{
            willChange: "transform",
            transform:
              "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
          }}
        >
          <div className="s-card-icon">
            <img
              data-src="/images/p2e-game-development/icons/b.webp"
              className=""
              alt=" "
              src="./assets/images/tokenb.webp"

            />
          </div>
          <h3>Token B</h3>
          <p>
            Token B is a governance token and plays a significant role in the
            game. Unlike previous tokens, this cannot be earned through battles
            or daily quests. The only possible way to earn this token is through
            airdrops or staking in the game ecosystem. Players, by simply
            holding token A, will gain access to participate in the airdrops.{" "}
          </p>
        </div>
      </div>
      <p className="text-center">
        The total supply of token B will be 3,000,000,000 (3 billion), in which
        400,000,000 (400 million) tokens will be allocated to airdrops. Players
        and collectors in the game will get these tokens on a daily basis over
        the course of one year.
      </p>
    </div>
  </div>
</section>

  )
}

export default Sec5
