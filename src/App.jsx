import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/home";
import AddPatient from "./Pages/patient/add";
import NotFound from "./Pages/Shared/404";
import Header from "./Pages/Shared/Header";
import Profile from "./Profile";

function App() {
  return (
    <div className="bg-secondary">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route exact path="/home">
          <Route index element={<AddPatient />} />
          <Route path="profile" element={<Profile />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
