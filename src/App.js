import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import BackDrop from "./pages/notfound/Backdrop";
import { useTranslation } from "react-i18next";
import PrivateRoute from "./app/auth/PrivateRoute";
// import userServie from "./services/user/userService";

const Login = lazy(() => import("./pages/auth/login/Login"));
const NotFound = lazy(() => import("./pages/notfound/NotFound"));
const Layout = lazy(() => import("./layout/Layout"));
const Register = lazy(() => import("./pages/auth/register/Register"));
const ForgotPassword = lazy(() =>
  import("./pages/auth/forgotpassword/ForgotPassword")
);
const Home = lazy(() => import("./pages/home/Home"));

function App() {
  const { t, i18n } = useTranslation("common");
  const language = localStorage.getItem("LANGUAGE");
  const getLanguage = () => {
    if (language) {
      i18n.changeLanguage(language);
    } else {
      i18n.changeLanguage("en");
      localStorage.setItem("LANGUAGE", "en");
    }
  };

  useEffect(() => {
    document.title = t("common:app_name");
    getLanguage();
    // const fetchUsers = async () => {
    //   try {
    //     const response = await userServie.getAll();
    //     console.log("Fetch products successfully: ", response);
    //   } catch (error) {
    //     console.log("Failed to fetch product list: ", error);
    //   }
    // };
    // fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<BackDrop />}>
              <Layout />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="/login"
          element={
            <Suspense fallback={<BackDrop />}>
              <PrivateRoute>
                <Login />
              </PrivateRoute>
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <Suspense fallback={<BackDrop />}>
              <Register />
            </Suspense>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <Suspense fallback={<BackDrop />}>
              <ForgotPassword />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<BackDrop />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
