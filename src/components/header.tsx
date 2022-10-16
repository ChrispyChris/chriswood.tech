import React, { ReactElement } from "react";
import MobileNav from "./mobile_nav";
import Nav from "./nav";
import useMobileComponent from "../hooks/useMobileComponent.js";

function Header(): ReactElement {

    const isMobile: boolean = useMobileComponent(575);
    return(
      <>
      {isMobile ? <MobileNav /> : <Nav />}
      </>
    );
}

export default Header;
