import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

// Layout
const AuthLayout = lazy(() => import("../layout/AuthLayout"));
const MainLayout = lazy(() => import("../layout/MainLayout"));

// Auth
const Login = lazy(() => import("../pages/Auth/Login"));
const Register = lazy(() => import("../pages/Auth/Register"));

// Home
const Home = lazy(() => import("../pages/Home"));
const Project = lazy(() => import("../pages/Project"));

// Wallet
const Wallet = lazy(() => import("../pages/Wallet"));
const RecordList = lazy(() => import("../pages/Wallet/RecordList"));
const Pledge = lazy(() => import("../pages/Wallet/Pledge"));
const Nonpledge = lazy(() => import("../pages/Wallet/Nonpledge"));
const Out = lazy(() => import("../pages/Wallet/Out"));
const In = lazy(() => import("../pages/Wallet/In"));

// Account
const Account = lazy(() => import("../pages/Account"));
const Recharge = lazy(() => import("../pages/Account/Recharge"));
const Withdraw = lazy(() => import("../pages/Account/Withdraw"));
const Service = lazy(() => import("../pages/Account/Service"));

const NotFound = lazy(() => import("../pages/NotFound"));
const WillReturn = lazy(() => import("../pages/WillReturn"));
// const Insurance = lazy(() => import("../pages/Insurance"));

const router = createBrowserRouter([
  {
    path: "/auth",
    exact: true,
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        exact: true,
        element: <Login />,
      },
      {
        path: "/auth/register",
        exact: true,
        element: <Register />,
      },
    ],
  },
  {
    path: "/",
    exact: true,
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/wallet",
    exact: true,
    element: <PrivateRoute />,
    children: [
      {
        path: "",
        exact: true,
        element: <MainLayout />,
        children: [
          {
            path: "",
            exact: true,
            element: <Wallet />,
          },
          {
            path: "/wallet/record",
            exact: true,
            element: <RecordList />,
          },
          {
            path: "/wallet/pledge",
            exact: true,
            element: <Pledge />,
          },
          {
            path: "/wallet/nonpledge",
            exact: true,
            element: <Nonpledge />,
          },
          {
            path: "/wallet/in",
            exact: true,
            element: <In />,
          },
          {
            path: "/wallet/out",
            exact: true,
            element: <Out />,
          },
        ],
      },
    ],
  },
  {
    path: "/project",
    exact: true,
    element: <MainLayout />,
    children: [
      {
        path: "/project",
        exact: true,
        element: <Project />,
      },
    ],
  },
  {
    path: "/insurance",
    exact: true,
    element: <MainLayout />,
    children: [
      {
        path: "",
        exact: true,
        element: <WillReturn />,
      },
    ],
  },
  {
    path: "/account",
    exact: true,
    element: <PrivateRoute />,
    children: [
      {
        path: "",
        exact: true,
        element: <MainLayout />,
        children: [
          {
            path: "",
            exact: true,
            element: <Account />,
          },
          {
            path: "/account/recharge",
            exact: true,
            element: <Recharge />,
          },
          {
            path: "/account/withdraw",
            exact: true,
            element: <Withdraw />,
          },
          {
            path: "/account/service",
            exact: true,
            element: <Service />,
          },
        ],
      },
    ],
  },
]);

export default router;
