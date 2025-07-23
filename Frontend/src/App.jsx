import { BrowserRouter as Router } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./index.css"
import AppRoutes from "./Routes";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <ScrollToTop />
      <AppRoutes />
     
<ToastContainer position="top-center" autoClose={3000} />
    </Router>
  )
}

export default App
