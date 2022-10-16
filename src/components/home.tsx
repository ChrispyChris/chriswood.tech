import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import "../sass/home.scss";

function Home(): ReactElement {

    return(
      <div className="home__grid">
        <div className="home__title-wrapper">
          <h1 className="home__title"><span className="home__title--su">~$ </span>whoami<br />Chris Wood</h1>
        </div>

        <div className="home__about-wrapper">
          <p className="home__about">Web developer. Programmer. Tech lover. <span className="home__about-highlight">Nerd.</span></p>
        </div> 
      
        <div className="home__work-wrapper">
          <p className="home__work">Want to hire me or want to collaborate on something? Shoot me an email and let's see if I can help!</p>
        </div>

        <div className="home__projects-wrapper">
          <p className="home__projects">Click <Link to="/projects" className="home__projects-link">here</Link> to check out some of the projects I've worked on, or check out my GitHub.</p>
        </div>
      </div>
    );
}

export default Home
