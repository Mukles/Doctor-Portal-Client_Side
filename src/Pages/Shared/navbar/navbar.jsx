import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase.init";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  console.log(user);
  if (loading) {
    return (
      <div className="h-screen w-full bg-primary flex items-center justify-center">
        <h1 className="text-secondary text-xl font-semibold"> Loading...</h1>
      </div>
    );
  }
  return (
    <div className="navbar space-y-4 flex-col md:flex-row bg-secondary z-10 w-full lg:w-[calc(100%-304px)] justify-between lg:ml-auto px-5">
      <div className="navbar-start w-full flex-1">
        <div className="form-control w-full md:w-80 bg-transparent">
          <div className="input-group w-full">
            <input
              type="text"
              placeholder="Search…"
              className="w-full input input-bordered focus:border-primary focus:shadow-md focus:outline-none"
            />
            <button className="btn btn-square bg-[#EEEEEE] hover:bg-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="navbar-end flex justify-between w-full">
        <div className="ml-auto md:justify-end flex-1 flex space-x-2 sm:space-x-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 cursor-pointer"
            fill="#6AAB9C"
            viewBox="0 0 24 24"
            stroke="#fff"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <div className="avater flex space-x-2">
            <div className="name flex flex-col itmes-center justify-center">
              <span className="text-sm sm:text-base font-semibold">
                John Quinn
              </span>
              <span className="text-sm">Admin profile</span>
            </div>
            <div className="border-2 border-yelllow-400 h-14 w-14 rounded-full p-1 flex items-center justify-center">
              <img
                className="w-13 h-13 rounded-full"
                src={`${
                  user?.photoURL
                    ? user?.photoURL
                    : "https://www.pixelwibes.com/template/ihealth/html/dist/assets/images/profile_av.png"
                }`}
                alt=""
                srcSet=""
              />
            </div>
          </div>
          <div
            title={`${user ? "logout" : "login"}`}
            className="cursor-pointer"
            onClick={() => {
              user ? signOut(auth) : navigate("/account/login");
            }}
          >
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </div>
        </div>
        <div
          className="md:hidden block"
          onClick={(event) => {
            event.preventDefault();
            const element = document.querySelector(".sidebar");
            if (element.classList.contains("active")) {
              element.classList.remove("active");
            } else {
              element.classList.add("active");
            }
          }}
        >
          <label className="btn btn-circle swap swap-rotate">
            <input type="checkbox" className="pointer-events-none" />
            <svg
              className="swap-off fill-current pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            <svg
              className="swap-on fill-current pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Navbar);
