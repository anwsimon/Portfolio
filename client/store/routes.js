import React, { Component } from "react";
import { Route, Routes} from "react-router-dom";

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>why</h1>
      </div>
    )
  }
}

class AppRoutes extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Hello/>} />
       </Routes>
      </div>
    )
  }
}

export default AppRoutes
