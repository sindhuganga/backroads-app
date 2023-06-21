import React from "react";
import { pageLinks, socialLinks } from "../data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((page) => {
          return (
            <li key={page.id}>
              <a href={page.href} className="footer-link">
                {page.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((s) => {
          return (
            <li key={s.id}>
              <a
                href={s.href}
                rel="noreferrer"
                target="_blank"
                className="footer-icon"
              >
                <i className={s.icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
