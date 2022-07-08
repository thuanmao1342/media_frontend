import React, { Fragment, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../app/auth/PrivateRoute";
import BackDrop from "../pages/notfound/Backdrop";
const Login = lazy(() => import("../pages/auth/login/Login"));
const NotFound = lazy(() => import("../pages/notfound/NotFound"));
const Layout = lazy(() => import("./Layout"));
const Register = lazy(() => import("../pages/auth/register/Register"));
const ForgotPassword = lazy(() =>
  import("../pages/auth/forgotpassword/ForgotPassword")
);
const Home = lazy(() => import("../pages/home/Home"));

function CustomRouter() {
  return (
    <Fragment>
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
              <Suspense fallback={<BackDrop />}>
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              </Suspense>
            }
          />
          <Route
            path="inbox"
            element={
              <Suspense fallback={<BackDrop />}>
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              </Suspense>
            }
          />
          <Route
            path="starred"
            element={
              <Suspense fallback={<BackDrop />}>
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              </Suspense>
            }
          />
          <Route
            path="sent"
            element={
              <Suspense fallback={<BackDrop />}>
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              </Suspense>
            }
          />
          <Route
            path="drafts"
            element={
              <Suspense fallback={<BackDrop />}>
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              </Suspense>
            }
          />
          <Route
            path="private"   
          >
            <Route
              index
              element={
                <Suspense fallback={<BackDrop />}>
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                </Suspense>
              }
            />
            <Route
              path="all"
              element={
                <Suspense fallback={<BackDrop />}>
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                </Suspense>
              }
            />
            <Route
              path="trash"
              element={
                <Suspense fallback={<BackDrop />}>
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                </Suspense>
              }
            />
            <Route
              path="spam"
              element={
                <Suspense fallback={<BackDrop />}>
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                </Suspense>
              }
            />
          </Route>
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
    </Fragment>
  );
}

export default CustomRouter;
