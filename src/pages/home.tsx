import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import "../sass/home.scss";

export default function Home(): ReactElement {

    return(
    <div className="home__grid">
        <div className="home__initial-page-wrapper">
            <h1 className="home__title">whoami</h1>
            <p className="home__my-name">Hi, I'm <span className="home__my-name--colored">Chris Wood</span>, a self-taught developer with a passion for programming, Linux systems and server administration.</p>
            <h2 className="home__whatido">whatido</h2>
            <ul className="home__about">
                <li className="about__item">Full stack web development.</li>
                <li className="about__item">System administration.</li>
                <li className="about__item">Webhosting/Server setup.</li>
                <li className="about__item">Application and hosting management.</li>
                <li className="about__item">Consulting.</li>
            </ul>
        </div>
      
        <div className="home__second-page-wrapper">
            <div className="home__separator-wrapper"><div className="home__separator" /></div>
            <div className="home__work-wrapper">
                <p className="home__work">Would you like to hire me?</p>
                <p className="home__work">Are you interested in collaborating on something?</p>
                <p className="home__work">Shoot me an email and let's see if I can help!</p>
            </div>
            <div className="home__separator-wrapper home__separator-wrapper--right"><div className="home__separator" /></div>
            <div className="home__projects-wrapper">
                <p className="home__projects">Click <Link to="/projects" className="projects__link projects__link--first">here</Link> to check out some of the projects I've worked on, or check out my <a className="projects__link" href="https://github.com/ChrispyChris">GitHub</a>.</p>
            </div>
        </div>
    </div>
    );
}
