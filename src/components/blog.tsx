import React from "react";
import { ReactElement } from "react";
import "../sass/blog.scss";

function Blog(): ReactElement {
  return (
    <div className="blog__grid">
      <div className="blog__title-wrapper">
        <h1 className="blog__title"><span className="blog__title-spacer">Chris</span><br />The Blog</h1>
      </div>

      <div className="blog__blog-wrapper">
        <p className="blog__blog">I chose to start a blog because some of the most helpful pages that I've ever come across were small blogs. I also enjoy a kind of internet where people maintain their own online identity, and prefer it to the way it is today with mainstream social media websites and major blogging platforms.</p>
      </div>

      <div className="blog__post-wrapper">
        <p className="blog__post">
          PGP Encryption and Setting up Keys
        </p> 
      </div>
    </div>
  );
}

export default Blog;
