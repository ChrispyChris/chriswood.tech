import React from "react";
import { ReactElement } from "react";
import "../sass/footer.scss";

export default function Footer(): ReactElement {
    return(
      <div className="footer">
        <span className="footer__copyright">&#169;&nbsp; chriswood.tech</span>
      </div>
    );
}
