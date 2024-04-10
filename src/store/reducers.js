const defaultState = {
  page: "home",
  showHamburgerMenu: false,
};

const Reducers = (state = defaultState, action = {}) => {
  switch (action.type) {
    case "SET_PAGE":
      return setPage(state, action);
    case "SET_SHOW_HAMBURGER_MENU":
      return setShowHamburgerMenu(state, action);
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

export default Reducers;
