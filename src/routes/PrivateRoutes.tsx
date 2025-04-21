// import BookingManagement from "@pages/Booking-management/BookingManagement";
import BookingManagementFranchise from "@pages/FranchiseDashboard/BookingFrenchise/BookingFranchise";

import CustomersManagement from "@pages/Customers-Management/CustomersManagement";
import DetailersManagement from "@pages/Detailers-Management/DetailersManagement";
import FeedSupport from "@pages/Feed-Support/FeedSupport";
import FrenchiseManagement from "@pages/Frenchise/Frenchise";
import PaymentManagement from "@pages/Payment-Management/PaymentManagement";
import Notifications from "@pages/Notification/Notifications";
import AdminProfile from "@pages/AdminProfile/AdminProfile";
import Settings from "@pages/Settings/Settings";

const PrivateRoutes =[
    // {path:'/booking-management', element:<BookingManagement/>},
    {path:'/booking-management', element:<BookingManagementFranchise/>},

    {path:'/frenchise-management', element:<FrenchiseManagement/>},
    {path:'/detailers-management', element:<DetailersManagement/>},
    {path:'/customers-management', element:<CustomersManagement/>},
    {path:'/payment-management', element:<PaymentManagement/>},
    {path:'/feedback-support', element:<FeedSupport/>},
    {path:'/notifications', element:<Notifications />},
    {path:'/profile', element:<AdminProfile /> },
    {path:'/settings', element:<Settings />}





]

export default PrivateRoutes;