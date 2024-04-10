import React from "react";
import Nav from "../shared/nav/nav";

const WorkoutTracker = () => {
  return (
    <div className="w-screen h-screen">
      <Nav />
      <div
        className="w-full overflow-hidden"
        style={{ height: "calc(100vh - 82.8px)" }}
      >
        {/* Workout Tracker Code */}
      </div>
    </div>
  );
};

export default WorkoutTracker;
