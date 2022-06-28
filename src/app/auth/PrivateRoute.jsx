import React from "react";
import { Navigate } from "react-router-dom";
// import userService from "../../services/user/userService";

function PrivateRoute({ children }) {
  const auth = localStorage.getItem("CURRENT_USER");

  const url = window.location.pathname;

  // const isCheck = false;
  // check if user is logged in or not and redirect to login page if not
  //check token is expired or not and redirect to login page if expired
  // useEffect(() => {
  //   const checkCurrentUser = async () => {
  //     try {
  //       const response = await userService.checkCurrentUser(auth);
  //       if (response.status === 200) {
  //         return true;
  //       }
  //       console.log("response");
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   checkCurrentUser();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  if (
    (url === "/login" || url === "/register" || url === "/forgot-password") &&
    auth !== null
  ) {
    return <Navigate to="/" />;
  } else if (
    (url === "/login" || url === "/register" || url === "/forgot-password") &&
    !auth
  ) {
    return children;
  } else if (
    (url !== "/login" || url !== "/register" || url !== "/forgot-password") &&
    auth
  ) {
    return children;
  } else if (
    (url !== "/login" || url !== "/register" || url !== "/forgot-password") &&
    !auth
  ) {
    return <Navigate to="/login" />;
  }
}
export default PrivateRoute;
