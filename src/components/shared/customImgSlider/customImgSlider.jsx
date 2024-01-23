import React, { useState } from "react";
import "./customImgSlider.css";
const CustomImgSlider = () => {
  const [isMinimized, setMinimized] = useState({ index: "", show: 0 });
  const handleMinimizeClick = (indexx, showw) => {
    if (isMinimized.index === indexx && isMinimized.show === showw) {
      setMinimized({ index: "", show: 0 });
    } else {
      setMinimized({ index: indexx, show: showw });
    }
  };
  return (
    <div className="img-wrapper-parent" id="custom-img-slider">
      <div className={`img-wrapper ${isMinimized === 0 ? "active" : ""}`}>
        {/* MINIMIZE-1*/}
        <div onClick={() => handleMinimizeClick(0, 1)} className="main-one">
          {isMinimized.index == 0 && isMinimized.show == 1 ? (
            <div
              className="maximize"
              // style={{ minWidth: "593px", backgroundColor: "#1D1D1D" }}
            >
              <div className="left">
                <h3>CREATE TOKEN / DEVELOP /TESTING</h3>
                <h2>
                  How we designed and built the future of real estate
                  transactions
                </h2>
                <p>
                  How we designed and built the future of real estate
                  transactions
                </p>
                <div className="learnMoreMax-btn">
                  {/* <button>Learn More </button> */}
                  <a href="#" style={{ color: "#fff" }}>
                    LEARN MORE
                  </a>
                  <svg
                    width="15"
                    height="10"
                    viewBox="0 0 15 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      // clip-rule="evenodd"
                      d="M0.495117 4.92256C0.495117 4.79018 0.547594 4.66322 0.641005 4.56961C0.734415 4.47601 0.861106 4.42342 0.993208 4.42342H12.7412L9.6062 1.28285C9.51268 1.18912 9.46014 1.062 9.46014 0.929458C9.46014 0.796907 9.51268 0.669791 9.6062 0.576066C9.69974 0.482342 9.82659 0.429688 9.95885 0.429688C10.0911 0.429688 10.218 0.482342 10.3115 0.576066L14.2962 4.56917C14.3426 4.61553 14.3794 4.67062 14.4045 4.73125C14.4296 4.7919 14.4426 4.85691 14.4426 4.92256C14.4426 4.98821 14.4296 5.05323 14.4045 5.11386C14.3794 5.17451 14.3426 5.22958 14.2962 5.27595L10.3115 9.26906C10.218 9.36277 10.0911 9.41543 9.95885 9.41543C9.82659 9.41543 9.69974 9.36277 9.6062 9.26906C9.51268 9.17533 9.46014 9.04821 9.46014 8.91567C9.46014 8.78311 9.51268 8.65599 9.6062 8.56228L12.7412 5.4217H0.993208C0.861106 5.4217 0.734415 5.36911 0.641005 5.2755C0.547594 5.18189 0.495117 5.05494 0.495117 4.92256Z"
                      fill="#fff"
                    />
                  </svg>
                </div>
              </div>
              <div className="right">
                <img src="./assets/images/max-sec-3.png" alt="" />
              </div>
            </div>
          ) : (
            <div className="one minimize">
              <img src="./assets/images/sec-card-one.png" alt="" />
              <div>
                <div className="content">
                  <h2>Mozaicc</h2>
                  <p>
                    How we designed and built the future of real estate
                    transactions
                  </p>
                </div>
                <div className="learnMore-btn">
                  {/* <button>Learn More </button> */}
                  <a href="">Learn More</a>
                  <svg
                    width="15"
                    height="10"
                    viewBox="0 0 15 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      // clip-rule="evenodd"
                      d="M0.495117 4.92256C0.495117 4.79018 0.547594 4.66322 0.641005 4.56961C0.734415 4.47601 0.861106 4.42342 0.993208 4.42342H12.7412L9.6062 1.28285C9.51268 1.18912 9.46014 1.062 9.46014 0.929458C9.46014 0.796907 9.51268 0.669791 9.6062 0.576066C9.69974 0.482342 9.82659 0.429688 9.95885 0.429688C10.0911 0.429688 10.218 0.482342 10.3115 0.576066L14.2962 4.56917C14.3426 4.61553 14.3794 4.67062 14.4045 4.73125C14.4296 4.7919 14.4426 4.85691 14.4426 4.92256C14.4426 4.98821 14.4296 5.05323 14.4045 5.11386C14.3794 5.17451 14.3426 5.22958 14.2962 5.27595L10.3115 9.26906C10.218 9.36277 10.0911 9.41543 9.95885 9.41543C9.82659 9.41543 9.69974 9.36277 9.6062 9.26906C9.51268 9.17533 9.46014 9.04821 9.46014 8.91567C9.46014 8.78311 9.51268 8.65599 9.6062 8.56228L12.7412 5.4217H0.993208C0.861106 5.4217 0.734415 5.36911 0.641005 5.2755C0.547594 5.18189 0.495117 5.05494 0.495117 4.92256Z"
                      fill="#034EA2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* MINIMIZE-2 */}
        <div onClick={() => handleMinimizeClick(1, 1)} className="main-one">
          {isMinimized.index == 1 && isMinimized.show == 1 ? (
            <div
              className="maximize"
              // style={{ minWidth: "593px", backgroundColor: "#1D1D1D" }}
              onClick={handleMinimizeClick}
            >
              <div className="left">
                <h3>CREATE TOKEN / DEVELOP /TESTING</h3>
                <h2>
                  How we designed and built the future of real estate
                  transactions
                </h2>
                <p>
                  How we designed and built the future of real estate
                  transactions
                </p>
                <div className="learnMoreMax-btn">
                  {/* <button>Learn More </button> */}
                  <a href="#" style={{ color: "#fff" }}>
                    LEARN MORE
                  </a>
                  <svg
                    width="15"
                    height="10"
                    viewBox="0 0 15 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      // clip-rule="evenodd"
                      d="M0.495117 4.92256C0.495117 4.79018 0.547594 4.66322 0.641005 4.56961C0.734415 4.47601 0.861106 4.42342 0.993208 4.42342H12.7412L9.6062 1.28285C9.51268 1.18912 9.46014 1.062 9.46014 0.929458C9.46014 0.796907 9.51268 0.669791 9.6062 0.576066C9.69974 0.482342 9.82659 0.429688 9.95885 0.429688C10.0911 0.429688 10.218 0.482342 10.3115 0.576066L14.2962 4.56917C14.3426 4.61553 14.3794 4.67062 14.4045 4.73125C14.4296 4.7919 14.4426 4.85691 14.4426 4.92256C14.4426 4.98821 14.4296 5.05323 14.4045 5.11386C14.3794 5.17451 14.3426 5.22958 14.2962 5.27595L10.3115 9.26906C10.218 9.36277 10.0911 9.41543 9.95885 9.41543C9.82659 9.41543 9.69974 9.36277 9.6062 9.26906C9.51268 9.17533 9.46014 9.04821 9.46014 8.91567C9.46014 8.78311 9.51268 8.65599 9.6062 8.56228L12.7412 5.4217H0.993208C0.861106 5.4217 0.734415 5.36911 0.641005 5.2755C0.547594 5.18189 0.495117 5.05494 0.495117 4.92256Z"
                      fill="#fff"
                    />
                  </svg>
                </div>
              </div>
              <div className="right">
                <img src="./assets/images/max-sec-3.png" alt="" />
              </div>
            </div>
          ) : (
            <div className="two minimize">
              <img src="./assets/images/sec-card-two.png" alt="" />
              <div className="content">
                <h2>Artizia NFT marketPlace</h2>
                <p>
                  How we designed and built the future of real estate
                  transactions
                </p>
              </div>
              <div className="learnMore-btn">
                {/* <button>Learn More </button> */}
                <a href="">Learn More</a>
                <svg
                  width="15"
                  height="10"
                  viewBox="0 0 15 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.495117 4.92256C0.495117 4.79018 0.547594 4.66322 0.641005 4.56961C0.734415 4.47601 0.861106 4.42342 0.993208 4.42342H12.7412L9.6062 1.28285C9.51268 1.18912 9.46014 1.062 9.46014 0.929458C9.46014 0.796907 9.51268 0.669791 9.6062 0.576066C9.69974 0.482342 9.82659 0.429688 9.95885 0.429688C10.0911 0.429688 10.218 0.482342 10.3115 0.576066L14.2962 4.56917C14.3426 4.61553 14.3794 4.67062 14.4045 4.73125C14.4296 4.7919 14.4426 4.85691 14.4426 4.92256C14.4426 4.98821 14.4296 5.05323 14.4045 5.11386C14.3794 5.17451 14.3426 5.22958 14.2962 5.27595L10.3115 9.26906C10.218 9.36277 10.0911 9.41543 9.95885 9.41543C9.82659 9.41543 9.69974 9.36277 9.6062 9.26906C9.51268 9.17533 9.46014 9.04821 9.46014 8.91567C9.46014 8.78311 9.51268 8.65599 9.6062 8.56228L12.7412 5.4217H0.993208C0.861106 5.4217 0.734415 5.36911 0.641005 5.2755C0.547594 5.18189 0.495117 5.05494 0.495117 4.92256Z"
                    fill="#034EA2"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
        {/* MINIMIZE-3 */}
        <div onClick={() => handleMinimizeClick(2, 1)} className="main-one">
          {isMinimized.index == 2 && isMinimized.show == 1 ? (
            <div
              className="maximize"
              // style={{ minWidth: "593px", backgroundColor: "#1D1D1D" }}
              onClick={handleMinimizeClick}
            >
              <div className="left">
                <h3>CREATE TOKEN / DEVELOP /TESTING</h3>
                <h2>
                  How we designed and built the future of real estate
                  transactions
                </h2>
                <p>
                  How we designed and built the future of real estate
                  transactions
                </p>
                <div className="learnMoreMax-btn">
                  {/* <button>Learn More </button> */}
                  <a href="#" style={{ color: "#fff" }}>
                    LEARN MORE
                  </a>
                  <svg
                    width="15"
                    height="10"
                    viewBox="0 0 15 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      // clip-rule="evenodd"
                      d="M0.495117 4.92256C0.495117 4.79018 0.547594 4.66322 0.641005 4.56961C0.734415 4.47601 0.861106 4.42342 0.993208 4.42342H12.7412L9.6062 1.28285C9.51268 1.18912 9.46014 1.062 9.46014 0.929458C9.46014 0.796907 9.51268 0.669791 9.6062 0.576066C9.69974 0.482342 9.82659 0.429688 9.95885 0.429688C10.0911 0.429688 10.218 0.482342 10.3115 0.576066L14.2962 4.56917C14.3426 4.61553 14.3794 4.67062 14.4045 4.73125C14.4296 4.7919 14.4426 4.85691 14.4426 4.92256C14.4426 4.98821 14.4296 5.05323 14.4045 5.11386C14.3794 5.17451 14.3426 5.22958 14.2962 5.27595L10.3115 9.26906C10.218 9.36277 10.0911 9.41543 9.95885 9.41543C9.82659 9.41543 9.69974 9.36277 9.6062 9.26906C9.51268 9.17533 9.46014 9.04821 9.46014 8.91567C9.46014 8.78311 9.51268 8.65599 9.6062 8.56228L12.7412 5.4217H0.993208C0.861106 5.4217 0.734415 5.36911 0.641005 5.2755C0.547594 5.18189 0.495117 5.05494 0.495117 4.92256Z"
                      fill="#fff"
                    />
                  </svg>
                </div>
              </div>
              <div className="right">
                <img src="./assets/images/max-sec-3.png" alt="" />
              </div>
            </div>
          ) : (
            <div className="three minimize">
              <img src="./assets/images/sec-card-three.png" alt="" />
              <div className="content">
                <h2>JTC</h2>
                <p>
                  How we designed and built the future of real estate
                  transactions
                </p>
              </div>
              <div className="learnMore-btn">
                {/* <button>Learn More </button> */}
                <a href="">Learn More</a>
                <svg
                  width="15"
                  height="10"
                  viewBox="0 0 15 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.495117 4.92256C0.495117 4.79018 0.547594 4.66322 0.641005 4.56961C0.734415 4.47601 0.861106 4.42342 0.993208 4.42342H12.7412L9.6062 1.28285C9.51268 1.18912 9.46014 1.062 9.46014 0.929458C9.46014 0.796907 9.51268 0.669791 9.6062 0.576066C9.69974 0.482342 9.82659 0.429688 9.95885 0.429688C10.0911 0.429688 10.218 0.482342 10.3115 0.576066L14.2962 4.56917C14.3426 4.61553 14.3794 4.67062 14.4045 4.73125C14.4296 4.7919 14.4426 4.85691 14.4426 4.92256C14.4426 4.98821 14.4296 5.05323 14.4045 5.11386C14.3794 5.17451 14.3426 5.22958 14.2962 5.27595L10.3115 9.26906C10.218 9.36277 10.0911 9.41543 9.95885 9.41543C9.82659 9.41543 9.69974 9.36277 9.6062 9.26906C9.51268 9.17533 9.46014 9.04821 9.46014 8.91567C9.46014 8.78311 9.51268 8.65599 9.6062 8.56228L12.7412 5.4217H0.993208C0.861106 5.4217 0.734415 5.36911 0.641005 5.2755C0.547594 5.18189 0.495117 5.05494 0.495117 4.92256Z"
                    fill="#034EA2"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
        {/* MINIMIZE-4 */}
        <div onClick={() => handleMinimizeClick(3, 1)} className="main-one">
          {isMinimized.index == 3 && isMinimized.show == 1 ? (
            <div
              className="maximize"
              // style={{ minWidth: "593px", backgroundColor: "#1D1D1D" }}
              onClick={handleMinimizeClick}
            >
              <div className="left">
                <h3>CREATE TOKEN / DEVELOP /TESTING</h3>
                <h2>
                  How we designed and built the future of real estate
                  transactions
                </h2>
                <p>
                  How we designed and built the future of real estate
                  transactions
                </p>
                <div className="learnMoreMax-btn">
                  {/* <button>Learn More </button> */}
                  <a href="#" style={{ color: "#fff" }}>
                    LEARN MORE
                  </a>
                  <svg
                    width="15"
                    height="10"
                    viewBox="0 0 15 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      // clip-rule="evenodd"
                      d="M0.495117 4.92256C0.495117 4.79018 0.547594 4.66322 0.641005 4.56961C0.734415 4.47601 0.861106 4.42342 0.993208 4.42342H12.7412L9.6062 1.28285C9.51268 1.18912 9.46014 1.062 9.46014 0.929458C9.46014 0.796907 9.51268 0.669791 9.6062 0.576066C9.69974 0.482342 9.82659 0.429688 9.95885 0.429688C10.0911 0.429688 10.218 0.482342 10.3115 0.576066L14.2962 4.56917C14.3426 4.61553 14.3794 4.67062 14.4045 4.73125C14.4296 4.7919 14.4426 4.85691 14.4426 4.92256C14.4426 4.98821 14.4296 5.05323 14.4045 5.11386C14.3794 5.17451 14.3426 5.22958 14.2962 5.27595L10.3115 9.26906C10.218 9.36277 10.0911 9.41543 9.95885 9.41543C9.82659 9.41543 9.69974 9.36277 9.6062 9.26906C9.51268 9.17533 9.46014 9.04821 9.46014 8.91567C9.46014 8.78311 9.51268 8.65599 9.6062 8.56228L12.7412 5.4217H0.993208C0.861106 5.4217 0.734415 5.36911 0.641005 5.2755C0.547594 5.18189 0.495117 5.05494 0.495117 4.92256Z"
                      fill="#fff"
                    />
                  </svg>
                </div>
              </div>
              <div className="right">
                <img src="./assets/images/max-sec-3.png" alt="" />
              </div>
            </div>
          ) : (
            <div className="four minimize">
              <img src="./assets/images/sec-card-four.png" alt="" />
              <div className="content">
                <h2>Amigo Soung</h2>
                <p>
                  How we designed and built the future of real estate
                  transactions
                </p>
              </div>
              <div className="learnMore-btn">
                {/* <button>Learn More </button> */}
                <a href="">Learn More</a>
                <svg
                  width="15"
                  height="10"
                  viewBox="0 0 15 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.495117 4.92256C0.495117 4.79018 0.547594 4.66322 0.641005 4.56961C0.734415 4.47601 0.861106 4.42342 0.993208 4.42342H12.7412L9.6062 1.28285C9.51268 1.18912 9.46014 1.062 9.46014 0.929458C9.46014 0.796907 9.51268 0.669791 9.6062 0.576066C9.69974 0.482342 9.82659 0.429688 9.95885 0.429688C10.0911 0.429688 10.218 0.482342 10.3115 0.576066L14.2962 4.56917C14.3426 4.61553 14.3794 4.67062 14.4045 4.73125C14.4296 4.7919 14.4426 4.85691 14.4426 4.92256C14.4426 4.98821 14.4296 5.05323 14.4045 5.11386C14.3794 5.17451 14.3426 5.22958 14.2962 5.27595L10.3115 9.26906C10.218 9.36277 10.0911 9.41543 9.95885 9.41543C9.82659 9.41543 9.69974 9.36277 9.6062 9.26906C9.51268 9.17533 9.46014 9.04821 9.46014 8.91567C9.46014 8.78311 9.51268 8.65599 9.6062 8.56228L12.7412 5.4217H0.993208C0.861106 5.4217 0.734415 5.36911 0.641005 5.2755C0.547594 5.18189 0.495117 5.05494 0.495117 4.92256Z"
                    fill="#034EA2"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
        {/* MINIMIZE-5 */}
        <div onClick={() => handleMinimizeClick(4, 1)} className="main-one">
          {isMinimized.index == 4 && isMinimized.show == 1 ? (
            <div
              className="maximize"
              // style={{ minWidth: "593px", backgroundColor: "#1D1D1D" }}
              onClick={handleMinimizeClick}
            >
              <div className="left">
                <h3>CREATE TOKEN / DEVELOP /TESTING</h3>
                <h2>
                  How we designed and built the future of real estate
                  transactions
                </h2>
                <p>
                  How we designed and built the future of real estate
                  transactions
                </p>
                <div className="learnMoreMax-btn">
                  {/* <button>Learn More </button> */}
                  <a href="#" style={{ color: "#fff" }}>
                    LEARN MORE
                  </a>
                  <svg
                    width="15"
                    height="10"
                    viewBox="0 0 15 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      // clip-rule="evenodd"
                      d="M0.495117 4.92256C0.495117 4.79018 0.547594 4.66322 0.641005 4.56961C0.734415 4.47601 0.861106 4.42342 0.993208 4.42342H12.7412L9.6062 1.28285C9.51268 1.18912 9.46014 1.062 9.46014 0.929458C9.46014 0.796907 9.51268 0.669791 9.6062 0.576066C9.69974 0.482342 9.82659 0.429688 9.95885 0.429688C10.0911 0.429688 10.218 0.482342 10.3115 0.576066L14.2962 4.56917C14.3426 4.61553 14.3794 4.67062 14.4045 4.73125C14.4296 4.7919 14.4426 4.85691 14.4426 4.92256C14.4426 4.98821 14.4296 5.05323 14.4045 5.11386C14.3794 5.17451 14.3426 5.22958 14.2962 5.27595L10.3115 9.26906C10.218 9.36277 10.0911 9.41543 9.95885 9.41543C9.82659 9.41543 9.69974 9.36277 9.6062 9.26906C9.51268 9.17533 9.46014 9.04821 9.46014 8.91567C9.46014 8.78311 9.51268 8.65599 9.6062 8.56228L12.7412 5.4217H0.993208C0.861106 5.4217 0.734415 5.36911 0.641005 5.2755C0.547594 5.18189 0.495117 5.05494 0.495117 4.92256Z"
                      fill="#fff"
                    />
                  </svg>
                </div>
              </div>
              <div className="right">
                <img src="./assets/images/max-sec-3.png" alt="" />
              </div>
            </div>
          ) : (
            <div className="five minimize">
              <img src="./assets/images/sec-card-five.png" alt="" />
              <div className="content">
                <h2>Island Girl</h2>
                <p>
                  How we designed and built the future of real estate
                  transactions
                </p>
              </div>
              <div className="learnMore-btn">
                {/* <button>Learn More </button> */}
                <a href="">Learn More</a>
                <svg
                  width="15"
                  height="10"
                  viewBox="0 0 15 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.495117 4.92256C0.495117 4.79018 0.547594 4.66322 0.641005 4.56961C0.734415 4.47601 0.861106 4.42342 0.993208 4.42342H12.7412L9.6062 1.28285C9.51268 1.18912 9.46014 1.062 9.46014 0.929458C9.46014 0.796907 9.51268 0.669791 9.6062 0.576066C9.69974 0.482342 9.82659 0.429688 9.95885 0.429688C10.0911 0.429688 10.218 0.482342 10.3115 0.576066L14.2962 4.56917C14.3426 4.61553 14.3794 4.67062 14.4045 4.73125C14.4296 4.7919 14.4426 4.85691 14.4426 4.92256C14.4426 4.98821 14.4296 5.05323 14.4045 5.11386C14.3794 5.17451 14.3426 5.22958 14.2962 5.27595L10.3115 9.26906C10.218 9.36277 10.0911 9.41543 9.95885 9.41543C9.82659 9.41543 9.69974 9.36277 9.6062 9.26906C9.51268 9.17533 9.46014 9.04821 9.46014 8.91567C9.46014 8.78311 9.51268 8.65599 9.6062 8.56228L12.7412 5.4217H0.993208C0.861106 5.4217 0.734415 5.36911 0.641005 5.2755C0.547594 5.18189 0.495117 5.05494 0.495117 4.92256Z"
                    fill="#034EA2"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
        {/* MINIMIZE-6 */}
        <div onClick={() => handleMinimizeClick(5, 1)} className="main-one">
          {isMinimized.index == 5 && isMinimized.show == 1 ? (
            <div
              className="maximize"
              // style={{ minWidth: "593px", backgroundColor: "#1D1D1D" }}
              onClick={handleMinimizeClick}
            >
              <div className="left">
                <h3>CREATE TOKEN / DEVELOP /TESTING</h3>
                <h2>
                  How we designed and built the future of real estate
                  transactions
                </h2>
                <p>
                  How we designed and built the future of real estate
                  transactions
                </p>
                <div className="learnMoreMax-btn">
                  {/* <button>Learn More </button> */}
                  <a href="#" style={{ color: "#fff" }}>
                    LEARN MORE
                  </a>
                  <svg
                    width="15"
                    height="10"
                    viewBox="0 0 15 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      // clip-rule="evenodd"
                      d="M0.495117 4.92256C0.495117 4.79018 0.547594 4.66322 0.641005 4.56961C0.734415 4.47601 0.861106 4.42342 0.993208 4.42342H12.7412L9.6062 1.28285C9.51268 1.18912 9.46014 1.062 9.46014 0.929458C9.46014 0.796907 9.51268 0.669791 9.6062 0.576066C9.69974 0.482342 9.82659 0.429688 9.95885 0.429688C10.0911 0.429688 10.218 0.482342 10.3115 0.576066L14.2962 4.56917C14.3426 4.61553 14.3794 4.67062 14.4045 4.73125C14.4296 4.7919 14.4426 4.85691 14.4426 4.92256C14.4426 4.98821 14.4296 5.05323 14.4045 5.11386C14.3794 5.17451 14.3426 5.22958 14.2962 5.27595L10.3115 9.26906C10.218 9.36277 10.0911 9.41543 9.95885 9.41543C9.82659 9.41543 9.69974 9.36277 9.6062 9.26906C9.51268 9.17533 9.46014 9.04821 9.46014 8.91567C9.46014 8.78311 9.51268 8.65599 9.6062 8.56228L12.7412 5.4217H0.993208C0.861106 5.4217 0.734415 5.36911 0.641005 5.2755C0.547594 5.18189 0.495117 5.05494 0.495117 4.92256Z"
                      fill="#fff"
                    />
                  </svg>
                </div>
              </div>
              <div className="right">
                <img src="./assets/images/max-sec-3.png" alt="" />
              </div>
            </div>
          ) : (
            <div className="six minimize">
              <img src="./assets/images/sec-card-one.png" alt="" />
              <div className="content">
                <h2>Mozaicc</h2>
                <p>
                  How we designed and built the future of real estate
                  transactions
                </p>
              </div>
              <div className="learnMore-btn">
                {/* <button>Learn More </button> */}
                <a href="">Learn More</a>
                <svg
                  width="15"
                  height="10"
                  viewBox="0 0 15 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.495117 4.92256C0.495117 4.79018 0.547594 4.66322 0.641005 4.56961C0.734415 4.47601 0.861106 4.42342 0.993208 4.42342H12.7412L9.6062 1.28285C9.51268 1.18912 9.46014 1.062 9.46014 0.929458C9.46014 0.796907 9.51268 0.669791 9.6062 0.576066C9.69974 0.482342 9.82659 0.429688 9.95885 0.429688C10.0911 0.429688 10.218 0.482342 10.3115 0.576066L14.2962 4.56917C14.3426 4.61553 14.3794 4.67062 14.4045 4.73125C14.4296 4.7919 14.4426 4.85691 14.4426 4.92256C14.4426 4.98821 14.4296 5.05323 14.4045 5.11386C14.3794 5.17451 14.3426 5.22958 14.2962 5.27595L10.3115 9.26906C10.218 9.36277 10.0911 9.41543 9.95885 9.41543C9.82659 9.41543 9.69974 9.36277 9.6062 9.26906C9.51268 9.17533 9.46014 9.04821 9.46014 8.91567C9.46014 8.78311 9.51268 8.65599 9.6062 8.56228L12.7412 5.4217H0.993208C0.861106 5.4217 0.734415 5.36911 0.641005 5.2755C0.547594 5.18189 0.495117 5.05494 0.495117 4.92256Z"
                    fill="#034EA2"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomImgSlider;
