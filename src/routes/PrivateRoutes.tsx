// import BookingManagement from "@pages/Booking-management/BookingManagement";
// import BookingManagementFranchise from "@pages/FranchiseDashboard/BookingFrenchise/BookingFranchise";

// import CustomersManagement from "@pages/Customers-Management/CustomersManagement";
// // import CustomerFranchise from "@pages/FranchiseDashboard/CustomersFranchise/CustomersFranchise";

// import DetailersManagement from "@pages/Detailers-Management/DetailersManagement";
// import DetailerFranchise from "@pages/FranchiseDashboard/DetailerFranchise/DetailerFranchise";
// import AddDetailerFranchise from "@pages/FranchiseDashboard/DetailerFranchise/AddDetailerFranchise";

// import FeedSupport from "@pages/Feed-Support/FeedSupport";
// import FrenchiseManagement from "@pages/Frenchise/Frenchise";
// // import FrenchiseManagementFranchise from "@pages/FranchiseDashboard";

// import PaymentManagement from "@pages/Payment-Management/PaymentManagement";
// import PaymentManagementFranchise from "@pages/FranchiseDashboard/PaymentFranchise/PaymentFranchise";

// import Notifications from "@pages/Notification/Notifications";
// import AdminProfile from "@pages/AdminProfile/AdminProfile";
// import Settings from "@pages/Settings/Settings";
// import FrenchiseSettings from "@pages/FranchiseDashboard/SettingsFranchise/SettingsFranchise";

// import ReportsFranchise from "@pages/FranchiseDashboard/ReportsFranchise/ReportsFranchise";
// import CustomerFranchise from "@pages/FranchiseDashboard/CustomersFranchise/CustomerFrenchise";
// import AddCustomerFranchise from "@pages/FranchiseDashboard/CustomersFranchise/AddCustomersFranchise";
// import FranchiseSettings from "@pages/FranchiseDashboard/SettingsFranchise/SettingsFranchise";
// import ProfileFranchise from "@pages/FranchiseDashboard/ProfileFranchise/ProfileFranchise";
// import DetailersProfile from "@pages/DetailerProfile/DetailerProfile";
// import Dashboard from "@pages/Dashboard/Dashboard";

// const PrivateRoutes = [
//   { path: "/", element: <Dashboard /> },
//   { path: "/dashboard", element: <Dashboard /> },

//   // Franchise Routes

//   { path: "/frenchise-management", element: <FrenchiseManagement /> },
//   { path: "/booking-management", element: <BookingManagementFranchise /> },
//   { path: "/detailers-management", element: <DetailerFranchise /> },
//   { path: "/customers-management", element: <CustomerFranchise /> },
//   { path: "/payment-management", element: <PaymentManagementFranchise /> },
//   { path: "/profile", element: <ProfileFranchise /> },
//   { path: "/settings", element: <Settings /> },
//   { path: "/reports", element: <ReportsFranchise /> },

//   // Admin Routes

//   // { path: "/booking-management", element: <BookingManagement /> },
//   // { path: "/frenchise-management", element: <FrenchiseManagement /> },
//   // { path: "/detailers-management", element: <DetailersManagement /> },
//   // { path: "/detailers-franchise", element: <AddDetailerFranchise /> },
//   // { path: "/customers-management", element: <CustomersManagement /> },
//   // { path: "/customers-franchise", element: <AddCustomerFranchise /> },
//   // { path: "/payment-management", element: <PaymentManagement /> },
//   // { path: "/feedback-support", element: <FeedSupport /> },
//   // { path: "/notifications", element: <Notifications /> },
//   // { path: "/profile", element: <AdminProfile /> },
//   // { path: "/settings", element: <FrenchiseSettings /> },
//   // { path: "/detailers-profile", element: <DetailersProfile /> },
// ];

// export default PrivateRoutes;

import BookingManagement from "@pages/Booking-management/BookingManagement";
import BookingManagementFranchise from "@pages/FranchiseDashboard/BookingFrenchise/BookingFranchise";

import CustomersManagement from "@pages/Customers-Management/CustomersManagement";
import CustomerFranchise from "@pages/FranchiseDashboard/CustomersFranchise/CustomerFrenchise";

import DetailersManagement from "@pages/Detailers-Management/DetailersManagement";
import DetailerFranchise from "@pages/FranchiseDashboard/DetailerFranchise/DetailerFranchise";
import AddDetailerFranchise from "@pages/FranchiseDashboard/DetailerFranchise/AddDetailerFranchise";

import FeedSupport from "@pages/Feed-Support/FeedSupport";
import FrenchiseManagement from "@pages/Frenchise/Frenchise";
import FrenchiseFrenchiseManagement from "@pages/FranchiseDashboard/Frenchise/Frenchise";

import PaymentManagement from "@pages/Payment-Management/PaymentManagement";
import PaymentManagementFranchise from "@pages/FranchiseDashboard/PaymentFranchise/PaymentFranchise";

import Notifications from "@pages/Notification/Notifications";
import AdminProfile from "@pages/AdminProfile/AdminProfile";
import Settings from "@pages/Settings/Settings";
import FrenchiseSettings from "@pages/FranchiseDashboard/SettingsFranchise/SettingsFranchise";

import ReportsFranchise from "@pages/FranchiseDashboard/ReportsFranchise/ReportsFranchise";
import AddCustomerFranchise from "@pages/FranchiseDashboard/CustomersFranchise/AddCustomersFranchise";
import ProfileFranchise from "@pages/FranchiseDashboard/ProfileFranchise/ProfileFranchise";
import DetailersProfile from "@pages/DetailerProfile/DetailerProfile";
import Dashboard from "@pages/Dashboard/Dashboard";

// Admin Routes
export const adminRoutes = [
  { path: "/", element: <Dashboard /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/booking-management", element: <BookingManagement /> },
  { path: "/frenchise-management", element: <FrenchiseManagement /> },
  { path: "/detailers-management", element: <DetailersManagement /> },
  { path: "/detailers-franchise", element: <AddDetailerFranchise /> },
  { path: "/customers-management", element: <CustomersManagement /> },
  { path: "/customers-franchise", element: <AddCustomerFranchise /> },
  { path: "/payment-management", element: <PaymentManagement /> },
  { path: "/feedback-support", element: <FeedSupport /> },
  { path: "/notifications", element: <Notifications /> },
  { path: "/profile", element: <AdminProfile /> },
  { path: "/settings", element: <FrenchiseSettings /> },
  { path: "/detailers-profile", element: <DetailersProfile /> },
];

// Franchise Routes
export const franchiseRoutes = [
  { path: "/", element: <Dashboard /> },
  { path: "/dashboard", element: <Dashboard /> },
  // { path: "/frenchise-management", element: <FrenchiseManagement /> },
  { path: "/frenchise-management", element: <FrenchiseFrenchiseManagement /> },

  { path: "/booking-management", element: <BookingManagementFranchise /> },
  { path: "/detailers-management", element: <DetailerFranchise /> },
  { path: "/customers-management", element: <CustomerFranchise /> },
  { path: "/payment-management", element: <PaymentManagementFranchise /> },
  { path: "/profile", element: <ProfileFranchise /> },
  { path: "/detailers-franchise", element: <AddDetailerFranchise /> },
  { path: "/customers-franchise", element: <AddCustomerFranchise /> },

  { path: "/settings", element: <Settings /> },
  { path: "/reports", element: <ReportsFranchise /> },
  { path: "/notifications", element: <Notifications /> },
  { path: "/feedback-support", element: <FeedSupport /> },
];

// Get role (e.g., from localStorage or context)
// const userRole = "franchise"; // e.g., 'admin' or 'franchise'
// const userRole=localStorage.getItem("userInfo")
// const [userInfo, setUserInfo] = useState(
//   JSON.parse(localStorage.getItem("userInfo")).user.role_id
// );

// // Choose routes based on role
// const PrivateRoutes = userInfo === "franchise" ? franchiseRoutes : adminRoutes;

// Determine routes based on user role

// const getPrivateRoutes = () => {
//   try {
//     const userInfo = JSON.parse(localStorage.getItem("userInfo"));
//     const roleId = userInfo?.user?.role_id;
//     if (roleId === 1) {
//       return adminRoutes;
//     }
//     else{
//       return adminRoutes;
//     }
//   } catch (err) {
//     console.error("Error reading user info:", err);
//     return []; // fallback: no routes
//   }
// };

// const PrivateRoutes = getPrivateRoutes();

// export default PrivateRoutes;
