import React, { useEffect, useState } from "react";
import Nav from "../shared/nav/nav";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";
import "../workout-tracker/workout-tracker.css";
import { addFood } from "../../store/actions";

const CalorieTracker = () => {
  const foods = [
    "Hamburgers",
    "Hot dogs",
    "French fries",
    "Pizza",
    "Fried chicken",
    "Grilled cheese sandwich",
    "Tacos",
    "Pancakes",
    "Waffles",
    "Bagels",
    "Donuts",
    "Apple pie",
    "BBQ ribs",
    "Cornbread",
    "Chili",
    "Macaroni and cheese",
    "Meatloaf",
    "Pot roast",
    "Turkey and stuffing",
    "Reuben sandwich",
    "Clam chowder",
    "Gumbo",
    "Jambalaya",
    "Fajitas",
    "Nachos",
    "Buffalo wings",
    "Sloppy Joes",
    "Caesar salad",
    "BLT sandwich (Bacon, Lettuce, Tomato)",
    "Cobb salad",
    "Corn on the cob",
    "Biscuits and gravy",
    "Chicken and waffles",
    "Chicken noodle soup",
    "Potato salad",
    "Tuna salad",
    "Egg salad",
    "Submarine sandwiches",
    "Philly cheesesteak",
    "Chicago-style deep dish pizza",
    "New York-style pizza",
    "Sourdough bread",
    "Key lime pie",
    "Cheesecake",
    "Brownies",
    "Chocolate chip cookies",
    "Peanut butter cookies",
    "S'mores",
    "Ice cream",
    "Milkshakes",
    "Corn dogs",
    "Baked beans",
    "Potato chips",
    "Soft pretzels",
    "Popcorn",
    "Sushi (American-style)",
    "Burritos (American-style)",
    "Quesadillas",
    "Lasagna (American-style)",
    "Spaghetti with meatballs",
    "Lobster roll",
    "Crab cakes",
    "Fish and chips",
    "Pulled pork sandwich",
    "Brisket",
    "Bacon and eggs",
    "Omelets",
    "French toast",
    "Cereal",
    "Oatmeal",
    "Grilled salmon",
    "Steak",
    "Pork chops",
    "Roast beef",
    "Chicken pot pie",
    "Shepherd's pie (American version)",
    "Tater tots",
    "Onion rings",
    "Mozzarella sticks",
    "Spinach and artichoke dip",
    "Deviled eggs",
    "Fruit salad",
    "Pumpkin pie",
    "Sweet potato pie",
    "Green bean casserole",
    "Mashed potatoes and gravy",
    "Coleslaw",
    "Pecan pie",
    "Banana split",
    "Root beer float",
    "Cupcakes",
    "Pasta salad",
    "Chicken Caesar salad",
    "Turkey burger",
    "Veggie burger",
    "Smoothies",
    "Club sandwich",
    "Chicken Parmesan (American-style)",
    "Eggplant Parmesan (American-style)",
    "Stuffed bell peppers",
    "Grits",
    "Frittata",
    "Quiche",
    "Ratatouille (American-style)",
    "Pastrami on rye",
    "Corned beef hash",
    "Bagel and lox",
    "Fried catfish",
    "Po' boy sandwich",
    "Chicken fried steak",
    "Beef stroganoff (American-style)",
    "Chowder",
    "Fish tacos",
    "Shrimp and grits",
    "Red beans and rice",
    "Baked ziti",
    "Garlic bread",
    "Texas toast",
    "Fried green tomatoes",
    "Hushpuppies",
    "Chicken tenders",
    "Egg rolls (American Chinese)",
    "General Tso's chicken",
    "Orange chicken",
    "Fortune cookies",
    "Chop suey (American Chinese)",
    "Pepperoni roll",
    "Sloppy joe sliders",
    "Breakfast burritos",
    "Hash browns",
    "Cinnamon rolls",
    "Apple cider",
    "Lemonade",
    "Iced tea",
    "Coffee (Americano)",
    "Hot chocolate",
    "Mint julep",
    "Bloody Mary",
    "Martini",
    "Craft beer",
    "Bourbon whiskey",
  ];

  const calorieLog = useSelector((state) => state.calorieLog);
  const dispatch = useDispatch();
  const [selectedFood, setSelectedFood] = useState("");
  const [search, setSearch] = useState("");
  const [showFoods, setShowFoods] = useState(foods);
  const [showModal, setShowModal] = useState(false);
  const [calories, setCalories] = useState("");

  useEffect(() => {
    const newFoods = foods.filter((a) => {
      return a.toLowerCase().includes(search.toLowerCase());
    });

    const newFoodsAppend = foods.filter((a) => {
      return !a.toLowerCase().includes(search.toLowerCase());
    });

    setShowFoods([...newFoods, ...newFoodsAppend]);
  }, [search]);

  const validateCalories = (value) => /^[0-9]{0,4}$/.test(value); // Validates up to 4 digits

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
              &nbsp;Food
            </div>
          </div>
          <div className="w-full mt-8 px-1 text-xl font-semibold">
            Log Food Type
          </div>
          <div className="p-2 border border-gray-500 mt-4 rounded-lg">
            <div className="w-full flex gap-4 bg-red-400">
              <input
                type="text"
                placeholder="Search for food"
                className="w-full border-b select border-black text-2xl px-4 py-2"
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              />
            </div>
            <div className="mt-4 w-full h-[150px] border rounded-lg overflow-scroll flex flex-col gap-3 py-4">
              {showFoods.map((act) => {
                return (
                  <div
                    className={`w-full px-4 text-xl`}
                    style={{
                      backgroundColor:
                        act == selectedFood ? "#02C39A" : "transparent",
                    }}
                    onClick={() => {
                      setSelectedFood(act);
                    }}
                  >
                    {act}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full mt-6 px-1 text-xl font-semibold">
            Log Calories
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
                <div className="text-[2rem]">Calories</div>
              </div>
            </div>
          </div>
          <div className="w-full h-[100px] flex justify-center items-end gap-8">
            <button
              className="w-full border rounded-full text-3xl py-1 border-black"
              onClick={() => {
                setShowModal(false);
                setCalories("");
                setSearch("");
                setSelectedFood("");
              }}
            >
              Cancel
            </button>
            <button
              className="w-full border rounded-full text-3xl py-1"
              style={{
                backgroundColor:
                  selectedFood.length > 0 && calories.length > 0
                    ? "#02C39A"
                    : "#e4e7eb",
              }}
              disabled={!(selectedFood.length > 0 && calories.length > 0)}
              onClick={() => {
                dispatch(
                  addFood({
                    food: selectedFood,
                    calories: calories,
                    timestamp: Math.floor(Date.now() / 1000),
                  })
                );
                setShowModal(false);
                setCalories("");
                setSearch("");
                setSelectedFood("");
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
              &nbsp;Calories
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
            {calorieLog.map((cal) => {
              return (
                <div className="w-full border rounded-lg p-2 flex font-semibold text-lg flex-col">
                  <div className="w-full flex justify-between items-center">
                    <div>{cal.food}</div>
                    <div>{formatEpochToDate(cal.timestamp)}</div>
                  </div>
                  <div className="w-full mb-4 mt-2">
                    <div className="w-full h-[2px] bg-gray-300"></div>
                  </div>
                  <div className="w-full flex justify-start gap-2">
                    <div className="text-black px-2 py-1 rounded-lg font-normal bg-gray-200">
                      Calories:{" "}
                      <span className="font-bold" style={{ color: "#02C39A" }}>
                        {cal.calories}
                      </span>
                    </div>
                    {/* <div className="text-black px-2 py-1 rounded-lg font-normal bg-gray-200">
                      Workout Time:{" "}
                      <span className="font-bold" style={{ color: "#02C39A" }}>
                        {Math.floor(cal.time / 60)} hours {cal.time % 60} mins
                      </span>
                    </div> */}
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

export default CalorieTracker;
