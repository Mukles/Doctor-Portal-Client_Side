import { Route, Routes } from "react-router-dom";
import AddDoctor from "./Pages/doctor/add";
import Appointment from "./Pages/doctor/Appointment";
import DoctorList from "./Pages/doctor/DoctorList";
import Home from "./Pages/Home/home";
import AddPatient from "./Pages/patient/add";
import PatientsList from "./Pages/patient/list";
import NotFound from "./Pages/Shared/404";
import Header from "./Pages/Shared/Header";

function App() {
  return (
    <div className="bg-secondary">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route exact path="/patient">
          <Route path="add" element={<AddPatient />} />
          <Route path="list" element={<PatientsList />}></Route>
        </Route>
        <Route exact path="/doctor">
          <Route path="add" element={<AddDoctor />} />
          <Route path="list" element={<DoctorList />}></Route>
          <Route path="appointment" element={<Appointment />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
