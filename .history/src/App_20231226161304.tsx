import Loading from "./components/common/Loading";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="wrapper">
      <Loading />
      <Router>
        <Routes></Routes>
      </Router>
    </div>
  );
}

export default App;
