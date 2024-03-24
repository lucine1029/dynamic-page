import { Outlet, Link, NavLink } from "react-router-dom";
import logoPic from "../assets/images/Homepage/Logo.png";
import React from "react";
import "remixicon/fonts/remixicon.css";

const Layout = () => {
  return (
    <>
      <header>
        <section className="header">
          <nav>
            <div className="nav_content">
              <div className="logo">
                <NavLink to="/">
                  <img src={logoPic} />
                </NavLink>
              </div>
              <label for="check" className="checkbox">
                <i className="ri-menu-line"></i>
              </label>
              <input type="checkbox" name="check" id="check" />
              <ul>
                <li>
                  <NavLink to="/" exact activeClassName="active">
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/portfolio" activeClassName="active">
                    PORTFOLIO
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/cv" activeClassName="active">
                    CV
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" activeClassName="active">
                    ABOUT ME
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" activeClassName="active">
                    CONTACT
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </section>
      </header>
      <Outlet />
      <footer>
        <section className="footer">
          <h4>Countact Me</h4>
          <p>
            jing.zhang@chasacademy.se <br /> 073-914 1272
          </p>
          <div className="icons">
            <a href="https://www.linkedin.com/in/jing-zhang-bb45b5a9/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/lucine1029">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Layout;
