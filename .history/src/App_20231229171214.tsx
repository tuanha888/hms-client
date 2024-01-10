import Loading from "./components/common/Loading";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Doctor from "./pages/Doctor";
import Patient from "./pages/Patient";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Protected from "./components/common/Protected";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import AdminLayout from "./pages/Admin/AdminLayout";
import DoctorLayout from "./pages/Doctor/DoctorLayout";
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
            <Route path="/surgeries" />
            <Route path="/doctors" />
          </Route>
          <Route
            path="/doctor"
            element={<Protected element={<DoctorLayout />} />}
          >
            <Route path="/patients" />
            <Route path="/surgeries" />
            <Route path="/appointments" />
            <Route path="/posts" />
          </Route>
          <Route
            path="/patient"
            element={<Protected element={<Patient />} />}
          />
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
