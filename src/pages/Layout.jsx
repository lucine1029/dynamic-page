import { Outlet, Link, NavLink } from "react-router-dom";
import logoPic from "../assets/images/Homepage/Logo4.png";

const Layout = () => {
  return (
    <>
      <header>
        <div class="logoPic">
          <NavLink to="/">
            <div className="logo">
              <img src={logoPic} />
            </div>
          </NavLink>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">PORTFOLIO</NavLink>
            </li>
            <li>
              <NavLink to="/cv">CV</NavLink>
            </li>
            <li>
              <NavLink to="/about">ABOUT ME</NavLink>
            </li>
            <li>
              <NavLink to="/contact">CONTACT</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer>
        <h4>Countact Me</h4>
        <p>
          jing.zhang@chasacademy.se <br /> 073-914 1272
        </p>
        <div class="icons">
          <a href="https://www.linkedin.com/in/jing-zhang-bb45b5a9/">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/lucine1029">
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Layout;
