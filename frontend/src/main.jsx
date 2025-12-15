import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx'; // Landing Page
import App from './App.jsx';   // Main Application/Dashboard
import LoginPage from './login.jsx'; // Login Page
import SignupPage from './register.jsx'; // Sign Up Page

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        
        <Route path="/app" element={<App />} /> 
      
        <Route path="/login" element={<LoginPage />} />

        <Route path="/signup" element={<SignupPage />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>,
);