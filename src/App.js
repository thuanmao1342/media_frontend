import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import BackDrop from "./pages/notfound/Backdrop";
import { useTranslation } from "react-i18next";

const Login = lazy(() => import("./pages/auth/login/Login"));
const NotFound = lazy(() => import("./pages/notfound/NotFound"));
const Layout = lazy(() => import("./layout/Layout"));
const Register = lazy(() => import("./pages/auth/register/Register"));
const ForgotPassword = lazy(() =>
  import("./pages/auth/forgotpassword/ForgotPassword")
);

function App() {
  const {t} = useTranslation("common");

  useEffect(() => {
    document.title = t('common:app_name');
  }, [t]);
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
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<BackDrop />}>
              <Login />
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
