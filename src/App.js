import "./App.css";
import PresetWorkout from "./components/preset-workout/preset-workout";
import React, { useState } from "react";
import Home from "./components/home/home";
import WorkoutLookup from "./components/workout-lookup/workout-lookup";
import WorkoutTracker from "./components/workout-tracker/workout-tracker";
import CalorieTracker from "./components/calorie-tracker/calorie-tracker";
import { useSelector } from "react-redux";
import WeightTracker from "./components/weight-tracker/weight-tracker";

function App() {
  const page = useSelector((state) => state.page);

  const returnPage = (currentPage) => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "preset-workout":
        return <PresetWorkout />;
      case "workout-lookup":
        return <WorkoutLookup />;
      case "workout-tracker":
        return <WorkoutTracker />;
      case "calorie-tracker":
        return <CalorieTracker />;
      case "weight-tracker":
        return <WeightTracker />;
    }
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>{returnPage(page)}</div>
  );
}

export default App;
