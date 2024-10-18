import { BrowserRouter, Routes, Route } from "react-router-dom";

//import pages and components
import Navbar from "./components/Navbar";
import Home from "./pages/Homepage";
import LoginPage from "./pages/Loginpage";
import Test from "./pages/Testpage";
import Signup from "./pages/Signuppage";
import Reset from "./pages/Resetpasspage";
import TouristDashboard from "./components/TouristDashboard.js";
import TourGuideDashboard from "./components/TourGuideDashboard.js";
import SellerDashboard from "./components/SellerDashboard.js";
import AdvertiserDashboard from "./components/AdvertiserDashboard.js";
import GovernorDashboard from "./components/ GovernorDashboard.js";
import AdminDashboard from "./components/AdminDashboard.js";
import OtpVerificationPage from "./pages/OtpVerificationPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/Testpage" element={<Test />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Resetpass" element={<Reset />} />
            <Route path="/tourist-dashboard" element={<TouristDashboard />} />
            <Route
              path="/tour-guide-dashboard"
              element={<TourGuideDashboard />}
            />
            <Route path="/seller-dashboard" element={<SellerDashboard />} />
            <Route
              path="/advertiser-dashboard"
              element={<AdvertiserDashboard />}
            />
            <Route path="/governor-dashboard" element={<GovernorDashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/otp-verification" element={<OtpVerificationPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
