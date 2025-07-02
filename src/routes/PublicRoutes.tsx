import Dashboard from "@pages/Dashboard/Dashboard";
import ForgotPassword from "@pages/ForgotPassword/ForgotPassword";
import Login from "@pages/Login/Login";
import OTP from "@pages/OTP/OTP";
import Register from "@pages/Register/Register";
import ResetPassword from "@pages/ResetPassword/ResetPassword";

const PublicRoutes = [
  // {path:"/", element:<Dashboard/>},
  // {path:"/dashboard", element:<Dashboard/>},
  { path: "/forgot-password", element: <ForgotPassword /> },


  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/otp-verify", element: <OTP /> },
  { path: "/reset-password", element: <ResetPassword /> },


];

export default PublicRoutes;
