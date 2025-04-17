// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// // import { Pagination } from "swiper/modules";

// import "swiper/css";
// // import "swiper/css/pagination";

// const cars = [
//   {
//     model: "Honda Civic",
//     year: 2025,
//     locations: [
//       {
//         address: "2972 Westheimer",
//         detail: "St. Santa Ana, Illinois 85486",
//         color: "green",
//       },
//       {
//         address: "8502 Preston",
//         detail: "Rd. Inglewood, Maine 98160",
//         color: "blue",
//       },
//     ],
//     customer: {
//       name: "Darrell Steward",
//       company: "Marianne, LTD",
//       image: "https://i.pravatar.cc/40?img=1", // dummy profile image
//     },
//   },
//   // You can add more car objects here...
// ];


// const CardCarousel: React.FC = () => {
//   return (
//     <div className="w-full px-10 py-10 bg-blue-800">
//       <Swiper
//         spaceBetween={30}
//         slidesPerView={1.2}
//         centeredSlides={true}
//         pagination={{ clickable: true }}
//         // modules={[Pagination]}
//         className="mySwiper"
//       >
//         {cars.map((car, index) => (
//           <SwiperSlide key={index}>
//             <div className="bg-white rounded-2xl shadow-xl p-5 w-[300px] mx-auto">
//               <p className="text-sm text-gray-400 mb-1">Vehicle Details</p>
//               <div className="flex items-center justify-between">
//                 <h2 className="text-lg font-semibold">{car.model}</h2>
//                 <span className="text-sm text-gray-500">{car.year}</span>
//               </div>
//               <img
//                 src="https://pngimg.com/uploads/honda/honda_PNG10408.png"
//                 alt="car"
//                 className="w-full h-auto my-3"
//               />
//               <div className="space-y-3 my-4">
//                 {car.locations.map((loc, i) => (
//                   <div className="flex items-start" key={i}>
//                     <div
//                       className={`w-3 h-3 mt-1.5 rounded-full bg-${loc.color}-500`}
//                     ></div>
//                     <div className="ml-3 text-sm">
//                       <p className="font-medium">{loc.address}</p>
//                       <p className="text-gray-500">{loc.detail}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <hr className="my-4" />
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center space-x-3">
//                   <img
//                     src={car.customer.image}
//                     alt="customer"
//                     className="w-8 h-8 rounded-full"
//                   />
//                   <div>
//                     <p className="font-medium text-sm">{car.customer.name}</p>
//                     <p className="text-xs text-gray-500">
//                       {car.customer.company}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex space-x-3 text-blue-500 text-xl">
//                   <span>📞</span>
//                   <span>💬</span>
//                   <span>🔴</span>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default CardCarousel;
