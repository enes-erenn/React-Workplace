import React from "react";
import "./Main.css";

function Main() {
  return (
    <main>
      <div class="input-container">
        <label htmlFor="search">Search a city:</label>
        <input type="text" id="search" />
        <input type="submit" value="🔍" />
      </div>
    </main>
  );
}

export default Main;
