import React from "react";

const NavBar = () => {
  return (
    <nav>
      <ul className="flex">
        <li className="mr-10">
          <a href="/home">Home</a>
        </li>
        <li className="mr-10">
          <a href="/about">About</a>
        </li>
        <li className="mr-10">
          <a href="/page">Page</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
