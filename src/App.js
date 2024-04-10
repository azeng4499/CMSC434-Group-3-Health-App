import "./App.css";
import PresetWorkout from "./components/preset-workout/preset-workout";
import React, { useState } from "react";
import Home from "./components/home/home";
import WorkoutLookup from "./components/workout-lookup/workout-lookup";
import WorkoutTracker from "./components/workout-tracker/workout-tracker";
import CalorieTracker from "./components/calorie-tracker/calorie-tracker";
import { useSelector } from "react-redux";

function App() {
  // const [page, setPage] = useState("home");
  const page = useSelector((state) => state.page);
  // const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

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
    }
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>{returnPage(page)}</div>
  );
}

export default App;
