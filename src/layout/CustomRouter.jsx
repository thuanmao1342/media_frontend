import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";

function CustomRouter() {
  return (
    <div>
      ok
      <Routes>
        ok
        <Route path="/a" component={Home} />
      </Routes>
    </div>
  );
}

export default CustomRouter;
