import "./App.css";
import PresetWorkout from "./components/preset-workout/preset-workout";
import React, { useState } from "react";
import Home from "./components/home/home";
import WorkoutLookup from "./components/workout-lookup/workout-lookup";
import WorkoutTracker from "./components/workout-tracker/workout-tracker";
import CalorieTracker from "./components/calorie-tracker/calorie-tracker";

function App() {
  const [page, setPage] = useState("home");
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const returnPage = (currentPage) => {
    switch (currentPage) {
      case "home":
        return (
          <Home
            setPage={setPage}
            showHamburgerMenu={showHamburgerMenu}
            setShowHamburgerMenu={setShowHamburgerMenu}
          />
        );
      case "preset-workout":
        return (
          <PresetWorkout
            setPage={setPage}
            showHamburgerMenu={showHamburgerMenu}
            setShowHamburgerMenu={setShowHamburgerMenu}
          />
        );
      case "workout-lookup":
        return (
          <WorkoutLookup
            setPage={setPage}
            showHamburgerMenu={showHamburgerMenu}
            setShowHamburgerMenu={setShowHamburgerMenu}
          />
        );
      case "workout-tracker":
        return (
          <WorkoutTracker
            setPage={setPage}
            showHamburgerMenu={showHamburgerMenu}
            setShowHamburgerMenu={setShowHamburgerMenu}
          />
        );
      case "calorie-tracker":
        return (
          <CalorieTracker
            setPage={setPage}
            showHamburgerMenu={showHamburgerMenu}
            setShowHamburgerMenu={setShowHamburgerMenu}
          />
        );
    }
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>{returnPage(page)}</div>
  );
}

export default App;
