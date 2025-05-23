import Dashboard from "@pages/Dashboard/Dashboard";
import ForgotPassword from "@pages/ForgotPassword/ForgotPassword";
import Login from "@pages/Login/Login";
import Register from "@pages/Register/Register";

const PublicRoutes = [
  // {path:"/", element:<Dashboard/>},
  // {path:"/dashboard", element:<Dashboard/>},
  { path: "/forgot-password", element: <ForgotPassword /> },

  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
];

export default PublicRoutes;
