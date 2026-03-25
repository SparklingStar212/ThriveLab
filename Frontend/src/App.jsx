import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import LandingPage from './Pages/Landing-page/LandingPage'
import About from './Pages/AboutSection/About'
import Features from './Pages/Features/Features'
import HowItWorks from './Pages/HowItWorks/HowItWorks';
import Privacy from './Pages/Privacy/Privacy';
import Signin from './Pages/SignIn/Signin';
import Signup from './Pages/SignUp/SignUp';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import SplashScreen from './Components/SplashScreen';


import OnboardingOne from './Pages/Onboard/OnboardingOne';
import OnboardingTwo from './Pages/Onboard/OnboardingTwo';
import OnboardingThree from './Pages/Onboard/OnboardingThree';
import OnboardingFour from './Pages/Onboard/OnboardingFour';
import OnboardingFive from './Pages/Onboard/OnboardingFive';
import Dashboard from './Pages/Dashboard/Dashboard';


const App = () => {
  const [showSplash, setShowSplash] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setShowSplash(true); // Start the splash sequence
  };

  const handleSplashFinish = () => {
    setShowSplash(false);
    setIsAuthenticated(true); // Now show the actual app content
  };

  if (showSplash) {
    return <SplashScreen onFinish={handleSplashFinish} />;
  }

  return (
    <Router>
      <div>
        {!isAuthenticated ? (
          <Signin onLogin={handleLoginSuccess} />
        ) : (
          <Dashboard />
        )}
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/splash" element={<SplashScreen onFinish={handleSplashFinish}/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/onboarding-one" element={<OnboardingOne />} />
        <Route path="/onboarding-two" element={<OnboardingTwo />} />
        <Route path="/onboarding-three" element={<OnboardingThree />} />
        <Route path="/onboarding-four" element={<OnboardingFour />} />
        <Route path="/onboarding-five" element={<OnboardingFive />} />
      </Routes>
    </Router>
  )
}

export default App