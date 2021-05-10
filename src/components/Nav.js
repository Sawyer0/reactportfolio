import React from "react";

function Nav() {
  return (
    <div>
      <div class="menu-toggler">
        <div class="bar half start"></div>
        <div class="bar"></div>
        <div class="bar half end"></div>
      </div>
      <nav class="top-nav">
        <ul class="nav-list">
          <li>
            <a href="index.html" class="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" class="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" class="nav-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" class="nav-link">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" class="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
