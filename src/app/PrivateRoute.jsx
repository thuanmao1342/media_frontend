import React from "react";
import { Route } from "react-router-dom";

function PrivateRoute({ props }) {
    const isLoggedIn = localStorage.getItem("CUREENT_USER");
    if (!isLoggedIn) {
        return window.location.href = "/login";
    }
  return <Route {...props}/>;
}