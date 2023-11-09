import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navLinks = links.map((loc) =>(
    <a href={"#" + loc} key={loc}>
    {loc}
  </a>
  ))

  return <nav>
    {navLinks}
  </nav>;
}

export default NavBar;
