import React, { Component } from "react";
import { Route, Routes} from "react-router-dom";
import Home from '../components/Home'
import ProjectsHome from "../components/ProjectsHome";
import Personal from "../components/Personal";
import ResponsiveAppBar from '../components/Navbar'
class AppRoutes extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<ProjectsHome/>} />
          <Route exact path="/projects/:projectName" element={<ResponsiveAppBar/>} />
          <Route path="/personal" element={<Personal/>} />
          <Route path="*" element={<Home/>} />
       </Routes>
      </div>
    )
  }
}

export default AppRoutes
