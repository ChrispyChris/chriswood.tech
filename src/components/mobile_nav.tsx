import React, { useState, useEffect, ReactElement } from "react";
import HamburgerMenu from "./hamburger_menu";
import { Link } from "react-router-dom";
import { navItems } from "./nav";
import "../sass/mobile_nav.scss";

export default function MobileNav(): ReactElement {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow += "hidden";
        }
        else {
            document.body.style.overflow = "";
        }
    })

    function toggleMenu(): void {
      setIsOpen(isOpen => !isOpen);
    };

    return(
      <nav className="mobile-nav__container">
        <ul id="mobile-nav_hamburger" className={`mobile-nav-hamburger--${isOpen ? "open" : "closed"} ${isOpen ? "hamburger-transition" : null}`}>
          {navItems.map(item => <li className="mobile-nav__item" key={item.name} onClick={toggleMenu}><Link to={item.url} className="mobile-nav__link">{item.name}</Link></li>)}
        </ul>
        <HamburgerMenu open={isOpen} click={toggleMenu}/>
      </nav>
    );
}
