import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

class Navbar extends React.Component {
  render(){
    return (
      <div>
      <Link to="/">
        Home
      </Link>
      <Link to="/projects">
        Projects
      </Link>
      <Link to="/blog">
        Blog
      </Link>

    </div>
    )
  }
}

export default Navbar
