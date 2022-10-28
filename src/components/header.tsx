import React, { ReactElement } from "react";
import MobileNav from "./mobile_nav";
import Nav from "./nav";

export default function Header(): ReactElement {
    return(
    <>
    <MobileNav />
    <Nav />
    </>
    );
}
