import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const { userinfo } = useSelector(({ auth }) => auth);
  return userinfo ? <Outlet /> : <Navigate to="/auth/login" replace />;
};

export default PrivateRoute;
