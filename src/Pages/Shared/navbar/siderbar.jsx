const Sidebar = () => {
  const menuBar = [
    {
      id: 1,
      value: "Dashboard",
      icon: "fa-solid fa-house",
      submenu: [
        {
          value: "Covid-19 Dashboard",
        },
        {
          value: "Hospital Dashboard",
        },
      ],
    },
    {
      id: 2,
      value: "I-Health Virtual",
      icon: "fa-solid fa-briefcase-medical",
    },
    {
      id: 3,
      value: "Doctor",
      icon: "fa-solid fa-user-doctor",
      submenu: [
        {
          value: "All Doctors",
        },
        {
          value: "Add Doctors",
        },
        {
          value: "Appointment",
        },
        {
          value: "Doctors Profile",
        },
        {
          value: "Doctor Schedule",
        },
      ],
    },
    {
      id: 4,
      value: "Patient",
      icon: "fa-solid fa-bed-pulse",
      submenu: [
        {
          value: "Patient list",
        },
        {
          value: "Add patient",
        },
        {
          value: "Patient profile",
        },
        {
          value: "Patient invoice",
        },
      ],
    },
    {
      id: 5,
      value: "Accidents",
      icon: "fa-solid fa-person-falling-burst",
    },
    {
      id: 6,
      value: "Labs",
      icon: "fa-solid fa-flask",
    },
    {
      id: 7,
      value: "Department",
      icon: "fa-solid fa-building-user",
    },
    {
      id: 8,
      value: "Accounts",
      icon: "fa-solid fa-calculator",
      submenu: [
        {
          value: "Invoices",
        },
        {
          value: "Payments",
        },
        {
          value: "Expenses",
        },
      ],
    },
  ];
  return (
    <div className="h-[calc(100vh-40px)] fixed w-72 bg-primary rounded-md left-4 top-6">
      <div className="flex space-x-6 items-center justify-center mb-6 py-3 ">
        <i className="fa-brands fa-accessible-icon text-4xl text-white"></i>
        <span className="text-3xl text-white font-bold">I-Health</span>
      </div>
      <ul className="flex h-3/4 flex-grow flex-col space-y-5 text-white font-semibod py-3 px-4 overflow-y-auto">
        {menuBar.map((menu) => (
          <li className="flex-grow cursor-pointer text-lg" key={menu.id}>
            <div className="flex w-full justify-between items-center">
              <span className="flex space-x-4 items-center">
                <i className={`${menu.icon}`}></i>
                <p>{menu.value}</p>
              </span>
              {menu.submenu && <i className="fa-solid fa-angle-down"></i>}
            </div>
            {menu.submenu && (
              <ul className="submenu ml-8 mt-2 flex flex-col space-y-3">
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
