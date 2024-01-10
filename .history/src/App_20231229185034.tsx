import Loading from "./components/common/Loading";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Protected from "./components/common/Protected";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import AdminLayout from "./pages/Admin/AdminLayout";
import DoctorLayout from "./pages/Doctor/DoctorLayout";
import PatientLayout from "./pages/Patient/PatientLayout";
import Surgeries from "./components/common/Surgeries";
function App() {
  return (
    <div className="wrapper">
      <Loading />
      <Router>
        <Routes>
          <Route
            path="/admin"
            element={<Protected element={<AdminLayout />} />}
          >
            <Route path="/admin/surgeries" element={<Surgeries />} />
            <Route path="/admin/doctors" />
          </Route>
          <Route
            path="/doctor"
            element={<Protected element={<DoctorLayout />} />}
          >
            <Route path="/doctor/patients" />
            <Route path="/doctor/surgeries" />
            <Route path="/doctor/appointments" />
            <Route path="/doctor/posts" />
          </Route>
          <Route
            path="/patient"
            element={<Protected element={<PatientLayout />} />}
          >
            <Route path="/patient/appointments" />
            <Route path="/patient/prescriptions" />
            <Route path="/patient/treatment_plans" />
            <Route path="/patient/doctors" />
          </Route>
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
