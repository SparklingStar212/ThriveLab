import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import LandingPage from './Pages/Landing-page/LandingPage'
import About from './Pages/AboutSection/About'
import Features from './Pages/Features/Features'
import HowItWorks from './Pages/HowItWorks/HowItWorks';
import Privacy from './Pages/Privacy/Privacy';
import Signin from './Pages/SignIn/Signin';
import Signup from './Pages/SignUp/SignUp';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-in" element={<Signin />} />
      </Routes>
    </Router>
  )
}

export default App