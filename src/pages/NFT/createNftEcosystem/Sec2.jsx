import React, { useState, useEffect, useRef } from "react";
import { SecTwo } from "./createNftEcosystemComp";
import { H3, H2 } from "../../../components";
const Sec2 = () => {
  const [isSticky, setSticky] = useState(false);
  const [footerOffset, setFooterOffset] = useState(0);
  const innerWrapperRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust the scroll position threshold as needed
      const scrollPosition = window.scrollY;
      const threshold = 400;

      // Check if the scroll position is beyond the threshold
      setSticky(scrollPosition > threshold);
    };
    const handleResize = () => {
      console.log("inside handleSize");
      // Check if innerWrapperRef.current is not null before accessing its properties
      if (innerWrapperRef.current) {
        // Calculate the distance between the bottom of the inner wrapper and the top of the footer
        const innerWrapperBottom =
          innerWrapperRef.current.getBoundingClientRect().bottom;
        const footerTop = document
          .getElementById("footerID")
          .getBoundingClientRect().top;
        setFooterOffset(innerWrapperBottom - footerTop);
        // console.log("innerWrapperBottom:", innerWrapperBottom);
        // console.log("footerTop:", footerTop);
        // console.log("footerOffset:", innerWrapperBottom - footerTop);
      }
    };
    window.addEventListener("resize", handleResize);

    handleResize(); // Call it once to set initial values

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <SecTwo>
      <div className=" ">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 text-left">
              <div className="separate">
                <p className="text-left">
                  Non-Fungible Tokens (NFTs) are one of the cutting-edge
                  technology developments of blockchain that has disrupted
                  diverse industries with its immutable ownership nature. Its
                  ability to store data on the blockchain makes it a lifesaver
                  for digital content and proves the ownership of assets anytime
                  and anywhere in the world. By meaning assets, it can be
                  anything from artwork, music, videos, in-game collectibles,
                  digital collectibles, and much more. Acknowledging the
                  potential of NFTs, many reputed brands have already started
                  making the best use of them to leverage their global presence,
                  build a strong web3 community, and enhance loyalty programs.
                  <br />
                  <br />
                  If you are a person seeking an ideal way to develop your NFT
                  ecosystem, then this article will definitely assist you with
                  the key steps right from scratch - Keep reading!
                </p>
                <ul>
                  <li>
                    <a href="#1">
                      <p>What is an NFT?</p>
                    </a>
                  </li>
                  <li>
                    <a href="#2" style={{ color: "#00a9e2" }}>
                      <p>What are the Advantages of NFTs?</p>
                    </a>
                  </li>
                  <li>
                    <a href="#3" style={{ color: "#00a9e2" }}>
                      <p>Applications of NFTs in Diverse Industries</p>
                    </a>
                  </li>
                  <li>
                    <a href="#4" style={{ color: "#00a9e2" }}>
                      <p>A Guide to Creating an NFT Ecosystem</p>
                    </a>
                  </li>
                  <li>
                    <a href="#5" style={{ color: "#00a9e2" }}>
                      <p>Revenue Model for Your NFT Ecosystem</p>
                    </a>
                  </li>
                  <li>
                    <a href="#6" style={{ color: "#00a9e2" }}>
                      <p>
                        Utility-backed NFTs: What Sets Them Apart From the
                        Regular?
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="separate" id={1}>
                <h2 className="sec_tit text-left">What is an NFT?</h2>
                <p>
                  Have you ever thought why a boring monkey or other funky
                  characters or even digital artworks in the crypto realm are
                  selling for thousands and millions of dollars? Why do people
                  show a big interest in buying them? The answer is very simple.
                  It's just because they are all NFTs, which are the latest form
                  of digital assets.
                </p>
                <p>
                  An NFT is a unique and verifiable cryptographic token that
                  resides on the blockchain. It stores the data in the
                  distributed ledger and makes it highly impossible for anyone
                  to alter the information. Furthermore, NFTs jounce off
                  copyright infringement issues of digital content with its
                  exclusive ownership rights. It opens a brand-new door for
                  creators and artists worldwide and allows them to monetize
                  their skills by converting their masterpieces into digital
                  collectibles.{" "}
                </p>
              </div>
              <div className="separate" id={2}>
                <h2 className="sec_tit text-left">
                  What are the Advantages of NFTs?
                </h2>
                <h3>Representing 1/1 Assets:</h3>
                <p>
                  NFTs give users a remarkable opportunity to represent unique,
                  one-of-one, and authentic assets by safeguarding the
                  information in the blockchain.{" "}
                </p>
                <h3>Master Rights:</h3>
                <p>
                  It provides unforgeable rights to its holders through the
                  support of smart contracts written on the blockchain.{" "}
                </p>
                <h3>Tradability:</h3>
                <p>
                  These digital collectibles are tradable and by simply using a
                  crypto wallet, an individual can store the assets securely.{" "}
                </p>
                <h3>Economic Opportunities:</h3>
                <p>
                  It significantly assists creators with good economic
                  opportunities by allowing them to tokenize assets and
                  eliminate intermediaries.
                </p>
                <h3>Divisibility:</h3>
                <p>
                  {" "}
                  The system of fractional NFTs provides a chance for everyone
                  to own an NFT by fractionalizing a complete asset.
                </p>
              </div>
              <div className="separate" id={3}>
                <h2 className="sec_tit text-left">
                  Applications of NFTs in Diverse Industries
                </h2>
                <p>
                  While NFTs are getting mainstream, brands, investors, and
                  venture capitalists are endlessly watching its curves to get
                  the most out of it. Below are some of the sectors where NFTs
                  are in prime form.
                </p>
                <h3>Identity Management:</h3>
                <p>
                  One of the phenomenal use cases of NFTs is identity
                  management. All the records of education, certifications,
                  health, etc., can be converted into NFTs. These tokens will
                  represent the proofs digitally and eliminate the need to carry
                  original documents everywhere.{" "}
                </p>
                <h3>Logistics: </h3>
                <p>
                  NFTs innovate the logistics industry by leaving digital
                  footprints in the form of token IDs. It transforms the
                  conventional arduous and lengthy process through the simplest
                  way to track and provide updates in real-time with the help of
                  blockchain.{" "}
                </p>
                <h3>Real Estate:</h3>
                <p>
                  With its ability to represent both tangible and intangible
                  assets, real estate is one of the crucial applications of
                  NFTs. Real-world properties can be tokenized into NFTs and
                  make the process paperless and straightforward without any
                  complexities.{" "}
                </p>
                <h3>Healthcare:</h3>
                <p>
                  The prevailing healthcare sector is plagued with poor handling
                  of health records and shows a poor rate of efficiency and
                  accuracy. Having these records as NFTs will enable hospitals
                  or a group of people to access the data instantly. Truly
                  convenient and faster!
                </p>
                <h3>Gaming: </h3>
                <p>
                  The use of NFTs in the gaming industry has given gamers an
                  incredible chance to monetize their gameplay. They can own the
                  in-game assets as NFTs and can trade with other potential
                  players to make good profits overall.{" "}
                </p>
                <p>
                  Apart from these sectors, the other common industries include
                  art, music, collectibles, web domains, fashion, sports,
                  e-commerce, and the list goes on. Put together, NFTs are the
                  best suit for any use case where the concept of "ownership"
                  kicks in.{" "}
                </p>
              </div>
              <div className="separate" id={4}>
                <h2 className="sec_tit text-left">
                  A Guide to Creating an NFT Ecosystem
                </h2>
                <p>
                  The following are the steps that well explain the creation of
                  an NFT ecosystem.
                </p>
                <h3 style={{ fontSize: "20px " }}>Step 1: Asset Creation</h3>
                <p>
                  For any NFT initiative, the base character is cardinal. This
                  is because every generative art collection will have a common
                  character on which the attributes will be defined. This is the
                  first stage, where you have to decide on your base character.
                  It can be a Tiger, Ape, Robot, Alien, or anything that strikes
                  your creativity. Confirming this underlying asset will give
                  you a good start to your project.{" "}
                </p>
                <h3 style={{ fontSize: "20px " }}>
                  Step 2: Designing Base Character &amp; Attributes{" "}
                </h3>
                <p>
                  Once the base asset is finalized, proficient artists can be
                  employed to design the characters as well as their attributes.
                  The attributes play a paramount role in generating thousands
                  and thousands of unique pieces. These traits mostly feature
                  backgrounds, costumes, eyewear, headwear, special accessories,
                  hairstyle, etc. These attributes will be stitched with the
                  base character to turn it into a complete collectible. It is
                  these traits that will decide the rarity score of the NFTs.
                  The rarer the trait, the higher will be the rarity score for
                  an NFT. The higher the rarity score, the lower will be the
                  rarity rank, which in turn makes the NFT highly demanded.{" "}
                  <br />
                  Basically, the rarity of the NFTs can be checked with four
                  different models. It includes,
                </p>
                <div style={{ paddingLeft: 20 }}>
                  <h4
                    style={{ fontFamily: "Lato,sans-serif", fontSize: "17px" }}
                  >
                    Trait Rarity Model:{" "}
                  </h4>
                  <p>
                    In this model, only one of the rarest traits in an NFT will
                    be considered instead of counting all available traits in
                    the piece. For eg: For every trait that an NFT has, there
                    will be a percentage that denotes the total number of people
                    having the same trait in the whole collection. Consider an
                    NFT with background, eyes, and mouth traits. It will then
                    show the background (13%), eyes (5%), and mouth (7%). So,
                    only the "eyes" trait will be considered for checking the
                    rarity score, and the score will be 5%. The limitation of
                    this model is that it doesn't include the other traits in
                    the same NFT.
                  </p>
                  <h4
                    style={{ fontFamily: "Lato,sans-serif", fontSize: "17px" }}
                  >
                    Average/Mean Trait Rarity Model:{" "}
                  </h4>
                  <p>
                    This model includes all the traits that an NFT has and
                    utilizes averaging/mean method to calculate the rarity. It
                    is calculated by the formula, <br />
                    Average Trait Rarity = (Sum of traits in an NFT) / (Total
                    number of traits in an NFT)
                    <br />
                    For instance, considering the aforementioned example, it
                    will be, <br />
                    Average Trait Rarity = (13+5+7) / (3) = 8.33%
                  </p>
                  <h4
                    style={{ fontFamily: "Lato,sans-serif", fontSize: "17px" }}
                  >
                    Statistical Rarity Model:
                  </h4>
                  <p>
                    This is a one-of-a-kind rarity model that calculates the
                    score by multiplying all traits together. This will
                    determine the overall rarity score of an NFT.
                    <br />
                    With the same example, the statistical rarity score =
                    (13%)*(5%)*(7%) = 0.0004555
                  </p>
                  <h4
                    style={{ fontFamily: "Lato,sans-serif", fontSize: "17px" }}
                  >
                    {" "}
                    The Rarity Score Model:
                  </h4>
                  <p>
                    This is the widely used and the most precise way to
                    calculate the rarity of an NFT. It has the formula, <br />
                    Rarity Score = 1 / {"{"}(Number of NFTs with that trait
                    value) / (Total number of NFTs in the collection){"}"}{" "}
                    <br />
                    (or)
                    <br />
                    Rarity Score = 1 / (Trait Rarity of that trait value)
                  </p>
                </div>
                <h3 style={{ fontSize: "20px !important" }}>
                  Step 3: Build your NFT Platform
                </h3>
                <p>
                  When the assets are ready, building the right platform to
                  launch them is the next step. These NFT platforms give life to
                  the NFTs and ensure a seamless experience of purchasing,
                  selling, trading, minting, and bidding on the assets.
                  Depending on the business requirements, you can launch your
                  NFT platform in two ways.
                </p>
                <ul>
                  <li>NFT Launchpad </li>
                  <li>NFT Marketplace </li>
                </ul>
              </div>
              <div className="separate">
                <h2
                  style={{ fontSize: "18px !important" }}
                  className="sec_tit text-left"
                >
                  NFT Launchpad Development:{" "}
                </h2>
                <p>
                  NFT Launchpad is a platform suitable for owners who wish to
                  have the scope of only primary sales for their NFTs. This
                  platform will allow users to mint the NFTs through either the
                  fixed-price sale method or the auction sale method.
                  Considering this to be a decentralized platform, it will have
                  a wallet connect option, where users can directly connect
                  their wallet, such as MetaMask, to the platform and can
                  purchase the digital assets. This platform will not have the
                  scope to perform secondary trading, and users can take the
                  purchased NFTs to open marketplaces like OpenSea to flip them.
                  Our NFT launchpad development will offer you a feature-rich
                  platform fully customized to meet your business needs.{" "}
                </p>
                <p>
                  <b>
                    {" "}
                    Tech Stack Behind our NFT Launchpad Development Service
                  </b>{" "}
                  <br />
                  <b>Front-End Technologies:</b> HTML5, CSS, React JS <br />
                  <b>Back-End Technologies:</b> Ruby on Rails, PHP - Laravel{" "}
                  <br />
                  <b>Smart Contract Technologies:</b> Solidity
                </p>
                <br />
                <p>
                  Asset Storage in Pinata:
                  <br />
                  Insert below configuration in your credential file:
                </p>
                <div className="code">
                  <code> {"{"}</code> <br />
                  <code> "pinata":{"{"}</code>
                  <br />
                  <code> "api_key":"api-key",</code>
                  <br />
                  <code> "api_secret":"secret-value",</code>
                  <br />
                  <code>
                    {" "}
                    "base_url":"https://api.pinata.cloud/pinning/pinFileToIPFS"
                  </code>
                  <br />
                  <code> {"}"}</code>
                  <br />
                  <code>{"}"}</code>
                </div>
                <br />
                <p>
                  <b>File upload using pinata API:</b>
                  <br />
                  Example: Rails code as below.
                </p>
                <div className="code">
                  <code>def upload(collection)</code>
                  <br />
                  <code>attachment = collection.attachment</code>
                  <br />
                  <code>
                    file_path = ActiveStorage::Blob.service.send(:path_for,
                    attachment.key)
                  </code>
                  <br />
                  <code>content_type = attachment.blob.content_type</code>
                  <br />
                  <code>
                    file_io = Faraday::UploadIO.new(file_path, content_type)
                  </code>
                  <br />
                  <code>ok, image_ipfs_hash = send_file(file_io)</code>
                  <br />
                  <code>return unless ok</code>
                  <br />
                  <code>metadata = {"{"}</code>
                  <br />
                  <code> name: collection.name,</code>
                  <br />
                  <code> description: collection.description,</code>
                  <br />
                  <code> image: 'https://ipfs.io/ipfs/' + image_ipfs_hash</code>
                  <br />
                  <code> {"}"}</code>
                  <br />
                  <code>
                    {" "}
                    File.write("tmp/metadata.json", metadata.to_json)
                  </code>
                  <br />
                  <code>
                    {" "}
                    metadata_io = Faraday::UploadIO.new("tmp/metadata.json",
                    'application/json')
                  </code>
                  <br />
                  <code> ok, metadata_ipfs_hash = send_file(metadata_io)</code>
                  <br />
                  <code>
                    {" "}
                    collection.update(image_hash: image_ipfs_hash,
                    metadata_hash: metadata_ipfs_hash)
                  </code>
                  <br />
                  <code> ok ? metadata_ipfs_hash : nil</code>
                  <br />
                  <code>end</code>
                </div>
              </div>
              <div className="separate">
                <h2
                  style={{ fontSize: "18px !important" }}
                  className="sec_tit text-left"
                >
                  NFT Marketplace Development{" "}
                </h2>
                <p>
                  On the flip side, our NFT marketplace creation service is for
                  entrepreneurs who wish to provide both primary and secondary
                  trade in the same platform. It is a typical platform that will
                  allow your users to buy, sell, trade, mint, bid, and hold NFTs
                  securely and easily within just a wink of an eye. Similar to a
                  launchpad, building your NFT marketplace will also allow your
                  users to trade NFTs in both the fixed price sale and auction
                  sale, depending on their interests. Through this development
                  service, you can launch a feature-rich, user-friendly, and
                  highly sophisticated marketplace that provides frictionless
                  transfer of NFTs all day.{" "}
                </p>
                <p>
                  <b>Tech Stack Behind our NFT Launchpad Development Service</b>{" "}
                  <br />
                  <b>Front-End Technologies:</b> HTML5, CSS, React JS
                  <br />
                  <b>Back-End Technologies:</b> Ruby on Rails, PHP - Laravel
                  <br />
                  <b>Smart Contract Technologies:</b> Solidity
                  <br />
                  <b>Storage Platform:</b> IPFS, Filecoin, Pinata
                </p>
              </div>
              <div className="cta1">
                <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12">
                  <h2>Make use of our White label NFT Marketplace Software</h2>
                  <p>Launch Your Exclusive NFT Marketplace</p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div className="txt">
                    {" "}
                    <br />
                    <a
                      href="https://www.blockchainappfactory.com/white-label-nft-marketplace"
                      className="nectar-button medium regular accent-color regular-button nec-btn"
                    >
                      <span>Explore More</span>
                    </a>
                  </div>
                </div>
                <div className="clearfix" />
              </div>
              <div className="separate">
                <h3 style={{ fontSize: "20px !important", marginTop: "30px" }}>
                  Step 4: Choosing a Suitable Blockchain{" "}
                </h3>
                <p>
                  Here's where you have to decide the blockchain network on
                  which you wish to build your NFT platform. We know that the
                  market has plenty of blockchain networks available, and the
                  ideal network can be chosen based on your business
                  requirements. We can create NFT marketplaces and NFT
                  launchpads development can be developed across a wide range of
                  networks, including
                </p>
                <ol>
                  <li>
                    {" "}
                    <img
                      className=""
                      data-src="images/home-new/eth.webp"
                      src="https://www.blockchainappfactory.com/images/home-new/eth.webp"
                    />{" "}
                    <p>Ethereum</p>{" "}
                  </li>
                  <li>
                    {" "}
                    <img
                      className=""
                      data-src="images/home-new/bsc.webp"
                      src="https://www.blockchainappfactory.com/images/home-new/bsc.webp"
                    />{" "}
                    <p>BNB Chain</p>{" "}
                  </li>
                  <li>
                    {" "}
                    <img
                      className=""
                      data-src="images/home-new/polygon.webp"
                      src="https://www.blockchainappfactory.com/images/home-new/polygon.webp"
                    />{" "}
                    <p>Polygon</p>{" "}
                  </li>
                  <li>
                    {" "}
                    <img
                      className=""
                      data-src="images/home-new/solana.webp"
                      src="https://www.blockchainappfactory.com/images/home-new/solana.webp"
                    />{" "}
                    <p>Solana</p>{" "}
                  </li>
                  <li>
                    {" "}
                    <img
                      className=""
                      data-src="images/home-new/harmony.webp"
                      src="https://www.blockchainappfactory.com/images/home-new/harmony.webp"
                    />{" "}
                    <p>Harmony</p>{" "}
                  </li>
                  <li>
                    {" "}
                    <img
                      className=""
                      data-src="images/home-new/avalanche.webp"
                      src="https://www.blockchainappfactory.com/images/home-new/avalanche.webp"
                    />{" "}
                    <p>Avalanche</p>{" "}
                  </li>
                  <li style={{ borderRight: 0 }}>
                    {" "}
                    <img
                      className=""
                      data-src="images/home-new/cardano.webp"
                      src="https://www.blockchainappfactory.com/images/home-new/cardano.webp"
                    />{" "}
                    <p>Cardano</p>{" "}
                  </li>
                </ol>
                <p>
                  Choosing the ideal blockchain network can always be
                  challenging. If reliability is your first choice, then you can
                  prefer Ethereum, one of the world's eminent blockchains. If
                  you wish to increase the adoption of NFTs worldwide at a low
                  gas fee, then Polygon, the layer-two solution for Ethereum.,
                  would top the list. If scalability is your option, then
                  sticking to Solana will be the right choice. Therefore, every
                  blockchain has its own advantages and disadvantages. Choose
                  your desired blockchain based on your demands.{" "}
                </p>
              </div>
              <div className="separate">
                <h3 style={{ fontSize: "20px !important" }}>
                  Step 5: Deploying Smart Contracts and Creating the NFTs
                </h3>
                <p>
                  After preferring the desired network, you have to deploy the
                  smart contracts in the chosen blockchain and tokenize the
                  digital artworks into NFTs. Each blockchain will have its own
                  NFT standards, similar to regular crypto token standards, and
                  developers will use them to create the NFT. For instance, if
                  your base network is Ethereum, some of the popular NFT
                  standards include,{" "}
                </p>
                <p>
                  Hardhat is a development environment that helps developers
                  compile, deploy, test, and debug their Ethereum applications.{" "}
                </p>
                <h3 style={{ fontSize: 16 }}>1. Install hardhat</h3>
                <div className="code">
                  <code> $ npm install --save-dev hardhat</code>
                </div>
                <h3 style={{ fontSize: 16 }}>
                  2. Run npx hardhat and select “Create an empty
                  hardhat.config.js”.
                </h3>
                <h3 style={{ fontSize: 16 }}>3. Install some Node packages</h3>
                <div className="code">
                  <code>
                    $ npm install --save-dev @nomiclabs/hardhat-waffle
                    ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
                    @openzeppelin/contracts dotenv hardhat-deploy
                  </code>
                </div>
                <h3 style={{ fontSize: 16 }}>4. Setting up the contract</h3>
                <ul>
                  <li>
                    <p>
                      Update the hardhat-config with
                      ethereum-network-credentials.
                    </p>
                  </li>
                  <li>
                    <p>
                      Create .env file in the root to store account private key.
                    </p>
                  </li>
                  <li>
                    <p>
                      Add Etherscan API key to .env file to verify the contract
                      on Etherscan.
                    </p>
                  </li>
                </ul>
                <h3 style={{ fontSize: 16 }}>Configuration File:</h3>
                <div className="code">
                  <code>require('dotenv').config();</code>
                  <br />
                  <code>require("@nomiclabs/hardhat-ethers");</code>
                  <br />
                  <code>require("@nomiclabs/hardhat-etherscan");</code>
                  <br />
                  <code>module.exports = {"{"}</code>
                  <br />
                  <code>networks: {"{"}</code>
                  <br />
                  <code>hardhat: {"{"}</code>
                  <br />
                  <code>{"}"},</code>
                  <br />
                  <code>ethereum: {"{"}</code>
                  <br />
                  <code>
                    url:
                    "https://eth-mainnet.g.alchemy.com/v2/process.env.RPC_KEY",
                  </code>
                  <br />
                  <code>accounts: [process.env.PRIVATE_KEY]</code>
                  <br />
                  <code>{"}"}</code>
                  <br />
                  <code>{"}"},</code>
                  <br />
                  <code>etherscan: {"{"}</code>
                  <br />
                  <code>apiKey: process.env.ETHERSCAN_API_KEY</code>
                  <br />
                  <code>{"}"},</code>
                  <br />
                  <code>solidity: {"{"}</code>
                  <br />
                  <code>version: "0.8.17",</code>
                  <br />
                  <code>settings: {"{"}</code>
                  <br />
                  <code>optimizer: {"{"}</code>
                  <br />
                  <code>enabled: true,</code>
                  <br />
                  <code>runs: 200</code>
                  <br />
                  <code>{"}"}</code>
                  <br />
                  <code>{"}"}</code>
                  <br />
                  <code>{"}"},</code>
                  <br />
                  <code>{"}"}</code>
                </div>
                <h3 style={{ fontSize: 16 }}>Deploy Script File:</h3>
                <div className="code">
                  <code>const hre = require("hardhat");</code>
                  <br />
                  <code>async function main() {"{"}</code>
                  <br />
                  <code>
                    const Sample = await
                    hre.ethers.getContractFactory("NFT721");
                  </code>
                  <br />
                  <code>const sample = await Sample.deploy();</code>
                  <br />
                  <code>await sample.deployed();</code>
                  <br />
                  <code>console.log(</code>
                  <br />
                  <code>
                    {" "}
                    `Sample NFT contract deployed to ${"{"}sample.address{"}"}`
                  </code>
                  <br />
                  <code>);</code>
                  <br />
                  <code>{"}"}</code>
                  <br />
                  <code>
                    // We recommend this pattern to be able to use async/await
                    everywhere
                  </code>
                  <br />
                  <code>// and properly handle errors.</code>
                  <br />
                  <code>main().catch((error) =&gt; {"{"}</code>
                  <br />
                  <code> console.error(error);</code>
                  <br />
                  <code> process.exitCode = 1;</code>
                  <br />
                  <code>{"}"});</code>
                </div>
                <h3 style={{ fontSize: 16 }}>Compile Contract:</h3>
                <div className="code">
                  <code>npx hardhat compile</code>
                  <br />
                </div>
                <h3 style={{ fontSize: 16 }}>Deploy:</h3>
                <div className="code">
                  <code>
                    npx hardhat run scripts/deploy.js --network ethereum
                  </code>
                </div>
                <p>The contract address will be printed on the terminal.</p>
                <p>
                  <strong>ERC721 / EIP721:</strong> A slightly advanced
                  non-fungible token standard that is used to represent each
                  token is unique. No two similar tokens of this standard can
                  hold the same data.{" "}
                </p>
                <div className="code">
                  <code>
                    function safeMint(address to, string memory uri) public
                    onlyOwner {"{"}
                  </code>
                  <br />
                  <code>uint256 tokenId = _tokenIdCounter.current();</code>
                  <br />
                  <code> _tokenIdCounter.increment();</code>
                  <br />
                  <code> _safeMint(to, tokenId);</code>
                  <br />
                  <code> _setTokenURI(tokenId, uri);</code>
                  <br />
                  <code>{"}"}</code>
                </div>
                <p>
                  <strong>ERC1155 / EIP1155: </strong> It is a multi-token
                  standard that utilizes a single smart contract to represent
                  both fungible and non-fungible tokens at once.
                </p>
                <p>
                  <strong>ERC2981 / EIP2981: </strong> It is a royalty standard
                  for Ethereum NFTs, where it supports creators with global
                  royalty across all the marketplaces for their NFTs.{" "}
                </p>
                <p>
                  <strong>ERC2309 / EIP2309: </strong> It is a consecutive
                  transfer extension for a standardized event emitted when
                  creating or transferring NFTs using consecutive token
                  identifiers.{" "}
                </p>
                <p>
                  <strong>ERC4519 / ERC4519: </strong> It is a standard for
                  SmartNFT, the one that is tied to a physical asset and has the
                  ability to ensure if it is genuine or not.{" "}
                </p>
                <p>
                  <strong>ERC4906 / EIP4906: </strong> This is an extension
                  standard that assists in updating the metadata event to those
                  EIP721 NFTs.{" "}
                </p>
                <p>
                  <strong>ERC4907 / EIP4907: </strong> This is a rental NFT
                  standard that allows users to rent their NFTs by transferring
                  ownership rights. It automatically withdraws the rights upon
                  the agreed period. <br />
                  <br />
                  If your base network is Binance Smart Chain, the following are
                  the NFT standards available.{" "}
                </p>
                <p>
                  <strong>BEP721: </strong> It is a non-fungible token standard
                  in the BSC network, similar to the ERC721 standard that makes
                  each token unique.{" "}
                </p>
                <p>
                  <strong>BEP1155: </strong> It is a multi-token standard that
                  combines the fungibility of the BEP20 standard and the
                  non-fungibility of the BEP721 standard in a single contract.{" "}
                  <br />
                  <br />
                  With these standards, you can deploy the smart contracts for
                  the NFT and convert the digital artworks into NFTs.{" "}
                </p>
                <h3 style={{ fontSize: "20px !important" }}>
                  Step 6: List the NFT for Sale
                </h3>
                <p>
                  Once the assets are tokenized into NFTs, they can now be
                  listed in the NFT platforms for sale. It can either be a
                  fixed-price sale or an auction sale, depending on the demand
                  of the NFTs. If you plan to launch a collection with 3-5
                  varieties of NFTs, then a blend of both listings will be the
                  right option. The hottest and most demanding pieces can be
                  listed on auction sale, while others are on fixed price sale.{" "}
                </p>
                <p>Sample code for NFT sale order</p>
                <div className="code">
                  <code>
                    async function signSellOrder(amount, decimals,
                    paymentAssetAddress, tokenId, assetAddress, collectionId){" "}
                    {"{"}
                  </code>
                  <br />
                  <code>try {"{"}</code>
                  <br />
                  <code>
                    amount = roundNumber(mulBy(amount, 10 ** decimals), 0);
                  </code>
                  <br />
                  <code>
                    var nonce_value = await getNonceValue(collectionId);
                  </code>
                  <br />
                  <code>
                    var messageHash =
                    ethers.utils.solidityKeccak256(["address","uint256","address","uint256","uint256"],[assetAddress,
                    tokenId, paymentAssetAddress, amount, nonce_value]);
                  </code>
                  <br />
                  <code>messageHash = ethers.utils.arrayify(messageHash);</code>
                  <br />
                  <code>var account = window.ethereum.selectedAddress</code>
                  <br />
                  <code>
                    var fixedPriceSignature = await
                    signer.signMessage(messageHash, account);
                  </code>
                  <br />
                  <code>
                    {" "}
                    return window.updateSignFixedSuccess(collectionId)
                  </code>
                  <br />
                  <code>
                    {"}"} catch (err) {"{"}
                  </code>
                  <br />
                  <code>
                    {" "}
                    return window.updateSignFixedFailed(err['message'])
                  </code>
                  <br />
                  <code>{"}"}</code>
                  <br />
                  <code>{"}"}</code>
                </div>
                <p>Sample code for transfer ownership</p>
                <div className="code">
                  <code>function transferOwnership(address newOwner)</code>
                  <br />
                  <code> external</code>
                  <br />
                  <code> onlyRole("ADMIN_ROLE")</code>
                  <br />
                  <code> returns (bool)</code>
                  <br />
                  <code>{"{"}</code>
                  <br />
                  <code> require(</code>
                  <br />
                  <code> newOwner != address(0),</code>
                  <br />
                  <code> "Ownable: new owner is the zero address"</code>
                  <br />
                  <code> );</code>
                  <br />
                  <code> _revokeRole("ADMIN_ROLE", owner);</code>
                  <br />
                  <code> emit OwnershipTransferred(owner, newOwner);</code>
                  <br />
                  <code> owner = newOwner;</code>
                  <br />
                  <code> _setupRole("ADMIN_ROLE", newOwner);</code>
                  <br />
                  <code> return true;</code>
                  <br />
                  <code> {"}"}</code>
                </div>
                <h3 style={{ fontSize: "20px !important" }}>
                  Step 7: NFT Aggregator Platform - The Universal Marketplace
                </h3>
                <p>
                  As a decentralized NFT marketplace, NFT aggregators are the
                  hottest trends worldwide. It simplifies the purchase by
                  aggregating all the essential data of a particular NFT listed
                  across other marketplaces under your platform. It functions as
                  a unified interface, provides a clear picture of the market,
                  and helps your users to arrive at a purchase decision.{" "}
                </p>
                <p>
                  The best part of the NFT aggregator is that it allows your
                  users to purchase NFTs in bulk. Similar to an e-commerce
                  platform, the marketplace will have an add-to-cart
                  functionality where users can purchase the NFTs listed on
                  other marketplaces directly from your platform in bulk
                  quantity. This greatly benefits them by reducing the overall
                  gas fee.
                </p>
                <p>
                  If you have plans to launch an open NFT ecosystem, then NFT
                  aggregator platform development would further increase your
                  scope with amazing features and functionalities.{" "}
                </p>
              </div>
              <div className="separate">
                <h2 className="sec_tit text-left">
                  NFT Aggregator Platform Development:{" "}
                </h2>
                <p>
                  The development process of the NFT aggregator platform
                  development is more or less similar to a regular process
                  involved in building an NFT marketplace. Some of the main
                  differences that these platforms will have to go through are{" "}
                </p>
                <h3
                  style={{ fontSize: "17px !important" }}
                  className="sec_tit text-left"
                >
                  Asset Profiling:{" "}
                </h3>
                <p>
                  Asset profiling is a method to categorize NFT assets to a
                  particular theme. It may be artwork, music, in-game assets,
                  sports, collectible, or any other domain. This profiling of
                  assets present in the user’s wallet will be categorized
                  accordingly. This will provide more insights about the assets
                  and their attributes like volume, hype, and application.{" "}
                </p>
                <h3
                  style={{ fontSize: "17px !important" }}
                  className="sec_tit text-left"
                >
                  Smart Contract Repository:{" "}
                </h3>
                <p>
                  A smart contract repository allows the aggregator platform to
                  access OG smart contracts anytime and anywhere in the world
                  for improved version control, real-time data analytics, and
                  robust security. The platform will query the collection's
                  smart contract, gather inputs, and present it to the
                  participants, thereby making their work simple and
                  straightforward.{" "}
                </p>
                <h3
                  style={{ fontSize: "17px !important" }}
                  className="sec_tit text-left"
                >
                  Probabilistic Correlation:{" "}
                </h3>
                <p>
                  This is a statistical measure that graphically analyses all
                  the users’ wallet addresses and their profiles. A candidate
                  pool will be present to retrieve users’ wallet addresses
                  through logs and event listeners. The data retrieved from this
                  pool will be used for correlation analysis, where it matches
                  users who own the wallet and also profiles the wallets.
                  Probabilistic correlation plays a crucial role in determining
                  key metrics for the watchlist and other wallet-related
                  queries.
                </p>
                <h3
                  style={{ fontSize: "17px !important" }}
                  className="sec_tit text-left"
                >
                  Marketplace Analytics:{" "}
                </h3>
                <p>
                  The NFT aggregator platform will show the transaction details,
                  previous owner histories, and other details accurately. Right
                  from the day of its mint, transfer details and every other
                  information will be recorded and displayed accordingly.
                </p>
                <h3
                  style={{ fontSize: "17px !important" }}
                  className="sec_tit text-left"
                >
                  Profiling Outcomes:{" "}
                </h3>
                <p>
                  The result of profiling will benefit intelligence-based
                  markers such as trends and forecasts. It assists in
                  identifying the key metrics, such as crypto whales, NFT
                  whales, NFT collectors, NFT holders, exchanges, etc.{" "}
                </p>
              </div>
              <div className="separate" id={5}>
                <h2 className="sec_tit text-left">
                  Revenue Model for Your NFT Ecosystem
                </h2>
                <h3
                  style={{ fontSize: "17px !important" }}
                  className="sec_tit text-left"
                >
                  Initial Minting Fees:
                </h3>
                <p>
                  It is the fees levied by the business models on creators. This
                  fee serves as an entry fee for them to tokenize their
                  masterpieces in the NFT ecosystem.{" "}
                </p>
                <h3
                  style={{ fontSize: "17px !important" }}
                  className="sec_tit text-left"
                >
                  Service Fees:
                </h3>
                <p>
                  There are numerous services that a creator can avail of in the
                  NFT ecosystem, such as lending, renting, listing, and much
                  more. These services come at an affordable cost and generate a
                  good income for your NFT platform.{" "}
                </p>
                <h3
                  style={{ fontSize: "17px !important" }}
                  className="sec_tit text-left"
                >
                  NFTs Trading Fees:
                </h3>
                <p>
                  NFT ecosystems are competent in facilitating the users to
                  carry out primary and secondary NFT sales. Moreover, these
                  platforms are bridging the gap between creators and potential
                  collectors. To continue extending this service, your NFT
                  platforms can charge users a small percentage of the sale.{" "}
                </p>
                <h3
                  style={{ fontSize: "17px !important" }}
                  className="sec_tit text-left"
                >
                  Aggregator API:{" "}
                </h3>
                <p>
                  Sharing your NFT platform's APIs can be a revenue-generating
                  opportunity for your NFT venture. As a renowned NFT ecosystem
                  in the future, you can lend your aggregator APIs to reliable
                  upcoming projects in the NFT space and widen revenue sources.{" "}
                </p>
              </div>
              <div className="separate" id={6}>
                <h2 className="sec_tit text-left">
                  Utility-backed NFTs: What Sets Them Apart From the Regular?
                </h2>
                <p>
                  Non-fungible tokens are unique and can offer immutable
                  ownership to the rightful holders. No doubt about that. People
                  are no longer ready to simply lock a digital collectible in
                  their wallet and sit idle for years and years to see its price
                  surge. This is because they see NFTs as more than an asset
                  class. People expect some real-time benefits from investing in
                  these digital assets. This is where utilities come into play.
                  Apart from holding these digital assets, utility-backed NFTs
                  give users a solid purpose for collecting them. Anything a
                  project has to offer back to its loyal NFT holders can be
                  considered under utilities. However, utilities can be
                  classified into two groups.{" "}
                </p>
              </div>
              <div className="separate">
                <h3
                  style={{ fontSize: "17px !important" }}
                  className="sec_tit text-left"
                >
                  Real-World Utilities
                </h3>
                <p>
                  Digital assets stored on the blockchain network can provide
                  effective solutions for real-world challenges and problems.
                  Having the potential to ease our real-life operations through
                  NFTs. This game-changing technology can be integrated with
                  numerous real-world applications, which include but are not
                  limited to ticketing, real estate, documentation purposes,
                  access to real-time events, and acting as an authenticator for
                  luxury goods.{" "}
                </p>
              </div>
              <div className="separate">
                <h3
                  style={{ fontSize: "17px !important" }}
                  className="sec_tit text-left"
                >
                  Metaverse Utilities{" "}
                </h3>
                <p>
                  Metaverse could be the 'Black Box Fallacy' in the near future,
                  meaning it could be the sole technology that can house
                  numerous applications. Apart from this futuristic potential
                  for Metaverse, NFTs can play a game-changing role in the
                  metaverse, showering the platform users with immense
                  utilities. <br />
                  <br />
                  Non-Fungible Tokens can serve as digital goods to metaverse
                  platform users, and these goods can be anything like avatars,
                  skins, avatar emotes, footwear, and other accessories. In
                  addition, virtual stores which are open on the metaverse
                  platform can enable customers to shop and credit their wallets
                  with redeemable NFTs, which can be exchanged for physical
                  products in the real world. <br />
                  <br />
                  There is no limit to the applications in the physical and
                  digital world, as NFTs can do wonders anywhere.
                </p>
              </div>
              <div className="separate">
                <h2 className="sec_tit text-left">The Bottom Line </h2>
                <p>
                  Keeping all the potential of NFTs aside, if we ourselves take
                  a trip down memory lane to our childhood days, we were all
                  collectors at some point. It may be a gaming card, cartoon,
                  athlete, celebrity, or toy; we have the habit of collecting
                  our favorites and cherishing them for our whole life. The
                  years may change, but not our emotions. This emotion is the
                  untold secret tied behind every NFT out there. People will
                  always show a big thumbs up for things they love the most, and
                  NFTs are the macro-components that leverage the concept of
                  collectibles. <br />
                  <br />
                  So, building a secure, feature-packed, and user-friendly NFT
                  ecosystem will be one of the lucrative business models for
                  2023. Creating an NFT marketplace or an NFT launchpad
                  development would definitely assist you in conquering the web3
                  realm in the near future. <br />
                  <br />
                  If you plan to develop your NFT ecosystem, consult our team
                  creating NFT marketplaces to get the best advice from
                  industry-leading experts.{" "}
                </p>
              </div>
            </div>
            <style
              type="text/css"
              dangerouslySetInnerHTML={{
                __html:
                  " \n\n    .side-content{border: 1px solid #eee; padding: 20px; border-radius: 10px;}\n\n    /*#sidebar .sidebar__inner{\n        border: 2px dotted red;\n        padding: 10px;\n        position: relative;\n        transform: translate(0, 0);\n        transform: translate3d(0, 0, 0);\n        will-change: position, transform;\n    }*/\n",
              }}
            />
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-left ">
              <div
                className={`outer-wrapper ${isSticky ? "sticky-wrapper" : ""}`}
              >
                <div
                  ref={innerWrapperRef}
                  className="inner-wrapper-sticky"
                  style={{
                    position: isSticky ? "fixed" : "static",
                    top: 120,
                    left: "885px",
                    bottom: isSticky
                      ? `${Math.max(200, footerOffset)}px`
                      : "auto",
                    width: "360px",
                  }}
                >
                  <div className="side-content">
                    <img
                      className=""
                      data-src="images/logo-green.webp"
                      src="https://www.blockchainappfactory.com/images/logo-green.webp"
                    />
                    <H3
                      style={{
                        color: "#2b2c2d",
                        marginTop: "10px",
                        letterSpacing: "0px !important",
                      }}
                    >
                      Blockchain App Factory
                    </H3>
                    <p style={{ paddingTop: 10 }}>
                      We are a leading NFT Development Company providing
                      end-to-end NFT development solutions for our clientele
                      worldwide. We have unlocked the milestone of launching
                      100+ NFT marketplaces globally for eminent market players,
                      such as Zircap, Woonkly, CryptoCorns NFT, DSFR, etc.{" "}
                      <br />
                      <br />
                      Our development team understands your business needs and
                      crafts unique solutions to create your own NFT ecosystem.
                      Apart from our comprehensive NFT services, we provide an
                      assorted range of web3 development services, including
                      DeFi, Cryptocurrency, Gaming, and Metaverse. Get a quote
                      from our experts today!{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SecTwo>
  );
};

export default Sec2;
