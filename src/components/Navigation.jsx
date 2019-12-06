import React from "react";
import "../styles/navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.github.com/Andreashoj"
        className="navigation__link"
      >
        Github
      </a>
    </nav>
  );
};

export default Navigation;
