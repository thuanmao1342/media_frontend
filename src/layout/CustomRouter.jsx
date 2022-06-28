import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";

function CustomRouter() {
  return (
    <div>
      ok
      <Outlet />
      <Routes>
        <Route path="home" component={Home} />
      </Routes>
    </div>
  );
}

export default CustomRouter;
