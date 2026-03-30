// import React from "react";
// import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
