import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import "../sass/home.scss";

export default function Home(): ReactElement {

    return(
    <div className="home__grid">
        <div className="home__initial-page-wrapper">
            <h1 className="home__title">whoami</h1>
            <p className="home__my-name">Chris Wood</p>
            <h2 className="home__whatido">whatido</h2>
            <p className="home__about">Full stack web developer.<br />Systems administration.<br />Webhosting/Server setup.</p>
        </div>
      
        <div className="home__second-page-wrapper">
            <div className="home__separator" />

            <div className="home__work-wrapper">
                <p className="home__work">Would you like to hire me or collaborate on something?<br /><br />Shoot me an email and let's see if I can help!</p>
            </div>

            <div className="home__separator home__separator--right" />

            <div className="home__projects-wrapper">
                <p className="home__projects">Click <Link to="/projects" className="home__projects-link">here</Link> to check out some of the projects I've worked on, or check out my GitHub.</p>
            </div>
        </div>
    </div>
    );
}
