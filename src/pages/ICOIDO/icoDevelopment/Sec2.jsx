import React from 'react'
import WeSpotlightedIn from '../../../components/shared/WeSpotlightedIn'

function Sec2() {
  return (
    <div className="common_newsletter">
  <div className="newsletter_videos">
    <div className="newsletter_videos_numbers">
      <div className="section-title text-center">
        <h5 className="common_h3 text-white">
          History is Boring! But numbers aren't!
        </h5>
        <hr />
      </div>
      <ul className="ul-style-4 list_growth m-t-50 history_ul">
        <li>
          <i className="fa fa-link" aria-hidden="true" /> Total Blockchain
          Experience <strong>10+ Years</strong>
        </li>
        <li>
          <i className="fa fa-check" aria-hidden="true" /> Projects Completed{" "}
          <strong>200</strong>
        </li>
        <li>
          <i className="fa fa-tasks" aria-hidden="true" /> Projects in progress{" "}
          <strong>50+</strong>
        </li>
        <li>
          <i className="fa fa-users" aria-hidden="true" /> Team{" "}
          <strong>500+</strong>
        </li>
        <li>
          <i className="fa fa-users" aria-hidden="true" /> Blockchain Experts{" "}
          <strong>150+</strong>
        </li>
      </ul>
    </div>
    <div className="newsletter_videos_videos">
      <a
        className="thumb fancybox-media1"
        allow-navigation=""
        href="https://youtu.be/DLlkNdIikLU"
        data-fancybox-group="gallery"
        title="ICO Development"
        rel="media-gallery"
      >
        <img
          data-src="./assets/images/video-bg.webp"
          className="lazy"
          alt="ICO Development"
          width="100%"
          style={{ position: "relative" }}
          src="./assets/images/video-bg.webp"
        />
        <span className="play" />
      </a>
    </div>
  </div>
</div>

  )
}

export default Sec2