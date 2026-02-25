import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/layouts/Navbar";


import About from "./pages/About";
import Features from "./pages/Features";
import LandingPage from "./pages/LandingPage";
import HowItWorks from "./pages/HowItWorks";
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp";

export default function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/howitworks" element={<HowItWorks />} />
      </Routes>
    </BrowserRouter>
  )
}
