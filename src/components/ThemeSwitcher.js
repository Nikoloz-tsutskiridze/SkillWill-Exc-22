import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../features/themeSlice";

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <button onClick={() => dispatch(toggleTheme())}>
      Switch to {darkMode ? "Light" : "Dark"} Mode
    </button>
  );
};

export default ThemeSwitcher;
