import Dashboard from "@pages/Admin/Dashboard/Dashboard";
import ForgotPassword from "@pages/Admin/ForgotPassword/ForgotPassword";
import Login from "@pages/Admin/Login/Login";
import OTP from "@pages/Admin/OTP/OTP";
import Register from "@pages/Admin/Register/Register";
import ResetPassword from "@pages/Admin/ResetPassword/ResetPassword";

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
