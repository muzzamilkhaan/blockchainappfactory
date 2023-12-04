import React from 'react'

function Sec12() {
  return (
//     <section className="common_spacing bgg">
//   <div className="container">
//     <div className="section-title text-center">
//       <div className="sec_tit mb20">
//         <h3 className="section-title underline mb20 font_wei">
//           Inspiring NFT Marketplace Projects We Brought to the World
//         </h3>
//       </div>
//     </div>
//     <div className="row">
//       <div className="col-md-12">
//         <div className="blog-slider swiper-container-fade swiper-container-horizontal">
//           <div
//             className="blog-slider__wrp swiper-wrapper"
//             style={{ transitionDuration: "0ms" }}
//           >
//             <div
//               className="blog-slider__item swiper-slide swiper-slide-duplicate"
//               data-swiper-slide-index={9}
//               style={{
//                 width: 750,
//                 opacity: 1,
//                 transform: "translate3d(0px, 0px, 0px)",
//                 transitionDuration: "0ms"
//               }}
//             >
//               <div className="blog-slider__img">
//                 {" "}
//                 <img
//                   className=""
//                   data-src="images/nftm/slider/mintore-1.webp"
//                   alt="Minotre"
//                   title="Minotre"
//                   src="images/nftm/slider/mintore-1.webp"
//                 />{" "}
//               </div>
//               <div className="blog-slider__content">
//                 <div className="blog-slider__title">Minotre</div>
//                 <div className="blog-slider__text">
//                   A general-purpose NFT marketplace native to Polygon, Minotre
//                   aims to bring numerous types of users together by providing
//                   portals to create, list, and sell NFTs. We developed the
//                   marketplace application with high-end technological features
//                   that power it to work seamlessly, even during high user
//                   traffic.
//                 </div>
//               </div>
//             </div>
//             <div
//               className="blog-slider__item swiper-slide"
//               data-swiper-slide-index={0}
//               style={{
//                 width: 750,
//                 opacity: 1,
//                 transform: "translate3d(-750px, 0px, 0px)",
//                 transitionDuration: "0ms"
//               }}
//             >
//               <div className="blog-slider__img">
//                 {" "}
//                 <img
//                   className=""
//                   data-src="images/nftm/enigma-art.webp"
//                   alt="Enigma Art"
//                   title="Enigma Art"
//                   src="images/nftm/enigma-art.webp"
//                 />{" "}
//               </div>
//               <div className="blog-slider__content">
//                 <div className="blog-slider__title">Enigma Art</div>
//                 <div className="blog-slider__text">
//                   Enigma Art has been a pioneering example of our prowess in
//                   building NFT marketplaces for the creator community. Our
//                   emphasis here was to launch an application that showered
//                   immense support to creators from everywhere, supplemented by
//                   the best technologies implemented by our seasoned team of
//                   developers.
//                 </div>
//                 <div className="txt">
//                   <a
//                     href="https://www.blockchainappfactory.com/case-study/enigma-art-nft-marketplace"
//                     className="nectar-button medium regular accent-color regular-button gra nec-btn necbtn"
//                     id="cyz"
//                     style={{
//                       borderRadius: "30px !important",
//                       padding: "10px 25px",
//                       textAlign: "center",
//                       background: "#03b787",
//                       color: "#fff"
//                     }}
//                     target="_blank"
//                   >
//                     View CaseStudy
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="blog-slider__item swiper-slide"
//               data-swiper-slide-index={1}
//               style={{
//                 width: 750,
//                 opacity: 1,
//                 transform: "translate3d(-1500px, 0px, 0px)",
//                 transitionDuration: "0ms"
//               }}
//             >
//               <div className="blog-slider__img">
//                 {" "}
//                 <img
//                   className=""
//                   data-src="images/nftm/carrot-factory.webp"
//                   alt="Carrot Factory"
//                   title="Carrot Factory"
//                   src="images/nftm/carrot-factory.webp"
//                 />{" "}
//               </div>
//               <div className="blog-slider__content">
//                 <div className="blog-slider__title">Carrot Factory</div>
//                 <div className="blog-slider__text">
//                   An NFT marketplace representing the culinary industry, Carrot
//                   Factory is a unique project that connects culinary lovers,
//                   restaurants, businesses, and creators under one roof. We came
//                   up with a brilliant solution coupled with sophisticated
//                   blockchain technology to offer the client an app worth
//                   cherishing.
//                 </div>
//                 <div className="txt">
//                   {" "}
//                   <a
//                     href="https://www.blockchainappfactory.com/case-study/carrot-factory-nft-restaurant-marketplace"
//                     className="nectar-button medium regular accent-color regular-button gra nec-btn necbtn"
//                     id="cyz"
//                     style={{
//                       borderRadius: "30px !important",
//                       padding: "10px 25px",
//                       textAlign: "center",
//                       background: "#03b787",
//                       color: "#fff"
//                     }}
//                     target="_blank"
//                   >
//                     View CaseStudy
//                   </a>{" "}
//                 </div>
//               </div>
//             </div>
//             <div
//               className="blog-slider__item swiper-slide"
//               data-swiper-slide-index={2}
//               style={{
//                 width: 750,
//                 opacity: 1,
//                 transform: "translate3d(-2250px, 0px, 0px)",
//                 transitionDuration: "0ms"
//               }}
//             >
//               <div className="blog-slider__img">
//                 {" "}
//                 <img
//                   className=""
//                   data-src="images/nftm/Champagne.webp"
//                   alt="Champagne Wives Club"
//                   title="Champagne Wives Club"
//                   src="images/nftm/Champagne.webp"
//                 />{" "}
//               </div>
//               <div className="blog-slider__content">
//                 <div className="blog-slider__title">Champagne Wives Club</div>
//                 <div className="blog-slider__text">
//                   Champagne Wives Club represents women's empowerment celebrated
//                   by virtual wine events through artistic NFTs. We take immense
//                   pride in creating the platform by tapping into some of the
//                   latest blockchain stacks that enabled it to provide such novel
//                   advantages and unique experiences to women worldwide.
//                 </div>
//                 <div className="txt">
//                   {" "}
//                   <a
//                     href="https://www.blockchainappfactory.com/case-study/champagne-wives-club-nft-marketplace"
//                     className="nectar-button medium regular accent-color regular-button gra nec-btn necbtn"
//                     id="cyz"
//                     style={{
//                       borderRadius: "30px !important",
//                       padding: "10px 25px",
//                       textAlign: "center",
//                       background: "#03b787",
//                       color: "#fff"
//                     }}
//                     target="_blank"
//                   >
//                     View CaseStudy
//                   </a>{" "}
//                 </div>
//               </div>
//             </div>
//             <div
//               className="blog-slider__item swiper-slide"
//               data-swiper-slide-index={3}
//               style={{
//                 width: 750,
//                 opacity: 1,
//                 transform: "translate3d(-3000px, 0px, 0px)",
//                 transitionDuration: "0ms"
//               }}
//             >
//               <div className="blog-slider__img">
//                 {" "}
//                 <img
//                   className=""
//                   data-src="images/nftm/HUMXN-NFT.webp"
//                   alt="HUMXN NFT"
//                   title="HUMXN NFT"
//                   src="images/nftm/HUMXN-NFT.webp"
//                 />{" "}
//               </div>
//               <div className="blog-slider__content">
//                 <div className="blog-slider__title">HUMXN NFT</div>
//                 <div className="blog-slider__text">
//                   The HUMXN NFT marketplace is a metaverse-centric NFT
//                   marketplace where people can create their own avatars and be
//                   part of the in-app Web3 games. From intuitive interfaces to a
//                   marketplace supporting diverse asset types, we have
//                   implemented an ocean of features to make the platform
//                   appealing to users.
//                 </div>
//                 <div className="txt">
//                   {" "}
//                   <a
//                     href="https://www.blockchainappfactory.com/case-study/humxn-metaverse-nft-gaming-marketplace"
//                     className="nectar-button medium regular accent-color regular-button gra nec-btn necbtn"
//                     id="cyz"
//                     style={{
//                       borderRadius: "30px !important",
//                       padding: "10px 25px",
//                       textAlign: "center",
//                       background: "#03b787",
//                       color: "#fff"
//                     }}
//                     target="_blank"
//                   >
//                     View CaseStudy
//                   </a>{" "}
//                 </div>
//               </div>
//             </div>
//             <div
//               className="blog-slider__item swiper-slide swiper-slide-prev"
//               data-swiper-slide-index={4}
//               style={{
//                 width: 750,
//                 opacity: 1,
//                 transform: "translate3d(-3750px, 0px, 0px)",
//                 transitionDuration: "0ms"
//               }}
//             >
//               <div className="blog-slider__img">
//                 {" "}
//                 <img
//                   className=""
//                   data-src="images/nftm/spottrade.webp"
//                   alt="Spot Trade"
//                   title="Spot Trade"
//                   src="images/nftm/spottrade.webp"
//                 />{" "}
//               </div>
//               <div className="blog-slider__content">
//                 <div className="blog-slider__title">Spot Trade</div>
//                 <div className="blog-slider__text">
//                   An NFT marketplace focusing on virtual items across all
//                   creative niches, Spot Trade stands tall with its
//                   community-centric nature. It is among the small list of
//                   platforms run entirely by the community while appealing to the
//                   wider market consisting of creators, collectors, fans, and NFT
//                   traders.
//                 </div>
//                 <div className="txt">
//                   {" "}
//                   <a
//                     href="https://www.blockchainappfactory.com/case-study/spot-trade-nft-music-marketplace"
//                     className="nectar-button medium regular accent-color regular-button gra nec-btn necbtn"
//                     id="cyz"
//                     style={{
//                       borderRadius: "30px !important",
//                       padding: "10px 25px",
//                       textAlign: "center",
//                       background: "#03b787",
//                       color: "#fff"
//                     }}
//                     target="_blank"
//                   >
//                     View CaseStudy
//                   </a>{" "}
//                 </div>
//               </div>
//             </div>
//             <div
//               className="blog-slider__item swiper-slide swiper-slide-active"
//               data-swiper-slide-index={5}
//               style={{
//                 width: 750,
//                 opacity: 1,
//                 transform: "translate3d(-4500px, 0px, 0px)",
//                 transitionDuration: "0ms"
//               }}
//             >
//               <div className="blog-slider__img">
//                 {" "}
//                 <img
//                   className=""
//                   data-src="images/nftm/slider/mintyswap-1.webp"
//                   alt="MintySwap"
//                   title="MintySwap"
//                   src="images/nftm/slider/mintyswap-1.webp"
//                 />{" "}
//               </div>
//               <div className="blog-slider__content">
//                 <div className="blog-slider__title">MintySwap</div>
//                 <div className="blog-slider__text">
//                   MintySwap makes two things seamless in the world of NFTs –
//                   Minting and Swapping. Built with such specialized functions,
//                   the platform has earned a massive reputation for facilitating
//                   decentralized NFT exchange trades at speeds the market has
//                   never seen before, thanks to our scalability provisions.
//                 </div>
//               </div>
//             </div>
//             <div
//               className="blog-slider__item swiper-slide swiper-slide-next"
//               data-swiper-slide-index={6}
//               style={{
//                 width: 750,
//                 opacity: 0,
//                 transform: "translate3d(-5250px, 0px, 0px)",
//                 transitionDuration: "0ms"
//               }}
//             >
//               <div className="blog-slider__img">
//                 {" "}
//                 <img
//                   className=""
//                   data-src="images/nftm/slider/woonky-1.webp"
//                   alt="Woonkly"
//                   title="Woonkly"
//                   src="images/nftm/slider/woonky-1.webp"
//                 />{" "}
//               </div>
//               <div className="blog-slider__content">
//                 <div className="blog-slider__title">Woonkly</div>
//                 <div className="blog-slider__text">
//                   As an NFT marketplace supplementing a decentralized social
//                   media network, Woonkly has garnered recognition for its
//                   support of NFTs backing artworks and music clips. The
//                   platform’s success is mainly due to its seamless functionality
//                   and rich user-end elements powered by our experienced
//                   developers.
//                 </div>
//               </div>
//             </div>
//             <div
//               className="blog-slider__item swiper-slide"
//               data-swiper-slide-index={7}
//               style={{
//                 width: 750,
//                 opacity: 0,
//                 transform: "translate3d(-6000px, 0px, 0px)",
//                 transitionDuration: "0ms"
//               }}
//             >
//               <div className="blog-slider__img">
//                 {" "}
//                 <img
//                   className=""
//                   data-src="images/nftm/slider/plastiks-1.webp"
//                   alt="Plastiks"
//                   title="Plastiks"
//                   src="images/nftm/slider/plastiks-1.webp"
//                 />{" "}
//               </div>
//               <div className="blog-slider__content">
//                 <div className="blog-slider__title">Plastiks</div>
//                 <div className="blog-slider__text">
//                   Plastiks serves as a sustainability initiative empowered by
//                   NFTs, as the platform lets people contribute to the global
//                   fight against plastic pollution. Our seasoned developer team
//                   built an application that prioritizes accessibility and user
//                   intuitiveness while utilizing high-grade blockchain
//                   technology.
//                 </div>
//               </div>
//             </div>
//             <div
//               className="blog-slider__item swiper-slide"
//               data-swiper-slide-index={8}
//               style={{
//                 width: 750,
//                 opacity: 0,
//                 transform: "translate3d(-6750px, 0px, 0px)",
//                 transitionDuration: "0ms"
//               }}
//             >
//               <div className="blog-slider__img">
//                 {" "}
//                 <img
//                   className=""
//                   data-src="images/nftm/slider/panda-girl-1.webp"
//                   alt="Panda Girl"
//                   title="Panda Girl"
//                   src="images/nftm/slider/panda-girl-1.webp"
//                 />{" "}
//               </div>
//               <div className="blog-slider__content">
//                 <div className="blog-slider__title">Panda Girl</div>
//                 <div className="blog-slider__text">
//                   A BNB Chain-native NFT collection-cum-marketplace, the Panda
//                   Girl ecosystem supports hand-drawn artworks based on the
//                   brand’s unique theme. We launched the platform complete with
//                   NFT collectibles through a team of designers, artists, and
//                   developers who ensured the resultant app had the highest
//                   quality.
//                 </div>
//               </div>
//             </div>
//             <div
//               className="blog-slider__item swiper-slide"
//               data-swiper-slide-index={9}
//               style={{
//                 width: 750,
//                 opacity: 0,
//                 transform: "translate3d(-7500px, 0px, 0px)",
//                 transitionDuration: "0ms"
//               }}
//             >
//               <div className="blog-slider__img">
//                 {" "}
//                 <img
//                   className=""
//                   data-src="images/nftm/slider/mintore-1.webp"
//                   alt="Minotre"
//                   title="Minotre"
//                   src="images/nftm/slider/mintore-1.webp"
//                 />{" "}
//               </div>
//               <div className="blog-slider__content">
//                 <div className="blog-slider__title">Minotre</div>
//                 <div className="blog-slider__text">
//                   A general-purpose NFT marketplace native to Polygon, Minotre
//                   aims to bring numerous types of users together by providing
//                   portals to create, list, and sell NFTs. We developed the
//                   marketplace application with high-end technological features
//                   that power it to work seamlessly, even during high user
//                   traffic.
//                 </div>
//               </div>
//             </div>
//             <div
//               className="blog-slider__item swiper-slide swiper-slide-duplicate"
//               data-swiper-slide-index={0}
//               style={{
//                 width: 750,
//                 opacity: 0,
//                 transform: "translate3d(-8250px, 0px, 0px)",
//                 transitionDuration: "0ms"
//               }}
//             >
//               <div className="blog-slider__img">
//                 {" "}
//                 <img
//                   className=""
//                   data-src="images/nftm/enigma-art.webp"
//                   alt="Enigma Art"
//                   title="Enigma Art"
//                   src="images/nftm/enigma-art.webp"
//                 />{" "}
//               </div>
//               <div className="blog-slider__content">
//                 <div className="blog-slider__title">Enigma Art</div>
//                 <div className="blog-slider__text">
//                   Enigma Art has been a pioneering example of our prowess in
//                   building NFT marketplaces for the creator community. Our
//                   emphasis here was to launch an application that showered
//                   immense support to creators from everywhere, supplemented by
//                   the best technologies implemented by our seasoned team of
//                   developers.
//                 </div>
//                 <div className="txt">
//                   <a
//                     href="https://www.blockchainappfactory.com/case-study/enigma-art-nft-marketplace"
//                     className="nectar-button medium regular accent-color regular-button gra nec-btn necbtn"
//                     id="cyz"
//                     style={{
//                       borderRadius: "30px !important",
//                       padding: "10px 25px",
//                       textAlign: "center",
//                       background: "#03b787",
//                       color: "#fff"
//                     }}
//                     target="_blank"
//                   >
//                     View CaseStudy
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="blog-slider__pagination swiper-pagination-clickable swiper-pagination-bullets">
//             <span
//               className="swiper-pagination-bullet"
//               tabIndex={0}
//               role="button"
//               aria-label="Go to slide 1"
//             />
//             <span
//               className="swiper-pagination-bullet"
//               tabIndex={0}
//               role="button"
//               aria-label="Go to slide 2"
//             />
//             <span
//               className="swiper-pagination-bullet"
//               tabIndex={0}
//               role="button"
//               aria-label="Go to slide 3"
//             />
//             <span
//               className="swiper-pagination-bullet"
//               tabIndex={0}
//               role="button"
//               aria-label="Go to slide 4"
//             />
//             <span
//               className="swiper-pagination-bullet"
//               tabIndex={0}
//               role="button"
//               aria-label="Go to slide 5"
//             />
//             <span
//               className="swiper-pagination-bullet swiper-pagination-bullet-active"
//               tabIndex={0}
//               role="button"
//               aria-label="Go to slide 6"
//             />
//             <span
//               className="swiper-pagination-bullet"
//               tabIndex={0}
//               role="button"
//               aria-label="Go to slide 7"
//             />
//             <span
//               className="swiper-pagination-bullet"
//               tabIndex={0}
//               role="button"
//               aria-label="Go to slide 8"
//             />
//             <span
//               className="swiper-pagination-bullet"
//               tabIndex={0}
//               role="button"
//               aria-label="Go to slide 9"
//             />
//             <span
//               className="swiper-pagination-bullet"
//               tabIndex={0}
//               role="button"
//               aria-label="Go to slide 10"
//             />
//           </div>
//           <span
//             className="swiper-notification"
//             aria-live="assertive"
//             aria-atomic="true"
//           />
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
<></>

  )
}

export default Sec12