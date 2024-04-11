import React, { useEffect, useState } from "react";
import Nav from "../shared/nav/nav";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";
import "./workout-tracker.css";
import { addWorkout } from "../../store/actions";

const WorkoutTracker = () => {
  const activities = [
    "Traditional strength training",
    "Walk",
    "Rowing",
    "Core training",
    "Stair stepper",
    "Bike",
    "Indoor bike",
    "Hike",
    "Snowboard",
    "Treadmill",
    "Elliptical",
    "Kickbox",
    "Yoga",
    "Pilates",
    "Dance",
    "Cooldown",
    "Karate",
    "Box",
    "Basketball",
    "Cross training",
    "Soccer",
    "Swim",
    "HIIT",
    "Tennis",
    "Run",
    "Pickle ball",
    "Cross country ski",
    "Golf",
  ];

  const workoutLog = useSelector((state) => state.workoutLog);
  const dispatch = useDispatch();
  const [selectedWorkout, setSelectedWorkout] = useState("");
  const [search, setSearch] = useState("");
  const [showActivites, setShowActivities] = useState(activities);
  const [showModal, setShowModal] = useState(false);
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [calories, setCalories] = useState("");

  useEffect(() => {
    const newActivities = activities.filter((a) => {
      return a.toLowerCase().includes(search.toLowerCase());
    });

    const newActivitieAppend = activities.filter((a) => {
      return !a.toLowerCase().includes(search.toLowerCase());
    });

    setShowActivities([...newActivities, ...newActivitieAppend]);
  }, [search]);

  const validateHour = (value) => /^[0-9]{0,1}$/.test(value);
  const validateMinute = (value) =>
    /^[0-9]{0,2}$/.test(value) && (value === "" || parseInt(value, 10) < 60);
  const validateCalories = (value) => /^[0-9]{0,4}$/.test(value); // Validates up to 4 digits

  const handleHourInput = (e) => {
    const value = e.target.value;
    if (validateHour(value)) {
      setHour(value);
    } else {
      e.target.value = hour;
    }
  };

  const handleMinuteInput = (e) => {
    const value = e.target.value;
    if (validateMinute(value)) {
      setMinute(value);
    } else {
      e.target.value = minute;
    }
  };

  const handleCaloriesInput = (e) => {
    const value = e.target.value;
    if (validateCalories(value)) {
      setCalories(value);
    } else {
      e.target.value = calories;
    }
  };

  function formatEpochToDate(epoch) {
    const date = new Date(epoch * 1000);

    const options = { month: "long", day: "numeric", year: "numeric" };
    let formattedDate = date.toLocaleDateString("en-US", options);

    const day = date.getDate();
    let suffix = "th";
    if (day > 3 && day < 21) suffix = "th";
    else if (day % 10 === 1) suffix = "st";
    else if (day % 10 === 2) suffix = "nd";
    else if (day % 10 === 3) suffix = "rd";

    formattedDate = formattedDate.replace(/\d+/, `${day}${suffix}`);

    return formattedDate;
  }

  return (
    <div className="w-screen h-screen">
      <div
        className={`w-screen h-screen absolute top-[0px] left-0 flex justify-center items-center ${
          !showModal && "hidden"
        }`}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
      >
        <div className={`w-[500px] pb-10 bg-white rounded-lg py-4 px-6`}>
          <div className="w-full flex justify-between items-center text-[2rem]">
            <div>
              <span className="font-semibold" style={{ color: "#02C39A" }}>
                Add
              </span>
              &nbsp;Workout
            </div>
          </div>
          <div className="w-full mt-8 px-1 text-xl font-semibold">
            Log Exercise Type
          </div>
          <div className="p-2 border border-gray-500 mt-4 rounded-lg">
            <div className="w-full flex gap-4 bg-red-400">
              <input
                type="text"
                placeholder="Search for workout"
                className="w-full border-b select border-black text-2xl px-4 py-2"
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              />
            </div>
            <div className="mt-4 w-full h-[150px] border rounded-lg overflow-scroll flex flex-col gap-3 py-4">
              {showActivites.map((act) => {
                return (
                  <div
                    className={`w-full px-4 text-xl`}
                    style={{
                      backgroundColor:
                        act == selectedWorkout ? "#02C39A" : "transparent",
                    }}
                    onClick={() => {
                      setSelectedWorkout(act);
                    }}
                  >
                    {act}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full mt-6 px-1 text-xl font-semibold">Log Time</div>
          <div className="p-2 border border-gray-500 mt-4 rounded-lg flex justify-center items-center">
            <div className="w-full flex justify-center items-end gap-6 pb-3">
              <div className=" flex w-full justify-center items-end gap-4">
                <input
                  className="select border-b border-black text-[3rem] w-[100px] text-center"
                  type="text"
                  value={hour}
                  onInput={handleHourInput}
                  maxLength={1}
                />
                <div className="text-[2rem]">hours</div>
              </div>
              <div className="flex w-full justify-center items-end gap-4">
                <input
                  className="select border-b border-black text-[3rem] w-[100px] text-center"
                  type="text"
                  value={minute}
                  onInput={handleMinuteInput}
                  maxLength={2}
                />
                <div className="text-[2rem]">mins</div>
              </div>
            </div>
          </div>
          <div className="w-full mt-6 px-1 text-xl font-semibold">
            Log Calories Burned
          </div>
          <div className="p-2 border border-gray-500 mt-4 rounded-lg flex justify-center items-center">
            <div className="w-full flex justify-center items-end gap-6 pb-3">
              <div className=" flex w-full justify-center items-end gap-4">
                <input
                  type="text"
                  value={calories}
                  onInput={handleCaloriesInput}
                  className="select border-b border-black text-[3rem] w-[150px] text-center"
                  maxLength={4}
                />
                <div className="text-[2rem]">Calories Burned</div>
              </div>
            </div>
          </div>
          <div className="w-full h-[100px] flex justify-center items-end gap-8">
            <button
              className="w-full border rounded-full text-3xl py-1 border-black"
              onClick={() => {
                setShowModal(false);
                setCalories("");
                setHour("");
                setMinute("");
                setSearch("");
                setSelectedWorkout("");
              }}
            >
              Cancel
            </button>
            <button
              className="w-full border rounded-full text-3xl py-1"
              style={{
                backgroundColor:
                  selectedWorkout.length > 0 &&
                  hour.length > 0 &&
                  minute.length > 0 &&
                  calories.length > 0
                    ? "#02C39A"
                    : "#e4e7eb",
              }}
              disabled={
                !(
                  selectedWorkout.length > 0 &&
                  hour.length > 0 &&
                  minute.length > 0 &&
                  calories.length > 0
                )
              }
              onClick={() => {
                dispatch(
                  addWorkout({
                    type: selectedWorkout,
                    time: parseInt(hour, 10) * 60 + parseInt(minute, 10),
                    calsBurned: parseInt(calories),
                    timestamp: Math.floor(Date.now() / 1000),
                  })
                );
                setShowModal(false);
                setCalories("");
                setHour("");
                setMinute("");
                setSearch("");
                setSelectedWorkout("");
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <Nav />
      <div
        className="w-full overflow-hidden p-4"
        style={{ height: "calc(100vh - 82.8px)" }}
      >
        <div className="w-full h-full rounded-lg border border-black">
          <div className="w-full flex justify-between items-center text-[3rem] px-4">
            <div>
              <span className="font-semibold" style={{ color: "#02C39A" }}>
                Log
              </span>
              &nbsp;Workouts
            </div>
            <div
              className="w-12 h-12 rounded-full flex justify-center items-center"
              style={{ backgroundColor: "#02C39A" }}
            >
              <FaPlus
                className="w-8 h-8 text-white"
                onClick={() => {
                  setShowModal(true);
                }}
              />
            </div>
          </div>
          <div className="w-full px-4 mb-4">
            <div className="w-full h-[2px] bg-black"></div>
          </div>
          <div className="px-4 flex flex-col gap-2">
            {workoutLog.map((workout) => {
              return (
                <div className="w-full border rounded-lg p-2 flex font-semibold text-lg flex-col">
                  <div className="w-full flex justify-between items-center">
                    <div>{workout.type}</div>
                    <div>{formatEpochToDate(workout.timestamp)}</div>
                  </div>
                  <div className="w-full mb-4 mt-2">
                    <div className="w-full h-[2px] bg-gray-300"></div>
                  </div>
                  <div className="w-full flex justify-start gap-2">
                    <div className="text-black px-2 py-1 rounded-lg font-normal bg-gray-200">
                      Calories Burned:{" "}
                      <span className="font-bold" style={{ color: "#02C39A" }}>
                        {workout.calsBurned}
                      </span>
                    </div>
                    <div className="text-black px-2 py-1 rounded-lg font-normal bg-gray-200">
                      Workout Time:{" "}
                      <span className="font-bold" style={{ color: "#02C39A" }}>
                        {Math.floor(workout.time / 60)} hours{" "}
                        {workout.time % 60} mins
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutTracker;
