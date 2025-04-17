import React from 'react';
import DetailXpertsLogo from "@assets/svgs/detailXperts-logo.svg";
import {v4 as uuid} from "uuid";
import { Link,useLocation } from 'react-router-dom';
import settingIcon from "@assets/svgs/setting-2.svg";
import notificationIcon from "@assets/svgs/notification.svg";
import userImg from "@assets/images/user-profile-img.png"

const DashboardHeader:React.FC = () => {
    const location = useLocation();
    const headerLinks =[
        {id:uuid(), path:"/", name:"Dashboard"},
        {id:uuid(), path:"/booking-management", name:"Booking"},
        {id:uuid(), path:"/frenchise-management", name:"Franchise"},
        {id:uuid(), path:"#", name:"Detailers"},
        {id:uuid(), path:"#", name:"Customers"},
        {id:uuid(), path:"#", name:"Payments"},
        {id:uuid(), path:"#", name:"Feedback & Support"},
    ]
  return (
    <div className='bg-[var(--primary-color)]  py-5 mb-10' style={{borderRadius:"0px 0px 40px 40px"}}>
        <div className='default_container flex items-center justify-between'>
    <div className='flex items-center gap-4'>
        <div> <img src={DetailXpertsLogo} alt='DetailXperts' className='w-[50px] h-[50px]' /></div>
        <div> 
        {headerLinks.map((link) => {
        const isActive = location.pathname === link.path;
        return (
        <Link
         key={link.id}
         to={link.path}
         className={`mr-5 link relative text-white ${isActive ? 'font-bold after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-white pb-[7px]' : 'font-normal'}`}
        >
        {link.name}
        </Link>
         );
        })}
        </div>
    </div>
    <div className='flex items-center gap-[18px]'>
       <div className='bg-[var(--dull-white-bg)] w-[48px] h-[48px]  flex items-center justify-center rounded-full'> <img src={settingIcon} alt='Profile Settings' className='size-6 ' /></div>
        <div className='bg-[var(--dull-white-bg)] w-[48px] h-[48px]  flex items-center justify-center rounded-full'><img src={notificationIcon} alt='Notifications' className='size-6 object-cover' /></div>
       <div> <img src={userImg} alt='User' className='w-[60px] h-[60px] rounded-full' /></div>
    </div>
        </div>
    </div>
  )
}

export default DashboardHeader;
