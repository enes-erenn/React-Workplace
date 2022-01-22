import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav>
        <h2 id="logo">
          Ho
          <span id="weather">
            <span id="w">w</span>eather
          </span>
        </h2>
        <div id="nav-links">
          <a class="nav-link" href="/">
            App
          </a>
          <a class="nav-link" href="/">
            API
          </a>
          <a class="nav-link" href="/">
            Author
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
