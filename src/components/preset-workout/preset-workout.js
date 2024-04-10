import React, { useState, useEffect } from "react";
import "./preset-workout.css";
import Nav from "../shared/nav/nav";

const PresetWorkout = () => {
  const SETTINGS = ["Run", "Bike", "HIIT", "Swim"];
  const [selected, setSelected] = useState("Run");
  const [seconds, setSeconds] = useState(150);
  const [isActive, setIsActive] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [duration, setDuration] = useState(10);
  const [routine, setRoutine] = useState(RUN_10);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (selected == "Run") {
      setRoutine(duration == 10 ? RUN_10 : duration == 20 ? RUN_20 : RUN_30);
    } else if (selected == "Bike") {
      setRoutine(duration == 10 ? BIKE_10 : duration == 20 ? BIKE_20 : BIKE_30);
    } else if (selected == "HIIT") {
      setRoutine(duration == 10 ? HIIT_10 : duration == 20 ? HIIT_20 : HIIT_30);
    } else {
      setRoutine(duration == 10 ? SWIM_10 : duration == 20 ? SWIM_20 : SWIM_30);
    }
  }, [selected, duration]);

  useEffect(() => {
    setSeconds(routine[index].time);
  }, [index]);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
      if (seconds <= 0) {
        if (index == routine.length - 1) {
          setIsActive(false);
          setShowModal(true);
          setIndex(0);
        } else {
          setIndex(index + 1);
        }
      }
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setSeconds(150);
    setIsActive(false);
  };

  return (
    <div className="timer-container">
      <Nav />
      <div className="timer-button-container">
        {SETTINGS.map((setting) => {
          return (
            <button
              className={`border px-10 py-2 rounded-xl text-2xl font-semibold ${
                selected == setting && "bg-black"
              } ${selected != setting ? "text-black" : "text-white"}`}
              onClick={() => {
                setShowModal(true);
                setSelected(setting);
              }}
            >
              {setting}
            </button>
          );
        })}
      </div>
      <div className="timer-circle-container">
        <div
          style={{
            padding: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="timer-circle flex justify-center items-center flex-col rounded-2xl">
            <div className="w-full">
              <div className="flex justify-center items-center text-lg">
                Current Exercise
              </div>
              <div className="flex justify-center items-center text-[4rem]">
                {routine[index].exercise}
              </div>
            </div>
            <div
              className="w-full flex justify-center items-center text-[2rem] gap-4"
              style={{ marginTop: "-30px" }}
            >
              <span className="text-[10rem]">{Math.floor(seconds / 60)}</span>
              min
              <span className="text-[10rem]">{seconds % 60}</span> sec
            </div>
            <div className="flex justify-center items-center w-full gap-4 px-10">
              <button
                onClick={() => {
                  if (!isActive) {
                    startTimer();
                  } else {
                    stopTimer();
                  }
                }}
                className="w-full border rounded-full text-4xl py-2 flex justify-center items-center bg-[#02C39A]"
              >
                {isActive ? "Pause" : "Start"}
              </button>
              <button
                onClick={() => {
                  resetTimer();
                  setShowModal(true);
                  setIndex(0);
                }}
                className="w-full border rounded-full text-4xl py-2 flex justify-center items-center border-black"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="next-up-label">
        <div className="flex w-full items-center justify-center px-5 mb-2">
          <div className="line"></div>
          <div className="next-up-text">Next Up</div>
          <div className="line"></div>
        </div>
      </div>
      <div className="w-full h-[200px] flex justify-start items-center gap-4 flex-col">
        <div
          className={`w-full h-[80px] px-4 ${
            index + 1 >= routine.length && "hidden"
          }`}
        >
          <div className="border w-full h-full border-2 rounded-lg border-gray-300 flex items-center justify-between px-5 text-gray-400">
            <div className="text-[2rem] flex justify-center items-center">
              {index + 1 < routine.length &&
                `${Math.floor(routine[index + 1].time / 60)} min ${
                  routine[index + 1].time % 60
                } sec`}
            </div>
            <div className="text-[2rem] flex justify-center items-center">
              {index + 1 < routine.length && routine[index + 1].exercise}
            </div>
          </div>
        </div>
        <div
          className={`w-full h-[80px] px-4 ${
            index + 2 >= routine.length && "hidden"
          }`}
        >
          <div className="border w-full h-full border-2 rounded-lg border-gray-300 flex items-center justify-between px-5 text-gray-400">
            <div className="text-[2rem] flex justify-center items-center">
              {index + 2 < routine.length &&
                `${Math.floor(routine[index + 2].time / 60)} min ${
                  routine[index + 2].time % 60
                } sec`}
            </div>
            <div className="text-[2rem] flex justify-center items-center">
              {index + 2 < routine.length && routine[index + 2].exercise}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-screen h-[800px] absolute top-[150px] left-0 bottom-0 right-0 flex justify-end items-end ${
          !showModal && "hidden"
        }`}
        style={{ zIndex: "98" }}
      >
        <div className="w-full h-[800px] p-4">
          <div className="w-full h-full bg-white rounded-lg border border-5 border-black flex flex-col">
            <div className="w-full flex justify-start items-center text-[3rem] px-4">
              <span className="font-semibold" style={{ color: "#02C39A" }}>
                {selected}
              </span>
              &nbsp;preset workout
            </div>
            <div className="w-full px-4 mb-4">
              <div className="w-full h-[2px] bg-black"></div>
            </div>
            <div className="px-4 text-xl mb-10">
              Get a quick, effective workout with preset routines. Choose from
              workouts designed for 10, 20, or 30 minute sessions. Follow the
              guided intervals for a balanced warmup, workout, and cooldown.
            </div>
            <div className="px-4 text-xl mb-4">Select Duration</div>
            <div className="w-full h-20px flex gap-4 px-4">
              <button
                className={`border px-10 py-2 rounded-xl text-2xl font-semibold ${
                  duration == 10 && "text-white bg-black"
                } w-full`}
                onClick={() => {
                  setDuration(10);
                }}
              >
                10 mins
              </button>
              <button
                className={`border px-10 py-2 rounded-xl text-2xl font-semibold w-full ${
                  duration == 20 && "text-white bg-black"
                }`}
                onClick={() => {
                  setDuration(20);
                }}
              >
                20 mins
              </button>
              <button
                className={`border px-10 py-2 rounded-xl text-2xl font-semibold w-full ${
                  duration == 30 && "text-white bg-black"
                }`}
                onClick={() => {
                  setDuration(30);
                }}
              >
                30 mins
              </button>
            </div>
            <div className="w-full h-[360px] p-4">
              <div className="w-full h-[325px] bg-[#f0f0f0] border rounded-lg p-2 gap-4 overflow-scroll">
                {routine.map((r) => {
                  return (
                    <div className="w-full h-[60px] bg-white rounded-lg mb-3 flex justify-between items-center px-4">
                      <div className="text-lg">
                        {Math.floor(r.time / 60)} min {r.time % 60} seconds
                      </div>
                      <div className="text-lg">{r.exercise}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              className="w-full px-4"
              style={{ alignSelf: "end", justifySelf: "end" }}
            >
              <button
                onClick={() => {
                  setShowModal(false);
                  setSeconds(routine[0].time);
                }}
                className="w-full rounded-lg text-[3rem] font-semibold text-white"
                style={{ backgroundColor: "#02C39A" }}
              >
                Let's Go!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RUN_10 = [
  {
    exercise: "Warm Up",
    time: 150,
  },
  {
    exercise: "Moderate Jog",
    time: 270,
  },
  {
    exercise: "Cool Down",
    time: 180,
  },
];

const BIKE_10 = [
  {
    exercise: "Warm Up",
    time: 150,
  },
  {
    exercise: "Moderate Pace",
    time: 270,
  },
  {
    exercise: "Cool Down",
    time: 180,
  },
];

const HIIT_10 = [
  {
    exercise: "Jumping Jacks",
    time: 180,
  },
  {
    exercise: "Burpees",
    time: 30,
  },
  {
    exercise: "Rest",
    time: 30,
  },
  {
    exercise: "Run in Place",
    time: 30,
  },
  {
    exercise: "Rest",
    time: 30,
  },
  {
    exercise: "Burpees",
    time: 30,
  },
  {
    exercise: "Rest",
    time: 30,
  },
  {
    exercise: "Run in Place",
    time: 30,
  },
  {
    exercise: "Rest",
    time: 30,
  },
  {
    exercise: "Stretching",
    time: 180,
  },
];

const SWIM_10 = [
  {
    exercise: "Freestyle",
    time: 240,
  },
  {
    exercise: "Breaststroke",
    time: 120,
  },
  {
    exercise: "Freestyle",
    time: 120,
  },
  {
    exercise: "Cool Down",
    time: 120,
  },
];

const RUN_20 = [
  {
    exercise: "Warm Up",
    time: 120,
  },
  {
    exercise: "Moderate Jog",
    time: 240,
  },
  {
    exercise: "Easy Jog",
    time: 60,
  },
  {
    exercise: "Moderate Jog",
    time: 240,
  },
  {
    exercise: "Easy Jog",
    time: 60,
  },
  {
    exercise: "Moderate Jog",
    time: 240,
  },
  {
    exercise: "Easy Jog",
    time: 60,
  },
  {
    exercise: "Cool Down",
    time: 180,
  },
];

const BIKE_20 = [
  {
    exercise: "Warm Up",
    time: 120,
  },
  {
    exercise: "Moderate Pace",
    time: 240,
  },
  {
    exercise: "Easy Pace",
    time: 60,
  },
  {
    exercise: "Moderate Pace",
    time: 240,
  },
  {
    exercise: "Easy Pace",
    time: 60,
  },
  {
    exercise: "Moderate Pace",
    time: 240,
  },
  {
    exercise: "Easy Pace",
    time: 60,
  },
  {
    exercise: "Cool Down",
    time: 180,
  },
];

const HIIT_20 = [
  {
    exercise: "Warm Up",
    time: 90,
  },
  {
    exercise: "Burpees",
    time: 60,
  },
  {
    exercise: "Rest",
    time: 60,
  },
  {
    exercise: "High Knees",
    time: 60,
  },
  {
    exercise: "Rest",
    time: 60,
  },
  {
    exercise: "Mountain Climbers",
    time: 60,
  },
  {
    exercise: "Rest",
    time: 60,
  },
  {
    exercise: "Burpees",
    time: 60,
  },
  {
    exercise: "Rest",
    time: 60,
  },
  {
    exercise: "Stretching",
    time: 90,
  },
];

const SWIM_20 = [
  {
    exercise: "Freestyle",
    time: 60,
  },
  {
    exercise: "Backstroke",
    time: 60,
  },
  {
    exercise: "Breaststroke",
    time: 60,
  },
  {
    exercise: "Butterfly",
    time: 60,
  },
  {
    exercise: "Freestyle",
    time: 180,
  },
  {
    exercise: "Breaststroke",
    time: 180,
  },
  {
    exercise: "Freestyle",
    time: 180,
  },
  {
    exercise: "Breaststroke",
    time: 180,
  },
  {
    exercise: "Freestyle",
    time: 240,
  },
];

const RUN_30 = [
  {
    exercise: "Warm Up",
    time: 300,
  },
  {
    exercise: "Moderate Jog",
    time: 300,
  },
  {
    exercise: "Sprint",
    time: 300,
  },
  {
    exercise: "Moderate Jog",
    time: 300,
  },
  {
    exercise: "Sprint",
    time: 300,
  },
  {
    exercise: "Cool Down",
    time: 300,
  },
];

const BIKE_30 = [
  {
    exercise: "Warm Up",
    time: 300,
  },
  {
    exercise: "High Pace",
    time: 150,
  },
  {
    exercise: "Moderate Pace",
    time: 150,
  },
  {
    exercise: "High Pace",
    time: 150,
  },
  {
    exercise: "Moderate Pace",
    time: 150,
  },
  {
    exercise: "High Pace",
    time: 150,
  },
  {
    exercise: "Moderate Pace",
    time: 150,
  },
  {
    exercise: "High Pace",
    time: 150,
  },
  {
    exercise: "Moderate Pace",
    time: 150,
  },
  {
    exercise: "Cool Down",
    time: 300,
  },
];

const HIIT_30 = [
  {
    exercise: "Jumping Jacks",
    time: 300,
  },
  {
    exercise: "Burpees",
    time: 60,
  },
  {
    exercise: "Rest",
    time: 60,
  },
  {
    exercise: "Burpees",
    time: 60,
  },
  {
    exercise: "Rest",
    time: 60,
  },
  {
    exercise: "Burpees",
    time: 60,
  },
  {
    exercise: "Rest",
    time: 60,
  },
  {
    exercise: "Burpees",
    time: 60,
  },
  {
    exercise: "Rest",
    time: 60,
  },
  {
    exercise: "Burpees",
    time: 60,
  },
  {
    exercise: "Rest",
    time: 60,
  },
  {
    exercise: "Burpees",
    time: 60,
  },
  {
    exercise: "Rest",
    time: 60,
  },
  {
    exercise: "Burpees",
    time: 60,
  },
  {
    exercise: "Rest",
    time: 60,
  },
  {
    exercise: "Burpees",
    time: 60,
  },
  {
    exercise: "Rest",
    time: 60,
  },
  {
    exercise: "Burpees",
    time: 60,
  },
  {
    exercise: "Rest",
    time: 60,
  },
  {
    exercise: "Burpees",
    time: 60,
  },
  {
    exercise: "Rest",
    time: 60,
  },
  {
    exercise: "Stretching",
    time: 300,
  },
];

const SWIM_30 = [
  {
    exercise: "Freestyle",
    time: 300,
  },
  {
    exercise: "Breaststoke",
    time: 150,
  },
  {
    exercise: "Butterfly",
    time: 150,
  },
  {
    exercise: "Breaststoke",
    time: 150,
  },
  {
    exercise: "Butterfly",
    time: 150,
  },
  {
    exercise: "Breaststoke",
    time: 150,
  },
  {
    exercise: "Butterfly",
    time: 150,
  },
  {
    exercise: "Breaststoke",
    time: 150,
  },
  {
    exercise: "Butterfly",
    time: 150,
  },
  {
    exercise: "Freestyle",
    time: 300,
  },
];

export default PresetWorkout;
