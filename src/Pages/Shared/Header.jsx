import React from "react";
import Navbar from "./navbar/navbar";
import Sidebar from "./navbar/siderbar";

const Header = () => {
  return (
    <nav>
      <Sidebar />
      <Navbar />
    </nav>
  );
};

export default React.memo(Header);
// const Header = () => {
//   return (
//     <nav className="bg-[#F9FBFD] py-2">
//       <div className="container px-5 mx-auto">
//         <div className="flex flex-col  md:flex-row space-y-3 justify-between items-center">
//           <div className="flex overflow-hidden rounded-md box-border">
//             <input
//               className=""
//               type="search"
//               placeholder="Search"
//               name=""
//               id=""
//             />
//             <div className="p-2 bg-[#EEEEEE] flex justify-center items-center cursor-pointer">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6 "
//                 fill="#F9FBFD"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                 />
//               </svg>
//             </div>
//           </div>
//           <div className="flex justify-between">
//             <div className="flex items-center space-x-4">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="#6AAB9C"
//                 viewBox="0 0 24 24"
//                 stroke="#fff"
//                 strokeWidth={2}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                 />
//               </svg>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
//                 />
//               </svg>
//               <div class="avatar flex space-x-2">
//                 <p className="flex flex-col text-sm font-semibold">
//                   <span>Jhon Quinn</span>
//                   <span>Admin profile</span>
//                 </p>

//                 <div class="w-10 h-10 rounded-full ring ring-primary ring-offset-secondary ring-offset-2">
//                   <img
//                     src="https://www.pixelwibes.com/template/ihealth/html/dist/assets/images/profile_av.png"
//                     alt=""
//                   />
//                 </div>
//               </div>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </div>
//             <div className="md:hidden">
//               <label className="btn btn-circle swap swap-rotate bg-transparent border-0">
//                 <input type="checkbox" className="bg-yellow-400" />

//                 <svg
//                   className="swap-off fill-current"
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="32"
//                   height="32"
//                   viewBox="0 0 512 512"
//                 >
//                   <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
//                 </svg>

//                 <svg
//                   stroke="red"
//                   className="swap-on fill-current"
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="32"
//                   height="32"
//                   viewBox="0 0 512 512"
//                 >
//                   <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
//                 </svg>
//               </label>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;
