import BookingManagement from "@pages/Booking-management/BookingManagement";
import FrenchiseManagement from "@pages/Frenchise/Frenchise";

const PrivateRoutes =[
    {path:'/booking-management', element:<BookingManagement/>},
    {path:'/frenchise-management', element:<FrenchiseManagement/>}

]

export default PrivateRoutes;