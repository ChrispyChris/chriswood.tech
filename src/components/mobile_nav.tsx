import React, { useState, useEffect, ReactElement } from "react";
import HamburgerMenu from "./hamburger_menu";
import { Link } from "react-router-dom";
import { navItems } from "./nav";
import "../sass/mobile_nav.scss";

function MobileNav(): ReactElement {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu(): void {
      setIsOpen(isOpen => !isOpen);
    };

    useEffect(() => {
      document.body.classList.toggle('.hide', isOpen);
      document.getElementById("mobile-nav_hamburger")!.classList.toggle("hamburger-transition", isOpen);
    }, [isOpen]);

    return(
      <nav className="mobile-nav-container">
        <ul id="mobile-nav_hamburger" className={`mobile-nav-hamburger--${isOpen ? "open" : "closed"}`}>
          {navItems.map(item => <li className="mobile-nav__item" key={item.name} onClick={toggleMenu}><Link to={item.url} className="mobile-nav__link">{item.name}</Link></li>)}
        </ul>
        <HamburgerMenu open={isOpen} click={toggleMenu}/>
      </nav>
    );
}

export default MobileNav;
