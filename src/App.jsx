import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import HomePage from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import JobsPage from "./pages/Jobs";
import HospitalsPage from "./pages/Hospitals";
import HotelsPage from "./pages/Hotels";
import RentalHomesPage from "./pages/RentalHomes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/hospitals" element={<HospitalsPage />} />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/rental-homes" element={<RentalHomesPage />} />
      </Routes>
    </Router>
  );
}

export default App;