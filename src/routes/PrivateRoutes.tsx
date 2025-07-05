import DashboardLoader from "@components/Loaders/DashboardLoader";
import ServicesLoader from "@components/Loaders/ServicesLoader";
import FranchiseDashboard from "@pages/Admin/AdminDashboard/Dashboard/Dashboard";
import DetailerInfo from "@pages/Booking-management/Components/DetailerInfo";
import OngoingBookings from "@pages/Admin/Booking-management/Components/OngoingBookings";
import OnGoingDetails from "@pages/Admin/Booking-management/Components/OngoingDetails";
import BookingFranchise from "@pages/FranchiseDashboard/Booking-franchise/BookingFranchise";
import ChatFranchise from "@pages/FranchiseDashboard/ChatFranchise/ChatFranchise";
import CustomersProfile from "@pages/FranchiseDashboard/CustomersFranchise/Components/CustomersProfile";
import DetailerFranchiseInfo from "@pages/FranchiseDashboard/DetailerFranchise/Components/DetailerFranchiseInfo";
import FranciseManagementDetail from "@pages/Admin/Frenchise/Components/FranciseManagementDetail";
import OTP from "@pages/OTP/OTP";
import { lazy, Suspense } from "react";

export const delayedLazy = (importFunc: () => Promise<any>, delay = 1000) => {
  return lazy(() =>
    Promise.all([
      importFunc(),
      new Promise((resolve) => setTimeout(resolve, delay)),
    ]).then(([moduleExports]) => moduleExports)
  );
};

const BookingManagement = lazy(
  () => import("@pages/Admin/Booking-management/BookingManagement")
);
const BookingManagementFranchise = lazy(
  () => import("@pages/FranchiseDashboard/BookingFrenchise/BookingFranchise")
);
const CustomersManagement = lazy(
  () => import("@pages/Admin/Customers-Management/CustomersManagement")
);
const CustomerFranchise = lazy(
  () => import("@pages/FranchiseDashboard/CustomersFranchise/CustomerFrenchise")
);
const DetailersManagement = lazy(
  () => import("@pages/Admin/Detailers-Management/DetailersManagement")
);
const DetailerFranchise = lazy(
  () => import("@pages/FranchiseDashboard/DetailerFranchise/DetailerFranchise")
);
const AddDetailerFranchise = lazy(
  () =>
    import("@pages/FranchiseDashboard/DetailerFranchise/AddDetailerFranchise")
);
const FeedSupport = lazy(() => import("@pages/Admin/Feed-Support/FeedSupport"));
const FrenchiseManagement = lazy(() => import("@pages/Admin/Frenchise/Frenchise"));
const FrenchiseFrenchiseManagement = lazy(
  () => import("@pages/FranchiseDashboard/Frenchise/Frenchise")
);
const PaymentManagement = lazy(
  () => import("@pages/Admin/Payment-Management/PaymentManagement")
);
const PaymentManagementFranchise = lazy(
  () => import("@pages/FranchiseDashboard/PaymentFranchise/PaymentFranchise")
);
const Notifications = lazy(() => import("@pages/Admin/Notification/Notifications"));
const AdminProfile = lazy(() => import("@pages/Admin/AdminProfile/AdminProfile"));
const Settings = lazy(() => import("@pages/Admin/Settings/Settings"));

// FRANCHISE ROUTES
const FrenchiseSettings = lazy(
  () => import("@pages/FranchiseDashboard/SettingsFranchise/SettingsFranchise")
);
const ReportsFranchise = lazy(
  () => import("@pages/FranchiseDashboard/ReportsFranchise/ReportsFranchise")
);
const AddCustomerFranchise = lazy(
  () =>
    import("@pages/FranchiseDashboard/CustomersFranchise/AddCustomersFranchise")
);
const ProfileFranchise = lazy(
  () => import("@pages/FranchiseDashboard/ProfileFranchise/ProfileFranchise")
);
const DetailersProfile = lazy(
  () => import("@pages/Admin/DetailerProfile/DetailerProfile")
);
const Dashboard = lazy(() => import("@pages/Admin/Dashboard/Dashboard"));
const Freelancer = lazy(() => import("@pages/Admin/Freelancers/Freelancers"));
const ServicesManagement = lazy(
  () => import("@pages/Admin/ServicesManagement/ServicesManagement")
);
// const OngoingBooking = lazy(
//   () =>
//     import("@pages/Booking-management/Components/ongoingBooking/OngoingBooking")
// );
const CreateService = lazy(
  () => import("@pages/Admin/ServicesManagement/Components/CreateService")
);
const FreelancerProfile = lazy(
  () => import("@pages/Admin/Freelancers/Components/FreelancersProfile")
);
const UserManagement = lazy(
  () => import("@pages/FranchiseDashboard/UserManagement/UserManagement")
);
const EditDetailerFranchise = lazy(
  () =>
    import("@pages/FranchiseDashboard/DetailerFranchise/EditDetailerFranchise")
);

const AddUserManagement = lazy(
  () => import("@pages/FranchiseDashboard/UserManagement/Components/AddUser")
);

// Admin Routes
export const adminRoutes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<DashboardLoader />}>
        {" "}
        <Dashboard />
      </Suspense>
    ),
  },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/booking-management", element: <BookingManagement /> },
  { path: "/frenchise-management", element: <FrenchiseManagement /> },
  { path: "/freelancer-management", element: <Freelancer /> },
  { path: "/freelancer-profile", element: <FreelancerProfile /> },

  { path: "/detailers-management", element: <DetailersManagement /> },
  { path: "/detailers-franchise", element: <AddDetailerFranchise /> },
  { path: "/customers-management", element: <CustomersManagement /> },
  {
    path: "/services-management",
    element: (
      <Suspense fallback={<ServicesLoader />}>
        <ServicesManagement />
      </Suspense>
    ),
  },
  { path: "/ongoing-bookings", element: <OngoingBookings /> },
  { path: "/create-service", element: <CreateService /> },

  { path: "/customers-franchise", element: <AddCustomerFranchise /> },
  { path: "/payment-management", element: <PaymentManagement /> },
  { path: "/feedback-support", element: <FeedSupport /> },
  { path: "/notifications", element: <Notifications /> },
  { path: "/profile", element: <AdminProfile /> },
  { path: "/settings", element: <FrenchiseSettings /> },
  { path: "/detailers-profile", element: <DetailersProfile /> },
  { path: "/franchise-profile", element: <FranciseManagementDetail /> },
  { path: "/detailer-info", element: <OnGoingDetails /> },
  { path: "/add-user-management", element: <AddUserManagement /> },
];

// Franchise Routes
export const franchiseRoutes = [
  { path: "/", element: <FranchiseDashboard /> },
  { path: "/dashboard", element: <FranchiseDashboard /> },
  // { path: "/frenchise-management", element: <FrenchiseManagement /> },
  { path: "/frenchise-management", element: <FrenchiseFrenchiseManagement /> },

  { path: "/booking-management", element: <BookingManagementFranchise /> },
  { path: "/detailers-management", element: <DetailerFranchise /> },
  { path: "/customers-management", element: <CustomerFranchise /> },
  { path: "/payment-management", element: <PaymentManagementFranchise /> },
  { path: "/profile", element: <ProfileFranchise /> },
  { path: "/detailers-franchise", element: <AddDetailerFranchise /> },
  { path: "/add-detailer-franchise", element: <AddDetailerFranchise /> },
  { path: "/customers-franchise", element: <AddCustomerFranchise /> },
  { path: "/customers-profile", element: <CustomersProfile /> },
  { path: "/add-user-management", element: <AddUserManagement /> },
  { path: "/booking-franchise", element: <BookingFranchise /> },
  { path: "/detailer-franchise-info", element: <DetailerFranchiseInfo /> },
  { path: "/chat", element: <ChatFranchise /> },

  // { path: "/ongoing-bookings", element: <OngoingBooking /> },

  { path: "/settings", element: <ProfileFranchise /> },
  { path: "/reports", element: <ReportsFranchise /> },
  { path: "/notifications", element: <Notifications /> },
  { path: "/feedback-support", element: <FeedSupport /> },
  { path: "/user-management", element: <UserManagement /> },
  { path: "/edit-detailer-franchise/:id", element: <EditDetailerFranchise /> },
];
