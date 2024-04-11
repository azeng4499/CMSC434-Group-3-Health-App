import React from "react";
import Nav from "../shared/nav/nav";
import "./home.css";
import { MdOutlineTimer } from "react-icons/md";
import { IoBarbell } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";
import { CiForkAndKnife } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { setPage } from "../../store/actions";
import { LuGoal } from "react-icons/lu";
import { FaWeightScale } from "react-icons/fa6";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-screen h-screen">
      <Nav />
      <div className="home-container">
        <div className="home-greeting">Hello Trajan</div>
        <div className="home-boxes">
          <button
            onClick={() => {
              dispatch(setPage("goals"));
            }}
            className="home-button home-goals"
          >
            <div className="timer-content">
              <div className="start-text">Goals</div>
              <div className="timer-description">
                Set, Monitor, Analyze, and Accomplish Your Goals
              </div>
            </div>
            <LuGoal className="goals-icon" />
          </button>

          <button
            onClick={() => {
              dispatch(setPage("calorie-tracker"));
            }}
            className="home-button home-record-calories"
          >
            <div className="timer-content">
              <div className="start-text">Log Calories</div>
              <div className="timer-description">
                Record Your Daily Caloric Intake and Nutritional Information
              </div>
            </div>
            <CiForkAndKnife className="record-calories-icon" />
          </button>

          <button
            onClick={() => {
              dispatch(setPage("workout-tracker"));
            }}
            className="home-button home-record-workout"
          >
            <div className="timer-content">
              <div className="start-text">Log Workout</div>
              <div className="timer-description">
                Log Details of Your Exercise Routine to Analyze Progress and
                Organize Your Workouts
              </div>
            </div>
            <TfiWrite className="record-workout-icon" />
          </button>

          <button
            onClick={() => {
              dispatch(setPage("weight-tracker"));
            }}
            className="home-button home-log-weight"
          >
            <div className="timer-content">
              <div className="start-text">Log Weight</div>
              <div className="timer-description">
                Record and Update Your Weight to Analyze Progress
              </div>
            </div>
            <FaWeightScale className="log-weight-icon" />
          </button>

          <button
            onClick={() => {
              dispatch(setPage("workout-lookup"));
            }}
            className="home-button home-workout-lookup"
          >
            <div className="timer-content">
              <div className="start-text">Workout Finder</div>
              <div className="timer-description">
                Browse Through a Wide Range of Wokrouts, Tailored to Different
                Fitness Levels and Goals
              </div>
            </div>
            <IoBarbell className="workout-lookup-icon" />
          </button>

          <button
            onClick={() => {
              dispatch(setPage("preset-workout"));
            }}
            className="home-button home-timer"
          >
            <div className="timer-content">
              <div className="start-text">Preset Workout</div>
              <div className="timer-description">
                Select From Preset Workouts Tailored to Various Exercises,
                Ensuring Optimal Training Intervals
              </div>
            </div>
            <MdOutlineTimer className="timer-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
