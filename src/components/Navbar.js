import React from "react";
import logo from "../images/logo.svg";
import { pageLinks } from "../data";
import { socialLinks } from "../data";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* left this comment on purpose  */}
        {/* instead of hard coding the values such as home, about etc, we can use react map,
        so we have the data setup in a separate file and we can just iterate through the data here */}
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className="nav-link">
                  {link.text}
                </a>
              </li>
            );
          })}

          {/* <li>
            <a href="#home" className="nav-link">
              {" "}
              home{" "}
            </a>
          </li> */}

          {/* <li>
            <a href="#about" className="nav-link">
              {" "}
              about{" "}
            </a>
          </li>

          <li>
            <a href="#services" className="nav-link">
              {" "}
              services{" "}
            </a>
          </li>

          <li>
            <a href="#tours" className="nav-link">
              {" "}
              tours
            </a>
          </li> */}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((social) => {
            return (
              <li key={social.id}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className={social.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
