import React from "react";
import Nav from "../shared/nav/nav";
import "./home.css";
import { MdOutlineTimer } from "react-icons/md";
import { IoBarbell } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";
import { CiForkAndKnife } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { setPage } from "../../store/actions";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-screen h-screen">
      <Nav />
      <div className="home-container">
        <div className="home-greeting">Good Morning Trajan</div>
        <div className="home-boxes">
          <button
            onClick={() => {
              dispatch(setPage("preset-workout"));
            }}
            className="home-button home-timer"
          >
            <div className="timer-content">
              <div className="start-text">Preset Workout</div>
              <div className="timer-description">
                Precision Timing to Maximize Efficiency and Track Performance
                Over Time
              </div>
            </div>
            <MdOutlineTimer className="timer-icon" />
          </button>

          <button
            onClick={() => {
              dispatch(setPage("workout-lookup"));
            }}
            className="home-button home-workout-lookup"
          >
            <div className="timer-content">
              <div className="start-text">Workout Lookup</div>
              <div className="timer-description">
                Browse Through a Wide Range of Wokrouts, Tailored to Different
                Fitness Levels and Goals
              </div>
            </div>
            <IoBarbell className="workout-lookup-icon" />
          </button>

          <button
            onClick={() => {
              dispatch(setPage("workout-tracker"));
            }}
            className="home-button home-record-workout"
          >
            <div className="timer-content">
              <div className="start-text">Record Workout</div>
              <div className="timer-description">
                Log Details of Your Exercise Routine to Analyze Progress and Set
                Future Goals
              </div>
            </div>
            <TfiWrite className="record-workout-icon" />
          </button>

          <button
            onClick={() => {
              dispatch(setPage("calorie-tracker"));
            }}
            className="home-button home-record-calories"
          >
            <div className="timer-content">
              <div className="start-text">Record Calories</div>
              <div className="timer-description">
                Record Your Daily Caloric Intake and Nutritional Information
              </div>
            </div>
            <CiForkAndKnife className="record-calories-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
