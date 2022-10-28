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
          <p className="home__about">Full stack web developer. Systems administration. Webhosting/Server setup</p>
        </div>

      
        <div className="home__work-wrapper">
          <p className="home__work">Want to hire me or would you like to collaborate on something? Shoot me an email and let's see if I can help!</p>
        </div>

        <div className="home__projects-wrapper">
          <p className="home__projects">Click <Link to="/projects" className="home__projects-link">here</Link> to check out some of the projects I've worked on, or check out my GitHub.</p>
        </div>
      </div>
    );
}
