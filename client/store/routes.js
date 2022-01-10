import React, { Component } from "react";
import { Route, Routes} from "react-router-dom";
import Hello from '../components/Hello'

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
