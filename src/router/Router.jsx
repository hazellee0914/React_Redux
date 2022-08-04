import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Detail from "../pages/Detail";
import Home from "../pages/Home";




// const Router = () => {
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;