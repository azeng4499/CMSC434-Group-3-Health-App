import React from 'react'
import Nav from '../shared/nav/nav';

const WorkoutTracker = ({
  setPage,
  showHamburgerMenu,
  setShowHamburgerMenu,
}) => {
  return (
    <div className="w-screen h-screen">
      <Nav
        setPage={setPage}
        showHamburgerMenu={showHamburgerMenu}
        setShowHamburgerMenu={setShowHamburgerMenu}
      />
      <div
        className="w-full overflow-hidden"
        style={{ height: "calc(100vh - 82.8px)" }}
      >
        {/* Workout Tracker Code */}
      </div>
    </div>
  );
};

export default WorkoutTracker