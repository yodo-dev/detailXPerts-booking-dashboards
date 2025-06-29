import DashboardLoader from "@components/Loaders/DashboardLoader";
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
  () => import("@pages/Booking-management/BookingManagement")
);
const BookingManagementFranchise = lazy(
  () => import("@pages/FranchiseDashboard/BookingFrenchise/BookingFranchise")
);
const CustomersManagement = lazy(
  () => import("@pages/Customers-Management/CustomersManagement")
);
const CustomerFranchise = lazy(
  () => import("@pages/FranchiseDashboard/CustomersFranchise/CustomerFrenchise")
);
const DetailersManagement = lazy(
  () => import("@pages/Detailers-Management/DetailersManagement")
);
const DetailerFranchise = lazy(
  () => import("@pages/FranchiseDashboard/DetailerFranchise/DetailerFranchise")
);
const AddDetailerFranchise = lazy(
  () =>
    import("@pages/FranchiseDashboard/DetailerFranchise/AddDetailerFranchise")
);
const FeedSupport = lazy(() => import("@pages/Feed-Support/FeedSupport"));
const FrenchiseManagement = lazy(() => import("@pages/Frenchise/Frenchise"));
const FrenchiseFrenchiseManagement = lazy(
  () => import("@pages/FranchiseDashboard/Frenchise/Frenchise")
);
const PaymentManagement = lazy(
  () => import("@pages/Payment-Management/PaymentManagement")
);
const PaymentManagementFranchise = lazy(
  () => import("@pages/FranchiseDashboard/PaymentFranchise/PaymentFranchise")
);
const Notifications = lazy(() => import("@pages/Notification/Notifications"));
const AdminProfile = lazy(() => import("@pages/AdminProfile/AdminProfile"));
const Settings = lazy(() => import("@pages/Settings/Settings"));

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
  () => import("@pages/DetailerProfile/DetailerProfile")
);
const Dashboard = lazy(() => import("@pages/Dashboard/Dashboard"));
const Freelancer = lazy(() => import("@pages/Freelancers/Freelancers"));
const ServicesManagement = lazy(
  () => import("@pages/ServicesManagement/ServicesManagement")
);
// const OngoingBooking = lazy(
//   () =>
//     import("@pages/Booking-management/Components/ongoingBooking/OngoingBooking")
// );
const CreateService = lazy(
  () => import("@pages/ServicesManagement/Components/CreateService")
);
const FreelancerProfile = lazy(
  () => import("@pages/Freelancers/Components/FreelancersProfile")
);
const UserManagement = lazy(
  () => import("@pages/FranchiseDashboard/UserManagement/UserManagement")
);
const EditDetailerFranchise = lazy(
  () =>
    import("@pages/FranchiseDashboard/DetailerFranchise/EditDetailerFranchise")
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
  { path: "/services-management", element: <ServicesManagement /> },
  // { path: "/ongoing-bookings", element: <OngoingBooking /> },
  { path: "/create-service", element: <CreateService /> },

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
  { path: "/add-detailer-franchise", element: <AddDetailerFranchise /> },
  { path: "/customers-franchise", element: <AddCustomerFranchise /> },
  // { path: "/ongoing-bookings", element: <OngoingBooking /> },

  { path: "/settings", element: <Settings /> },
  { path: "/reports", element: <ReportsFranchise /> },
  { path: "/notifications", element: <Notifications /> },
  { path: "/feedback-support", element: <FeedSupport /> },
  { path: "/user-management", element: <UserManagement /> },
  { path: "/edit-detailer-franchise/:id", element: <EditDetailerFranchise /> },
];
