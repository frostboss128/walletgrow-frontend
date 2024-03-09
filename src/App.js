import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { logout } from "./slices/authSlice";
import { Toaster } from "./components/ui/sonner";
import router from "./router";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const expirationTime = localStorage.getItem("expirationTime");
    if (expirationTime) {
      const currentTime = new Date().getTime();

      if (currentTime > expirationTime) {
        dispatch(logout());
      }
    }
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="bottom-left" richColors duration={3000} />
    </>
  );
};

export default App;
