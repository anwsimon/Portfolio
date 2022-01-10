import React from "react";
import AppRoutes from "./store/routes";
import ResponsiveAppBar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <AppRoutes />
    </div>
  )
}

export default App
