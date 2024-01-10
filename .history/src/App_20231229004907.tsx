import Loading from "./components/common/Loading";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Doctor from "./pages/Doctor";
import Patient from "./pages/Patient";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Protected from "./components/common/Protected";
function App() {
  return (
    <div className="wrapper">
      <Loading />
      <Router>
        <Routes>
          <Route path="/admin" element={<Protected element={<Admin />} />} />
          <Route path="/doctor" element={<Protected element={<Doctor />} />} />
          <Route
            path="/patient"
            element={<Protected element={<Patient />} />}
          />
          <Route path="/posts" element={<Posts />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
