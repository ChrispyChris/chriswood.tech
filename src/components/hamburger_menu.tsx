import React from "react";
import "../sass/hamburger_menu.scss";

type HamburgerProps = {
    open: boolean;
    click: React.MouseEventHandler<HTMLButtonElement>;
}

export default function HamburgerMenu(props: HamburgerProps): JSX.Element {
    return(
      <div className={`hamburger__button-wrapper--${props.open ? "open" : "closed"}`}>
        <button onClick={props.click} className="hamburger__button">
          <span className="hamburger__slice" />
          <span className="hamburger__slice" />
          <span className="hamburger__slice" />
          <span className="hamburger__slice" />
        </button>
      </div>
    );
}
