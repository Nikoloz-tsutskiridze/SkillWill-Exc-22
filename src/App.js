import React from "react";
import ThemeSwitcher from "./components/ThemeSwitcher";
import ItemList from "./components/ItemList";
import { useSelector } from "react-redux";

const App = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#000",
      }}
    >
      <ThemeSwitcher />
      <ItemList />
    </div>
  );
};

export default App;
