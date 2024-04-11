export const setPage = (page) => {
  return {
    type: "SET_PAGE",
    payload: page,
  };
};

export const setShowHamburgerMenu = (showHamburgerMenu) => {
  return {
    type: "SET_SHOW_HAMBURGER_MENU",
    payload: showHamburgerMenu,
  };
};

export const addWorkout = (workout) => {
  return {
    type: "ADD_WORKOUT",
    payload: workout,
  };
};

export const addFood = (food) => {
  return {
    type: "ADD_FOOD",
    payload: food,
  };
};

export const addWeight = (weight) => {
  return {
    type: "ADD_WEIGHT",
    payload: weight,
  };
};

export const editDayGoal = (goal) => {
  return {
    type: "EDIT_DAY_GOAL",
    payload: goal,
  };
};
export const editWeekGoal = (goal) => {
  return {
    type: "EDIT_WEEK_GOAL",
    payload: goal,
  };
};

export const reset = () => {
  return {
    type: "RESET",
    payload: null,
  };
};
