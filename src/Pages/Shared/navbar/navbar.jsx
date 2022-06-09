const Navbar = () => {
  return (
    <div className="navbar bg-secondary z-10 w-[calc(100%-304px)] ml-auto px-5">
      <div className="navbar-start">
        <div className="form-control w-80 bg-transparent">
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
      <div className="navbar-end flex space-x-5">
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
        <div className="avater flex space-x-5">
          <div className="name flex flex-col itmes-center justify-center">
            <span className="text-base font-semibold">John Quinn</span>
            <span className="text-sm">Admin profile</span>
          </div>
          <div className="border-2 border-yelllow-400 h-14 w-14 rounded-full p-1 flex items-center justify-center">
            <img
              className="w-13 h-13 rounded-full"
              src="https://www.pixelwibes.com/template/ihealth/html/dist/assets/images/profile_av.png"
              alt=""
              srcSet=""
            />
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
