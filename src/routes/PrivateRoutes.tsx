import BookingManagement from "@pages/Booking-management/BookingManagement";
// import BookingManagementFranchise from "@pages/FranchiseDashboard/BookingFrenchise/BookingFranchise";

import CustomersManagement from "@pages/Customers-Management/CustomersManagement";
// import CustomerFranchise from "@pages/FranchiseDashboard/CustomersFranchise/CustomersFranchise";



import DetailersManagement from "@pages/Detailers-Management/DetailersManagement";
import DetailerFranchise from "@pages/FranchiseDashboard/DetailerFranchise/DetailerFranchise";


import FeedSupport from "@pages/Feed-Support/FeedSupport";
import FrenchiseManagement from "@pages/Frenchise/Frenchise";
import PaymentManagement from "@pages/Payment-Management/PaymentManagement";
// import PaymentManagementFranchise from "@pages/FranchiseDashboard/PaymentFranchise/PaymentFranchise";

import Notifications from "@pages/Notification/Notifications";
import AdminProfile from "@pages/AdminProfile/AdminProfile";
import Settings from "@pages/Settings/Settings";
import FrenchiseSettings from "@pages/FranchiseDashboard/SettingsFranchise/SettingsFranchise";

import ReportsFranchise from "@pages/FranchiseDashboard/ReportsFranchise/ReportsFranchise";
// import FranchiseSettings from "@pages/FranchiseDashboard/SettingsFranchise/SettingsFranchise";
// import ProfileFranchise from "@pages/FranchiseDashboard/ProfileFranchise/ProfileFranchise";

const PrivateRoutes = [
  {path:'/booking-management', element:<BookingManagement/>},
  // { path: "/booking-management", element: <BookingManagementFranchise /> },

  { path: "/frenchise-management", element: <FrenchiseManagement /> },
  { path: "/detailers-management", element: <DetailersManagement /> },
  { path: "/detailers-franchise", element: <DetailerFranchise /> },

  { path: "/customers-management", element: <CustomersManagement /> },
  // { path: "/customers-management", element: <CustomerFranchise /> },

  { path: "/payment-management", element: <PaymentManagement /> },
  // { path: "/payment-management", element: <PaymentManagementFranchise /> },

  { path: "/feedback-support", element: <FeedSupport /> },
  { path: "/notifications", element: <Notifications /> },
  { path: "/profile", element: <AdminProfile /> },
  // { path: "/profile", element: <ProfileFranchise /> },

  { path: "/settings", element: <Settings /> },
  // { path: "/settings", element: <FrenchiseSettings /> },

  { path: "/reports", element: <ReportsFranchise /> },

];

export default PrivateRoutes;
