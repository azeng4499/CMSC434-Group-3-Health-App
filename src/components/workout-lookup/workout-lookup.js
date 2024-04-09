import React, { useEffect, useState } from "react";
import Nav from "../shared/nav/nav";
import { GrPowerReset } from "react-icons/gr";

const WorkoutLookup = ({
  setPage,
  showHamburgerMenu,
  setShowHamburgerMenu,
}) => {
  useEffect(() => {
    const leftArm = document.getElementById("left-arm");
    const rightArm = document.getElementById("right-arm");
    const body = document.getElementById("body");
    const legs = document.getElementById("legs");

    body.addEventListener("mouseover", function () {
      body.setAttribute("fill", "#02C39A");
    });

    body.addEventListener("mouseout", function () {
      body.setAttribute("fill", "black");
    });

    legs.addEventListener("mouseover", function () {
      legs.setAttribute("fill", "#02C39A");
    });

    legs.addEventListener("mouseout", function () {
      legs.setAttribute("fill", "black");
    });

    leftArm.addEventListener("mouseover", function () {
      leftArm.setAttribute("fill", "#02C39A");
      rightArm.setAttribute("fill", "#02C39A");
    });

    rightArm.addEventListener("mouseover", function () {
      leftArm.setAttribute("fill", "#02C39A");
      rightArm.setAttribute("fill", "#02C39A");
    });

    leftArm.addEventListener("mouseout", function () {
      leftArm.setAttribute("fill", "black");
      rightArm.setAttribute("fill", "black");
    });

    rightArm.addEventListener("mouseout", function () {
      leftArm.setAttribute("fill", "black");
      rightArm.setAttribute("fill", "black");
    });
  }, []);

  return (
    <div className="w-screen h-screen">
      <div
        className="w-screen h-[755px] absolute top-[190px] left-0 bg-blue-400 flex justify-end items-end"
        // style={{ filter: "opacity(0.5)" }}
      >
        {/* <div className="w-full h-[805px] p-4">
          <div className="w-full h-full bg-red-400 rounded-b-lg">
            <img src={AARON} />
          </div>
        </div> */}
      </div>
      <Nav
        setPage={setPage}
        showHamburgerMenu={showHamburgerMenu}
        setShowHamburgerMenu={setShowHamburgerMenu}
      />
      <div
        className="w-full overflow-hidden p-4"
        style={{ height: "calc(100vh - 82.8px)" }}
      >
        <div className="w-full h-full border-black border rounded-lg">
          <div className="w-full flex justify-between items-center text-[3rem] px-4">
            <div>
              <span className="font-semibold" style={{ color: "#02C39A" }}>
                Workout
              </span>
              &nbsp;Finder
            </div>
            <div className="bg-gray-300 rounded-full p-2 w-12 h-12 flex justify-center items-center">
              <GrPowerReset className="w-8" />
            </div>
          </div>
          <div className="w-full px-4 mb-4">
            <div className="w-full h-[2px] bg-black"></div>
          </div>
          <div className="w-full h-[750px] px-4 pb-4">
            <div className="w-full h-full bg-white rounded-lg border flex justify-center items-center p-8 flex-col">
              <svg
                width="350"
                height="800"
                viewBox="0 0 350 800"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full"
              >
                <path
                  d="M175.5 175C223.825 175 263 135.825 263 87.5C263 39.1751 223.825 0 175.5 0C127.175 0 88 39.1751 88 87.5C88 135.825 127.175 175 175.5 175Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M87.5 480.973H262.5V764.062C262.5 773.594 258.714 782.735 251.974 789.474C245.235 796.214 236.094 800 226.562 800C217.031 800 207.89 796.214 201.151 789.474C194.411 782.735 190.625 773.594 190.625 764.062V540.625C190.63 538.482 190.194 536.361 189.344 534.393C188.494 532.426 187.248 530.655 185.685 529.189C184.121 527.724 182.273 526.596 180.255 525.875C178.236 525.154 176.091 524.856 173.953 525C169.934 525.358 166.198 527.222 163.495 530.218C160.791 533.214 159.32 537.121 159.375 541.156V764.062C159.375 773.594 155.589 782.735 148.849 789.474C142.11 796.214 132.969 800 123.438 800C113.906 800 104.765 796.214 98.0258 789.474C91.2863 782.735 87.5 773.594 87.5 764.062V480.973Z"
                  fill="black"
                  id="legs"
                  onClick={() => {
                    console.log("legs");
                  }}
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M279.21 204.438V300.734C280.824 301.311 282.301 302.214 283.551 303.386C284.801 304.558 285.797 305.975 286.476 307.548C287.155 309.122 287.504 310.818 287.5 312.531V468.031C287.5 484.984 300.672 499.406 317.609 500.016C321.809 500.169 325.997 499.474 329.922 497.971C333.848 496.468 337.429 494.189 340.453 491.271C343.477 488.352 345.881 484.853 347.522 480.983C349.162 477.114 350.005 472.953 350 468.75V300C349.922 273.502 339.361 248.113 320.624 229.376C308.954 217.706 294.703 209.207 279.21 204.438Z"
                  fill="black"
                  id="right-arm"
                  onClick={() => {
                    console.log("right-arm");
                  }}
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M250 200H100C92.9571 200.021 85.9924 200.782 79.2101 202.241V300.734C80.8236 301.311 82.3012 302.214 83.5511 303.386C84.801 304.558 85.7965 305.975 86.4758 307.548C87.1551 309.122 87.5038 310.818 87.5 312.531V466H262.5V312.922C262.46 309.697 263.641 306.576 265.806 304.186V201.3C260.612 200.455 255.328 200.016 250 200Z"
                  fill="black"
                  id="body"
                  onClick={() => {
                    console.log("body");
                  }}
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M29.3758 229.376C39.7832 218.968 52.2433 211.084 65.8058 206.116V304.186C63.6411 306.576 62.4603 309.697 62.5 312.922V468.75C62.5007 472.95 61.6547 477.108 60.0124 480.973C58.3702 484.839 55.9654 488.335 52.9419 491.25C49.9184 494.166 46.3382 496.442 42.4152 497.943C38.4921 499.443 34.3068 500.138 30.1094 499.984C13.1719 499.375 0 484.953 0 468V300C0.0783164 273.502 10.6392 248.113 29.3758 229.376Z"
                  fill="black"
                  id="left-arm"
                  onClick={() => {
                    console.log("left-arm");
                  }}
                />
              </svg>
              <div className="w-full text-center text-3xl mt-10 border p-4 rounded-lg">
                Please select the area of your body that you would like to train
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutLookup;

// ARM_EXERCISE = [{}]
