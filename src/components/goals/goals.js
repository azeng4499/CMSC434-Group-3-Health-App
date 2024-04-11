import React, { useEffect, useState } from "react";
import Nav from "../shared/nav/nav";
import { FaPlus } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { useSelector } from "react-redux";

const Goals = () => {
  const [showModal, setShowModal] = useState(false);
  const calorieLog = useSelector((state) => state.calorieLog);
  const workoutLog = useSelector((state) => state.workoutLog);
  const weightLog = useSelector((state) => state.weightLog);
  const [caloriesData, setCalorieData] = useState({
    day: null,
    week: null,
  });
  const [weightData, setWeightData] = useState({
    day: null,
    week: null,
  });
  const [workoutData, setWorkoutData] = useState({
    day: null,
    week: null,
  });

  useEffect(() => {
    setCalorieData({
      day: getSameDayData(calorieLog, "calories"),
      week: getSameWeekData(calorieLog, "calories"),
    });
    setWorkoutData({
      day: getSameDayData(workoutLog, "time"),
      week: getSameWeekData(workoutLog, "time"),
    });

    let tempWeight = { day: null, week: null };

    if (
      areEpochsOnSameDay(weightLog[0].timestamp, Math.floor(Date.now() / 1000))
    ) {
      tempWeight = { ...tempWeight, day: weightLog[0].weight };
    }

    if (
      areEpochsInSameWeek(weightLog[0].timestamp, Math.floor(Date.now() / 1000))
    ) {
      tempWeight = { ...tempWeight, week: weightLog[0].weight };
    }

    setWeightData(tempWeight);
  }, []);

  const getSameDayData = (arr, key) => {
    let tracker = 0;

    for (let i = 0; i < arr.length; i++) {
      const x = arr[i];
      if (areEpochsOnSameDay(x.timestamp, Math.floor(Date.now() / 1000))) {
        tracker += x[key];
      } else {
        break;
      }
    }
    return tracker;
  };

  const getSameWeekData = (arr, key) => {
    let tracker = 0;

    for (let i = 0; i < arr.length; i++) {
      const x = arr[i];
      if (areEpochsInSameWeek(x.timestamp, Math.floor(Date.now() / 1000))) {
        tracker += x[key];
      } else {
        break;
      }
    }

    return tracker;
  };

  function areEpochsOnSameDay(epoch1, epoch2) {
    const date1 = new Date(epoch1 * 1000);
    const date2 = new Date(epoch2 * 1000);

    const isSameYear = date1.getFullYear() === date2.getFullYear();
    const isSameMonth = date1.getMonth() === date2.getMonth();
    const isSameDay = date1.getDate() === date2.getDate();
    return isSameYear && isSameMonth && isSameDay;
  }

  function areEpochsInSameWeek(epoch1, epoch2) {
    function getStartOfWeek(date) {
      const dayOfWeek = date.getDay();
      const startOfWeek = new Date(date);
      startOfWeek.setDate(date.getDate() - dayOfWeek);
      startOfWeek.setHours(0, 0, 0, 0);
      return startOfWeek;
    }

    const date1 = new Date(epoch1 * 1000);
    const date2 = new Date(epoch2 * 1000);

    const startOfWeek1 = getStartOfWeek(date1);
    const startOfWeek2 = getStartOfWeek(date2);

    return startOfWeek1.getTime() === startOfWeek2.getTime();
  }

  return (
    <div className="w-screen h-screen">
      <Nav />
      <div
        className="w-full overflow-hidden p-4"
        style={{ height: "calc(100vh - 82.8px)" }}
      >
        <div className="w-full rounded-lg border border-black">
          <div className="w-full flex justify-between items-center text-[3rem] px-4">
            <div>
              <span className="font-semibold" style={{ color: "#02C39A" }}>
                Daily
              </span>
              &nbsp;Goals
            </div>
            <div
              className="w-12 h-12 rounded-full flex justify-center items-center"
              style={{ backgroundColor: "#02C39A" }}
            >
              <CiEdit
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
          <div className="flex">
            <div className="w-full pb-4 px-4">
              <table className="w-full text-xl">
                <tr className="mb-5">
                  <th className="text-left pl-10 max-w-[100px]">Type</th>
                  <th className="">Goal</th>
                  <th className="">Aaron</th>
                </tr>
                <tr className="text-center bg-red-300">
                  <td className="text-left pl-10 max-w-[100px]">
                    Calories Consumed
                  </td>
                  <td className="">&lt; 2000</td>
                  <td className="">{caloriesData.day}</td>
                </tr>
                <tr className="  text-center bg-gray-300">
                  <td className="  text-left pl-10 max-w-[100px]">Weight</td>
                  <td className="">No Goal</td>
                  <td className="">
                    {weightData.day ? weightData.day : "No Log"}
                  </td>
                </tr>
                <tr className="  text-center bg-green-300">
                  <td className="  text-left pl-10 max-w-[100px]">
                    Workout Time (mins)
                  </td>
                  <td className=""> &gt; 200</td>
                  <td className="">{workoutData.day}</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="w-full flex justify-between items-center text-[3rem] px-4">
            <div>
              <span className="font-semibold" style={{ color: "#02C39A" }}>
                Weekly
              </span>
              &nbsp;Goals
            </div>
            <div
              className="w-12 h-12 rounded-full flex justify-center items-center"
              style={{ backgroundColor: "#02C39A" }}
            >
              <CiEdit
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
          <div className="flex">
            <div className="w-full pb-4 px-4">
              <table className="w-full text-xl">
                <tr className="mb-5">
                  <th className="text-left pl-10 max-w-[100px]">Type</th>
                  <th className="">Goal</th>
                  <th className="">Aaron</th>
                </tr>
                <tr className="text-center bg-red-300">
                  <td className="text-left pl-10 max-w-[100px]">
                    Calories Consumed
                  </td>
                  <td className="">&lt; 2000</td>
                  <td className="">{caloriesData.week}</td>
                </tr>
                <tr className="  text-center bg-gray-300">
                  <td className="  text-left pl-10 max-w-[100px]">Weight</td>
                  <td className="">No Goal</td>
                  <td className="">
                    {weightData.week ? weightData.week : "No Log"}
                  </td>
                </tr>
                <tr className="  text-center bg-green-300">
                  <td className="  text-left pl-10 max-w-[100px]">
                    Workout Time (mins)
                  </td>
                  <td className=""> &gt; 200</td>
                  <td className="">{workoutData.week}</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="w-full h-[20px] flex justify-between items-center px-10 py-8">
            <div className="flex justify-center items-center gap-2">
              <div className="w-[20px] h-[20px] bg-red-300"></div> Goal Not
              Achieved
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className="w-[20px] h-[20px] bg-gray-300"></div> No Goal
              Detected
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className="w-[20px] h-[20px] bg-green-300"></div> Goal
              Achieved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
