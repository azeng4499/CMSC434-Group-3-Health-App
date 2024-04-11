import React, { useEffect, useState } from "react";
import Nav from "../shared/nav/nav";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";
import "../workout-tracker/workout-tracker.css";
import { addWeight } from "../../store/actions";

const WeightTracker = () => {
  const weightLog = useSelector((state) => state.weightLog);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [weight, setWeight] = useState("");

  const validateWeight = (value) => /^[0-9]{0,4}$/.test(value);

  const handleWeightInput = (e) => {
    const value = e.target.value;
    if (validateWeight(value)) {
      setWeight(value);
    } else {
      e.target.value = weight;
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
              &nbsp;Weight
            </div>
          </div>
          <div className="p-2 border border-gray-500 mt-4 rounded-lg flex justify-center items-center">
            <div className="w-full flex justify-center items-end gap-6 pb-3">
              <div className=" flex w-full justify-center items-end gap-4">
                <input
                  type="text"
                  value={weight}
                  onInput={handleWeightInput}
                  className="select border-b border-black text-[3rem] w-[150px] text-center"
                  maxLength={3}
                />
                <div className="text-[2rem]">LBS</div>
              </div>
            </div>
          </div>
          <div className="w-full h-[100px] flex justify-center items-end gap-8">
            <button
              className="w-full border rounded-full text-3xl py-1 border-black"
              onClick={() => {
                setShowModal(false);
                setWeight("");
              }}
            >
              Cancel
            </button>
            <button
              className="w-full border rounded-full text-3xl py-1"
              style={{
                backgroundColor: weight.length > 0 ? "#02C39A" : "#e4e7eb",
              }}
              disabled={!(weight.length > 0)}
              onClick={() => {
                dispatch(
                  addWeight({
                    weight: parseInt(weight),
                    timestamp: Math.floor(Date.now() / 1000),
                  })
                );
                setShowModal(false);
                setWeight("");
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
              &nbsp;Weight
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
            {weightLog.map((weight) => {
              return (
                <div className="w-full border rounded-lg p-2 flex font-semibold text-lg flex-col">
                  <div className="w-full flex justify-between items-center">
                    <div className="w-full flex justify-start gap-2">
                      <div className="text-black px-2 py-1 rounded-lg font-normal bg-gray-200">
                        <span
                          className="font-bold"
                          style={{ color: "#02C39A" }}
                        >
                          {weight.weight}
                        </span>{" "}
                        Lbs
                      </div>
                    </div>
                    <div className="w-[300px] text-right">
                      {formatEpochToDate(weight.timestamp)}
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

export default WeightTracker;
