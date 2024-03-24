import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

// Layout
const AuthLayout = lazy(() => import("../layout/AuthLayout"));
const MainLayout = lazy(() => import("../layout/MainLayout"));
const AdminLayout = lazy(() => import("../layout/AdminLayout"));

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
const Investment = lazy(() => import("../pages/Wallet/Investment"));
const Out = lazy(() => import("../pages/Wallet/Out"));

// Account
const Account = lazy(() => import("../pages/Account"));
const Recharge = lazy(() => import("../pages/Account/Recharge"));
const In = lazy(() => import("../pages/Account/In"));
const Withdraw = lazy(() => import("../pages/Account/Withdraw"));
const Service = lazy(() => import("../pages/Account/Service"));
const RechargeRecord = lazy(() => import("../pages/Account/RechargeRecord"));
const WithdrawRecord = lazy(() => import("../pages/Account/WithdrawRecord"));
const FinanceRecord = lazy(() => import("../pages/Account/FinanceRecord"));
const CommissionRecord = lazy(() => import("../pages/Account/CommissionRecord"));
const InvitedFriends = lazy(() => import("../pages/Account/InvitedFriends"));

const NotFound = lazy(() => import("../pages/NotFound"));
const WillReturn = lazy(() => import("../pages/WillReturn"));
// const Insurance = lazy(() => import("../pages/Insurance"));

// AdminPages
const Dashboard = lazy(() => import("../pages/Admin/Dashboard"));
const Users = lazy(() => import("../pages/Admin/Users"));
const UserDetail = lazy(() => import("../pages/Admin/Users/UserDetail"));
const AdminRecharges = lazy(() => import("../pages/Admin/Recharges"));
const AdminRechargesDetail = lazy(() => import("../pages/Admin/Recharges/RechargeDetail"));
const AdminWithdraw = lazy(() => import("../pages/Admin/Withdraws"));
const AdminWithdrawDetail = lazy(() => import("../pages/Admin/Withdraws/WithdrawDetail"));
const AdminHistory = lazy(() => import("../pages/Admin/History"));
const AdminConfig = lazy(() => import("../pages/Admin/Config"));
const AdminConfigDetail = lazy(() => import("../pages/Admin/Config/ConfigDetail"));

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
    // ErrorBoundary: <NotFound />,
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
            path: "/wallet/investment/:typeId",
            exact: true,
            element: <Investment />,
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
            path: "/account/in",
            exact: true,
            element: <In />,
          },
          {
            path: "/account/withdraw",
            exact: true,
            element: <Withdraw />,
          },
          {
            path: "/account/recharge_record",
            exact: true,
            element: <RechargeRecord />,
          },
          {
            path: "/account/withdraw_record",
            exact: true,
            element: <WithdrawRecord />,
          },
          {
            path: "/account/finance_record",
            exact: true,
            element: <FinanceRecord />,
          },
          {
            path: "/account/commission_record",
            exact: true,
            element: <CommissionRecord />,
          },
          {
            path: "/account/invited_friends",
            exact: true,
            element: <InvitedFriends />,
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
  {
    path: "/admin",
    exact: true,
    element: <AdminRoute />,
    children: [
      {
        path: "",
        exact: true,
        element: <AdminLayout />,
        children: [
          {
            path: "/admin/",
            exact: true,
            element: <Dashboard />,
          },
          {
            path: "/admin/users",
            exact: true,
            element: <Users />,
          },
          {
            path: "/admin/users/:userId",
            exact: true,
            element: <UserDetail />,
          },
          {
            path: "/admin/recharges",
            exact: true,
            element: <AdminRecharges />,
          },
          {
            path: "/admin/recharges/:rechargeId",
            exact: true,
            element: <AdminRechargesDetail />,
          },
          {
            path: "/admin/withdraws",
            exact: true,
            element: <AdminWithdraw />,
          },
          {
            path: "/admin/withdraws/:withdrawId",
            exact: true,
            element: <AdminWithdrawDetail />,
          },
          {
            path: "/admin/history",
            exact: true,
            element: <AdminHistory />,
          },
          {
            path: "/admin/config",
            exact: true,
            element: <AdminConfig />,
          },
          {
            path: "/admin/config/:typeId",
            exact: true,
            element: <AdminConfigDetail />,
          },
        ],
      },
    ],
  },
]);

export default router;
