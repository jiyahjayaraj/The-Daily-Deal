import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">Welcome</h1>

      {/* HAMBURGER */}
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        
      </div>

      {/* LINKS */}
      <div className={`nav-links ${open ? "active" : ""}`}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;