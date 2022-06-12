export const menuBar = [
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
          link: "/doctor/list",
          value: "All Doctors",
        },
        {
          link: "/doctor/add",
          value: "Add Doctors",
        },
        {
          link: "/doctor/appointment",
          value: "Appointment",
        },
        {
          link: "/doctor/profile",
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
          link: "/patient/list",
          value: "Patient list",
        },
        {
          link: "/patient/add",
          value: "Add patient",
        },
        {
          link: "/",
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