import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import "../sass/nav.scss";

type NavLink = {
    name: string;
    url: string;
};

export const navItems: NavLink[] = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "Projects", url: "/projects" },
    { name: "Contact", url: "/contact" },
];

export default function Nav(): ReactElement {
    return(
      <nav className="nav-container">
        <ul className="nav__list">
          {navItems.map(item => <li className="nav__item" key={item.name}><Link to={item.url} className="nav__link">{item.name}</Link></li>)}
        </ul>
      </nav>
    );
};
