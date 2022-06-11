import { menuBar } from "../../../Helpers/menubar";

const Sidebar = () => {
  const clickHanlder = function (e) {
    if (e.target.nextSibling.style.height !== "auto") {
      e.target.nextSibling.style.height = "auto";
      e.target.nextSibling.style.transform = "scaleY(1)";
    } else {
      e.target.nextSibling.style.height = "0";
      e.target.nextSibling.style.transform = "scaleY(0)";
    }
  };
  return (
    <div className="sidebar z-50 ease-out duration-300 absolute -left-full lg:fixed h-[calc(100vh-40px)]  w-72 bg-primary rounded-md lg:left-4 lg:top-6">
      <div className="flex space-x-6 items-center justify-center mb-6 py-3 ">
        <i className="fa-brands fa-accessible-icon text-4xl text-white"></i>
        <span className="text-3xl text-white font-bold">I-Health</span>
      </div>
      <ul className="flex h-3/4 flex-grow flex-col space-y-5 text-white font-semibod py-3 px-4 overflow-y-auto">
        {menuBar.map((menu) => (
          <li
            className="flex-grow cursor-pointer text-lg dropdown"
            key={menu.id}
          >
            <div
              tabIndex={menu.id}
              onClick={clickHanlder}
              className="flex w-full justify-between items-center"
            >
              <span className="flex space-x-4 items-center pointer-events-none">
                <i className={`${menu.icon}`}></i>
                <p>{menu.value}</p>
              </span>
              {menu.submenu && (
                <i className="fa-solid fa-angle-down pointer-events-none"></i>
              )}
            </div>
            {menu.submenu && (
              <ul
                tabIndex={menu.id}
                className="overflow-hidden ease-in duration-300 submenu ml-8 mt-2 flex flex-col space-y-3"
              >
                {menu.submenu.map((item, idx) => (
                  <li key={idx} className="text-sm font-bolder">
                    {item.value}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div className="flex space-x-6 items-center justify-center mb-6 py-3 ">
        <i className="fa-brands fa-accessible-icon text-4xl text-white"></i>
        <span className="text-3xl text-white font-bold">I-Health</span>
      </div>
    </div>
  );
};

export default Sidebar;
