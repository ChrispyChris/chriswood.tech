import React from "react";
import { ReactElement } from "react";
import "../sass/footer.scss";

export default function Footer(): ReactElement {
    return(
        <div className="footer">
            <div className="footer__connections">
                <a className="footer__github-link" href="https://github.com/ChrispyChris"><img className="footer__github-picture" src="../assets/github.png" /></a>
                <a className="footer__twitter-link" href="https://twitter.com/ChrispyChris92"><img className="footer__twitter-picture" src="../assets/twitter.png" /></a>
            </div>
            <div className="footer__copyright-wrapper">
                <span className="footer__copyright">&#169;&nbsp; chriswood.tech</span>
            </div>
        </div>
    );
}
