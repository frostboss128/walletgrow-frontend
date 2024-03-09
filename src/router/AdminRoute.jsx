import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = () => {
  const { userinfo } = useSelector(({ auth }) => auth);
  return userinfo && (userinfo.roles === "admin" || userinfo.roles === "superAdmin") ? (
    <Outlet />
  ) : (
    <Navigate to="/auth/login" replace />
  );
};
export default AdminRoute;
