import React from 'react'

function LandingSec4() {
  return (
    <section id="demo" className="demo-video">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 mob-p-lr-6 text-center mb60">
          <a
            target="_blank"
            className="demo-video-box"
            aria-label="Jose Flores CEO Youtube Video"
            href="https://www.youtube.com/watch?v=siLY5G3cmtY"
          >
            <img
              alt="Jose Flores CEO video"
              className="lazy"
              data-src="./assets/images/demo-video2.jpg"
              src="./assets/images/demo-video2.jpg"
            />
          </a>
          <h6 className="dem-video-hd">Jose Flores</h6>
          <span className="dem-video-p"> CEO </span>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 mob-p-lr-6 text-center mb60">
          <a
            target="_blank"
            className="demo-video-box"
            aria-label="Layth Samarah Youtube Video"
            href="https://www.youtube.com/watch?v=aGk0SuLcgz4"
          >
            <img
              alt="Layth Samarah CEO video"
              className="lazy"
              data-src="./assets/images/demo-video1.jpg"
              src="./assets/images/demo-video1.jpg"
            />
          </a>
          <h6 className="dem-video-hd">Layth Samarah</h6>
          <span className="dem-video-p"> CEO </span>
        </div>
      </div>
    </div>
  </section>
  )
}

export default LandingSec4