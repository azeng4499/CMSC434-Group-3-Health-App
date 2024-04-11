const defaultState = {
  page: "home",
  showHamburgerMenu: false,
  workoutLog: [
    { type: "HIIT", time: 170, calsBurned: 1000, timestamp: 1712761160 },
    { type: "Swim", time: 20, calsBurned: 200, timestamp: 1712661160 },
    { type: "Run", time: 120, calsBurned: 400, timestamp: 1712561160 },
    { type: "Bike", time: 150, calsBurned: 700, timestamp: 1712461160 },
  ],
  calorieLog: [
    { food: "Bagels", calories: 170, timestamp: 1712761160 },
    { food: "Macaroni and cheese", calories: 400, timestamp: 1712661160 },
    { food: "Cornbread", calories: 100, timestamp: 1712561160 },
    { food: "Pizza", calories: 700, timestamp: 1712461160 },
  ],
  goals: [],
};

const Reducers = (state = defaultState, action = {}) => {
  switch (action.type) {
    case "SET_PAGE":
      return setPage(state, action);
    case "SET_SHOW_HAMBURGER_MENU":
      return setShowHamburgerMenu(state, action);
    case "ADD_WORKOUT":
      return addWorkout(state, action);
    case "ADD_FOOD":
      return addFood(state, action);
    case "RESET":
      return reset();
    default:
      return { ...state };
  }
};

const setPage = (state, action) => {
  return {
    ...state,
    page: action.payload,
  };
};

const setShowHamburgerMenu = (state, action) => {
  return {
    ...state,
    showHamburgerMenu: action.payload,
  };
};

const addWorkout = (state, action) => {
  return {
    ...state,
    workoutLog: [action.payload, ...state.workoutLog],
  };
};

const addFood = (state, action) => {
  return {
    ...state,
    calorieLog: [action.payload, ...state.calorieLog],
  };
};

const reset = () => {
  return {
    ...defaultState,
  };
};

export default Reducers;
