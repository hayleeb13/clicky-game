import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav class="navbar">
      <ul>
        <li class="brand">
          <a href="/">Clicky Game</a>
        </li>
        <li class="">Click an image to begin!</li>
        <li>Score: 0 | Top Score: 0</li>
      </ul>
    </nav>
  );
}

export default Nav;
