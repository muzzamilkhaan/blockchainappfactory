import React from 'react'

const Sec3 = () => {
  return (
    <div className="section my-0 common_spacing gray_bg">
    <div className="container">
      <div className="section-title text-center underline">
        <div className="sec_tit">
          <h2>My Crypto Heroes Like NFT gaming platform</h2>
        </div>
      </div>
      <p className="text-center">
        The gaming industry has witnessed many similar types of games where the
        heroes of the platforms are engaged in the battle with another real-time
        player. The battle decides the winner based on the level of the hero and
        the protection he has. But our My Crypto Heroes like NFT gaming platform
        has better streamlined where there are many different layers of gaming
        modes which include Battle mode, Quest mode, and Workout arena.{" "}
      </p>
      <div className="row mt-4 col-mb-50">
        <div className="col-lg-4">
          {" "}
          <img
            className="game_icon"
            data-src="/images/my/icon/swords.webp"
            src="./assets/images/swords.webp"
          />
          <div className="heading-block border-bottom-0">
            <h4>Battle Mode</h4>{" "}
          </div>
          <p>
            In the battle mode, the player is matched with another real-time
            player, where the user can battle with the player with different
            combinations. The more important factor of the Battle mode is the
            ability to strategize and use them to win the opponent.
          </p>
        </div>
        <div className="col-lg-4">
          {" "}
          <img
            className="game_icon"
            data-src="/images/my/icon/quest.webp"
            src="./assets/images/quest.webp"
          />
          <div className="heading-block border-bottom-0">
            <h4>Quest Mode</h4>{" "}
          </div>
          <p>
            Quest Mode in the platform has a clear vision towards making a quest
            towards collecting the resource which is unique or NFT assets. The
            player needs to use his heroes wisely to defeat the hellhounds or
            demonly creatures to complete the quest,
          </p>
        </div>
        <div className="col-lg-4">
          {" "}
          <img
            className="game_icon"
            data-src="/images/my/icon/dumbbell.webp"
            width={70}
            src="./assets/images/dumbbell.webp"
          />
          <div className="heading-block border-bottom-0">
            <h4>Gym</h4>{" "}
          </div>
          <p>
            Here the player will be able to demonstrate the heroes that even he
            doesn't own to learn the ability of the opponents and forbid them with
            the power he has. Other than this, there are many small missions and
            tasks that are there for getting rewards.
          </p>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Sec3
