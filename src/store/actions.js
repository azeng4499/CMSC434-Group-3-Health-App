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
