import React, { Fragment, useState, useRef } from "react";
import Dashboard from "./components/Dashboard";
import themeContext from "./context/themeContext";

const App = () => {
  return (
    <Fragment>
      <themeContext.Provider value="whatever">
        <Dashboard />
      </themeContext.Provider>
    </Fragment>
  );
};

export default App;
