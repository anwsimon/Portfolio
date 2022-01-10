import React, { Component } from "react";
import { Route, Routes} from "react-router-dom";
import Home from '../components/Home'
import ProjectsHome from "../components/ProjectsHome";
import Personal from "../components/Personal";

class AppRoutes extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<ProjectsHome/>} />
          <Route path="/personal" element={<Personal/>} />
       </Routes>
      </div>
    )
  }
}

export default AppRoutes
