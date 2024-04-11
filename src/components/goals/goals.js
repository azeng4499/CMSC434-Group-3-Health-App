import React, { useEffect, useState } from "react";
import Nav from "../shared/nav/nav";
import { CiEdit } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import { editDayGoal, editWeekGoal } from "../../store/actions";

const Goals = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const goals = useSelector((state) => state.goals);
  const calorieLog = useSelector((state) => state.calorieLog);
  const workoutLog = useSelector((state) => state.workoutLog);
  const weightLog = useSelector((state) => state.weightLog);
  const [calorieGoal, setCalorieGoal] = useState("");
  const [workoutTimeGoal, setWorkoutTimeGoal] = useState("");
  const [weightGoal, setWeightGoal] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (modalType == "Daily") {
      setCalorieGoal(
        goals.day.calories.value ? goals.day.calories.value.toString() : ""
      );
      setWorkoutTimeGoal(
        goals.day.workoutTime.value
          ? goals.day.workoutTime.value.toString()
          : ""
      );
      setWeightGoal(
        goals.day.weight.value ? goals.day.weight.value.toString() : ""
      );
    } else {
      setCalorieGoal(
        goals.week.calories.value ? goals.week.calories.value.toString() : ""
      );
      setWorkoutTimeGoal(
        goals.week.workoutTime.value
          ? goals.week.workoutTime.value.toString()
          : ""
      );
      setWeightGoal(
        goals.week.weight.value ? goals.week.weight.value.toString() : ""
      );
    }
  }, [modalType, showModal]);

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

  const [operators, setOperators] = useState({
    calories: "less",
    weight: "less",
    workoutTime: "greater",
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
      weightLog.length > 0 &&
      areEpochsOnSameDay(weightLog[0].timestamp, Math.floor(Date.now() / 1000))
    ) {
      tempWeight = { ...tempWeight, day: weightLog[0].weight };
    }

    if (
      weightLog.length > 0 &&
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

  const validate4 = (value) => /^[0-9]{0,5}$/.test(value);
  const validate3 = (value) => /^[0-9]{0,3}$/.test(value);

  const handleCaloriesInput = (e) => {
    const value = e.target.value;
    if (validate4(value)) {
      setCalorieGoal(value);
    } else {
      e.target.value = calorieGoal;
    }
  };

  const handleWeightInput = (e) => {
    const value = e.target.value;
    if (validate3(value)) {
      setWeightGoal(value);
    } else {
      e.target.value = weightGoal;
    }
  };
  const handleWorkoutTimeInput = (e) => {
    const value = e.target.value;
    if (validate4(value)) {
      setWorkoutTimeGoal(value);
    } else {
      e.target.value = workoutTimeGoal;
    }
  };

  const testValue = (value, goal) => {
    if (goal.operator == "less") {
      return value < goal.value ? "bg-green-300" : "bg-red-300";
    } else {
      return value > goal.value ? "bg-green-300" : "bg-red-300";
    }
  };

  return (
    <div className="w-screen h-screen">
      <div
        className={`w-scren h-screen absolute top-0 bottm-0 left-0 right-0 flex justify-center items-center ${
          !showModal && "hidden"
        }`}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
      >
        <div className="w-[500px] bg-white rounded-lg p-4">
          <div className="w-full flex justify-between items-center text-[2rem]">
            <div>
              <span className="font-semibold" style={{ color: "#02C39A" }}>
                Edit
              </span>
              &nbsp;{modalType} Goals
            </div>
          </div>
          <div className="w-full mt-6 px-1 text-xl font-semibold">
            Set Calorie Consumed Goal
          </div>
          <div className="p-2 border border-gray-500 mt-4 rounded-lg flex justify-center items-center">
            <div className="w-full flex justify-center items-end gap-6 pb-3">
              <div className="flex flex-col gap-2 h-full  ml-5">
                <div
                  className="w-[100px] bg-gray-400 rounded-full flex justify-center items-center text-lg"
                  style={{
                    backgroundColor:
                      operators.calories == "greater" && "#02C39A",
                  }}
                  onClick={() => {
                    setOperators({ ...operators, calories: "greater" });
                  }}
                >
                  Over
                </div>
                <div
                  className="w-[100px] bg-gray-400 rounded-full flex justify-center items-center text-lg"
                  style={{
                    backgroundColor: operators.calories == "less" && "#02C39A",
                  }}
                  onClick={() => {
                    setOperators({ ...operators, calories: "less" });
                  }}
                >
                  Under
                </div>
              </div>
              <div className=" flex w-full justify-center items-end gap-4">
                <input
                  type="text"
                  value={calorieGoal}
                  onInput={handleCaloriesInput}
                  className="select border-b border-black text-[3rem] w-[150px] text-center"
                  maxLength={5}
                />
                <div className="text-[2rem]">Calories</div>
              </div>
            </div>
          </div>
          <div className="w-full mt-6 px-1 text-xl font-semibold">
            Set Weight Goal
          </div>
          <div className="p-2 border border-gray-500 mt-4 rounded-lg flex justify-center items-center">
            <div className="w-full flex justify-center items-end gap-6 pb-3">
              <div className="flex gap-2 h-full ml-5 flex-col">
                <div
                  className="w-[100px] bg-gray-400 rounded-full flex justify-center items-center text-lg"
                  style={{
                    backgroundColor: operators.weight == "greater" && "#02C39A",
                  }}
                  onClick={() => {
                    setOperators({ ...operators, weight: "greater" });
                  }}
                >
                  Over
                </div>
                <div
                  className="w-[100px] bg-gray-400 rounded-full flex justify-center items-center text-lg"
                  style={{
                    backgroundColor: operators.weight == "less" && "#02C39A",
                  }}
                  onClick={() => {
                    setOperators({ ...operators, weight: "less" });
                  }}
                >
                  Under
                </div>
              </div>
              <div className=" flex w-full justify-center items-end gap-4">
                <input
                  type="text"
                  value={weightGoal}
                  onInput={handleWeightInput}
                  className="select border-b border-black text-[3rem] w-[150px] text-center"
                  maxLength={3}
                  style={{ marginLeft: "-50px" }}
                />
                <div className="text-[2rem]">Lbs</div>
              </div>
            </div>
          </div>
          <div className="w-full mt-6 px-1 text-xl font-semibold">
            Set Workout Time Goal
          </div>
          <div className="p-2 border border-gray-500 mt-4 rounded-lg flex justify-center items-center">
            <div className="flex gap-2 h-full  ml-5 flex-col">
              <div
                className="w-[100px] bg-gray-400 rounded-full flex justify-center items-center text-lg"
                style={{
                  backgroundColor:
                    operators.workoutTime == "greater" && "#02C39A",
                }}
                onClick={() => {
                  setOperators({ ...operators, workoutTime: "greater" });
                }}
              >
                Over
              </div>
              <div
                className="w-[100px] bg-gray-400 rounded-full flex justify-center items-center text-lg"
                style={{
                  backgroundColor: operators.workoutTime == "less" && "#02C39A",
                }}
                onClick={() => {
                  setOperators({ ...operators, workoutTime: "less" });
                }}
              >
                Under
              </div>
            </div>
            <div className="w-full flex justify-center items-end gap-6 pb-3">
              <div className=" flex w-full justify-center items-end gap-4">
                <input
                  type="text"
                  value={workoutTimeGoal}
                  onInput={handleWorkoutTimeInput}
                  className="select border-b border-black text-[3rem] w-[150px] text-center"
                  maxLength={4}
                />
                <div className="text-[2rem]">Mins</div>
              </div>
            </div>
          </div>
          <div className="w-full h-[100px] flex justify-center items-end gap-8 mb-8">
            <button
              className="w-full border rounded-full text-3xl py-1 border-black"
              onClick={() => {
                setShowModal(false);
                setCalorieGoal("");
                setWeightGoal("");
                setWorkoutTimeGoal("");
                setOperators({
                  calories: "less",
                  weight: "less",
                  workoutTime: "greater",
                });
              }}
            >
              Cancel
            </button>
            <button
              className="w-full border rounded-full text-3xl py-1"
              style={{
                backgroundColor:
                  calorieGoal.length > 0 &&
                  workoutTimeGoal.length > 0 &&
                  weightGoal.length > 0
                    ? "#02C39A"
                    : "#e4e7eb",
              }}
              disabled={
                !(
                  calorieGoal.length > 0 &&
                  workoutTimeGoal.length > 0 &&
                  weightGoal.length > 0
                )
              }
              onClick={() => {
                if (modalType == "Daily") {
                  dispatch(
                    editDayGoal({
                      calories: {
                        operator: operators.calories,
                        value: parseInt(calorieGoal),
                      },
                      workoutTime: {
                        operator: operators.workoutTime,
                        value: parseInt(workoutTimeGoal),
                      },
                      weight: {
                        operator: operators.weight,
                        value: parseInt(weightGoal),
                      },
                    })
                  );
                } else {
                  dispatch(
                    editWeekGoal({
                      calories: {
                        operator: operators.calories,
                        value: parseInt(calorieGoal),
                      },
                      workoutTime: {
                        operator: operators.workoutTime,
                        value: parseInt(workoutTimeGoal),
                      },
                      weight: {
                        operator: operators.weight,
                        value: parseInt(weightGoal),
                      },
                    })
                  );
                }
                setShowModal(false);
                setCalorieGoal("");
                setWeightGoal("");
                setWorkoutTimeGoal("");
                setOperators({
                  calories: "less",
                  weight: "less",
                  workoutTime: "greater",
                });
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
                  setModalType("Daily");
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
                  <th className="">You</th>
                </tr>
                <tr
                  className={`text-center ${
                    goals.day.calories.value
                      ? testValue(caloriesData.day, goals.day.calories)
                      : "bg-gray-300"
                  }`}
                >
                  <td className="text-left pl-10 max-w-[100px]">
                    Calories Consumed
                  </td>
                  <td className="">
                    {goals.day.calories.value
                      ? goals.day.calories.operator == "greater"
                        ? "> " + goals.day.calories.value
                        : "< " + goals.day.calories.value
                      : "No Goal"}
                  </td>
                  <td className="">{caloriesData.day}</td>
                </tr>
                <tr
                  className={`text-center ${
                    goals.day.weight.value && weightData.day
                      ? testValue(weightData.day, goals.day.weight)
                      : "bg-gray-300"
                  }`}
                >
                  <td className="text-left pl-10 max-w-[100px]">
                    Weight (Lbs)
                  </td>
                  <td className="">
                    {goals.day.weight.value
                      ? goals.day.weight.operator == "greater"
                        ? "> " + goals.day.weight.value
                        : "< " + goals.day.weight.value
                      : "No Goal"}
                  </td>
                  <td className="">
                    {weightData.day ? weightData.day : "No Log"}
                  </td>
                </tr>
                <tr
                  className={`text-center ${
                    goals.day.workoutTime.value
                      ? testValue(caloriesData.day, goals.day.workoutTime)
                      : "bg-gray-300"
                  }`}
                >
                  <td className="text-left pl-10 max-w-[100px]">
                    Workout Time (mins)
                  </td>
                  <td className="">
                    {goals.day.workoutTime.value
                      ? goals.day.workoutTime.operator == "greater"
                        ? "> " + goals.day.workoutTime.value
                        : "< " + goals.day.workoutTime.value
                      : "No Goal"}
                  </td>
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
                  setModalType("Weekly");
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
                  <th className="">You</th>
                </tr>
                <tr
                  className={`text-center ${
                    goals.week.calories.value
                      ? testValue(caloriesData.week, goals.week.calories)
                      : "bg-gray-300"
                  }`}
                >
                  <td className="text-left pl-10 max-w-[100px]">
                    Calories Consumed
                  </td>
                  <td className="">
                    {" "}
                    {goals.week.calories.value
                      ? goals.week.calories.operator == "greater"
                        ? "> " + goals.week.calories.value
                        : "< " + goals.week.calories.value
                      : "No Goal"}
                  </td>
                  <td className="">{caloriesData.week}</td>
                </tr>
                <tr
                  className={`text-center ${
                    goals.week.weight.value && weightData.week
                      ? testValue(weightData.week, goals.week.weight)
                      : "bg-gray-300"
                  }`}
                >
                  <td className="  text-left pl-10 max-w-[100px]">
                    Weight (Lbs)
                  </td>
                  <td className="">
                    {goals.week.weight.value
                      ? goals.week.weight.operator == "greater"
                        ? "> " + goals.week.weight.value
                        : "< " + goals.week.weight.value
                      : "No Goal"}
                  </td>
                  <td className="">
                    {weightData.week ? weightData.week : "No Log"}
                  </td>
                </tr>
                <tr
                  className={`text-center ${
                    goals.week.workoutTime.value
                      ? testValue(caloriesData.week, goals.week.workoutTime)
                      : "bg-gray-300"
                  }`}
                >
                  <td className="  text-left pl-10 max-w-[100px]">
                    Workout Time (mins)
                  </td>
                  <td className="">
                    {goals.week.workoutTime.value
                      ? goals.week.workoutTime.operator == "greater"
                        ? "> " + goals.week.workoutTime.value
                        : "< " + goals.week.workoutTime.value
                      : "No Goal"}
                  </td>
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
              <div className="w-[20px] h-[20px] bg-gray-300"></div> No Goal /
              Log
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
