import React from "react";
import { ReactElement } from "react";
import "../sass/footer.scss";

function Footer(): ReactElement {
  return(
    <div className="footer">
      <span className="footer__copyright">&#169;&nbsp;</span>
      chriswood.tech
    </div>
  );
}

export default Footer

