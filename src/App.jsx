import { Route, Router } from "react-router-dom";
import About from "./Pages/About/about";
import Home from "./Pages/Home/home";
import NotFound from "./Pages/Shared/404";

function App() {
  return (
    <Router>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Router>
  );
}

export default App;
