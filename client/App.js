import React from "react";
import AppRoutes from "./store/routes";
import '../dist/output.css';
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <div>
        <Navbar />
        <AppRoutes />
    </div>
  )
}

export default App
