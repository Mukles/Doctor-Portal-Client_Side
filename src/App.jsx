import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Pages/Account/login";
import Register from "./Pages/Account/register";
import AddDoctor from "./Pages/doctor/add";
import Appointment from "./Pages/doctor/Appointment";
import DoctorList from "./Pages/doctor/DoctorList";
import Profile from "./Pages/doctor/profile";
import Home from "./Pages/Home/home";
import AddPatient from "./Pages/patient/add";
import PatientsList from "./Pages/patient/list";
import NotFound from "./Pages/Shared/404";
import Header from "./Pages/Shared/Header";

function App() {
  let { pathname } = useLocation();

  return (
    <div className="bg-secondary overflow-hidden">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      {!(pathname === "/account/login" || pathname === "/account/register") && (
        <Header />
      )}
      <Routes>
        <Route index element={<Home />} />
        <Route path="account/login" element={<Login />} />
        <Route path="account/register" element={<Register />} />
        <Route exact path="/patient">
          <Route path="add" element={<AddPatient />} />
          <Route path="list" element={<PatientsList />}></Route>
        </Route>
        <Route exact path="/doctor">
          <Route path="add" element={<AddDoctor />} />
          <Route path="list" element={<DoctorList />}></Route>
          <Route path="profile" element={<Profile />} />
          <Route path="appointment" element={<Appointment />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
