import React from 'react'
import Slider from "react-slick";

function Sec6() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false,
              dots: false,               }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              dots: false,
          }
      }
  ]
  };
  return (
    <section className="product-features package_includes common_spacing">
      <div className="container">
        <div className="row">
          <div className="section-title text-center">
            <div className="sec_tit mb20">
              <h2 className="section-title underline mb20 font_wei">
                Exploring The Use Cases Of Our NFT Marketplace Development
              </h2>
              <p style={{ fontSize: 14, color: "#fff" }}>
                NFTs have swiftly emerged as the treasure of the digital age,
                offering numerous use cases that capture the world's imagination. As
                the NFT market continues evolving, more use cases arise for NFT
                marketplaces. With our services, you can build a business that
                supports your desired niche.
              </p>
            </div>
          </div>
          <Slider {...settings}>
            <div className="item" style={{ padding: '5px' }}>
              <div className="Package_list">
                <img
                  className="lazy"
                  src="./assets/images/disc.webp"
                  alt="NFT for Music"
                />
                <h3>Music</h3>
                <p  style={{ color: "#fff" }}>
                  Musicians can tokenize their creations and list them as
                  NFTs, attracting music lovers who appreciate their work and
                  wish to support them directly.
                </p>
              </div>
            </div>
            <div className="item" style={{ padding: '5px' }}>
              <div className="Package_list">
                <img
                  className="lazy"
                  src="./assets/images/house.webp"
                  alt="NFT for Real Estate"
                />
                <h3>Real Estate</h3>
                <p  style={{ color: "#fff" }}>
                  Through tokenization, virtual land and real estate
                  properties can be listed as NFTs on our platform, allowing
                  interested buyers to purchase.
                </p>
              </div>
            </div>
            <div className="item" style={{ padding: '5px' }}>
              <div className="Package_list">
                <img
                  className="lazy"
                  src="./assets/images/ticket.webp"
                  alt="NFT for Ticketing"
                />
                <h3>Ticketing</h3>
                <p  style={{ color: "#fff" }}>
                  By storing ticket information on the blockchain, NFTs offer
                  a solution to combat counterfeit ticketing and ticket
                  resales at inflated prices.
                </p>
              </div>
            </div>
            <div className="item" style={{ padding: '5px' }}>
              <div className="Package_list">
                <img
                  className="lazy"
                  src="./assets/images/bags.webp"
                  alt="Virtual Fashion"
                />
                <h3>Virtual Fashion</h3>
                <p  style={{ color: "#fff" }}>
                  Our platform enables users to purchase unique digital
                  fashion assets, showcase their style in virtual worlds, and
                  even integrate them into their avatars or gaming characters.
                </p>
              </div>
            </div>
            <div className="item" style={{ padding: '5px' }}>
              <div className="Package_list">
                <img
                  className="lazy"
                  src="./assets/images/www.webp"
                  alt="NFT for Domain Names"
                />
                <h3>Domain Names</h3>
                <p  style={{ color: "#fff" }}>
                  The NFT marketplace supports the tokenization of domain
                  names with special or highly sought-after words and can be
                  traded among users.
                </p>
              </div>
            </div>
            <div className="item" style={{ padding: '5px' }}>
              <div className="Package_list">
                <img
                  className="lazy"
                  src="./assets/images/digital.webp"
                  alt="Crypto Collectibles"
                />
                <h3>Crypto Collectibles</h3>
                <p  style={{ color: "#fff" }}>
                  Our NFT marketplace supports users to customize and trade a
                  wide variety of assets, ranging from digital art and in-game
                  items to trading cards.
                </p>
              </div>
            </div>
            <div className="item" style={{ padding: '5px' }}>
              <div className="Package_list">
                <img
                  className="lazy"
                  src="./assets/images/gamepad.webp"
                  alt="NFT for Games"
                />
                <h3>Gaming</h3>
                <p  style={{ color: "#fff" }}>
                  Gaming enthusiasts can safely transfer and trade in-game
                  assets, such as rare skins, avatars, and virtual land, with
                  full ownership rights.
                </p>
              </div>
            </div>
            <div className="item" style={{ padding: '5px' }}>
              <div className="Package_list">
                <img
                  className="lazy"
                  src="./assets/images/paint-palette.webp"
                  alt="NFT for Art"
                />
                <h3>Art</h3>
                <p  style={{ color: "#fff" }}>
                  Artists can showcase their creativity and openly trade their
                  digital artworks on our NFT platform, confidently
                  establishing ownership and provenance.
                </p>
              </div>
            </div>
            <div className="item" style={{ padding: '5px' }}>
              <div className="Package_list">
                <img
                  className="lazy"
                  src="./assets/images/disc.webp"
                  alt="NFT for Music"
                />
                <h3>Music</h3>
                <p  style={{ color: "#fff" }}>
                  Musicians can tokenize their creations and list them as
                  NFTs, attracting music lovers who appreciate their work and
                  wish to support them directly.
                </p>
              </div>
            </div>
            <div className="item" style={{ padding: '5px' }}>
              <div className="Package_list">
                <img
                  className="lazy"
                  src="./assets/images/house.webp"
                  alt="NFT for Real Estate"
                />
                <h3>Real Estate</h3>
                <p  style={{ color: "#fff" }}>
                  Through tokenization, virtual land and real estate
                  properties can be listed as NFTs on our platform, allowing
                  interested buyers to purchase.
                </p>
              </div>
            </div>
            <div className="item" style={{ padding: '5px' }}>
              <div className="Package_list">
                <img
                  className="lazy"
                  src="./assets/images/ticket.webp"
                  alt="NFT for Ticketing"
                />
                <h3>Ticketing</h3>
                <p  style={{ color: "#fff" }}>
                  By storing ticket information on the blockchain, NFTs offer
                  a solution to combat counterfeit ticketing and ticket
                  resales at inflated prices.
                </p>
              </div>
            </div>
            <div className="item" style={{ padding: '5px' }}>
              <div className="Package_list">
                <img
                  className="lazy"
                  src="./assets/images/bags.webp"
                  alt="Virtual Fashion"
                />
                <h3>Virtual Fashion</h3>
                <p  style={{ color: "#fff" }}>
                  Our platform enables users to purchase unique digital
                  fashion assets, showcase their style in virtual worlds, and
                  even integrate them into their avatars or gaming characters.
                </p>
              </div>
            </div>
            <div className="item" style={{ padding: '5px' }}>
              <div className="Package_list">
                <img
                  className="lazy"
                  src="./assets/images/www.webp"
                  alt="NFT for Domain Names"
                />
                <h3>Domain Names</h3>
                <p  style={{ color: "#fff" }}>
                  The NFT marketplace supports the tokenization of domain
                  names with special or highly sought-after words and can be
                  traded among users.
                </p>
              </div>
            </div>
            <div className="item" style={{ padding: '5px' }}>
              <div className="Package_list">
                <img
                  className="lazy"
                  src="./assets/images/digital.webp"
                  alt="Crypto Collectibles"
                />
                <h3>Crypto Collectibles</h3>
                <p  style={{ color: "#fff" }}>
                  Our NFT marketplace supports users to customize and trade a
                  wide variety of assets, ranging from digital art and in-game
                  items to trading cards.
                </p>
              </div>
            </div>
            <div className="item" style={{ padding: '5px' }}>
              <div className="Package_list">
                <img
                  className="lazy"
                  src="./assets/images/gamepad.webp"
                  alt="NFT for Games"
                />
                <h3>Gaming</h3>
                <p  style={{ color: "#fff" }}>
                  Gaming enthusiasts can safely transfer and trade in-game
                  assets, such as rare skins, avatars, and virtual land, with
                  full ownership rights.
                </p>
              </div>
            </div>
            <div className="item" style={{ padding: '5px' }}>
              <div className="Package_list">
                <img
                  className="lazy"
                  src="./assets/images/paint-palette.webp"
                  alt="NFT for Art"
                />
                <h3>Art</h3>
                <p  style={{ color: "#fff" }}>
                  Artists can showcase their creativity and openly trade their
                  digital artworks on our NFT platform, confidently
                  establishing ownership and provenance.
                </p>
              </div>
            </div>
            <div className="item" style={{ padding: '5px' }}>
              <div className="Package_list">
                <img
                  className="lazy"
                  src="./assets/images/disc.webp"
                  alt="NFT for Music"
                />
                <h3>Music</h3>
                <p  style={{ color: "#fff" }}>
                  Musicians can tokenize their creations and list them as
                  NFTs, attracting music lovers who appreciate their work and
                  wish to support them directly.
                </p>
              </div>
            </div>
            <div className="item" style={{ padding: '5px' }}>
              <div className="Package_list">
                <img
                  className="lazy"
                  src="./assets/images/house.webp"
                  alt="NFT for Real Estate"
                />
                <h3>Real Estate</h3>
                <p  style={{ color: "#fff" }}>
                  Through tokenization, virtual land and real estate
                  properties can be listed as NFTs on our platform, allowing
                  interested buyers to purchase.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>

  )
}

export default Sec6